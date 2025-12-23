/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.pirMotion_init = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.definitions_.pirMotion_pin = `const int pirPin = ${pin};`;
        Blockly.Arduino.setups_.pirMotion_init = `pinMode(pirPin, INPUT);`;
        return '';
    };

    Blockly.Arduino.pirMotion_detected = function () {
        const code = `(digitalRead(pirPin) == HIGH)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.pirMotion_waitUntilMotion = function () {
        const code = `while (digitalRead(pirPin) == LOW) { delay(10); }\n`;
        return code;
    };

    Blockly.Arduino.pirMotion_waitUntilNoMotion = function () {
        const code = `while (digitalRead(pirPin) == HIGH) { delay(10); }\n`;
        return code;
    };

    return Blockly;
}

exports = registerGenerators;
