/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#E74C3C';
    const secondaryColour = '#C0392B';

    // Traffic light icon - dark body with red, amber, green colored circles (padded from top)
    const trafficLightIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSI2IiB5PSIyLjUiIHdpZHRoPSIxMiIgaGVpZ2h0PSIyMCIgcng9IjMiIGZpbGw9IiMzMzMiIHN0cm9rZT0iIzU1NSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjYuNSIgcj0iMi41IiBmaWxsPSIjZTUzOTM1Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMi41IiByPSIyLjUiIGZpbGw9IiNGRkE3MjYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjE4LjUiIHI9IjIuNSIgZmlsbD0iIzRDQUY1MCIvPjwvc3ZnPgo=';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

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

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: trafficLightIconUrl,
            width: 36,
            height: 36,
            alt: 'Traffic Light',
            flip_rtl: false
        },
        {
            type: 'field_image',
            src: separatorUrl,
            width: 4,
            height: 40,
            alt: '|',
            flip_rtl: false
        }
    ];

    // Initialize traffic light with 3 pins
    Blockly.Blocks.trafficLight_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TRAFFICLIGHT_INIT,
                args0: [
                    ...iconArgs,
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
                message0: Blockly.Msg.TRAFFICLIGHT_SET,
                args0: [
                    ...iconArgs,
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

    // Set all 3 lights at once
    Blockly.Blocks.trafficLight_setAll = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TRAFFICLIGHT_SET_ALL,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'RED_STATE',
                        options: [
                            [Blockly.Msg.TRAFFICLIGHT_ON || 'ON', 'HIGH'],
                            [Blockly.Msg.TRAFFICLIGHT_OFF || 'OFF', 'LOW']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ORANGE_STATE',
                        options: [
                            [Blockly.Msg.TRAFFICLIGHT_ON || 'ON', 'HIGH'],
                            [Blockly.Msg.TRAFFICLIGHT_OFF || 'OFF', 'LOW']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'GREEN_STATE',
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
