/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#5B9BD5';
    const secondaryColour = '#4A8BC4';

    // WiFi icon - colorful style
    const wifiIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMiA4LjVBMTQgMTQgMCAwIDEgMjIgOC41IiBzdHJva2U9IiMxNTY1QzAiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNNSAxMkExMCAxMCAwIDAgMSAxOSAxMiIgc3Ryb2tlPSIjNDJBNUY1IiBzdHJva2Utd2lkdGg9IjIuMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTguNSAxNS41QTYgNiAwIDAgMSAxNS41IDE1LjUiIHN0cm9rZT0iIzkwQ0FGOSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjE5IiByPSIyIiBmaWxsPSIjRkREODM1Ii8+PC9zdmc+Cg==';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: wifiIconUrl,
            width: 36,
            height: 36,
            alt: 'WiFi',
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

    Blockly.Blocks.wifi_connect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFI_CONNECT,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWORD'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifi_isConnected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFI_IS_CONNECTED,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.wifi_waitConnected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFI_WAIT_CONNECTED,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifi_getIP = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFI_GET_IP,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.wifi_getRSSI = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFI_GET_RSSI,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.wifi_getMAC = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFI_GET_MAC,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.wifi_disconnect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFI_DISCONNECT,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
