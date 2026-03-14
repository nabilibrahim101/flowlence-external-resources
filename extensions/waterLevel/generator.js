/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.waterLevel_init = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.definitions_.waterLevel_pin = `const int waterLevelPin = ${pin};`;
        Blockly.Arduino.definitions_.waterLevel_calibration = `int waterLevelMinValue = 0;\nint waterLevelMaxValue = 1400;`;
        Blockly.Arduino.setups_.waterLevel_init = `pinMode(waterLevelPin, INPUT);`;
        return '';
    };

    Blockly.Arduino.waterLevel_calibrate = function (block) {
        const minValue = Blockly.Arduino.valueToCode(block, 'MINVALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const maxValue = Blockly.Arduino.valueToCode(block, 'MAXVALUE', Blockly.Arduino.ORDER_ATOMIC) || '1400';
        const code = `waterLevelMinValue = ${minValue};\nwaterLevelMaxValue = ${maxValue};\n`;
        return code;
    };

    Blockly.Arduino.waterLevel_readValue = function () {
        const code = `analogRead(waterLevelPin)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.waterLevel_readPercent = function () {
        Blockly.Arduino.definitions_.waterLevel_percent = `
int getWaterLevelPercent() {
    int value = analogRead(waterLevelPin);
    // Map using calibrated min/max values
    int percent = map(value, waterLevelMinValue, waterLevelMaxValue, 0, 100);
    return constrain(percent, 0, 100);
}`;
        const code = `getWaterLevelPercent()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.waterLevel_isLow = function (block) {
        const threshold = Blockly.Arduino.valueToCode(block, 'THRESHOLD', Blockly.Arduino.ORDER_ATOMIC) || '20';
        Blockly.Arduino.definitions_.waterLevel_percent = `
int getWaterLevelPercent() {
    int value = analogRead(waterLevelPin);
    int percent = map(value, waterLevelMinValue, waterLevelMaxValue, 0, 100);
    return constrain(percent, 0, 100);
}`;
        const code = `(getWaterLevelPercent() < ${threshold})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
