/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#42CCFF';
    const secondaryColour = '#2BA3D9';

    Blockly.Blocks.adxl345_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ADXL345_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['X-Accel', 'accel.getAccelerationX()'],
                            ['Y-Accel', 'accel.getAccelerationY()'],
                            ['Z-Accel', 'accel.getAccelerationZ()']
                        ]
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
