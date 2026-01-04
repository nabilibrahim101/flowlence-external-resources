/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    Blockly.Arduino.activeBuzzer_init = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.definitions_.activeBuzzer_pin = `const int activeBuzzerPin = ${pin};`;
        Blockly.Arduino.setups_.activeBuzzer_init = `pinMode(activeBuzzerPin, OUTPUT);\n  digitalWrite(activeBuzzerPin, LOW);`;

        return ``;
    };

    Blockly.Arduino.activeBuzzer_setState = function (block) {
        const state = block.getFieldValue('STATE');

        return `digitalWrite(activeBuzzerPin, ${state});\n`;
    };

    Blockly.Arduino.activeBuzzer_beep = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        return `digitalWrite(activeBuzzerPin, HIGH);\ndelay(${time});\ndigitalWrite(activeBuzzerPin, LOW);\n`;
    };

    Blockly.Arduino.activeBuzzer_beepTimes = function (block) {
        const times = Blockly.Arduino.valueToCode(block, 'TIMES', Blockly.Arduino.ORDER_ATOMIC);
        const duration = Blockly.Arduino.valueToCode(block, 'DURATION', Blockly.Arduino.ORDER_ATOMIC);
        const interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);

        return `for (int i = 0; i < ${times}; i++) {\n  digitalWrite(activeBuzzerPin, HIGH);\n  delay(${duration});\n  digitalWrite(activeBuzzerPin, LOW);\n  if (i < ${times} - 1) delay(${interval});\n}\n`;
    };

    return Blockly;
}

exports = registerGenerators;
