/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#D39DDB';
    const secondaryColour = '#BA55D3';

    // Touch Switch icon as base64 SVG
    const touchIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI5IiBmaWxsPSIjRTFCRUU3IiBzdHJva2U9IiM5QzI3QjAiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHBhdGggZD0iTTcgMTYgUTcgNyAxMiA2IFExNyA3IDE3IDEzIiBzdHJva2U9IiM2QTFCOUEiIHN0cm9rZS13aWR0aD0iMS4zIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNOC41IDE1IFE4LjUgOC41IDEyIDcuNSBRMTUuNSA4LjUgMTUuNSAxMi41IiBzdHJva2U9IiM3QjFGQTIiIHN0cm9rZS13aWR0aD0iMS4xIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTAgMTQuNSBRMTAgMTAgMTIgOSBRMTQgMTAgMTQgMTIuNSIgc3Ryb2tlPSIjOUMyN0IwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMSAxNCBRMTEgMTEuNSAxMiAxMSBRMTMgMTEuNSAxMyAxMyIgc3Ryb2tlPSIjQUI0N0JDIiBzdHJva2Utd2lkdGg9IjAuOCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxNSIgcj0iMC43IiBmaWxsPSIjNkExQjlBIi8+PC9zdmc+Cg==';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: touchIconUrl,
            width: 36,
            height: 36,
            alt: 'Touch',
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

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.touchSwitch_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TOUCHSWITCH_READ_VALUE,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.touchSwitch_state = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TOUCHSWITCH_STATE,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'pin',
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
