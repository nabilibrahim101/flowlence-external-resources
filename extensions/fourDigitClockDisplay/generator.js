/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    Blockly.Arduino.fourDigitClockDisplay_init = function () {
        Blockly.Arduino.includes_.fourDigitClockDisplay_wire = `#include <Wire.h>`;
        Blockly.Arduino.includes_.fourDigitClockDisplay_init = `#include <TM1650.h>`;
        Blockly.Arduino.definitions_.fourDigitClockDisplay_init = `TM1650 fourDigitClockDisplay;`;

        Blockly.Arduino.setups_.fourDigitClockDisplay_wire = `Wire.begin();`;

        return `fourDigitClockDisplay.init();\nfourDigitClockDisplay.setBrightness(2);\n`;
    };

    Blockly.Arduino.fourDigitClockDisplay_setBrightness = function (block) {
        const brt = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        return `fourDigitClockDisplay.setBrightness(${brt});\n`;
    };

    Blockly.Arduino.fourDigitClockDisplay_brightnessNumber = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.fourDigitClockDisplay_displayNumber = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

        return `fourDigitClockDisplay.displayString(String(${data}));\n`;
    };

    Blockly.Arduino.fourDigitClockDisplay_displayString = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

        return `fourDigitClockDisplay.displayString(String(${data}));\n`;
    };

    Blockly.Arduino.fourDigitClockDisplay_display = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const pos = block.getFieldValue('POS');

        // TM1650 setPosition takes position and raw segment byte
        // For simple digit display, look up the segment code
        return `fourDigitClockDisplay.setPosition(${pos}, TM1650_CDigits[(byte)${data}]);\n`;
    };

    Blockly.Arduino.fourDigitClockDisplay_setPoint = function (block) {
        const sta = block.getFieldValue('STA');

        // TM1650 uses setDot on position 1 (between digit 2 and 3) for the colon
        return `fourDigitClockDisplay.setDot(1, ${sta});\n`;
    };

    Blockly.Arduino.fourDigitClockDisplay_clear = function () {
        return `fourDigitClockDisplay.clear();\n`;
    };

    return Blockly;
}

exports = registerGenerators;
