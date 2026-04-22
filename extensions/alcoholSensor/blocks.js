/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#9C27B0';
    const secondaryColour = '#7B1FA2';

    // Alcohol sensor icon as base64 SVG
    const alcoholSensorIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSI5IiB5PSIyIiB3aWR0aD0iNiIgaGVpZ2h0PSI2IiByeD0iMSIgZmlsbD0iI0UxQkVFNyIgc3Ryb2tlPSIjN0IxRkEyIiBzdHJva2Utd2lkdGg9IjAuOCIvPjxwYXRoIGQ9Ik05IDggTDQgMTggUTMgMjIgOCAyMiBIMTYgUTIxIDIyIDIwIDE4IEwxNSA4eiIgZmlsbD0iI0UxQkVFNyIgc3Ryb2tlPSIjN0IxRkEyIiBzdHJva2Utd2lkdGg9IjAuOCIvPjxwYXRoIGQ9Ik01IDE2IEwxOSAxNiBRMjAgMjAgMTYgMjAgSDggUTQgMjAgNSAxNnoiIGZpbGw9IiNBQjQ3QkMiIG9wYWNpdHk9IjAuNSIvPjxjaXJjbGUgY3g9IjkiIGN5PSIxOCIgcj0iMSIgZmlsbD0iI0NFOTNEOCIgb3BhY2l0eT0iMC42Ii8+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNyIgcj0iMC44IiBmaWxsPSIjQ0U5M0Q4IiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSIxMSIgY3k9IjE0IiByPSIwLjYiIGZpbGw9IiNDRTkzRDgiIG9wYWNpdHk9IjAuNCIvPjwvc3ZnPgo=';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Get all available pins from device
    const analogPins = Blockly.Device.getPinOptions('arduino_pin_readAnalogPin');
    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: alcoholSensorIconUrl,
            width: 36,
            height: 36,
            alt: 'Alcohol',
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

    // Read alcohol sensor value
    Blockly.Blocks.alcoholSensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ALCOHOLSENSOR_READ || '%1 %2 alcohol sensor %3 %4 value',
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
