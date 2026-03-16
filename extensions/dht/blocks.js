/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#42CCFF';
    const secondaryColour = '#00BFFF';

    // DHT thermometer icon as base64 SVG
    const dhtIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTMgMTQuNzZWMy41YTIuNSAyLjUgMCAwIDAtNSAwdjExLjI2YTQuNSA0LjUgMCAxIDAgNSAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmYyMDIwIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxjaXJjbGUgY3g9IjEwLjUiIGN5PSIxNy41IiByPSIyIiBmaWxsPSIjZmYyMDIwIi8+PGxpbmUgeDE9IjEwLjUiIHkxPSIxNSIgeDI9IjEwLjUiIHkyPSI3IiBzdHJva2U9IiNmZjIwMjAiIHN0cm9rZS13aWR0aD0iMS41Ii8+PGxpbmUgeDE9IjE3IiB5MT0iNSIgeDI9IjIwIiB5Mj0iNSIgc3Ryb2tlPSIjZmY0NDQ0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNyIgeTE9IjgiIHgyPSIyMCIgeTI9IjgiIHN0cm9rZT0iI2ZmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTciIHkxPSIxMSIgeDI9IjE5IiB5Mj0iMTEiIHN0cm9rZT0iI2ZmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTciIHkxPSIxNCIgeDI9IjE5IiB5Mj0iMTQiIHN0cm9rZT0iI2ZmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4K';

    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    Blockly.Blocks.dht_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DHT_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: dhtIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'DHT',
                        flip_rtl: false
                    },
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
                    {
                        type: 'field_image',
                        src: dhtIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'DHT',
                        flip_rtl: false
                    },
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
                    {
                        type: 'field_image',
                        src: dhtIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'DHT',
                        flip_rtl: false
                    },
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
