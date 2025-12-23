/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#2E8B57';
    const secondaryColour = '#228B22';

    // ESP32 ADC pins (hardcoded for reliability)
    const analogPins = [
        ['GPIO 32', '32'],
        ['GPIO 33', '33'],
        ['GPIO 34', '34'],
        ['GPIO 35', '35'],
        ['GPIO 36', '36'],
        ['GPIO 39', '39'],
        ['GPIO 25', '25'],
        ['GPIO 26', '26'],
        ['GPIO 27', '27'],
        ['GPIO 14', '14'],
        ['GPIO 12', '12'],
        ['GPIO 13', '13'],
        ['GPIO 4', '4'],
        ['GPIO 2', '2'],
        ['GPIO 15', '15']
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