/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#42CCFF';
    const secondaryColour = '#00BFFF';

    // RFID icon - card with radio waves (white outline)
    const rfidIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41Ij48cmVjdCB4PSIyIiB5PSI2IiB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHJ4PSIyIi8+PHBhdGggZD0iTTIwIDlhNCA0IDAgMCAxIDAgNiIvPjxwYXRoIGQ9Ik0xOCAxMGEyIDIgMCAwIDEgMCA0Ii8+PC9zdmc+';

    // Initialize RFID RC522
    Blockly.Blocks.rfidRC522_init = {
        init: function () {
            this.jsonInit({
                message0: '%1 initialize RFID RC522 (I2C)',
                args0: [
                    {
                        type: 'field_image',
                        src: rfidIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'RFID',
                        flip_rtl: false
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // Read RFID card
    Blockly.Blocks.rfidRC522_read = {
        init: function () {
            this.jsonInit({
                message0: '%1 read RFID card value',
                args0: [
                    {
                        type: 'field_image',
                        src: rfidIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'RFID',
                        flip_rtl: false
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
