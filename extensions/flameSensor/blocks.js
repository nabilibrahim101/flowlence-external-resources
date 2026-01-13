/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FF5722';
    const secondaryColour = '#E64A19';

    // Get all available pins from device
    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    // Read flame sensor value
    Blockly.Blocks.flameSensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FLAMESENSOR_READ || 'flame sensor %1 %2 value',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            ['Analog', 'ANALOG'],
                            ['Digital', 'DIGITAL']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
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
