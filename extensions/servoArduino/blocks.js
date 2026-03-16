/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FF6F00';
    const secondaryColour = '#E65100';

    // Servo motor icon as base64 SVG
    const servoIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSI0IiB5PSIxMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEwIiByeD0iMS41IiBmaWxsPSIjRkY2RjAwIiBzdHJva2U9IiNFNjUxMDAiIHN0cm9rZS13aWR0aD0iMSIvPjxyZWN0IHg9IjIiIHk9IjE2IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIiByeD0iMC41IiBmaWxsPSIjRkY4RjAwIi8+PHJlY3QgeD0iMTgiIHk9IjE2IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIiByeD0iMC41IiBmaWxsPSIjRkY4RjAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMyIgZmlsbD0iI0ZGQjMwMCIgc3Ryb2tlPSIjRTY1MTAwIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMTIiIHkxPSIxMCIgeDI9IjE4IiB5Mj0iNSIgc3Ryb2tlPSIjRTY1MTAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjEiIGZpbGw9IiNFNjUxMDAiLz48L3N2Zz4K';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: servoIconUrl,
            width: 36,
            height: 36,
            alt: 'Servo',
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
                    ...iconArgs,
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
                    ...iconArgs,
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
