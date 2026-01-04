/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#2196F3';
    const secondaryColour = '#1976D2';

    // Relay icon - simple switch/relay symbol
    const relayIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41Ij48cmVjdCB4PSI0IiB5PSI2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIi8+PGNpcmNsZSBjeD0iOCIgY3k9IjEyIiByPSIyIi8+PGxpbmUgeDE9IjEwIiB5MT0iMTIiIHgyPSIxNiIgeTI9IjEyIi8+PGxpbmUgeDE9IjE2IiB5MT0iOSIgeDI9IjE2IiB5Mj0iMTUiLz48L3N2Zz4=';

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

    Blockly.Blocks.relay_output = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.RELAY_OUTPUT,
                args0: [
                    {
                        type: 'field_image',
                        src: relayIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'Relay',
                        flip_rtl: false
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.RELAY_ON || 'ON', 'HIGH'],
                            [Blockly.Msg.RELAY_OFF || 'OFF', 'LOW']
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
