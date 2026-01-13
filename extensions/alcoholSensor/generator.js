/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.alcoholSensor_init = function (block) {
        const pin = block.getFieldValue('PIN');

        // Store pin definition
        Blockly.Arduino.definitions_.alcoholSensor_pin = `#define ALCOHOL_SENSOR_PIN ${pin}`;

        // Set pinMode for analog input
        Blockly.Arduino.setups_.alcoholSensor = `pinMode(ALCOHOL_SENSOR_PIN, INPUT);`;

        return '';
    };

    Blockly.Arduino.alcoholSensor_read = function () {
        // Return analog reading (0-4095 for ESP32)
        const code = 'analogRead(ALCOHOL_SENSOR_PIN)';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.alcoholSensor_detected = function () {
        // MQ alcohol sensors typically output HIGH when alcohol is detected
        // Using threshold of 1000 (higher value = alcohol detected)
        const code = '(analogRead(ALCOHOL_SENSOR_PIN) > 1000)';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
