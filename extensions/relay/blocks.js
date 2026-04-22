/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#2196F3';
    const secondaryColour = '#1976D2';

    // Relay icon
    const relayIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSIzIiB5PSI2IiB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjMTU2NUMwIiBzdHJva2U9IiMwRDQ3QTEiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjgiIGN5PSIxNSIgcj0iMiIgZmlsbD0iI0ZERDgzNSIgc3Ryb2tlPSIjRjlBODI1IiBzdHJva2Utd2lkdGg9IjAuOCIvPjxsaW5lIHgxPSI4IiB5MT0iMTMiIHgyPSIxNSIgeTI9IjkiIHN0cm9rZT0iI0ZERDgzNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjkiIHI9IjEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTUzOTM1IiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTUiIHI9IjEuNSIgZmlsbD0iIzRDQUY1MCIvPjxwYXRoIGQ9Ik0yMCA5aDIiIHN0cm9rZT0iI0ZERDgzNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMCAxNWgyIiBzdHJva2U9IiNGREQ4MzUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMiAxMmgyIiBzdHJva2U9IiNGREQ4MzUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4K';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: relayIconUrl,
            width: 36,
            height: 36,
            alt: 'Relay',
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
                    ...iconArgs,
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
