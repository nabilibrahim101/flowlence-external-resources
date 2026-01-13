/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#9C27B0';
    const secondaryColour = '#7B1FA2';

    // Alcohol sensor icon - Lucide wine bottle
    const alcoholSensorIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTAgM2ExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMXYyYTYgNiAwIDAgMCAxLjIgMy42bC42LjhBNiA2IDAgMCAxIDE3IDEzdjhhMSAxIDAgMCAxLTEgMUg4YTEgMSAwIDAgMS0xLTF2LThhNiA2IDAgMCAxIDEuMi0zLjZsLjYtLjhBNiA2IDAgMCAwIDEwIDV6Ii8+PHBhdGggZD0iTTE3IDEzaC00YTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAwIDAgMSAxaDQiLz48L3N2Zz4=';

    // Get all available pins from device
    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    // Read alcohol sensor value
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
                        options: digitalPins
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
