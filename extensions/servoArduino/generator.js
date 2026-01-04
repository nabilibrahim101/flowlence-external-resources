/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators(Blockly) {
    // Conditional include for ESP32 vs Arduino
    const servoInclude = '#ifdef ESP32\n#include <ESP32Servo.h>\n#else\n#include <Servo.h>\n#endif';

    Blockly.Arduino.servoArduino_setAngle = function (block) {
        const pin = block.getFieldValue('PIN');
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
        const delay = Blockly.Arduino.valueToCode(block, 'DELAY', Blockly.Arduino.ORDER_ATOMIC) || '200';

        Blockly.Arduino.includes_.servo = servoInclude;
        Blockly.Arduino.definitions_[`servo_${pin}`] = `Servo servo_${pin};`;
        Blockly.Arduino.setups_[`servo_init_${pin}`] = `servo_${pin}.attach(${pin});`;

        return `servo_${pin}.write(${angle});\ndelay(${delay});\n`;
    };

    Blockly.Arduino.servoArduino_readAngle = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.servo = servoInclude;
        Blockly.Arduino.definitions_[`servo_${pin}`] = `Servo servo_${pin};`;
        Blockly.Arduino.setups_[`servo_init_${pin}`] = `servo_${pin}.attach(${pin});`;

        return [`servo_${pin}.read()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
