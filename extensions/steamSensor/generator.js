// eslint-disable-next-line func-style
function registerGenerators (Blockly) {
    Blockly.Arduino.steamSensor_readValue = function (block) {
        const pin = block.getFieldValue('pin') || '35';
        const code = `analogRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
