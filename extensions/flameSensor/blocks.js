/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FF5722';
    const secondaryColour = '#E64A19';

    // Flame sensor icon as base64 SVG
    const flameSensorIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTAgMkMxMCAyIDUgOCA1IDEzYTUgNSAwIDAgMCAxMCAwQzE1IDggMTAgMiAxMCAyeiIgZmlsbD0iI0ZGOTgwMCIvPjxwYXRoIGQ9Ik0xMCA2QzEwIDYgNyAxMCA3IDEzYTMgMyAwIDAgMCA2IDBDMTMgMTAgMTAgNiAxMCA2eiIgZmlsbD0iI0ZGRUIzQiIvPjxwYXRoIGQ9Ik0xMCAxMEMxMCAxMCA4LjUgMTIgOC41IDEzLjVhMS41IDEuNSAwIDAgMCAzIDBDMTEuNSAxMiAxMCAxMCAxMCAxMHoiIGZpbGw9IiNGRkY5QzQiLz48cmVjdCB4PSIxNyIgeT0iOSIgd2lkdGg9IjUiIGhlaWdodD0iOSIgcng9IjEiIGZpbGw9IiMzMzMiLz48Y2lyY2xlIGN4PSIxOS41IiBjeT0iMTIiIHI9IjIiIGZpbGw9IiMxNTY1QzAiLz48Y2lyY2xlIGN4PSIxOS41IiBjeT0iMTIiIHI9IjAuOCIgZmlsbD0iI2U1MzkzNSIvPjxyZWN0IHg9IjE4IiB5PSIxNiIgd2lkdGg9IjMiIGhlaWdodD0iMS41IiByeD0iMC4zIiBmaWxsPSIjRkREODM1Ii8+PC9zdmc+Cg==';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Get all available pins from device
    const analogPins = Blockly.Device.getPinOptions('arduino_pin_readAnalogPin');
    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: flameSensorIconUrl,
            width: 36,
            height: 36,
            alt: 'Flame',
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

    // Read flame sensor value
    Blockly.Blocks.flameSensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FLAMESENSOR_READ || '%1 %2 flame sensor %3 %4 value',
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            ['Analog', 'ANALOG'],
                            ['Digital', 'DIGITAL']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
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
