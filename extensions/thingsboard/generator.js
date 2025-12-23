/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    // ==================== WiFi Generators ====================

    Blockly.Arduino.thingsboard_wifiConnect = function (block) {
        const ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || '"YourSSID"';
        const password = Blockly.Arduino.valueToCode(block, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || '"YourPassword"';

        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';

        Blockly.Arduino.definitions_.wifi_credentials = `
// WiFi credentials
const char* wifi_ssid = ${ssid};
const char* wifi_password = ${password};`;

        Blockly.Arduino.definitions_.wifi_connect_func = `
void connectToWiFi() {
    Serial.print("Connecting to WiFi");
    WiFi.begin(wifi_ssid, wifi_password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println();
    Serial.print("Connected! IP: ");
    Serial.println(WiFi.localIP());
}`;

        return 'connectToWiFi();\n';
    };

    Blockly.Arduino.thingsboard_wifiIsConnected = function () {
        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';
        return ['(WiFi.status() == WL_CONNECTED)', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.thingsboard_wifiWaitConnected = function () {
        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';
        return 'while (WiFi.status() != WL_CONNECTED) { delay(100); }\n';
    };

    Blockly.Arduino.thingsboard_wifiGetIP = function () {
        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';
        return ['WiFi.localIP().toString()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.thingsboard_wifiDisconnect = function () {
        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';
        return 'WiFi.disconnect();\n';
    };

    // ==================== ThingsBoard MQTT Generators ====================

    Blockly.Arduino.thingsboard_connect = function (block) {
        const server = Blockly.Arduino.valueToCode(block, 'SERVER', Blockly.Arduino.ORDER_ATOMIC) || '"demo.thingsboard.io"';
        const token = Blockly.Arduino.valueToCode(block, 'TOKEN', Blockly.Arduino.ORDER_ATOMIC) || '"YOUR_DEVICE_TOKEN"';

        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';
        Blockly.Arduino.includes_.pubsub = '#include <PubSubClient.h>';

        Blockly.Arduino.definitions_.thingsboard_settings = `
// ThingsBoard settings
const char* tb_server = ${server};
const int tb_port = 1883;
const char* tb_token = ${token};

// MQTT client
WiFiClient tbWifiClient;
PubSubClient tbClient(tbWifiClient);`;

        Blockly.Arduino.definitions_.thingsboard_connect_func = `
void connectToThingsBoard() {
    tbClient.setServer(tb_server, tb_port);
    Serial.print("Connecting to ThingsBoard");
    while (!tbClient.connected()) {
        if (tbClient.connect("ESP32_Device", tb_token, NULL)) {
            Serial.println(" connected!");
        } else {
            Serial.print(".");
            delay(1000);
        }
    }
}`;

        return 'connectToThingsBoard();\n';
    };

    Blockly.Arduino.thingsboard_isConnected = function () {
        Blockly.Arduino.includes_.pubsub = '#include <PubSubClient.h>';
        return ['tbClient.connected()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.thingsboard_sendKeyValue = function (block) {
        const key = Blockly.Arduino.valueToCode(block, 'KEY', Blockly.Arduino.ORDER_ATOMIC) || '"value"';
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.includes_.pubsub = '#include <PubSubClient.h>';

        Blockly.Arduino.definitions_.thingsboard_send_func = `
void sendToThingsBoard(const char* key, float value) {
    char payload[100];
    snprintf(payload, sizeof(payload), "{\\\"%s\\\":%.2f}", key, value);
    tbClient.publish("v1/devices/me/telemetry", payload);
}

void sendToThingsBoardStr(const char* key, const char* value) {
    char payload[200];
    snprintf(payload, sizeof(payload), "{\\\"%s\\\":\\\"%s\\\"}", key, value);
    tbClient.publish("v1/devices/me/telemetry", payload);
}`;

        // Remove quotes from key for the function call
        const keyClean = key.replace(/^"(.*)"$/, '$1');

        return `sendToThingsBoard("${keyClean}", ${value});\n`;
    };

    Blockly.Arduino.thingsboard_sendMultiple = function (block) {
        const key1 = Blockly.Arduino.valueToCode(block, 'KEY1', Blockly.Arduino.ORDER_ATOMIC) || '"key1"';
        const value1 = Blockly.Arduino.valueToCode(block, 'VALUE1', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const key2 = Blockly.Arduino.valueToCode(block, 'KEY2', Blockly.Arduino.ORDER_ATOMIC) || '"key2"';
        const value2 = Blockly.Arduino.valueToCode(block, 'VALUE2', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.includes_.pubsub = '#include <PubSubClient.h>';

        Blockly.Arduino.definitions_.thingsboard_send_multi_func = `
void sendMultipleToThingsBoard(const char* key1, float value1, const char* key2, float value2) {
    char payload[200];
    snprintf(payload, sizeof(payload), "{\\\"%s\\\":%.2f,\\\"%s\\\":%.2f}", key1, value1, key2, value2);
    tbClient.publish("v1/devices/me/telemetry", payload);
}`;

        const key1Clean = key1.replace(/^"(.*)"$/, '$1');
        const key2Clean = key2.replace(/^"(.*)"$/, '$1');

        return `sendMultipleToThingsBoard("${key1Clean}", ${value1}, "${key2Clean}", ${value2});\n`;
    };

    Blockly.Arduino.thingsboard_loop = function () {
        Blockly.Arduino.includes_.pubsub = '#include <PubSubClient.h>';

        Blockly.Arduino.definitions_.thingsboard_reconnect = `
void thingsBoardLoop() {
    if (!tbClient.connected()) {
        connectToThingsBoard();
    }
    tbClient.loop();
}`;

        return 'thingsBoardLoop();\n';
    };

    Blockly.Arduino.thingsboard_disconnect = function () {
        Blockly.Arduino.includes_.pubsub = '#include <PubSubClient.h>';
        return 'tbClient.disconnect();\n';
    };

    return Blockly;
}

exports = registerGenerators;
