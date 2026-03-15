/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#42CCFF';
    const secondaryColour = '#33BBEE';

    Blockly.Blocks.lcd128x32_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD128X32_INIT,
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
