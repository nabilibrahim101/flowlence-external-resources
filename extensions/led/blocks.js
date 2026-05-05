/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#27AE60';
    const secondaryColour = '#1E8449';

    // LED icon as base64 SVG — yellow LED dome with star-burst rays, blue base, two leads.
    // Matches the visual language of the kit's actual LED module.
    const ledIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48bGluZSB4MT0iMTIiIHkxPSIwIiB4Mj0iMTIiIHkyPSIxLjUiIHN0cm9rZT0iI0ZGRDYwMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyLjUiIHkxPSI2IiB4Mj0iNC41IiB5Mj0iNiIgc3Ryb2tlPSIjRkZENjAwIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIxLjUiIHkxPSI2IiB4Mj0iMTkuNSIgeTI9IjYiIHN0cm9rZT0iI0ZGRDYwMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0IiB5MT0iMS44IiB4Mj0iNS4zIiB5Mj0iMy4xIiBzdHJva2U9IiNGRkQ2MDAiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjAiIHkxPSIxLjgiIHgyPSIxOC43IiB5Mj0iMy4xIiBzdHJva2U9IiNGRkQ2MDAiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNNy41IDE0LjUgTDcuNSA4IFE3LjUgMi41IDEyIDIuNSBRMTYuNSAyLjUgMTYuNSA4IEwxNi41IDE0LjUgWiIgZmlsbD0iI0ZGRDYwMCIvPjxwYXRoIGQ9Ik05LjUgNS41IFE4LjcgNyA4LjcgOSBROC43IDEwLjUgOS4yIDEyIiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9IjAuOTUiLz48cGF0aCBkPSJNMTAuNSAxMiBMMTAuNSA5LjUgTDEzLjUgOS41IEwxMy41IDEyIFogTTEwLjUgOS41IEwxMiA3LjUgTDEzLjUgOS41IFoiIGZpbGw9IiNGNDUxMUUiLz48cmVjdCB4PSI2IiB5PSIxNC41IiB3aWR0aD0iMTIiIGhlaWdodD0iMi43IiBmaWxsPSIjMjE5NkYzIiByeD0iMC40Ii8+PGxpbmUgeDE9IjcuNSIgeTE9IjE1LjUiIHgyPSIxMC41IiB5Mj0iMTUuNSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBvcGFjaXR5PSIwLjciLz48bGluZSB4MT0iMTAiIHkxPSIxNy4yIiB4Mj0iMTAiIHkyPSIyMS41IiBzdHJva2U9IiNCREJEQkQiIHN0cm9rZS13aWR0aD0iMS4xIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTQiIHkxPSIxNy4yIiB4Mj0iMTQiIHkyPSIyMS41IiBzdHJva2U9IiNCREJEQkQiIHN0cm9rZS13aWR0aD0iMS4xIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=';

    // Vertical line separator placed between the icon and the rest of the block,
    // matching the pattern used by DHT, Active Buzzer, and other Flowlence extensions.
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

    Blockly.Blocks.led_set = {
        init: function () {
            this.jsonInit({
                message0: '%1%2 set LED on pin %3 to %4',
                args0: [
                    {
                        type: 'field_image',
                        src: ledIconUrl,
                        width: 36,
                        height: 36,
                        alt: 'LED',
                        flip_rtl: false
                    },
                    {
                        type: 'field_image',
                        src: separatorUrl,
                        width: 4,
                        height: 40,
                        alt: '|',
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
