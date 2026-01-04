/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    Blockly.Arduino.passiveBuzzer_init = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.passiveBuzzer_init = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.passiveBuzzer_init = `Buzzer my_buzzer(${pin});\n` +
            `float beatTime = 60.0 / 120;`;

        return ``;
    };

    Blockly.Arduino.passiveBuzzer_playToneForBeat = function () {
        const freq = this.getFieldValue('FREQ');
        const time = this.getFieldValue('TIME');

        return `my_buzzer.tone(${freq}, ${time} * 1000 * beatTime);\n`;
    };

    Blockly.Arduino.passiveBuzzer_setTempo = function (block) {
        const bpm = Blockly.Arduino.valueToCode(block, 'BPM', Blockly.Arduino.ORDER_ATOMIC);

        return `beatTime = 60.0 / ${bpm};\n`;
    };

    Blockly.Arduino.passiveBuzzer_playRingtone = function () {
        const no = this.getFieldValue('NO');

        return `my_buzzer.playRingtone(${no});\n`;
    };

    // Play Music generator (ESP32 only - uses musicESP32 library)
    Blockly.Arduino.passiveBuzzer_playMusic = function (block) {
        const music = block.getFieldValue('MUSIC');

        // Get pin from init block - default to IO0 if not found
        const pin = Blockly.Arduino.definitions_.passiveBuzzer_init ?
            Blockly.Arduino.definitions_.passiveBuzzer_init.match(/Buzzer my_buzzer\((\d+)\)/)?.[1] || '0' : '0';

        // ESP32 Arduino Core 3.x has built-in tone()/noTone(), no need for ESP32Tone
        Blockly.Arduino.includes_.passiveBuzzer_music = `#include <musicESP32.h>`;
        Blockly.Arduino.definitions_.passiveBuzzer_music = `music Music(${pin});`;

        return `Music.${music}();\n`;
    };

    Blockly.Arduino['passiveBuzzer_custom_math_whole_number'] = Blockly.Arduino['math_number'];

    return Blockly;
}

exports = registerGenerators;
