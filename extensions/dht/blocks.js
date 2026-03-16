/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#42CCFF';
    const secondaryColour = '#00BFFF';

    // DHT thermometer icon as base64 SVG
    const dhtIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xNCAxNC43NlYzLjVhMi41IDIuNSAwIDAgMC01IDB2MTEuMjZhNC41IDQuNSAwIDEgMCA1IDB6Ii8+PGNpcmNsZSBjeD0iMTEuNSIgY3k9IjE3LjUiIHI9IjIiIGZpbGw9IiNmZmYiLz48bGluZSB4MT0iMTEuNSIgeTE9IjE1IiB4Mj0iMTEuNSIgeTI9IjciLz48bGluZSB4MT0iMTkiIHkxPSI1IiB4Mj0iMjEiIHkyPSI1Ii8+PGxpbmUgeDE9IjE5IiB5MT0iOSIgeDI9IjIxIiB5Mj0iOSIvPjxsaW5lIHgxPSIxOSIgeTE9IjEzIiB4Mj0iMjEiIHkyPSIxMyIvPjwvc3ZnPgo=';

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
