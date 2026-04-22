/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#42CCFF';
    const secondaryColour = '#33BBEE';

    // LCD 128x32 icon
    const lcd128x32IconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSIyIiB5PSI1IiB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHJ4PSIyIiBmaWxsPSIjMTU2NUMwIi8+PHJlY3QgeD0iNCIgeT0iNyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEwIiByeD0iMSIgZmlsbD0iI0UzRjJGRCIvPjx0ZXh0IHg9IjUuNSIgeT0iMTMiIGZpbGw9IiMxNTY1QzAiIGZvbnQtc2l6ZT0iNC41IiBmb250LWZhbWlseT0ibW9ub3NwYWNlIj4xMjh4MzI8L3RleHQ+PGNpcmNsZSBjeD0iMjAiIGN5PSI2LjUiIHI9IjAuOCIgZmlsbD0iI0ZERDgzNSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMTcuNSIgcj0iMC44IiBmaWxsPSIjNENBRjUwIi8+PC9zdmc+Cg==';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: lcd128x32IconUrl,
            width: 36,
            height: 36,
            alt: 'LCD 128x32',
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

    Blockly.Blocks.lcd128x32_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD128X32_INIT,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd128x32_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD128X32_CLEAR,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd128x32_setCursor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD128X32_SETCURSOR,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'ROW',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COL',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
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
                            ['17', '17']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd128x32_printString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD128X32_PRINTSTRING,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd128x32_printNumber = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD128X32_PRINTNUMBER,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'NUMBER'
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
