/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.wifi_connect = function (block) {
        const ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || '"YourSSID"';
        const password = Blockly.Arduino.valueToCode(block, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || '"YourPassword"';

        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';

        Blockly.Arduino.setups_.wifi_serial = 'Serial.begin(115200);';

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

    Blockly.Arduino.wifi_isConnected = function () {
        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';
        return ['(WiFi.status() == WL_CONNECTED)', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.wifi_waitConnected = function () {
        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';
        return 'while (WiFi.status() != WL_CONNECTED) { delay(100); }\n';
    };

    Blockly.Arduino.wifi_getIP = function () {
        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';
        return ['WiFi.localIP().toString()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.wifi_getRSSI = function () {
        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';
        return ['WiFi.RSSI()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.wifi_getMAC = function () {
        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';
        return ['WiFi.macAddress()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.wifi_disconnect = function () {
        Blockly.Arduino.includes_.wifi = '#include <WiFi.h>';
        return 'WiFi.disconnect();\n';
    };

    return Blockly;
}

exports = registerGenerators;
