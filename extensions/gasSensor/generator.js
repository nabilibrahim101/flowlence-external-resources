/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.gasSensor_init = function (block) {
        const pin = block.getFieldValue('PIN');

        // Store pin definition
        Blockly.Arduino.definitions_.gasSensor_pin = `#define GAS_SENSOR_PIN ${pin}`;

        // Set pinMode for analog input
        Blockly.Arduino.setups_.gasSensor = `pinMode(GAS_SENSOR_PIN, INPUT);`;

        return '';
    };

    Blockly.Arduino.gasSensor_read = function () {
        // Return analog reading (0-4095 for ESP32)
        const code = 'analogRead(GAS_SENSOR_PIN)';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.gasSensor_detected = function () {
        // Gas sensors typically output HIGH when gas is detected
        // Using threshold of 1000 (higher value = gas detected)
        const code = '(analogRead(GAS_SENSOR_PIN) > 1000)';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
