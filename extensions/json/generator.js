/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    // JSON with 1 field
    Blockly.Arduino.json_create_1 = function (block) {
        const key1 = Blockly.Arduino.valueToCode(block, 'KEY1', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const value1 = Blockly.Arduino.valueToCode(block, 'VALUE1', Blockly.Arduino.ORDER_ATOMIC) || '""';

        const code = `String("{\\"") + ${key1} + String("\\":\\"") + String(${value1}) + String("\\"}")`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    // JSON with 2 fields
    Blockly.Arduino.json_create_2 = function (block) {
        const key1 = Blockly.Arduino.valueToCode(block, 'KEY1', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const value1 = Blockly.Arduino.valueToCode(block, 'VALUE1', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const key2 = Blockly.Arduino.valueToCode(block, 'KEY2', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const value2 = Blockly.Arduino.valueToCode(block, 'VALUE2', Blockly.Arduino.ORDER_ATOMIC) || '""';

        const code = `String("{\\"") + ${key1} + String("\\":\\"") + String(${value1}) + String("\\",\\"") + ${key2} + String("\\":\\"") + String(${value2}) + String("\\"}")`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    // JSON with 3 fields
    Blockly.Arduino.json_create_3 = function (block) {
        const key1 = Blockly.Arduino.valueToCode(block, 'KEY1', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const value1 = Blockly.Arduino.valueToCode(block, 'VALUE1', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const key2 = Blockly.Arduino.valueToCode(block, 'KEY2', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const value2 = Blockly.Arduino.valueToCode(block, 'VALUE2', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const key3 = Blockly.Arduino.valueToCode(block, 'KEY3', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const value3 = Blockly.Arduino.valueToCode(block, 'VALUE3', Blockly.Arduino.ORDER_ATOMIC) || '""';

        const code = `String("{\\"") + ${key1} + String("\\":\\"") + String(${value1}) + String("\\",\\"") + ${key2} + String("\\":\\"") + String(${value2}) + String("\\",\\"") + ${key3} + String("\\":\\"") + String(${value3}) + String("\\"}")`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    // JSON with 5 fields
    Blockly.Arduino.json_create_5 = function (block) {
        const key1 = Blockly.Arduino.valueToCode(block, 'KEY1', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const value1 = Blockly.Arduino.valueToCode(block, 'VALUE1', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const key2 = Blockly.Arduino.valueToCode(block, 'KEY2', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const value2 = Blockly.Arduino.valueToCode(block, 'VALUE2', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const key3 = Blockly.Arduino.valueToCode(block, 'KEY3', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const value3 = Blockly.Arduino.valueToCode(block, 'VALUE3', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const key4 = Blockly.Arduino.valueToCode(block, 'KEY4', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const value4 = Blockly.Arduino.valueToCode(block, 'VALUE4', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const key5 = Blockly.Arduino.valueToCode(block, 'KEY5', Blockly.Arduino.ORDER_ATOMIC) || '""';
        const value5 = Blockly.Arduino.valueToCode(block, 'VALUE5', Blockly.Arduino.ORDER_ATOMIC) || '""';

        const code = `String("{\\"") + ${key1} + String("\\":\\"") + String(${value1}) + String("\\",\\"") + ${key2} + String("\\":\\"") + String(${value2}) + String("\\",\\"") + ${key3} + String("\\":\\"") + String(${value3}) + String("\\",\\"") + ${key4} + String("\\":\\"") + String(${value4}) + String("\\",\\"") + ${key5} + String("\\":\\"") + String(${value5}) + String("\\"}")`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
