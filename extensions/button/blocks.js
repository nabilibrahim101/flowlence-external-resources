/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FFD500';
    const secondaryColour = '#FFA500';

    // Button icon as base64 SVG
    const buttonIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSI0IiB5PSI4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjMzMzIiBzdHJva2U9IiM1NTUiIHN0cm9rZS13aWR0aD0iMC44Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMyIgcj0iNSIgZmlsbD0iI0ZERDgzNSIgc3Ryb2tlPSIjRjlBODI1IiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEzIiByPSIzIiBmaWxsPSIjRkZFRTU4Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMiIgcj0iMSIgZmlsbD0iI0ZGRjlDNCIgb3BhY2l0eT0iMC42Ii8+PHJlY3QgeD0iNiIgeT0iMTgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHJ4PSIwLjMiIGZpbGw9IiNGREQ4MzUiLz48cmVjdCB4PSIxNiIgeT0iMTgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHJ4PSIwLjMiIGZpbGw9IiNGREQ4MzUiLz48L3N2Zz4K';

    // Vertical line separator
    const separatorUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDQwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0MCI+PGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMiIgeTI9IjM4IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=';

    // Reusable icon + separator args
    const iconArgs = [
        {
            type: 'field_image',
            src: buttonIconUrl,
            width: 36,
            height: 36,
            alt: 'Button',
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

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.button_readState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BUTTON_READ_STATE,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.button_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BUTTON_READ_VALUE,
                args0: [
                    ...iconArgs,
                    {
                        type: 'field_dropdown',
                        name: 'pin',
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
