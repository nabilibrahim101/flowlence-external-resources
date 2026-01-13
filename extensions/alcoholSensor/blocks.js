/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#9C27B0';
    const secondaryColour = '#7B1FA2';

    // Get all available pins from device
    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    // Read alcohol sensor value
    Blockly.Blocks.alcoholSensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ALCOHOLSENSOR_READ || 'alcohol sensor %1 %2 value',
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
