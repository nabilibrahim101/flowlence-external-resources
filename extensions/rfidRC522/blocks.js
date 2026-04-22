/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#42CCFF';
    const secondaryColour = '#00BFFF';

    // RFID icon
    const rfidIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSIxIiB5PSI2IiB3aWR0aD0iMTUiIGhlaWdodD0iMTIiIHJ4PSIxLjUiIGZpbGw9IiMxNTY1QzAiIHN0cm9rZT0iIzBENDdBMSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48cmVjdCB4PSIzIiB5PSI4IiB3aWR0aD0iMTEiIGhlaWdodD0iOCIgcng9IjEiIGZpbGw9IiMxRTg4RTUiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSIxMiIgcj0iMi41IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS4yIi8+PGNpcmNsZSBjeD0iOC41IiBjeT0iMTIiIHI9IjEiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxNCIgeT0iMyIgd2lkdGg9IjkiIGhlaWdodD0iMTMiIHJ4PSIxLjUiIGZpbGw9IiNGRkY5QzQiIHN0cm9rZT0iI0Y5QTgyNSIgc3Ryb2tlLXdpZHRoPSIwLjgiIHRyYW5zZm9ybT0icm90YXRlKDE1IDE4LjUgOS41KSIvPjxyZWN0IHg9IjE2LjUiIHk9IjgiIHdpZHRoPSIzIiBoZWlnaHQ9IjIiIHJ4PSIwLjUiIGZpbGw9IiNGREQ4MzUiIHRyYW5zZm9ybT0icm90YXRlKDE1IDE4IDkpIi8+PC9zdmc+Cg==';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: rfidIconUrl,
            width: 36,
            height: 36,
            alt: 'RFID',
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

    // Initialize RFID RC522
    Blockly.Blocks.rfidRC522_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.RFIDRC522_INIT,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // Read RFID card
    Blockly.Blocks.rfidRC522_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.RFIDRC522_READ,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
