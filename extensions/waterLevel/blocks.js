/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#4A90D9';
    const secondaryColour = '#3A7BC8';

    // Water level icon - glass beaker with curved water fill, red level mark
    const waterLevelIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNNyAzaDEwdjE0YTQgNCAwIDAgMS00IDRoLTJhNCA0IDAgMCAxLTQtNFYzeiIgZmlsbD0iI0UzRjJGRCIgc3Ryb2tlPSIjMTU2NUMwIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxwYXRoIGQ9Ik04IDEyLjVoOHY0LjVhMyAzIDAgMCAxLTMgM2gtMmEzIDMgMCAwIDEtMy0zVjEyLjV6IiBmaWxsPSIjNDJBNUY1Ii8+PGxpbmUgeDE9IjUiIHkxPSIxMi41IiB4Mj0iNyIgeTI9IjEyLjUiIHN0cm9rZT0iI2U1MzkzNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1IiB5MT0iOCIgeDI9IjciIHkyPSI4IiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUuNSIgeTE9IjE2IiB4Mj0iNyIgeTI9IjE2IiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+Cg==';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // ESP32 ADC1 pins only (ADC2 pins don't work when WiFi is active)
    const analogPins = [
        ['GPIO 32', '32'],
        ['GPIO 33', '33'],
        ['GPIO 34', '34'],
        ['GPIO 35', '35'],
        ['GPIO 36', '36'],
        ['GPIO 39', '39']
    ];

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: waterLevelIconUrl,
            width: 36,
            height: 36,
            alt: 'Water Level',
            flip_rtl: false
        },
        {
            type: 'field_image',
            src: separatorUrl,
            width: 4,
            height: 40,
            alt: '|',
            flip_rtl: false
        }
    ];

    Blockly.Blocks.waterLevel_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WATERLEVEL_INIT,
                args0: [
                    ...iconArgs,
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
                    ...iconArgs,
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
                args0: [
                    ...iconArgs
                ],
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
                args0: [
                    ...iconArgs
                ],
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
                    ...iconArgs,
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
