/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FF6F00';
    const secondaryColour = '#E65100';

    // Common digital pins for Arduino and ESP32
    const digitalPins = [
        ['2', '2'],
        ['3', '3'],
        ['4', '4'],
        ['5', '5'],
        ['6', '6'],
        ['7', '7'],
        ['8', '8'],
        ['9', '9'],
        ['10', '10'],
        ['11', '11'],
        ['12', '12'],
        ['13', '13'],
        ['14', '14'],
        ['15', '15'],
        ['16', '16'],
        ['17', '17'],
        ['18', '18'],
        ['19', '19'],
        ['21', '21'],
        ['22', '22'],
        ['23', '23'],
        ['25', '25'],
        ['26', '26'],
        ['27', '27']
    ];

    Blockly.Blocks.servoArduino_setAngle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SERVOARDUINO_SETANGLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'ANGLE'
                    },
                    {
                        type: 'input_value',
                        name: 'DURATION'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.servoArduino_readAngle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SERVOARDUINO_READANGLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
