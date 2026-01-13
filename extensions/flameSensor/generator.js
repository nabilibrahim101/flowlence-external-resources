/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.flameSensor_read = function (block) {
        const pin = block.getFieldValue('PIN') || '34';
        // Invert the value so it matches gas/alcohol behavior:
        // Low baseline (~0), high when fire detected
        const code = `(4095 - analogRead(${pin}))`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
