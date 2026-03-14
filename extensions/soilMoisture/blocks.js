/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#2E8B57';
    const secondaryColour = '#228B22';

    // ESP32 ADC1 pins only (ADC2 pins don't work when WiFi is active)
    const analogPins = [
        ['GPIO 32', '32'],
        ['GPIO 33', '33'],
        ['GPIO 34', '34'],
        ['GPIO 35', '35'],
        ['GPIO 36', '36'],
        ['GPIO 39', '39']
    ];

    Blockly.Blocks.soilMoisture_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.soilMoisture_calibrate = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_CALIBRATE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DRYVALUE'
                    },
                    {
                        type: 'input_value',
                        name: 'WETVALUE'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.soilMoisture_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_READVALUE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.soilMoisture_readPercent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_READPERCENT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.soilMoisture_isSoilDry = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_ISSOILDRY,
                args0: [
                    {
                        type: 'input_value',
                        name: 'THRESHOLD'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
