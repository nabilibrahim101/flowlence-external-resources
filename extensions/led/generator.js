/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.led_set = function (block) {
        const pin = block.getFieldValue('PIN');
        const state = block.getFieldValue('STATE');
        Blockly.Arduino.setups_[`led_init_${pin}`] = `pinMode(${pin}, OUTPUT);`;
        return `digitalWrite(${pin}, ${state});\n`;
    };

    return Blockly;
}

exports = registerGenerators;
