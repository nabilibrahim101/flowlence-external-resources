/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    // Connect to MQTT broker (without auth)
    Blockly.Arduino.mqtt_connect = function (block) {
        const server = Blockly.Arduino.valueToCode(block, 'SERVER', Blockly.Arduino.ORDER_ATOMIC) || '"broker.hivemq.com"';
        const port = Blockly.Arduino.valueToCode(block, 'PORT', Blockly.Arduino.ORDER_ATOMIC) || '1883';
        const clientId = Blockly.Arduino.valueToCode(block, 'CLIENT_ID', Blockly.Arduino.ORDER_ATOMIC) || '"esp_client"';

        // Include PubSubClient library
        Blockly.Arduino.includes_.mqtt = '#include <PubSubClient.h>';

        // Define WiFi client and MQTT client
        Blockly.Arduino.definitions_.mqtt_wifiClient = 'WiFiClient mqttWifiClient;';
        Blockly.Arduino.definitions_.mqtt_client = 'PubSubClient mqttClient(mqttWifiClient);';
        Blockly.Arduino.definitions_.mqtt_server = `const char* mqtt_server = ${server};`;
        Blockly.Arduino.definitions_.mqtt_port = `const int mqtt_port = ${port};`;
        Blockly.Arduino.definitions_.mqtt_clientId = `const char* mqtt_clientId = ${clientId};`;

        // Setup MQTT in setup()
        Blockly.Arduino.setups_.mqtt_setup = `mqttClient.setServer(mqtt_server, mqtt_port);`;

        // Generate connection code (only connect if WiFi is ready)
        const code = `if (WiFi.status() == WL_CONNECTED && !mqttClient.connected()) {\n  mqttClient.connect(mqtt_clientId);\n}\n`;
        return code;
    };

    // Connect to MQTT broker (with auth)
    Blockly.Arduino.mqtt_connect_auth = function (block) {
        const server = Blockly.Arduino.valueToCode(block, 'SERVER', Blockly.Arduino.ORDER_ATOMIC) || '"broker.hivemq.com"';
        const port = Blockly.Arduino.valueToCode(block, 'PORT', Blockly.Arduino.ORDER_ATOMIC) || '1883';
        const clientId = Blockly.Arduino.valueToCode(block, 'CLIENT_ID', Blockly.Arduino.ORDER_ATOMIC) || '"esp_client"';
        const username = Blockly.Arduino.valueToCode(block, 'USERNAME', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const password = Blockly.Arduino.valueToCode(block, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || '""';

        // Include PubSubClient library
        Blockly.Arduino.includes_.mqtt = '#include <PubSubClient.h>';

        // Define WiFi client and MQTT client
        Blockly.Arduino.definitions_.mqtt_wifiClient = 'WiFiClient mqttWifiClient;';
        Blockly.Arduino.definitions_.mqtt_client = 'PubSubClient mqttClient(mqttWifiClient);';
        Blockly.Arduino.definitions_.mqtt_server = `const char* mqtt_server = ${server};`;
        Blockly.Arduino.definitions_.mqtt_port = `const int mqtt_port = ${port};`;
        Blockly.Arduino.definitions_.mqtt_clientId = `const char* mqtt_clientId = ${clientId};`;
        Blockly.Arduino.definitions_.mqtt_username = `const char* mqtt_username = ${username};`;
        Blockly.Arduino.definitions_.mqtt_password = `const char* mqtt_password = ${password};`;

        // Setup MQTT in setup()
        Blockly.Arduino.setups_.mqtt_setup = `mqttClient.setServer(mqtt_server, mqtt_port);`;

        // Generate connection code with auth (only connect if WiFi is ready)
        const code = `if (WiFi.status() == WL_CONNECTED && !mqttClient.connected()) {\n  mqttClient.connect(mqtt_clientId, mqtt_username, mqtt_password);\n}\n`;
        return code;
    };

    // Publish message to topic
    Blockly.Arduino.mqtt_publish = function (block) {
        const topic = Blockly.Arduino.valueToCode(block, 'TOPIC', Blockly.Arduino.ORDER_ATOMIC) || '"test/topic"';
        const message = Blockly.Arduino.valueToCode(block, 'MESSAGE', Blockly.Arduino.ORDER_ATOMIC) || '""';

        const code = `mqttClient.publish(${topic}, String(${message}).c_str());\n`;
        return code;
    };

    // Subscribe to topic
    Blockly.Arduino.mqtt_subscribe = function (block) {
        const topic = Blockly.Arduino.valueToCode(block, 'TOPIC', Blockly.Arduino.ORDER_ATOMIC) || '"test/topic"';

        const code = `mqttClient.subscribe(${topic});\n`;
        return code;
    };

    // Check if connected
    Blockly.Arduino.mqtt_isConnected = function () {
        const code = 'mqttClient.connected()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    // MQTT loop
    Blockly.Arduino.mqtt_loop = function () {
        const code = 'mqttClient.loop();\n';
        return code;
    };

    // Disconnect
    Blockly.Arduino.mqtt_disconnect = function () {
        const code = 'mqttClient.disconnect();\n';
        return code;
    };

    // ----- Receive-side blocks (subscribe + value extraction) -----

    // Shared setup: ensures ArduinoJson, doc, last-message vars, helpers,
    // and the MQTT callback are all wired up exactly once per program.
    // Called by any receive-side block that needs them.
    const ensureReceiveSetup = function (block) {
        Blockly.Arduino.includes_.arduinojson = '#include <ArduinoJson.h>';
        Blockly.Arduino.definitions_.mqtt_last_topic = 'String mqttLastTopic = "";';
        Blockly.Arduino.definitions_.mqtt_last_message = 'String mqttLastMessage = "";';
        Blockly.Arduino.definitions_.mqtt_last_doc = 'StaticJsonDocument<512> mqttLastDoc;';

        // Typed accessors. ArduinoJson handles missing-key cases via containsKey.
        Blockly.Arduino.definitions_.mqtt_get_helpers =
            'float mqttGetNumber(const char* key) {\n' +
            '  return mqttLastDoc.containsKey(key) ? mqttLastDoc[key].as<float>() : 0;\n' +
            '}\n' +
            'String mqttGetText(const char* key) {\n' +
            '  return mqttLastDoc.containsKey(key) ? mqttLastDoc[key].as<String>() : String("");\n' +
            '}\n' +
            'bool mqttGetBoolean(const char* key) {\n' +
            '  return mqttLastDoc.containsKey(key) ? mqttLastDoc[key].as<bool>() : false;\n' +
            '}';

        // If the user attached a stack under the 'when MQTT message received' hat,
        // generate that stack's code and wrap it in a user-callback function.
        // blockToCode() already recurses through .next via scrub_, so we call it
        // exactly ONCE on the first child — iterating manually would double-emit.
        let userBody = '';
        if (block && block.type === 'mqtt_when_message_received') {
            const firstNext = block.getNextBlock();
            if (firstNext) {
                const code = Blockly.Arduino.blockToCode(firstNext);
                userBody = typeof code === 'string' ? code : (Array.isArray(code) ? code[0] : '');
            }
        }

        Blockly.Arduino.definitions_.mqtt_user_callback =
            'void mqttUserOnMessage() {\n' +
            userBody +
            '}';

        // The full callback the PubSubClient library invokes on every message:
        // updates topic/message/doc, then calls the user's stack.
        Blockly.Arduino.definitions_.mqtt_callback =
            'void mqttCallback(char* topic, byte* payload, unsigned int length) {\n' +
            '  mqttLastTopic = String(topic);\n' +
            '  String message = "";\n' +
            '  for (unsigned int i = 0; i < length; i++) message += (char)payload[i];\n' +
            '  mqttLastMessage = message;\n' +
            '  DeserializationError err = deserializeJson(mqttLastDoc, message);\n' +
            '  if (err) { Serial.print("MQTT JSON parse error: "); Serial.println(err.c_str()); }\n' +
            '  mqttUserOnMessage();\n' +
            '}';

        // Hook the callback in setup(). Idempotent: keys collide if called twice,
        // so the value is just re-assigned — only one mqttClient.setCallback() line is emitted.
        Blockly.Arduino.setups_.mqtt_set_callback = 'mqttClient.setCallback(mqttCallback);';
    };

    // Hat block: when MQTT message received
    Blockly.Arduino.mqtt_when_message_received = function (block) {
        ensureReceiveSetup(block);
        // Returning null is the Blockly contract for "I've handled my own stack —
        // please do NOT auto-emit my .next chain into loop()". The framework's
        // scrub_ function short-circuits when blockToCode sees null. If we returned
        // '' instead, the stack would be duplicated into both mqttUserOnMessage()
        // (correct) and loop() (wrong).
        return null;
    };

    // Reporter: the topic of the most recent message
    Blockly.Arduino.mqtt_received_topic = function (block) {
        ensureReceiveSetup(block);
        return ['mqttLastTopic', Blockly.Arduino.ORDER_ATOMIC];
    };

    // Reporter: the raw payload of the most recent message
    Blockly.Arduino.mqtt_received_message = function (block) {
        ensureReceiveSetup(block);
        return ['mqttLastMessage', Blockly.Arduino.ORDER_ATOMIC];
    };

    // Reporter: value at JSON key, with type dropdown
    Blockly.Arduino.mqtt_get_value = function (block) {
        ensureReceiveSetup(block);
        const type = block.getFieldValue('TYPE');
        const key = Blockly.Arduino.valueToCode(block, 'KEY', Blockly.Arduino.ORDER_ATOMIC) || '""';

        let code;
        if (type === 'NUMBER') {
            code = `mqttGetNumber(${key})`;
        } else if (type === 'BOOLEAN') {
            code = `mqttGetBoolean(${key})`;
        } else {
            code = `mqttGetText(${key})`;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
