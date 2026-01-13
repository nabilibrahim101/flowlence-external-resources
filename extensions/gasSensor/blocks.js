/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#607D8B';
    const secondaryColour = '#455A64';

    // Gas sensor icon - cloud/gas shape
    const gasSensorIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xOCAxMGgtMS4yNkEzIDMgMCAxIDAgOSA5aDlhMyAzIDAgMCAxIDAgNkg2YTMgMyAwIDEgMSAwLTZoMiIvPjxwYXRoIGQ9Ik0xMiAydjIiLz48cGF0aCBkPSJNMTIgMjB2MiIvPjwvc3ZnPg==';

    // ESP32 analog pins
    const analogPins = [
        ['GPIO 32', '32'],
        ['GPIO 33', '33'],
        ['GPIO 34', '34'],
        ['GPIO 35', '35'],
        ['GPIO 36', '36'],
        ['GPIO 39', '39']
    ];

    // Read gas sensor value (analog)
    Blockly.Blocks.gasSensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.GASSENSOR_READ || '%1 gas sensor %2 value',
                args0: [
                    {
                        type: 'field_image',
                        src: gasSensorIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'Gas Sensor',
                        flip_rtl: false
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // Gas detected (boolean - high value means gas detected)
    Blockly.Blocks.gasSensor_detected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.GASSENSOR_DETECTED || '%1 gas detected %2 ?',
                args0: [
                    {
                        type: 'field_image',
                        src: gasSensorIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'Gas Sensor',
                        flip_rtl: false
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
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
