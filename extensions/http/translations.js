// This file was automatically generated. Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
function getInterfaceTranslations () {
    return {
        "en": {
            "http.name": "HTTP",
            "http.description": "Make HTTP requests to REST APIs (GET, POST, PUT, DELETE)."
        },
        "zh-cn": {
            "http.name": "HTTP",
            "http.description": "向REST API发送HTTP请求（GET、POST、PUT、DELETE）。"
        },
        "ar": {
            "http.name": "HTTP",
            "http.description": "إرسال طلبات HTTP إلى واجهات REST (GET، POST، PUT، DELETE)."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "HTTP_CATEGORY": "HTTP",
            "HTTP_GET": "%1 GET %2",
            "HTTP_POST": "%1 POST %2 body %3",
            "HTTP_PUT": "%1 PUT %2 body %3",
            "HTTP_DELETE": "%1 DELETE %2",
            "HTTP_RESPONSE_CODE": "%1 response code"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "HTTP_CATEGORY": "HTTP",
            "HTTP_GET": "%1 GET %2",
            "HTTP_POST": "%1 POST %2 内容 %3",
            "HTTP_PUT": "%1 PUT %2 内容 %3",
            "HTTP_DELETE": "%1 DELETE %2",
            "HTTP_RESPONSE_CODE": "%1 响应代码"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "HTTP_CATEGORY": "HTTP",
            "HTTP_GET": "%1 GET %2",
            "HTTP_POST": "%1 POST %2 المحتوى %3",
            "HTTP_PUT": "%1 PUT %2 المحتوى %3",
            "HTTP_DELETE": "%1 DELETE %2",
            "HTTP_RESPONSE_CODE": "%1 رمز الاستجابة"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
