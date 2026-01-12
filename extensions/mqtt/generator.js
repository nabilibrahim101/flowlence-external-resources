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

        // Generate connection code
        const code = `if (!mqttClient.connected()) {\n  mqttClient.connect(mqtt_clientId);\n}\n`;
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

        // Generate connection code with auth
        const code = `if (!mqttClient.connected()) {\n  mqttClient.connect(mqtt_clientId, mqtt_username, mqtt_password);\n}\n`;
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

    return Blockly;
}

exports = registerGenerators;
