/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#4A90D9';
    const secondaryColour = '#3A7BC8';

    // ESP32 ADC1 pins only (ADC2 pins don't work when WiFi is active)
    const analogPins = [
        ['GPIO 32', '32'],
        ['GPIO 33', '33'],
        ['GPIO 34', '34'],
        ['GPIO 35', '35'],
        ['GPIO 36', '36'],
        ['GPIO 39', '39']
    ];

    Blockly.Blocks.waterLevel_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WATERLEVEL_INIT,
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

    Blockly.Blocks.waterLevel_calibrate = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WATERLEVEL_CALIBRATE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MINVALUE'
                    },
                    {
                        type: 'input_value',
                        name: 'MAXVALUE'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.waterLevel_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WATERLEVEL_READVALUE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.waterLevel_readPercent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WATERLEVEL_READPERCENT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.waterLevel_isLow = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WATERLEVEL_ISLOW,
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
