/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#27AE60';
    const secondaryColour = '#1E8449';

    // ESP32 digital pins
    const digitalPins = [
        ['GPIO 2', '2'],
        ['GPIO 4', '4'],
        ['GPIO 5', '5'],
        ['GPIO 12', '12'],
        ['GPIO 13', '13'],
        ['GPIO 14', '14'],
        ['GPIO 15', '15'],
        ['GPIO 16', '16'],
        ['GPIO 17', '17'],
        ['GPIO 18', '18'],
        ['GPIO 19', '19'],
        ['GPIO 21', '21'],
        ['GPIO 22', '22'],
        ['GPIO 23', '23'],
        ['GPIO 25', '25'],
        ['GPIO 26', '26'],
        ['GPIO 27', '27'],
        ['GPIO 32', '32'],
        ['GPIO 33', '33']
    ];

    Blockly.Blocks.led_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LED_SET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.LED_STATE_ON || 'ON', 'HIGH'],
                            [Blockly.Msg.LED_STATE_OFF || 'OFF', 'LOW']
                        ]
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
