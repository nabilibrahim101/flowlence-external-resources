/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const wifiColour = '#5B9BD5';
    const wifiSecondaryColour = '#4A8BC4';
    const mqttColour = '#70C050';
    const mqttSecondaryColour = '#5FAF3F';

    // ==================== WiFi Blocks ====================

    Blockly.Blocks.thingsboard_wifiConnect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSBOARD_WIFI_CONNECT,
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
                colour: wifiColour,
                secondaryColour: wifiSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.thingsboard_wifiIsConnected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSBOARD_WIFI_IS_CONNECTED,
                colour: wifiColour,
                secondaryColour: wifiSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.thingsboard_wifiWaitConnected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSBOARD_WIFI_WAIT_CONNECTED,
                colour: wifiColour,
                secondaryColour: wifiSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.thingsboard_wifiGetIP = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSBOARD_WIFI_GET_IP,
                colour: wifiColour,
                secondaryColour: wifiSecondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.thingsboard_wifiDisconnect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSBOARD_WIFI_DISCONNECT,
                colour: wifiColour,
                secondaryColour: wifiSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // ==================== ThingsBoard MQTT Blocks ====================

    Blockly.Blocks.thingsboard_connect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSBOARD_CONNECT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'SERVER'
                    },
                    {
                        type: 'input_value',
                        name: 'TOKEN'
                    }
                ],
                colour: mqttColour,
                secondaryColour: mqttSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.thingsboard_isConnected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSBOARD_IS_CONNECTED,
                colour: mqttColour,
                secondaryColour: mqttSecondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.thingsboard_sendKeyValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSBOARD_SEND_KEY_VALUE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'KEY'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: mqttColour,
                secondaryColour: mqttSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.thingsboard_sendMultiple = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSBOARD_SEND_MULTIPLE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'KEY1'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE1'
                    },
                    {
                        type: 'input_value',
                        name: 'KEY2'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE2'
                    }
                ],
                colour: mqttColour,
                secondaryColour: mqttSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.thingsboard_loop = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSBOARD_LOOP,
                colour: mqttColour,
                secondaryColour: mqttSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.thingsboard_disconnect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGSBOARD_DISCONNECT,
                colour: mqttColour,
                secondaryColour: mqttSecondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
