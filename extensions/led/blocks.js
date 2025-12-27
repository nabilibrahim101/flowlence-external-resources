/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#27AE60';
    const secondaryColour = '#1E8449';

    // LED icon as base64 SVG
    const ledIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48ZWxsaXBzZSBjeD0iMTIiIGN5PSI5IiByeD0iNyIgcnk9IjgiIGZpbGw9IiMyRUNDNzEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PGVsbGlwc2UgY3g9IjEyIiBjeT0iOCIgcng9IjQiIHJ5PSI1IiBmaWxsPSIjNThENjhEIiBvcGFjaXR5PSIwLjciLz48ZWxsaXBzZSBjeD0iMTAiIGN5PSI2IiByeD0iMiIgcnk9IjIuNSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC41Ii8+PHJlY3QgeD0iOCIgeT0iMTYiIHdpZHRoPSI4IiBoZWlnaHQ9IjMiIGZpbGw9IiM5NUE1QTYiIHJ4PSIxIi8+PHJlY3QgeD0iMTAiIHk9IjE5IiB3aWR0aD0iMS41IiBoZWlnaHQ9IjQiIGZpbGw9IiM3RjhDOEQiLz48cmVjdCB4PSIxMi41IiB5PSIxOSIgd2lkdGg9IjEuNSIgaGVpZ2h0PSI0IiBmaWxsPSIjN0Y4QzhEIi8+PC9zdmc+';

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
