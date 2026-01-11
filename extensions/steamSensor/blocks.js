// eslint-disable-next-line func-style
function registerBlocks (Blockly) {
    const colour = '#4A90E2';
    const secondaryColour = '#357ABD';

    const analogPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_readAnalogPin')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.steamSensor_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.STEAMSENSOR_READ_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: analogPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
