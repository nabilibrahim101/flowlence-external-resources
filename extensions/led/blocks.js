/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#27AE60';
    const secondaryColour = '#1E8449';

    // LED icon as base64 SVG — yellow LED with two-layer glow halo (Option B from icon-preview.html)
    const ledIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI5IiBmaWxsPSIjRkZFRTU4IiBvcGFjaXR5PSIwLjI1Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNi41IiBmaWxsPSIjRkZFRTU4IiBvcGFjaXR5PSIwLjUiLz48ZWxsaXBzZSBjeD0iMTIiIGN5PSIxMS41IiByeD0iNCIgcnk9IjUiIGZpbGw9IiNGRkQ2MDAiIHN0cm9rZT0iI0Y1N0YxNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PGVsbGlwc2UgY3g9IjEwLjgiIGN5PSIxMCIgcng9IjEuNCIgcnk9IjIiIGZpbGw9IiNGRkY1OUQiLz48cmVjdCB4PSI5LjUiIHk9IjE2IiB3aWR0aD0iNSIgaGVpZ2h0PSIyLjUiIGZpbGw9IiM3NTc1NzUiIHJ4PSIwLjUiLz48bGluZSB4MT0iMTAuNSIgeTE9IjE4LjUiIHgyPSIxMC41IiB5Mj0iMjEuNSIgc3Ryb2tlPSIjNjE2MTYxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEzLjUiIHkxPSIxOC41IiB4Mj0iMTMuNSIgeTI9IjIxLjUiIHN0cm9rZT0iIzYxNjE2MSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==';

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
