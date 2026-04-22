/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#D39DDB';
    const secondaryColour = '#BA55D3';

    // Ultrasonic icon
    const ultrasonicIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSIyIiB5PSI1IiB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHJ4PSIyIiBmaWxsPSIjN0IxRkEyIiBzdHJva2U9IiM0QTE0OEMiIHN0cm9rZS13aWR0aD0iMC44Ii8+PGNpcmNsZSBjeD0iOCIgY3k9IjEyIiByPSI0IiBmaWxsPSIjQ0U5M0Q4IiBzdHJva2U9IiM5QzI3QjAiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjgiIGN5PSIxMiIgcj0iMiIgZmlsbD0iI0UxQkVFNyIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTIiIHI9IjQiIGZpbGw9IiNDRTkzRDgiIHN0cm9rZT0iIzlDMjdCMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxMiIgcj0iMiIgZmlsbD0iI0UxQkVFNyIvPjxyZWN0IHg9IjYiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHJ4PSIwLjUiIGZpbGw9IiNGREQ4MzUiLz48cmVjdCB4PSIxNiIgeT0iNCIgd2lkdGg9IjIiIGhlaWdodD0iMiIgcng9IjAuNSIgZmlsbD0iI0ZERDgzNSIvPjwvc3ZnPgo=';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: ultrasonicIconUrl,
            width: 36,
            height: 36,
            alt: 'Ultrasonic',
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

    const outPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');
    const inputPins = Blockly.Device.getPinOptions('arduino_pin_readDigitalPin');

    Blockly.Blocks.ultrasonic_readDistance = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ULTRASONIC_READ_DISTANCE,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'TRIG',
                        options: outPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ECHO',
                        options: inputPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'UNIT',
                        options: [
                            ['cm', 'CM'],
                            ['inch', 'INC']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = registerBlocks;
