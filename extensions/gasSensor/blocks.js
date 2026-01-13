/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#607D8B';
    const secondaryColour = '#455A64';

    // Get all available pins from device
    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    // Read gas sensor value
    Blockly.Blocks.gasSensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.GASSENSOR_READ || 'gas sensor %1 %2 value',
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
