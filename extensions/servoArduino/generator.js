/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators(Blockly) {
    // Conditional include for ESP32 vs Arduino
    const servoInclude = '#ifdef ESP32\n#include <ESP32Servo.h>\n#else\n#include <Servo.h>\n#endif';

    Blockly.Arduino.servoArduino_setAngle = function (block) {
        const pin = block.getFieldValue('PIN');
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
        const duration = Blockly.Arduino.valueToCode(block, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.includes_.servo = servoInclude;
        Blockly.Arduino.definitions_[`servo_${pin}`] = `Servo servo_${pin};`;
        Blockly.Arduino.definitions_[`servo_${pin}_pos`] = `int servo_${pin}_pos = 0;`;
        Blockly.Arduino.setups_[`servo_init_${pin}`] = `servo_${pin}.attach(${pin});\n  servo_${pin}.write(0);\n  servo_${pin}_pos = 0;`;

        // Define the smooth move helper function once
        Blockly.Arduino.definitions_.servo_smoothMove = `
void servoSmoothMove(Servo &servo, int &currentPos, int targetPos, int duration) {
    if (duration <= 0) {
        servo.write(targetPos);
        currentPos = targetPos;
        return;
    }
    int steps = abs(targetPos - currentPos);
    if (steps == 0) return;
    int stepDelay = duration / steps;
    if (stepDelay < 1) stepDelay = 1;
    int dir = (targetPos > currentPos) ? 1 : -1;
    for (int i = currentPos; i != targetPos; i += dir) {
        servo.write(i);
        delay(stepDelay);
    }
    servo.write(targetPos);
    currentPos = targetPos;
}`;

        return `servoSmoothMove(servo_${pin}, servo_${pin}_pos, ${angle}, ${duration});\n`;
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
