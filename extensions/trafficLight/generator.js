/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.trafficLight_init = function (block) {
        const redPin = block.getFieldValue('RED_PIN');
        const orangePin = block.getFieldValue('ORANGE_PIN');
        const greenPin = block.getFieldValue('GREEN_PIN');

        // Store pin definitions for use by trafficLight_set
        Blockly.Arduino.definitions_.trafficLight_redPin = `#define TRAFFIC_RED_PIN ${redPin}`;
        Blockly.Arduino.definitions_.trafficLight_orangePin = `#define TRAFFIC_ORANGE_PIN ${orangePin}`;
        Blockly.Arduino.definitions_.trafficLight_greenPin = `#define TRAFFIC_GREEN_PIN ${greenPin}`;

        // Set pinMode for all 3 pins
        Blockly.Arduino.setups_.trafficLight_red = `pinMode(TRAFFIC_RED_PIN, OUTPUT);`;
        Blockly.Arduino.setups_.trafficLight_orange = `pinMode(TRAFFIC_ORANGE_PIN, OUTPUT);`;
        Blockly.Arduino.setups_.trafficLight_green = `pinMode(TRAFFIC_GREEN_PIN, OUTPUT);`;

        return '';
    };

    Blockly.Arduino.trafficLight_set = function (block) {
        const color = block.getFieldValue('COLOR');
        const state = block.getFieldValue('STATE');

        let pinName;
        if (color === 'RED') {
            pinName = 'TRAFFIC_RED_PIN';
        } else if (color === 'ORANGE') {
            pinName = 'TRAFFIC_ORANGE_PIN';
        } else {
            pinName = 'TRAFFIC_GREEN_PIN';
        }

        return `digitalWrite(${pinName}, ${state});\n`;
    };

    return Blockly;
}

exports = registerGenerators;
