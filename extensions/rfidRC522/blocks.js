/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#42CCFF';
    const secondaryColour = '#00BFFF';

    Blockly.Blocks.rfidRC522_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.RFIDRC522_INIT,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rfidRC522_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.RFIDRC522_READ,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.rfidRC522_isNewCard = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.RFIDRC522_IS_NEW_CARD,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
