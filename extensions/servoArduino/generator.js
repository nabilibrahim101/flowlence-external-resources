/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators(Blockly) {

    // Common setup for any servo block
    const setupServoHelpers = function (pin) {
        // On ESP32: use LEDC directly with explicit channel assignment
        // Servos use channels 7,6,5... (timer 3,3,2...) to avoid conflicts
        // with auto-assigned channels 0,1,2... used by fans/motors
        // On Arduino: use standard Servo library
        Blockly.Arduino.includes_.servo = '#ifndef ESP32\n#include <Servo.h>\n#endif';

        Blockly.Arduino.definitions_.servo_helpers = `
#ifndef ESP32
Servo _servos[28];
#endif

#ifdef ESP32
uint8_t _nextServoChannel = 7;
#endif

void servoInit(uint8_t pin) {
#ifdef ESP32
    ledcAttachChannel(pin, 50, 16, _nextServoChannel);
    _nextServoChannel--;
#else
    _servos[pin].attach(pin);
#endif
}

void servoWrite(uint8_t pin, int angle) {
#ifdef ESP32
    uint32_t duty = map(constrain(angle, 0, 180), 0, 180, 1638, 8192);
    ledcWrite(pin, duty);
#else
    _servos[pin].write(angle);
#endif
}

void servoSmoothMove(uint8_t pin, int &currentPos, int targetPos, int duration) {
    if (duration <= 0) {
        servoWrite(pin, targetPos);
        currentPos = targetPos;
        return;
    }
    int steps = abs(targetPos - currentPos);
    if (steps == 0) return;
    int stepDelay = duration / steps;
    if (stepDelay < 1) stepDelay = 1;
    int dir = (targetPos > currentPos) ? 1 : -1;
    for (int i = currentPos; i != targetPos; i += dir) {
        servoWrite(pin, i);
        delay(stepDelay);
    }
    servoWrite(pin, targetPos);
    currentPos = targetPos;
}`;

        Blockly.Arduino.definitions_[`servo_${pin}_pos`] = `int servo_${pin}_pos = 0;`;
        Blockly.Arduino.setups_[`servo_init_${pin}`] = `servoInit(${pin});\n  servoWrite(${pin}, 0);\n  servo_${pin}_pos = 0;`;
    };

    Blockly.Arduino.servoArduino_setAngle = function (block) {
        const pin = block.getFieldValue('PIN');
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
        const duration = Blockly.Arduino.valueToCode(block, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || '0';

        setupServoHelpers(pin);

        return `servoSmoothMove(${pin}, servo_${pin}_pos, ${angle}, ${duration});\n`;
    };

    Blockly.Arduino.servoArduino_readAngle = function (block) {
        const pin = block.getFieldValue('PIN');

        setupServoHelpers(pin);

        return [`servo_${pin}_pos`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
