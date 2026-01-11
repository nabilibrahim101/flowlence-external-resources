/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.touchSwitch_readValue = function (block) {
        const pin = block.getFieldValue('pin') || 'A0';
        const code = `(digitalRead(${pin})==1)`;
        Blockly.Arduino.setups_[`touchSwitch_init_${pin}`] = `pinMode(${pin}, INPUT);`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.touchSwitch_state = function (block) {
        const pin = block.getFieldValue('pin') || 'A0';
        const code = `digitalRead(${pin})`;
        Blockly.Arduino.setups_[`touchSwitch_init_${pin}`] = `pinMode(${pin}, INPUT);`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
