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
            "touchSwitch.name": "Touch Switch",
            "touchSwitch.description": "Touch switch detection module for digital input."
        },
        "zh-cn": {
            "touchSwitch.name": "触摸开关",
            "touchSwitch.description": "触摸开关检测模块用于数字输入。"
        },
        "ar": {
            "touchSwitch.name": "مفتاح اللمس",
            "touchSwitch.description": "وحدة كشف مفتاح اللمس للإدخال الرقمي."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "TOUCHSWITCH_CATEGORY": "Touch Switch",
            "TOUCHSWITCH_READ_VALUE": "touch switch pin %1 touched?",
            "TOUCHSWITCH_STATE": "touch switch pin %1 value"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TOUCHSWITCH_CATEGORY": "触摸开关",
            "TOUCHSWITCH_READ_VALUE": "触摸开关引脚 %1 被触摸?",
            "TOUCHSWITCH_STATE": "触摸开关引脚 %1 值"
        }
    );

    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "TOUCHSWITCH_CATEGORY": "مفتاح اللمس",
            "TOUCHSWITCH_READ_VALUE": "مفتاح اللمس الدبوس %1 تم لمسه؟",
            "TOUCHSWITCH_STATE": "مفتاح اللمس الدبوس %1 قيمة"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
