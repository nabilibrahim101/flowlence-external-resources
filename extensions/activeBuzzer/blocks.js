/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FF6B35';
    const secondaryColour = '#E55A2B';

    // Active Buzzer icon
    const activeBuzzerIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTIgM0M4LjUgMyA2IDYgNiA5djVsLTIgMnYxaDE2di0xbC0yLTJWOWMwLTMtMi41LTYtNi02eiIgZmlsbD0iI0ZGQTcyNiIgc3Ryb2tlPSIjRTY1MTAwIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjIwIiByPSIyIiBmaWxsPSIjRTY1MTAwIi8+PHBhdGggZD0iTTE4IDhhMS41IDEuNSAwIDAgMCAyLjUgMCIgc3Ryb2tlPSIjZTUzOTM1IiBzdHJva2Utd2lkdGg9IjEuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTE5LjUgNmExLjUgMS41IDAgMCAwIDIuNSAwIiBzdHJva2U9IiNlNTM5MzUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+Cg==';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: activeBuzzerIconUrl,
            width: 36,
            height: 36,
            alt: 'Active Buzzer',
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

    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    const onOff = [
        [Blockly.Msg.ACTIVEBUZZER_ON, 'HIGH'],
        [Blockly.Msg.ACTIVEBUZZER_OFF, 'LOW']
    ];

    Blockly.Blocks.activeBuzzer_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ACTIVEBUZZER_INIT,
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
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.activeBuzzer_setState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ACTIVEBUZZER_SETSTATE,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: onOff
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.activeBuzzer_beep = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ACTIVEBUZZER_BEEP,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.activeBuzzer_beepTimes = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ACTIVEBUZZER_BEEPTIMES,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'TIMES'
                    },
                    {
                        type: 'input_value',
                        name: 'DURATION'
                    },
                    {
                        type: 'input_value',
                        name: 'INTERVAL'
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
