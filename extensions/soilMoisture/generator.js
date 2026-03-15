/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators(Blockly) {

    Blockly.Arduino.soilMoisture_init = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.definitions_.soilMoisture_pin = `const int soilMoisturePin = ${pin};`;
        // Default calibration: min=0, max=4095
        Blockly.Arduino.definitions_.soilMoisture_calibration = `int soilMoistureMinValue = 0;\nint soilMoistureMaxValue = 4095;`;
        Blockly.Arduino.setups_.soilMoisture_init = `pinMode(soilMoisturePin, INPUT);`;
        return '';
    };

    Blockly.Arduino.soilMoisture_calibrate = function (block) {
        const minValue = Blockly.Arduino.valueToCode(block, 'DRYVALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const maxValue = Blockly.Arduino.valueToCode(block, 'WETVALUE', Blockly.Arduino.ORDER_ATOMIC) || '4095';
        const code = `soilMoistureMinValue = ${minValue};\nsoilMoistureMaxValue = ${maxValue};\n`;
        return code;
    };

    Blockly.Arduino.soilMoisture_readValue = function () {
        const code = `analogRead(soilMoisturePin)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.soilMoisture_readPercent = function () {
        Blockly.Arduino.definitions_.soilMoisture_percent = `
int getSoilMoisturePercent() {
    int value = analogRead(soilMoisturePin);
    // Map using calibrated min/max values
    int percent = map(value, soilMoistureMinValue, soilMoistureMaxValue, 0, 100);
    return constrain(percent, 0, 100);
}`;
        const code = `getSoilMoisturePercent()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.soilMoisture_isSoilDry = function (block) {
        const threshold = Blockly.Arduino.valueToCode(block, 'THRESHOLD', Blockly.Arduino.ORDER_ATOMIC) || '30';
        const code = `(getSoilMoisturePercent() < ${threshold})`;
        // Make sure the helper function is defined
        Blockly.Arduino.definitions_.soilMoisture_percent = `
int getSoilMoisturePercent() {
    int value = analogRead(soilMoisturePin);
    int percent = map(value, soilMoistureMinValue, soilMoistureMaxValue, 0, 100);
    return constrain(percent, 0, 100);
}`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;