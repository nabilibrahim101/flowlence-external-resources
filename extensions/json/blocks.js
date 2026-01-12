/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#5CB85C';
    const secondaryColour = '#4A9A4A';

    // JSON with 1 field
    Blockly.Blocks.json_create_1 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JSON_CREATE_1,
                args0: [
                    {
                        type: 'input_value',
                        name: 'KEY1'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE1'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    // JSON with 2 fields
    Blockly.Blocks.json_create_2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JSON_CREATE_2,
                args0: [
                    {
                        type: 'input_value',
                        name: 'KEY1'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE1'
                    },
                    {
                        type: 'input_value',
                        name: 'KEY2'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE2'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    // JSON with 3 fields
    Blockly.Blocks.json_create_3 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JSON_CREATE_3,
                args0: [
                    {
                        type: 'input_value',
                        name: 'KEY1'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE1'
                    },
                    {
                        type: 'input_value',
                        name: 'KEY2'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE2'
                    },
                    {
                        type: 'input_value',
                        name: 'KEY3'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE3'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    // JSON with 5 fields
    Blockly.Blocks.json_create_5 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JSON_CREATE_5,
                args0: [
                    {
                        type: 'input_value',
                        name: 'KEY1'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE1'
                    },
                    {
                        type: 'input_value',
                        name: 'KEY2'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE2'
                    },
                    {
                        type: 'input_value',
                        name: 'KEY3'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE3'
                    },
                    {
                        type: 'input_value',
                        name: 'KEY4'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE4'
                    },
                    {
                        type: 'input_value',
                        name: 'KEY5'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE5'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
