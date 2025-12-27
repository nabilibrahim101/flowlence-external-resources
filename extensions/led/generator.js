/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.led_init = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.setups_[`led_init_${pin}`] = `pinMode(${pin}, OUTPUT);`;
        return '';
    };

    Blockly.Arduino.led_on = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.setups_[`led_init_${pin}`] = `pinMode(${pin}, OUTPUT);`;
        return `digitalWrite(${pin}, HIGH);\n`;
    };

    Blockly.Arduino.led_off = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.setups_[`led_init_${pin}`] = `pinMode(${pin}, OUTPUT);`;
        return `digitalWrite(${pin}, LOW);\n`;
    };

    Blockly.Arduino.led_toggle = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.setups_[`led_init_${pin}`] = `pinMode(${pin}, OUTPUT);`;
        return `digitalWrite(${pin}, !digitalRead(${pin}));\n`;
    };

    Blockly.Arduino.led_setState = function (block) {
        const pin = block.getFieldValue('PIN');
        const state = block.getFieldValue('STATE');
        Blockly.Arduino.setups_[`led_init_${pin}`] = `pinMode(${pin}, OUTPUT);`;
        return `digitalWrite(${pin}, ${state});\n`;
    };

    Blockly.Arduino.led_blink = function (block) {
        const pin = block.getFieldValue('PIN');
        const duration = Blockly.Arduino.valueToCode(block, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || '500';
        Blockly.Arduino.setups_[`led_init_${pin}`] = `pinMode(${pin}, OUTPUT);`;
        return `digitalWrite(${pin}, HIGH);\ndelay(${duration});\ndigitalWrite(${pin}, LOW);\ndelay(${duration});\n`;
    };

    return Blockly;
}

exports = registerGenerators;
