/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#607D8B';
    const secondaryColour = '#455A64';

    // Gas sensor icon as base64 SVG
    const gasSensorIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNNCAxNiBRNCAxMSA4IDExIFE5IDcgMTMgNyBRMTcgNyAxOCAxMSBRMjIgMTEgMjIgMTYgUTIyIDIwIDE4IDIwIEg4IFE0IDIwIDQgMTZ6IiBmaWxsPSIjRkZFMEIyIiBzdHJva2U9IiNGRjk4MDAiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHBhdGggZD0iTTcgMTUgUTkgMTIgMTEgMTQgUTEyLjUgMTAgMTUgMTIgUTE3IDEwIDE5IDE0IiBmaWxsPSJub25lIiBzdHJva2U9IiNlNTM5MzUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTIgMyBMMTEuNSA3IiBzdHJva2U9IiNlNTM5MzUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjEuNSAxLjUiLz48cGF0aCBkPSJNOCA0IEw4LjUgNyIgc3Ryb2tlPSIjRkY1NzIyIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSIxLjUgMS41Ii8+PHBhdGggZD0iTTE2IDQgTDE1LjUgNyIgc3Ryb2tlPSIjRkY1NzIyIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSIxLjUgMS41Ii8+PC9zdmc+Cg==';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Get all available pins from device
    const analogPins = Blockly.Device.getPinOptions('arduino_pin_readAnalogPin');
    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: gasSensorIconUrl,
            width: 36,
            height: 36,
            alt: 'Gas',
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

    // Read gas sensor value
    Blockly.Blocks.gasSensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.GASSENSOR_READ || '%1 %2 gas sensor %3 %4 value',
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
