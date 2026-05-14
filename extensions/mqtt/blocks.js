/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#5C6BC0';
    const secondaryColour = '#3F51B5';

    // MQTT icon - colorful cloud style
    const mqttIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNNSAxNiBRNSAxMiA4IDEyIFE5IDggMTMgOCBRMTcgOCAxNyAxMiBRMjAgMTIgMjAgMTUgUTIwIDE4IDE3IDE4IEg4IFE1IDE4IDUgMTZ6IiBmaWxsPSIjQzVDQUU5IiBzdHJva2U9IiMzRjUxQjUiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHBhdGggZD0iTTEwIDE0VjIwIiBzdHJva2U9IiM0Q0FGNTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTggMThsMiAyIDItMiIgc3Ryb2tlPSIjNENBRjUwIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTE2IDIwVjE0IiBzdHJva2U9IiNGRjk4MDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTE0IDE2bDItMiAyIDIiIHN0cm9rZT0iI0ZGOTgwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: mqttIconUrl,
            width: 36,
            height: 36,
            alt: 'MQTT',
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

    // Connect to MQTT broker (without auth)
    Blockly.Blocks.mqtt_connect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_CONNECT || '%1 %2 connect to broker %3 port %4 client ID %5',
                args0: [
                    ...iconArgs,
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
                message0: Blockly.Msg.MQTT_CONNECT_AUTH || '%1 %2 connect to broker %3 port %4 client ID %5 user %6 password %7',
                args0: [
                    ...iconArgs,
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
                message0: Blockly.Msg.MQTT_PUBLISH || '%1 %2 publish to topic %3 message %4',
                args0: [
                    ...iconArgs,
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
                message0: Blockly.Msg.MQTT_SUBSCRIBE || '%1 %2 subscribe to topic %3',
                args0: [
                    ...iconArgs,
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
                message0: Blockly.Msg.MQTT_IS_CONNECTED || '%1 %2 is connected?',
                args0: [
                    ...iconArgs
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
                message0: Blockly.Msg.MQTT_LOOP || '%1 %2 MQTT loop',
                args0: [
                    ...iconArgs
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
                message0: Blockly.Msg.MQTT_DISCONNECT || '%1 %2 disconnect',
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // Hat block: when MQTT message received
    Blockly.Blocks.mqtt_when_message_received = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_WHEN_MESSAGE_RECEIVED || '%1 %2 when MQTT message received',
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_hat']
            });
        }
    };

    // Reporter: the topic of the most recent MQTT message
    Blockly.Blocks.mqtt_received_topic = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_RECEIVED_TOPIC || '%1 %2 MQTT received topic',
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    // Reporter: the raw payload of the most recent MQTT message
    Blockly.Blocks.mqtt_received_message = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_RECEIVED_MESSAGE || '%1 %2 MQTT received message',
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    // Reporter: value at JSON key, with type dropdown (number / text / true-false)
    Blockly.Blocks.mqtt_get_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MQTT_GET_VALUE || '%1 %2 %3 from MQTT message at key %4',
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            ['number', 'NUMBER'],
                            ['text', 'TEXT'],
                            ['true/false', 'BOOLEAN']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'KEY',
                        check: 'String'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
