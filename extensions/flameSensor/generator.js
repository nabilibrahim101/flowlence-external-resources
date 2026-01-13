/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.flameSensor_read = function (block) {
        const pin = block.getFieldValue('PIN') || '34';
        const pinNum = parseInt(pin, 10);

        // ESP32 analog-capable pins: 32, 33, 34, 35, 36, 39
        const analogPins = [32, 33, 34, 35, 36, 39];

        let code;
        if (analogPins.includes(pinNum)) {
            // Analog read: invert so 0=no fire, high=fire detected
            code = `(4095 - analogRead(${pin}))`;
        } else {
            // Digital read: invert so 0=no fire, 1=fire detected
            Blockly.Arduino.setups_[`flameSensor_pin_${pin}`] = `pinMode(${pin}, INPUT);`;
            code = `(!digitalRead(${pin}))`;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
