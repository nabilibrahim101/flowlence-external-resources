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
            "button.name": "Button",
            "button.description": "Button detection module for digital input."
        },
        "zh-cn": {
            "button.name": "按钮",
            "button.description": "按钮检测模块用于数字输入。"
        },
        "ar": {
            "button.name": "زر",
            "button.description": "وحدة كشف الزر للإدخال الرقمي."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "BUTTON_CATEGORY": "Button",
            "BUTTON_READ_STATE": "button pin %1 pressed?",
            "BUTTON_READ_VALUE": "button pin %1 value"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "BUTTON_CATEGORY": "按钮",
            "BUTTON_READ_STATE": "按钮引脚 %1 被按下?",
            "BUTTON_READ_VALUE": "按钮引脚 %1 值"
        }
    );

    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "BUTTON_CATEGORY": "زر",
            "BUTTON_READ_STATE": "زر الدبوس %1 مضغوط؟",
            "BUTTON_READ_VALUE": "زر الدبوس %1 قيمة"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
