/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#E74C3C';
    const secondaryColour = '#C0392B';

    // Traffic light icon - white outline style (3 circles in rectangle)
    const trafficLightIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxyZWN0IHg9IjciIHk9IjIiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgcng9IjIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjYiIHI9IjIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxOCIgcj0iMiIvPjwvc3ZnPg==';

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

    // Initialize traffic light with 3 pins
    Blockly.Blocks.trafficLight_init = {
        init: function () {
            this.jsonInit({
                message0: '%1 init traffic light red %2 orange %3 green %4',
                args0: [
                    {
                        type: 'field_image',
                        src: trafficLightIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'Traffic Light',
                        flip_rtl: false
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RED_PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ORANGE_PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'GREEN_PIN',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // Control traffic light by color
    Blockly.Blocks.trafficLight_set = {
        init: function () {
            this.jsonInit({
                message0: '%1 set %2 light to %3',
                args0: [
                    {
                        type: 'field_image',
                        src: trafficLightIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'Traffic Light',
                        flip_rtl: false
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            [Blockly.Msg.TRAFFICLIGHT_RED || 'red', 'RED'],
                            [Blockly.Msg.TRAFFICLIGHT_ORANGE || 'orange', 'ORANGE'],
                            [Blockly.Msg.TRAFFICLIGHT_GREEN || 'green', 'GREEN']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.TRAFFICLIGHT_ON || 'ON', 'HIGH'],
                            [Blockly.Msg.TRAFFICLIGHT_OFF || 'OFF', 'LOW']
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
