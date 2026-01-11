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
                        name: 'axis',
                        options: [
                            [Blockly.Msg.ADXL345_X_AXIS || 'X-Accel', 'X'],
                            [Blockly.Msg.ADXL345_Y_AXIS || 'Y-Accel', 'Y'],
                            [Blockly.Msg.ADXL345_Z_AXIS || 'Z-Accel', 'Z']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            [Blockly.Msg.ADXL345_UNIT_G || 'g-force', 'g'],
                            [Blockly.Msg.ADXL345_UNIT_RAW || 'raw', 'raw']
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
