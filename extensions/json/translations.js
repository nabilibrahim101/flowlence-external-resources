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
            "json.name": "JSON",
            "json.description": "Create and manipulate JSON data for IoT applications."
        },
        "zh-cn": {
            "json.name": "JSON",
            "json.description": "创建和处理用于物联网应用的JSON数据。"
        },
        "ar": {
            "json.name": "JSON",
            "json.description": "إنشاء ومعالجة بيانات JSON لتطبيقات إنترنت الأشياء."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "JSON_CATEGORY": "JSON",
            "JSON_CREATE_1": "JSON { %1:%2 }",
            "JSON_CREATE_2": "JSON { %1:%2 , %3:%4 }",
            "JSON_CREATE_3": "JSON { %1:%2 , %3:%4 , %5:%6 }",
            "JSON_CREATE_5": "JSON { %1:%2 , %3:%4 , %5:%6 , %7:%8 , %9:%10 }"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "JSON_CATEGORY": "JSON",
            "JSON_CREATE_1": "JSON { %1:%2 }",
            "JSON_CREATE_2": "JSON { %1:%2 , %3:%4 }",
            "JSON_CREATE_3": "JSON { %1:%2 , %3:%4 , %5:%6 }",
            "JSON_CREATE_5": "JSON { %1:%2 , %3:%4 , %5:%6 , %7:%8 , %9:%10 }"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "JSON_CATEGORY": "JSON",
            "JSON_CREATE_1": "JSON { %1:%2 }",
            "JSON_CREATE_2": "JSON { %1:%2 , %3:%4 }",
            "JSON_CREATE_3": "JSON { %1:%2 , %3:%4 , %5:%6 }",
            "JSON_CREATE_5": "JSON { %1:%2 , %3:%4 , %5:%6 , %7:%8 , %9:%10 }"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
