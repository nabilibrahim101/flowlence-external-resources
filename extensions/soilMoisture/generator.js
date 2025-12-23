/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators(Blockly) {

    Blockly.Arduino.soilMoisture_init = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.definitions_.soilMoisture_pin = `const int soilMoisturePin = ${pin};`;
        Blockly.Arduino.setups_.soilMoisture_init = `pinMode(soilMoisturePin, INPUT);`;
        return '';
    };

    Blockly.Arduino.soilMoisture_readValue = function () {
        const code = `analogRead(soilMoisturePin)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.soilMoisture_readPercent = function () {
        // ESP32 has 12-bit ADC (0-4095), Arduino has 10-bit (0-1023)
        // We'll use map function which works for both
        Blockly.Arduino.definitions_.soilMoisture_percent = `
int getSoilMoisturePercent() {
    int value = analogRead(soilMoisturePin);
    // Sensor reads HIGH when dry, LOW when wet
    // Typical range: 0 (wet) to 4095/1023 (dry)
    int percent = map(value, 4095, 0, 0, 100);
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
    int percent = map(value, 4095, 0, 0, 100);
    return constrain(percent, 0, 100);
}`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;