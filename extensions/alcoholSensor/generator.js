/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.alcoholSensor_read = function (block) {
        const pin = block.getFieldValue('PIN') || '34';
        const code = `analogRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.alcoholSensor_detected = function (block) {
        const pin = block.getFieldValue('PIN') || '34';
        // MQ alcohol sensors typically output HIGH when alcohol is detected
        // Using threshold of 1000 (higher value = alcohol detected)
        const code = `(analogRead(${pin}) > 1000)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
