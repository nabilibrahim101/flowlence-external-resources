/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#BBBB00';
    const secondaryColour = '#888800';

    // LCD display icon as base64 SVG - blue screen with text lines
    const lcdIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSIyIiB5PSI1IiB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHJ4PSIyIiBmaWxsPSIjMWE1Mjc2IiBzdHJva2U9IiMyOTgwYjkiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHJlY3QgeD0iNCIgeT0iNyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjYiIHJ4PSIxIiBmaWxsPSIjMzQ5OGRiIi8+PGxpbmUgeDE9IjUiIHkxPSI5IiB4Mj0iMTQiIHkyPSI5IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUiIHkxPSIxMSIgeDI9IjExIiB5Mj0iMTEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE2IiByPSIxIiBmaWxsPSIjMjk4MGI5Ii8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNiIgcj0iMSIgZmlsbD0iIzI5ODBiOSIvPjwvc3ZnPgo=';

    Blockly.Blocks.lcd_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: lcdIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'LCD',
                        flip_rtl: false
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ADDR',
                        options: [
                            ['0x20', '0x20'],
                            ['0x21', '0x21'],
                            ['0x22', '0x22'],
                            ['0x23', '0x23'],
                            ['0x24', '0x24'],
                            ['0x25', '0x25'],
                            ['0x26', '0x26'],
                            ['0x27', '0x27']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_setCursorPosition = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_SETCURSORPOSITION,
                args0: [
                    {
                        type: 'field_image',
                        src: lcdIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'LCD',
                        flip_rtl: false
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_PRINT,
                args0: [
                    {
                        type: 'field_image',
                        src: lcdIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'LCD',
                        flip_rtl: false
                    },
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

    Blockly.Blocks.lcd_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_CLEAR,
                args0: [
                    {
                        type: 'field_image',
                        src: lcdIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'LCD',
                        flip_rtl: false
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_setBackLight = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_SETBACKLIGHT,
                args0: [
                    {
                        type: 'field_image',
                        src: lcdIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'LCD',
                        flip_rtl: false
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.LCD_SATE_ON, 'on'],
                            [Blockly.Msg.LCD_SATE_OFF, 'off']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_setCursorStyle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_SETCURSORSTYLE,
                args0: [
                    {
                        type: 'field_image',
                        src: lcdIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'LCD',
                        flip_rtl: false
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.LCD_SATE_DISPLAY, 'display'],
                            [Blockly.Msg.LCD_SATE_HIDE, 'hide']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STYLE',
                        options: [
                            [Blockly.Msg.LCD_STYLE_BLINK, 'blink'],
                            [Blockly.Msg.LCD_STYLE_NOBLINK, 'onBlink']
                        ]
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
