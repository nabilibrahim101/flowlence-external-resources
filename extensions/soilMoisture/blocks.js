/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#2E8B57';
    const secondaryColour = '#228B22';

    // Soil moisture icon - two-prong fork probe in brown soil with gold contacts
    const soilMoistureIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSIzIiB5PSIxNCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjgiIHJ4PSIyIiBmaWxsPSIjOEI2OTE0Ii8+PGNpcmNsZSBjeD0iNyIgY3k9IjE3IiByPSIwLjciIGZpbGw9IiNBMDUyMkQiLz48Y2lyY2xlIGN4PSIxMSIgY3k9IjE4LjUiIHI9IjAuNiIgZmlsbD0iI0EwNTIyRCIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTciIHI9IjAuOCIgZmlsbD0iI0EwNTIyRCIvPjxyZWN0IHg9IjgiIHk9IjIiIHdpZHRoPSIzIiBoZWlnaHQ9IjE1IiByeD0iMSIgZmlsbD0iIzc4OTA5QyIgc3Ryb2tlPSIjNTQ2RTdBIiBzdHJva2Utd2lkdGg9IjAuOCIvPjxyZWN0IHg9IjEzIiB5PSIyIiB3aWR0aD0iMyIgaGVpZ2h0PSIxNSIgcng9IjEiIGZpbGw9IiM3ODkwOUMiIHN0cm9rZT0iIzU0NkU3QSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48cmVjdCB4PSI3IiB5PSIyIiB3aWR0aD0iMTAiIGhlaWdodD0iMyIgcng9IjEiIGZpbGw9IiM2MDdEOEIiIHN0cm9rZT0iIzU0NkU3QSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48Y2lyY2xlIGN4PSI5LjUiIGN5PSI5IiByPSIwLjgiIGZpbGw9IiNGREQ4MzUiLz48Y2lyY2xlIGN4PSIxNC41IiBjeT0iOSIgcj0iMC44IiBmaWxsPSIjRkREODM1Ii8+PGNpcmNsZSBjeD0iOS41IiBjeT0iMTIiIHI9IjAuOCIgZmlsbD0iI0ZERDgzNSIvPjxjaXJjbGUgY3g9IjE0LjUiIGN5PSIxMiIgcj0iMC44IiBmaWxsPSIjRkREODM1Ii8+PC9zdmc+Cg==';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // ESP32 ADC1 pins only (ADC2 pins don't work when WiFi is active)
    const analogPins = [
        ['GPIO 32', '32'],
        ['GPIO 33', '33'],
        ['GPIO 34', '34'],
        ['GPIO 35', '35'],
        ['GPIO 36', '36'],
        ['GPIO 39', '39']
    ];

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: soilMoistureIconUrl,
            width: 36,
            height: 36,
            alt: 'Soil Moisture',
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

    Blockly.Blocks.soilMoisture_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_INIT,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.soilMoisture_calibrate = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_CALIBRATE,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'DRYVALUE'
                    },
                    {
                        type: 'input_value',
                        name: 'WETVALUE'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.soilMoisture_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_READVALUE,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.soilMoisture_readPercent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_READPERCENT,
                args0: [
                    ...iconArgs
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.soilMoisture_isSoilDry = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_ISSOILDRY,
                args0: [
                    ...iconArgs,
                    {
                        type: 'input_value',
                        name: 'THRESHOLD'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
