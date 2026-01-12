/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#FF9800';
    const secondaryColour = '#F57C00';

    // HTTP icon - globe/network style
    const httpIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0yIDEyaDIwTTEyIDJhMTUuMyAxNS4zIDAgMCAxIDQgMTAgMTUuMyAxNS4zIDAgMCAxLTQgMTAgMTUuMyAxNS4zIDAgMCAxLTQtMTAgMTUuMyAxNS4zIDAgMCAxIDQtMTB6Ii8+PC9zdmc+';

    // HTTP GET request
    Blockly.Blocks.http_get = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HTTP_GET || '%1 GET %2',
                args0: [
                    {
                        type: 'field_image',
                        src: httpIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'HTTP',
                        flip_rtl: false
                    },
                    {
                        type: 'input_value',
                        name: 'URL',
                        check: 'String'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    // HTTP POST request
    Blockly.Blocks.http_post = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HTTP_POST || '%1 POST %2 body %3',
                args0: [
                    {
                        type: 'field_image',
                        src: httpIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'HTTP',
                        flip_rtl: false
                    },
                    {
                        type: 'input_value',
                        name: 'URL',
                        check: 'String'
                    },
                    {
                        type: 'input_value',
                        name: 'BODY',
                        check: 'String'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    // HTTP PUT request
    Blockly.Blocks.http_put = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HTTP_PUT || '%1 PUT %2 body %3',
                args0: [
                    {
                        type: 'field_image',
                        src: httpIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'HTTP',
                        flip_rtl: false
                    },
                    {
                        type: 'input_value',
                        name: 'URL',
                        check: 'String'
                    },
                    {
                        type: 'input_value',
                        name: 'BODY',
                        check: 'String'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    // HTTP DELETE request
    Blockly.Blocks.http_delete = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HTTP_DELETE || '%1 DELETE %2',
                args0: [
                    {
                        type: 'field_image',
                        src: httpIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'HTTP',
                        flip_rtl: false
                    },
                    {
                        type: 'input_value',
                        name: 'URL',
                        check: 'String'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    // Get last HTTP response code
    Blockly.Blocks.http_responseCode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HTTP_RESPONSE_CODE || '%1 response code',
                args0: [
                    {
                        type: 'field_image',
                        src: httpIconUrl,
                        width: 24,
                        height: 24,
                        alt: 'HTTP',
                        flip_rtl: false
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
