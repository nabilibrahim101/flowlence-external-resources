/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    // Helper function to add HTTP includes and definitions
    function addHttpIncludes () {
        Blockly.Arduino.includes_.http = '#include <HTTPClient.h>';
        Blockly.Arduino.definitions_.http_client = 'HTTPClient http;';
        Blockly.Arduino.definitions_.http_responseCode = 'int httpResponseCode = 0;';
    }

    // HTTP GET request
    Blockly.Arduino.http_get = function (block) {
        const url = Blockly.Arduino.valueToCode(block, 'URL', Blockly.Arduino.ORDER_ATOMIC) || '"http://example.com"';

        addHttpIncludes();

        const code = `(http.begin(${url}), httpResponseCode = http.GET(), httpResponseCode > 0 ? http.getString() : String(""))`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    // HTTP POST request
    Blockly.Arduino.http_post = function (block) {
        const url = Blockly.Arduino.valueToCode(block, 'URL', Blockly.Arduino.ORDER_ATOMIC) || '"http://example.com"';
        const body = Blockly.Arduino.valueToCode(block, 'BODY', Blockly.Arduino.ORDER_ATOMIC) || '""';

        addHttpIncludes();

        const code = `(http.begin(${url}), http.addHeader("Content-Type", "application/json"), httpResponseCode = http.POST(${body}), httpResponseCode > 0 ? http.getString() : String(""))`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    // HTTP PUT request
    Blockly.Arduino.http_put = function (block) {
        const url = Blockly.Arduino.valueToCode(block, 'URL', Blockly.Arduino.ORDER_ATOMIC) || '"http://example.com"';
        const body = Blockly.Arduino.valueToCode(block, 'BODY', Blockly.Arduino.ORDER_ATOMIC) || '""';

        addHttpIncludes();

        const code = `(http.begin(${url}), http.addHeader("Content-Type", "application/json"), httpResponseCode = http.PUT(${body}), httpResponseCode > 0 ? http.getString() : String(""))`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    // HTTP DELETE request
    Blockly.Arduino.http_delete = function (block) {
        const url = Blockly.Arduino.valueToCode(block, 'URL', Blockly.Arduino.ORDER_ATOMIC) || '"http://example.com"';

        addHttpIncludes();

        const code = `(http.begin(${url}), httpResponseCode = http.sendRequest("DELETE"), httpResponseCode > 0 ? http.getString() : String(""))`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    // Get last HTTP response code
    Blockly.Arduino.http_responseCode = function () {
        addHttpIncludes();

        const code = 'httpResponseCode';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
