/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.flameSensor_init = function (block) {
        const pin = block.getFieldValue('PIN');

        // Store pin definition
        Blockly.Arduino.definitions_.flameSensor_pin = `#define FLAME_SENSOR_PIN ${pin}`;

        // Set pinMode for analog input
        Blockly.Arduino.setups_.flameSensor = `pinMode(FLAME_SENSOR_PIN, INPUT);`;

        return '';
    };

    Blockly.Arduino.flameSensor_read = function () {
        // Return analog reading (0-4095 for ESP32)
        const code = 'analogRead(FLAME_SENSOR_PIN)';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.flameSensor_detected = function () {
        // Flame sensors typically output LOW when flame is detected
        // Using threshold of 1000 (lower value = flame detected)
        const code = '(analogRead(FLAME_SENSOR_PIN) < 1000)';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
