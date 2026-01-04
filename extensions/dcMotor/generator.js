/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    // Digital control (simple ON/OFF direction control)
    Blockly.Arduino.dcMotor_digital = function (block) {
        const pinA = block.getFieldValue('INA');
        const pinB = block.getFieldValue('INB');
        const stateA = block.getFieldValue('STATE_A');
        const stateB = block.getFieldValue('STATE_B');

        Blockly.Arduino.setups_[`dcMotor_digital_${pinA}_${pinB}`] =
            `pinMode(${pinA}, OUTPUT);\n  pinMode(${pinB}, OUTPUT);`;

        return `digitalWrite(${pinA}, ${stateA});\ndigitalWrite(${pinB}, ${stateB});\n`;
    };

    // Analog/PWM control (speed control using ledcWrite for ESP32)
    // Updated for ESP32 Arduino Core 3.x API
    Blockly.Arduino.dcMotor_analog = function (block) {
        const pinA = block.getFieldValue('INA');
        const pinB = block.getFieldValue('INB');
        const stateA = block.getFieldValue('STATE_A');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '0';

        // ESP32 Arduino Core 3.x uses ledcAttach(pin, freq, resolution) instead of ledcSetup + ledcAttachPin
        Blockly.Arduino.setups_[`dcMotor_analog_${pinA}_${pinB}`] =
            `pinMode(${pinA}, OUTPUT);\n  ledcAttach(${pinB}, 1200, 8);`;

        // Invert speed: 255 - speed, so higher input = faster motor
        // When INA=HIGH, INB needs LOW PWM for max speed (voltage difference)
        return `digitalWrite(${pinA}, ${stateA});\nledcWrite(${pinB}, 255 - ${speed});\n`;
    };

    return Blockly;
}

exports = registerGenerators;
