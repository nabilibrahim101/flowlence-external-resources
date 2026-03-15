/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.lcd128x32_init = function () {
        Blockly.Arduino.includes_.lcd128x32_init = `#include <lcd.h>`;
        Blockly.Arduino.definitions_.lcd128x32_var = `LCD_ST7567 Lcd;`;
        Blockly.Arduino.setups_.lcd128x32_setup = `Lcd.Init();\n  Lcd.Clear();`;
        return '';
    };

    Blockly.Arduino.lcd128x32_clear = function () {
        return `Lcd.Clear();\n`;
    };

    Blockly.Arduino.lcd128x32_setCursor = function (block) {
        const row = block.getFieldValue('ROW');
        const col = block.getFieldValue('COL');
        return `Lcd.Cursor(${row}, ${col});\n`;
    };

    Blockly.Arduino.lcd128x32_printString = function (block) {
        const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '""';
        return `Lcd.Display(${text});\n`;
    };

    Blockly.Arduino.lcd128x32_printNumber = function (block) {
        const num = Blockly.Arduino.valueToCode(block, 'NUMBER', Blockly.Arduino.ORDER_ATOMIC) || '0';
        return `Lcd.Display_Num(${num});\n`;
    };

    return Blockly;
}

exports = registerGenerators;
