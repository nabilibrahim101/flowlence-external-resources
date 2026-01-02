/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#42CCFF';
    const secondaryColour = '#00BFFF';

    Blockly.Blocks.rfidRC522_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.RFIDRC522_INIT || 'initialize RFID RC522 (I2C)',
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rfidRC522_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.RFIDRC522_READ || 'read RFID card value',
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
