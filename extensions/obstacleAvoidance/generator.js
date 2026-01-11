/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.obstacleAvoidance_detected = function (block) {
        const pin = block.getFieldValue('pin') || 'A0';
        // Most IR obstacle sensors output LOW (0) when obstacle detected
        const code = `(digitalRead(${pin})==0)`;
        Blockly.Arduino.setups_[`obstacleAvoidance_init_${pin}`] = `pinMode(${pin}, INPUT);`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.obstacleAvoidance_readValue = function (block) {
        const pin = block.getFieldValue('pin') || 'A0';
        const code = `digitalRead(${pin})`;
        Blockly.Arduino.setups_[`obstacleAvoidance_init_${pin}`] = `pinMode(${pin}, INPUT);`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
