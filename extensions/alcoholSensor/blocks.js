/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#9C27B0';
    const secondaryColour = '#7B1FA2';

    // Alcohol sensor icon - bottle/droplet shape
    const alcoholSensorIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMiAyYy0yIDQtNiA4LTYgMTJhNiA2IDAgMCAwIDEyIDBjMC00LTQtOC02LTEyeiIvPjxwYXRoIGQ9Ik0xMiAxNHYyIi8+PHBhdGggZD0iTTEyIDE4aC4wMSIvPjwvc3ZnPg==';

    // ESP32 analog pins
    const analogPins = [
        ['GPIO 32', '32'],
        ['GPIO 33', '33'],
        ['GPIO 34', '34'],
        ['GPIO 35', '35'],
        ['GPIO 36', '36'],
        ['GPIO 39', '39']
    ];

    // Read alcohol sensor value (analog)
    Blockly.Blocks.alcoholSensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ALCOHOLSENSOR_READ || '%1 alcohol sensor %2 value',
                args0: [
                    {
                        type: 'field_image',
                        src: alcoholSensorIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'Alcohol Sensor',
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

    // Alcohol detected (boolean - high value means alcohol detected)
    Blockly.Blocks.alcoholSensor_detected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ALCOHOLSENSOR_DETECTED || '%1 alcohol detected %2 ?',
                args0: [
                    {
                        type: 'field_image',
                        src: alcoholSensorIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'Alcohol Sensor',
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
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
