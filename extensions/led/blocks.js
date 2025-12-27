/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#27AE60';
    const secondaryColour = '#1E8449';

    // LED icon as base64 SVG - white outline with light rays (like emergency light)
    const ledIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxlbGxpcHNlIGN4PSIxMiIgY3k9IjEyIiByeD0iNSIgcnk9IjYiLz48bGluZSB4MT0iOSIgeTE9IjE3IiB4Mj0iOSIgeTI9IjIwIi8+PGxpbmUgeDE9IjE1IiB5MT0iMTciIHgyPSIxNSIgeTI9IjIwIi8+PGxpbmUgeDE9IjEyIiB5MT0iMiIgeDI9IjEyIiB5Mj0iNCIvPjxsaW5lIHgxPSI0IiB5MT0iMTAiIHgyPSIyIiB5Mj0iMTAiLz48bGluZSB4MT0iMjIiIHkxPSIxMCIgeDI9IjIwIiB5Mj0iMTAiLz48bGluZSB4MT0iNS41IiB5MT0iNSIgeDI9IjQiIHkyPSIzLjUiLz48bGluZSB4MT0iMTguNSIgeTE9IjUiIHgyPSIyMCIgeTI9IjMuNSIvPjwvc3ZnPg==';

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
                message0: '%1 set LED on pin %2 to %3',
                args0: [
                    {
                        type: 'field_image',
                        src: ledIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'LED',
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
