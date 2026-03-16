/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#42CCFF';
    const secondaryColour = '#00BFFF';

    // DHT icon as base64 SVG - red thermometer + blue water droplet + humidity waves
    const dhtIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTAgMTUuNzZWNC41YTIgMiAwIDAgMC00IDB2MTEuMjZhMy41IDMuNSAwIDEgMCA0IDB6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjIwMjAiIHN0cm9rZS13aWR0aD0iMS4zIi8+PGNpcmNsZSBjeD0iOCIgY3k9IjE3LjUiIHI9IjEuOCIgZmlsbD0iI2ZmMjAyMCIvPjxsaW5lIHgxPSI4IiB5MT0iMTUiIHgyPSI4IiB5Mj0iOCIgc3Ryb2tlPSIjZmYyMDIwIiBzdHJva2Utd2lkdGg9IjEuMyIvPjxsaW5lIHgxPSIxMSIgeTE9IjciIHgyPSIxMyIgeTI9IjciIHN0cm9rZT0iI2ZmNjY2NiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTEiIHkxPSI5LjUiIHgyPSIxMi41IiB5Mj0iOS41IiBzdHJva2U9IiNmZjY2NjYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjExIiB5MT0iMTIiIHgyPSIxMyIgeTI9IjEyIiBzdHJva2U9IiNmZjY2NjYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTE5IDExYzAgMi41LTIuNSA1LTIuNSA1UzE0IDEzLjUgMTQgMTFhMi41IDIuNSAwIDAgMSA1IDB6IiBmaWxsPSIjMzQ5OGRiIiBzdHJva2U9IiMyOTgwYjkiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHBhdGggZD0iTTE1IDE4LjVjMC43LTAuNSAxLjgtMC41IDIuNSAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzNDk4ZGIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTE0LjUgMjAuMmMxLTAuNyAyLjgtMC43IDMuOCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzNDk4ZGIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+Cg==';

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
