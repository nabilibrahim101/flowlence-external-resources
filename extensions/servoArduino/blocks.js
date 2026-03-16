/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FF6F00';
    const secondaryColour = '#E65100';

    // Servo motor icon as base64 SVG - white body with dark accents for contrast on orange block
    const servoIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSI0IiB5PSIxMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEwIiByeD0iMS41IiBmaWxsPSIjZmZmIiBzdHJva2U9IiM1ZDQwMzciIHN0cm9rZS13aWR0aD0iMSIvPjxyZWN0IHg9IjIiIHk9IjE2IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIiByeD0iMC41IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjgiLz48cmVjdCB4PSIxOCIgeT0iMTYiIHdpZHRoPSI0IiBoZWlnaHQ9IjIiIHJ4PSIwLjUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuOCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiIGZpbGw9IiNGRkQ1NEYiIHN0cm9rZT0iIzVkNDAzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjEyIiB5MT0iMTAiIHgyPSIxOCIgeTI9IjUiIHN0cm9rZT0iIzVkNDAzNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIxIiBmaWxsPSIjNWQ0MDM3Ii8+PC9zdmc+Cg==';

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
