/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.alcoholSensor_read = function (block) {
        const pin = block.getFieldValue('PIN') || '34';
        const mode = block.getFieldValue('MODE') || 'ANALOG';

        let code;
        if (mode === 'ANALOG') {
            // Analog read: returns 0-4095
            code = `analogRead(${pin})`;
        } else {
            // Digital read: returns 0 or 1
            Blockly.Arduino.setups_[`alcoholSensor_pin_${pin}`] = `pinMode(${pin}, INPUT);`;
            code = `digitalRead(${pin})`;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
