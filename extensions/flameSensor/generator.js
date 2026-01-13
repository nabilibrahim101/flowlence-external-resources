/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.flameSensor_read = function (block) {
        const pin = block.getFieldValue('PIN') || '34';
        const code = `analogRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.flameSensor_detected = function (block) {
        const pin = block.getFieldValue('PIN') || '34';
        // Flame sensors typically output LOW when flame is detected
        // Using threshold of 1000 (lower value = flame detected)
        const code = `(analogRead(${pin}) < 1000)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
