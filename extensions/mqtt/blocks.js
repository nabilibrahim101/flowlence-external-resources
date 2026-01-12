/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#5C6BC0';
    const secondaryColour = '#3F51B5';

    // MQTT icon - envelope/message style
    const mqttIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0zIDhoMThhMiAyIDAgMDEyIDJ2OGEyIDIgMCAwMS0yIDJIM2EyIDIgMCAwMS0yLTJ2LThhMiAyIDAgMDEyLTJ6Ii8+PHBhdGggZD0iTTEgOGwxMCA2IDEwLTYiLz48L3N2Zz4=';

    // Connect to MQTT broker (without auth)
    Blockly.Blocks.mqtt_connect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_CONNECT || '%1 connect to broker %2 port %3 client ID %4',
                args0: [
                    {
                        type: 'field_image',
                        src: mqttIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'MQTT',
                        flip_rtl: false
                    },
                    {
                        type: 'input_value',
                        name: 'SERVER',
                        check: 'String'
                    },
                    {
                        type: 'input_value',
                        name: 'PORT',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'CLIENT_ID',
                        check: 'String'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // Connect to MQTT broker (with auth)
    Blockly.Blocks.mqtt_connect_auth = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_CONNECT_AUTH || '%1 connect to broker %2 port %3 client ID %4 user %5 password %6',
                args0: [
                    {
                        type: 'field_image',
                        src: mqttIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'MQTT',
                        flip_rtl: false
                    },
                    {
                        type: 'input_value',
                        name: 'SERVER',
                        check: 'String'
                    },
                    {
                        type: 'input_value',
                        name: 'PORT',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'CLIENT_ID',
                        check: 'String'
                    },
                    {
                        type: 'input_value',
                        name: 'USERNAME',
                        check: 'String'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWORD',
                        check: 'String'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // Publish message to topic
    Blockly.Blocks.mqtt_publish = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_PUBLISH || '%1 publish to topic %2 message %3',
                args0: [
                    {
                        type: 'field_image',
                        src: mqttIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'MQTT',
                        flip_rtl: false
                    },
                    {
                        type: 'input_value',
                        name: 'TOPIC',
                        check: 'String'
                    },
                    {
                        type: 'input_value',
                        name: 'MESSAGE',
                        check: 'String'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // Subscribe to topic
    Blockly.Blocks.mqtt_subscribe = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_SUBSCRIBE || '%1 subscribe to topic %2',
                args0: [
                    {
                        type: 'field_image',
                        src: mqttIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'MQTT',
                        flip_rtl: false
                    },
                    {
                        type: 'input_value',
                        name: 'TOPIC',
                        check: 'String'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // Check if connected
    Blockly.Blocks.mqtt_isConnected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_IS_CONNECTED || '%1 is connected?',
                args0: [
                    {
                        type: 'field_image',
                        src: mqttIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'MQTT',
                        flip_rtl: false
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    // MQTT loop (must be called in main loop)
    Blockly.Blocks.mqtt_loop = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_LOOP || '%1 MQTT loop',
                args0: [
                    {
                        type: 'field_image',
                        src: mqttIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'MQTT',
                        flip_rtl: false
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // Disconnect from broker
    Blockly.Blocks.mqtt_disconnect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_DISCONNECT || '%1 disconnect',
                args0: [
                    {
                        type: 'field_image',
                        src: mqttIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'MQTT',
                        flip_rtl: false
                    }
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
