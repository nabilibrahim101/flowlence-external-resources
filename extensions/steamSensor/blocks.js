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
                message0: '%1',
                message1: Blockly.Msg.STEAMSENSOR_READ_VALUE,
                args0: [
                    {
                        type: 'field_image',
                        src: `${Blockly.mainWorkspace.options.pathToMedia}extensions/steamSensor/assets/steamSensor.png`,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: analogPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number', 'shape_statement']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
