/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    // Track which LED strip pin is currently active (set by init block)
    Blockly.Arduino._currentLedStripPin = '0';

    Blockly.Arduino.rgbLedStrip_init = function (block) {
        const len = Blockly.Arduino.valueToCode(block, 'LEN', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.rgbLedStrip_init = `#include <Adafruit_NeoPixel.h>`;
        // Each pin gets its own unique NeoPixel object
        Blockly.Arduino.definitions_[`rgbLedStrip_${pin}`] =
            `Adafruit_NeoPixel ledStrip_${pin}(${len}, ${pin}, NEO_GRB + NEO_KHZ800);`;

        // begin() goes in setup so it only runs once per strip
        Blockly.Arduino.setups_[`rgbLedStrip_begin_${pin}`] = `ledStrip_${pin}.begin();`;

        // Track active strip so subsequent blocks use the right one
        Blockly.Arduino._currentLedStripPin = pin;

        return ``;
    };

    Blockly.Arduino.rgbLedStrip_setPixelColor = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');
        const pin = Blockly.Arduino._currentLedStripPin;

        return `ledStrip_${pin}.setPixelColor(${no} - 1, ${colour});\n`;
    };

    Blockly.Arduino.rgbLedStrip_fill = function (block) {
        const first = Blockly.Arduino.valueToCode(block, 'FIRST', Blockly.Arduino.ORDER_ATOMIC);
        const count = Blockly.Arduino.valueToCode(block, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');
        const pin = Blockly.Arduino._currentLedStripPin;

        return `ledStrip_${pin}.fill(${colour}, ${first} - 1, ${count});\n`;
    };

    Blockly.Arduino.rgbLedStrip_color = function (block) {
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);
        const pin = Blockly.Arduino._currentLedStripPin;

        return [`ledStrip_${pin}.Color(${r}, ${g}, ${b})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.rgbLedStrip_setBrightness = function (block) {
        const brightness = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);
        const pin = Blockly.Arduino._currentLedStripPin;

        return `ledStrip_${pin}.setBrightness(${brightness});\n`;
    };

    Blockly.Arduino.rgbLedStrip_clear = function () {
        const pin = Blockly.Arduino._currentLedStripPin;

        return `ledStrip_${pin}.clear();\n`;
    };

    Blockly.Arduino.rgbLedStrip_show = function () {
        const pin = Blockly.Arduino._currentLedStripPin;

        return `ledStrip_${pin}.show();\n`;
    };

    return Blockly;
}

exports = registerGenerators;
