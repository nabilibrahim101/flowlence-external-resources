/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#5B9BD5';
    const secondaryColour = '#4A8BC4';

    // WiFi icon - white outline style
    const wifiIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNNSA4LjVBMTAgMTAgMCAwIDEgMTkgOC41Ii8+PHBhdGggZD0iTTggMTJhNiA2IDAgMCAxIDggMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTciIHI9IjEiLz48L3N2Zz4=';

    Blockly.Blocks.wifi_connect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFI_CONNECT,
                args0: [
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
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
