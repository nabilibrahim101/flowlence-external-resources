/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators(Blockly) {

    Blockly.Arduino.soilMoisture_init = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.definitions_.soilMoisture_pin = `const int soilMoisturePin = ${pin};`;
        // Default calibration: dry=4095, wet=0 (most common capacitive sensor behavior)
        Blockly.Arduino.definitions_.soilMoisture_calibration = `int soilMoistureDryValue = 4095;\nint soilMoistureWetValue = 0;`;
        Blockly.Arduino.setups_.soilMoisture_init = `pinMode(soilMoisturePin, INPUT);`;
        return '';
    };

    Blockly.Arduino.soilMoisture_calibrate = function (block) {
        const dryValue = Blockly.Arduino.valueToCode(block, 'DRYVALUE', Blockly.Arduino.ORDER_ATOMIC) || '4095';
        const wetValue = Blockly.Arduino.valueToCode(block, 'WETVALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const code = `soilMoistureDryValue = ${dryValue};\nsoilMoistureWetValue = ${wetValue};\n`;
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
    // Map using calibrated values: dry=0%, wet=100%
    int percent = map(value, soilMoistureDryValue, soilMoistureWetValue, 0, 100);
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
    int percent = map(value, soilMoistureDryValue, soilMoistureWetValue, 0, 100);
    return constrain(percent, 0, 100);
}`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;