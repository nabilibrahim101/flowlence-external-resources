/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FF6B35';
    const secondaryColour = '#E55A2B';

    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    const onOff = [
        [Blockly.Msg.ACTIVEBUZZER_ON, 'HIGH'],
        [Blockly.Msg.ACTIVEBUZZER_OFF, 'LOW']
    ];

    Blockly.Blocks.activeBuzzer_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ACTIVEBUZZER_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.activeBuzzer_setState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ACTIVEBUZZER_SETSTATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: onOff
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.activeBuzzer_beep = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ACTIVEBUZZER_BEEP,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.activeBuzzer_beepTimes = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ACTIVEBUZZER_BEEPTIMES,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIMES'
                    },
                    {
                        type: 'input_value',
                        name: 'DURATION'
                    },
                    {
                        type: 'input_value',
                        name: 'INTERVAL'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
