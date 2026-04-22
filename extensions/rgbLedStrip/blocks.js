/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#7700FF';
    const secondaryColour = '#4400B3';
    const rgb6812IconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSIxIiB5PSI5IiB3aWR0aD0iMjIiIGhlaWdodD0iNiIgcng9IjEuNSIgZmlsbD0iIzMzMyIgc3Ryb2tlPSIjNTU1IiBzdHJva2Utd2lkdGg9IjAuNSIvPjxjaXJjbGUgY3g9IjQuNSIgY3k9IjEyIiByPSIyIiBmaWxsPSIjZTUzOTM1Ii8+PGNpcmNsZSBjeD0iOC41IiBjeT0iMTIiIHI9IjIiIGZpbGw9IiM0Q0FGNTAiLz48Y2lyY2xlIGN4PSIxMi41IiBjeT0iMTIiIHI9IjIiIGZpbGw9IiMyMTk2RjMiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iMTIiIHI9IjIiIGZpbGw9IiNGRkVFNTgiLz48Y2lyY2xlIGN4PSIyMC41IiBjeT0iMTIiIHI9IjIiIGZpbGw9IiNDRTkzRDgiLz48L3N2Zz4K';

    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    Blockly.Blocks.rgbLedStrip_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'LEN'
                    },
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

    Blockly.Blocks.rgbLedStrip_setPixelColor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_SETPIXELCOLOR,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'NO'
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_fill = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_FILL,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'FIRST'
                    },
                    {
                        type: 'input_value',
                        name: 'COUNT'
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_color = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_COLOR,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'input_value',
                        name: 'G'
                    },
                    {
                        type: 'input_value',
                        name: 'B'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_SETBRIGHTNESS,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
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

    Blockly.Blocks.rgbLedStrip_clear = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_CLEAR,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_show = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_SHOW,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
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
