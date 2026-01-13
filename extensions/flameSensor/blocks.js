/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FF5722';
    const secondaryColour = '#E64A19';

    // Flame sensor icon - flame shape
    const flameSensorIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMiAyYy0yIDQtNiA2LTYgMTBhNiA2IDAgMCAwIDEyIDBjMC00LTQtNi02LTEweiIvPjxwYXRoIGQ9Ik0xMiAxMmMtMSAyLTMgMy0zIDVhMyAzIDAgMCAwIDYgMGMwLTItMi0zLTMtNXoiLz48L3N2Zz4=';

    // ESP32 analog pins
    const analogPins = [
        ['GPIO 32', '32'],
        ['GPIO 33', '33'],
        ['GPIO 34', '34'],
        ['GPIO 35', '35'],
        ['GPIO 36', '36'],
        ['GPIO 39', '39']
    ];

    // Initialize flame sensor with analog pin
    Blockly.Blocks.flameSensor_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FLAMESENSOR_INIT || '%1 init flame sensor pin %2',
                args0: [
                    {
                        type: 'field_image',
                        src: flameSensorIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'Flame Sensor',
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
                extensions: ['shape_statement']
            });
        }
    };

    // Read flame sensor value (analog)
    Blockly.Blocks.flameSensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FLAMESENSOR_READ || '%1 flame sensor value',
                args0: [
                    {
                        type: 'field_image',
                        src: flameSensorIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'Flame Sensor',
                        flip_rtl: false
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // Flame detected (boolean - low value means flame detected)
    Blockly.Blocks.flameSensor_detected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.FLAMESENSOR_DETECTED || '%1 flame detected?',
                args0: [
                    {
                        type: 'field_image',
                        src: flameSensorIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'Flame Sensor',
                        flip_rtl: false
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
