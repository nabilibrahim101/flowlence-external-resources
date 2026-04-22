/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FF7F50';
    const secondaryColour = '#FF6347';

    // 4-digit clock display icon as base64 SVG
    const fourDigitIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSIxIiB5PSI0IiB3aWR0aD0iMjIiIGhlaWdodD0iMTYiIHJ4PSIyIiBmaWxsPSIjMWExYTFhIiBzdHJva2U9IiM0NDQiIHN0cm9rZS13aWR0aD0iMC42Ii8+PHJlY3QgeD0iMyIgeT0iNiIgd2lkdGg9IjMiIGhlaWdodD0iMC44IiByeD0iMC4yIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMyIgeT0iMTAiIHdpZHRoPSIzIiBoZWlnaHQ9IjAuOCIgcng9IjAuMiIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjMiIHk9IjE0IiB3aWR0aD0iMyIgaGVpZ2h0PSIwLjgiIHJ4PSIwLjIiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIyLjUiIHk9IjYuNSIgd2lkdGg9IjAuOCIgaGVpZ2h0PSIzLjUiIHJ4PSIwLjIiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSI1LjUiIHk9IjYuNSIgd2lkdGg9IjAuOCIgaGVpZ2h0PSIzLjUiIHJ4PSIwLjIiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIyLjUiIHk9IjEwLjUiIHdpZHRoPSIwLjgiIGhlaWdodD0iMy41IiByeD0iMC4yIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iNS41IiB5PSIxMC41IiB3aWR0aD0iMC44IiBoZWlnaHQ9IjMuNSIgcng9IjAuMiIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjgiIHk9IjYiIHdpZHRoPSIzIiBoZWlnaHQ9IjAuOCIgcng9IjAuMiIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjgiIHk9IjE0IiB3aWR0aD0iMyIgaGVpZ2h0PSIwLjgiIHJ4PSIwLjIiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxMC41IiB5PSI2LjUiIHdpZHRoPSIwLjgiIGhlaWdodD0iMy41IiByeD0iMC4yIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iNy41IiB5PSIxMC41IiB3aWR0aD0iMC44IiBoZWlnaHQ9IjMuNSIgcng9IjAuMiIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iOC41IiByPSIwLjYiIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyLjUiIHI9IjAuNiIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjEzIiB5PSI2IiB3aWR0aD0iMyIgaGVpZ2h0PSIwLjgiIHJ4PSIwLjIiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxMyIgeT0iMTAiIHdpZHRoPSIzIiBoZWlnaHQ9IjAuOCIgcng9IjAuMiIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjEzIiB5PSIxNCIgd2lkdGg9IjMiIGhlaWdodD0iMC44IiByeD0iMC4yIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMTUuNSIgeT0iNi41IiB3aWR0aD0iMC44IiBoZWlnaHQ9IjMuNSIgcng9IjAuMiIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjE1LjUiIHk9IjEwLjUiIHdpZHRoPSIwLjgiIGhlaWdodD0iMy41IiByeD0iMC4yIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMTgiIHk9IjYiIHdpZHRoPSIzIiBoZWlnaHQ9IjAuOCIgcng9IjAuMiIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjE4IiB5PSIxMCIgd2lkdGg9IjMiIGhlaWdodD0iMC44IiByeD0iMC4yIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMTgiIHk9IjE0IiB3aWR0aD0iMyIgaGVpZ2h0PSIwLjgiIHJ4PSIwLjIiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxNy41IiB5PSI2LjUiIHdpZHRoPSIwLjgiIGhlaWdodD0iMy41IiByeD0iMC4yIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMjAuNSIgeT0iNi41IiB3aWR0aD0iMC44IiBoZWlnaHQ9IjMuNSIgcng9IjAuMiIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjIwLjUiIHk9IjEwLjUiIHdpZHRoPSIwLjgiIGhlaWdodD0iMy41IiByeD0iMC4yIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMyIgeT0iMTYiIHdpZHRoPSI0IiBoZWlnaHQ9IjIiIHJ4PSIwLjUiIGZpbGw9IiNGREQ4MzUiLz48cmVjdCB4PSIxNyIgeT0iMTYiIHdpZHRoPSI0IiBoZWlnaHQ9IjIiIHJ4PSIwLjUiIGZpbGw9IiNGREQ4MzUiLz48L3N2Zz4K';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: fourDigitIconUrl,
            width: 36,
            height: 36,
            alt: '4-Digit',
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

    Blockly.Blocks.fourDigitClockDisplay_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_INIT,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.fourDigitClockDisplay_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_SETBRIGHTNESS,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'BRT'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.fourDigitClockDisplay_brightnessNumber = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_slider',
                        name: 'NUM',
                        value: '0',
                        precision: 1,
                        min: '0',
                        max: '7'
                    }
                ],
                output: 'Number',
                outputShape: Blockly.OUTPUT_SHAPE_ROUND,
                colour: Blockly.Colours.textField,
                colourSecondary: Blockly.Colours.textField,
                colourTertiary: Blockly.Colours.textField
            });
        }
    };

    Blockly.Blocks.fourDigitClockDisplay_displayNumber = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_DISPLAYNUMBER,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'DATA'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.fourDigitClockDisplay_displayString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_DISPLAYSTRING,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'DATA'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.fourDigitClockDisplay_display = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_DISPLAY,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            ['1', '0'],
                            ['2', '1'],
                            ['3', '2'],
                            ['4', '3']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.fourDigitClockDisplay_setPoint = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_SETPOINT,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.FOURDIGITCLOCKDISPLAY_STATE_ON, 'true'],
                            [Blockly.Msg.FOURDIGITCLOCKDISPLAY_STATE_OFF, 'false']
                        ]
                    }
                ],
                tooltip: Blockly.Msg.FOURDIGITCLOCKDISPLAY_SETPOINT_TOOLTIP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.fourDigitClockDisplay_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FOURDIGITCLOCKDISPLAY_CLEAR,
                args0: [
                    ...iconArgs
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
