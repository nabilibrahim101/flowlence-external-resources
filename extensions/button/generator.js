/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.button_readState = function (block) {
        const pin = block.getFieldValue('pin') || 'A0';
        const code = `(digitalRead(${pin})==0)`;
        Blockly.Arduino.setups_[`button_init_${pin}`] = `pinMode(${pin}, INPUT);`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.button_readValue = function (block) {
        const pin = block.getFieldValue('pin') || 'A0';
        const code = `digitalRead(${pin})`;
        Blockly.Arduino.setups_[`button_init_${pin}`] = `pinMode(${pin}, INPUT);`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
