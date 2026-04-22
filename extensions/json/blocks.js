/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#5CB85C';
    const secondaryColour = '#4A9A4A';

    // JSON icon as base64 SVG
    const jsonIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSI0IiB5PSIyIiB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjRThGNUU5IiBzdHJva2U9IiM0Q0FGNTAiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0xNCAydjRoNCIgZmlsbD0iI0M4RTZDOSIgc3Ryb2tlPSIjNENBRjUwIiBzdHJva2Utd2lkdGg9IjAuOCIvPjxyZWN0IHg9IjciIHk9IjkiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxLjUiIHJ4PSIwLjUiIGZpbGw9IiM0Q0FGNTAiLz48cmVjdCB4PSI3IiB5PSIxMiIgd2lkdGg9IjciIGhlaWdodD0iMS41IiByeD0iMC41IiBmaWxsPSIjNENBRjUwIiBvcGFjaXR5PSIwLjciLz48cmVjdCB4PSI3IiB5PSIxNSIgd2lkdGg9IjkiIGhlaWdodD0iMS41IiByeD0iMC41IiBmaWxsPSIjNENBRjUwIiBvcGFjaXR5PSIwLjUiLz48dGV4dCB4PSI1LjUiIHk9IjgiIGZpbGw9IiMyRTdEMzIiIGZvbnQtc2l6ZT0iNSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC13ZWlnaHQ9ImJvbGQiPnsgfTwvdGV4dD48L3N2Zz4K';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: jsonIconUrl,
            width: 36,
            height: 36,
            alt: 'JSON',
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

    // JSON with 1 field
    Blockly.Blocks.json_create_1 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JSON_CREATE_1,
                args0: [
                    ...iconArgs,
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
                    ...iconArgs,
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
                    ...iconArgs,
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
                    ...iconArgs,
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
