/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FF6F00';
    const secondaryColour = '#E65100';

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
                            ['forward', 'CW'],
                            ['backward', 'CCW']
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
