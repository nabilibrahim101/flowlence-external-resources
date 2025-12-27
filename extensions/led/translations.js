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
            "led.name": "LED",
            "led.description": "Control LEDs - turn on or off."
        },
        "zh-cn": {
            "led.name": "LED",
            "led.description": "控制LED - 打开或关闭。"
        },
        "ar": {
            "led.name": "LED",
            "led.description": "التحكم في LED - تشغيل أو إيقاف."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "LED_CATEGORY": "LED",
            "LED_SET": "set LED on pin %1 to %2",
            "LED_STATE_ON": "ON",
            "LED_STATE_OFF": "OFF"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "LED_CATEGORY": "LED",
            "LED_SET": "设置LED引脚 %1 为 %2",
            "LED_STATE_ON": "开",
            "LED_STATE_OFF": "关"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "LED_CATEGORY": "LED",
            "LED_SET": "ضبط LED على المنفذ %1 إلى %2",
            "LED_STATE_ON": "تشغيل",
            "LED_STATE_OFF": "إيقاف"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
