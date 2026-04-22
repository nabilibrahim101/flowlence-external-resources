/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FF6F00';
    const secondaryColour = '#E65100';

    // DC Motor icon
    const dcMotorIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyLjUiIGZpbGw9IiNGRjZGMDAiLz48cGF0aCBkPSJNMTIgOS41QzExIDYgMTMgMi41IDEzIDIuNVM5IDQgOC41IDcuNUM4LjIgOS41IDEwIDEwLjUgMTIgOS41eiIgZmlsbD0iIzQyQTVGNSIgb3BhY2l0eT0iMC44NSIvPjxwYXRoIGQ9Ik0xNC41IDEyQzE4IDExIDIxLjUgMTMgMjEuNSAxM1MyMCA5IDE2LjUgOC41QzE0LjUgOC4yIDEzLjUgMTAgMTQuNSAxMnoiIGZpbGw9IiM0MkE1RjUiIG9wYWNpdHk9IjAuODUiLz48cGF0aCBkPSJNMTIgMTQuNUMxMyAxOCAxMSAyMS41IDExIDIxLjVTMTUgMjAgMTUuNSAxNi41QzE1LjggMTQuNSAxNCAxMy41IDEyIDE0LjV6IiBmaWxsPSIjNDJBNUY1IiBvcGFjaXR5PSIwLjg1Ii8+PHBhdGggZD0iTTkuNSAxMkM2IDEzIDIuNSAxMSAyLjUgMTFTNCAxNSA3LjUgMTUuNUM5LjUgMTUuOCAxMC41IDE0IDkuNSAxMnoiIGZpbGw9IiM0MkE1RjUiIG9wYWNpdHk9IjAuODUiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxLjUiIGZpbGw9IiNGREQ4MzUiLz48L3N2Zz4K';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: dcMotorIconUrl,
            width: 36,
            height: 36,
            alt: 'DC Motor',
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

    // ESP32 digital pins
    const digitalPins = [
        ['GPIO 2', '2'],
        ['GPIO 4', '4'],
        ['GPIO 5', '5'],
        ['GPIO 12', '12'],
        ['GPIO 13', '13'],
        ['GPIO 14', '14'],
        ['GPIO 15', '15'],
        ['GPIO 16', '16'],
        ['GPIO 17', '17'],
        ['GPIO 18', '18'],
        ['GPIO 19', '19'],
        ['GPIO 21', '21'],
        ['GPIO 22', '22'],
        ['GPIO 23', '23'],
        ['GPIO 25', '25'],
        ['GPIO 26', '26'],
        ['GPIO 27', '27'],
        ['GPIO 32', '32'],
        ['GPIO 33', '33']
    ];

    // Digital control block (simple ON/OFF)
    Blockly.Blocks.dcMotor_digital = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DCMOTOR_DIGITAL,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'INA',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE_A',
                        options: [
                            ['HIGH', 'HIGH'],
                            ['LOW', 'LOW']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'INB',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE_B',
                        options: [
                            ['HIGH', 'HIGH'],
                            ['LOW', 'LOW']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // Analog/PWM control block (speed control) - simplified for ESP32 Core 3.x
    Blockly.Blocks.dcMotor_analog = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DCMOTOR_ANALOG,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'INA',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE_A',
                        options: [
                            ['HIGH', 'HIGH'],
                            ['LOW', 'LOW']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'INB',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // Fan block (simplified DC motor control for students)
    Blockly.Blocks.dcMotor_fan = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DCMOTOR_FAN,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'IN_NEG',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'IN_POS',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION',
                        options: [
                            ['forward', 'CCW'],
                            ['backward', 'CW']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
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
