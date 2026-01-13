/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#607D8B';
    const secondaryColour = '#455A64';

    // Gas sensor icon - Lucide fuel
    const gasSensorIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTQgMTNoMmEyIDIgMCAwIDEgMiAydjJhMiAyIDAgMCAwIDQgMHYtNi45OThhMiAyIDAgMCAwLS41OS0xLjQyTDE4IDUiLz48cGF0aCBkPSJNMTQgMjFWNWEyIDIgMCAwIDAtMi0ySDVhMiAyIDAgMCAwLTIgMnYxNiIvPjxwYXRoIGQ9Ik0yIDIxaDEzIi8+PHBhdGggZD0iTTMgOWgxMSIvPjwvc3ZnPg==';

    // ESP32 analog pins
    const analogPins = [
        ['GPIO 32', '32'],
        ['GPIO 33', '33'],
        ['GPIO 34', '34'],
        ['GPIO 35', '35'],
        ['GPIO 36', '36'],
        ['GPIO 39', '39']
    ];

    // Read gas sensor value (analog)
    Blockly.Blocks.gasSensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.GASSENSOR_READ || '%1 gas sensor %2 value',
                args0: [
                    {
                        type: 'field_image',
                        src: gasSensorIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'Gas Sensor',
                        flip_rtl: false
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
