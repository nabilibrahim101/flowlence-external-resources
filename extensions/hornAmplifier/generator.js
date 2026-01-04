/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    Blockly.Arduino.hornAmplifier_init = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.hornAmplifier_init = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.hornAmplifier_init = `Buzzer horn_buzzer(${pin});\n` +
            `float hornBeatTime = 60.0 / 120;`;

        return ``;
    };

    Blockly.Arduino.hornAmplifier_playToneForBeat = function () {
        const freq = this.getFieldValue('FREQ');
        const time = this.getFieldValue('TIME');

        return `horn_buzzer.tone(${freq}, ${time} * 1000 * hornBeatTime);\n`;
    };

    Blockly.Arduino.hornAmplifier_playToneForMs = function (block) {
        const freq = Blockly.Arduino.valueToCode(block, 'FREQ', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        return `horn_buzzer.tone(${freq}, ${time});\n`;
    };

    Blockly.Arduino.hornAmplifier_setTempo = function (block) {
        const bpm = Blockly.Arduino.valueToCode(block, 'BPM', Blockly.Arduino.ORDER_ATOMIC);

        return `hornBeatTime = 60.0 / ${bpm};\n`;
    };

    Blockly.Arduino.hornAmplifier_stop = function () {
        return `horn_buzzer.noTone();\n`;
    };

    Blockly.Arduino.hornAmplifier_playRingtone = function () {
        const no = this.getFieldValue('NO');

        return `horn_buzzer.playRingtone(${no});\n`;
    };

    return Blockly;
}

exports = registerGenerators;
