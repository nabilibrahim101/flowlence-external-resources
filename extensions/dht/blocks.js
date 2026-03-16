/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#42CCFF';
    const secondaryColour = '#00BFFF';

    // DHT icon as base64 SVG - thermometer with thin outline, red mercury, yellow sun with rays, blue lines
    const dhtIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTQgMTUuNVY1YTMgMyAwIDAgMC02IDB2MTAuNWE0LjUgNC41IDAgMSAwIDYgMHoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzQ0NCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48Y2lyY2xlIGN4PSIxMSIgY3k9IjE4IiByPSIyLjUiIGZpbGw9IiNlNTM5MzUiLz48cmVjdCB4PSI5LjUiIHk9IjgiIHdpZHRoPSIzIiBoZWlnaHQ9IjguNSIgcng9IjEuNSIgZmlsbD0iI2U1MzkzNSIvPjxjaXJjbGUgY3g9IjUuNSIgY3k9IjUiIHI9IjIuMiIgZmlsbD0iI0ZERDgzNSIvPjxsaW5lIHgxPSI1LjUiIHkxPSIxLjUiIHgyPSI1LjUiIHkyPSIyLjUiIHN0cm9rZT0iI0ZERDgzNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1LjUiIHkxPSI3LjUiIHgyPSI1LjUiIHkyPSI4LjUiIHN0cm9rZT0iI0ZERDgzNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyIiB5MT0iNSIgeDI9IjMiIHkyPSI1IiBzdHJva2U9IiNGREQ4MzUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMyIgeTE9IjIuNSIgeDI9IjMuOCIgeTI9IjMuMyIgc3Ryb2tlPSIjRkREODM1IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMiIHkxPSI3LjUiIHgyPSIzLjgiIHkyPSI2LjciIHN0cm9rZT0iI0ZERDgzNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI3LjIiIHkxPSIzLjMiIHgyPSI4IiB5Mj0iMi41IiBzdHJva2U9IiNGREQ4MzUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTYiIHkxPSI3IiB4Mj0iMTkiIHkyPSI3IiBzdHJva2U9IiMyMTk2RjMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTYiIHkxPSI5LjUiIHgyPSIxOC41IiB5Mj0iOS41IiBzdHJva2U9IiMyMTk2RjMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTYiIHkxPSIxMiIgeDI9IjE5IiB5Mj0iMTIiIHN0cm9rZT0iIzIxOTZGMyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNiIgeTE9IjE0LjUiIHgyPSIxOC41IiB5Mj0iMTQuNSIgc3Ryb2tlPSIjMjE5NkYzIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+Cg==';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: dhtIconUrl,
            width: 36,
            height: 36,
            alt: 'DHT',
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

    Blockly.Blocks.dht_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DHT_INIT,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'NO'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODEL',
                        options: [
                            ['dht11', '11'],
                            ['dht21', '21'],
                            ['dht22', '22']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.dht_readHumidity = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DHT_READ_HUMIDITY,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'NO'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.dht_readTemperature = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DHT_READ_TEMPERATURE,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'NO'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'UNIT',
                        options: [
                            ['℃', 'false'],
                            ['℉', 'true']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
