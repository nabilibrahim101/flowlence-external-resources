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
            "led.description": "Control LEDs - turn on, off, toggle, and blink."
        },
        "zh-cn": {
            "led.name": "LED",
            "led.description": "控制LED - 打开、关闭、切换和闪烁。"
        },
        "ar": {
            "led.name": "LED",
            "led.description": "التحكم في LED - تشغيل، إيقاف، تبديل، وميض."
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
            "LED_INIT": "initialize LED on pin %1",
            "LED_ON": "turn LED on pin %1 ON",
            "LED_OFF": "turn LED on pin %1 OFF",
            "LED_TOGGLE": "toggle LED on pin %1",
            "LED_SETSTATE": "set LED on pin %1 to %2",
            "LED_STATE_ON": "ON",
            "LED_STATE_OFF": "OFF",
            "LED_BLINK": "blink LED on pin %1 delay %2 ms"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "LED_CATEGORY": "LED",
            "LED_INIT": "初始化LED引脚 %1",
            "LED_ON": "打开LED引脚 %1",
            "LED_OFF": "关闭LED引脚 %1",
            "LED_TOGGLE": "切换LED引脚 %1",
            "LED_SETSTATE": "设置LED引脚 %1 为 %2",
            "LED_STATE_ON": "开",
            "LED_STATE_OFF": "关",
            "LED_BLINK": "闪烁LED引脚 %1 延迟 %2 毫秒"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "LED_CATEGORY": "LED",
            "LED_INIT": "تهيئة LED على المنفذ %1",
            "LED_ON": "تشغيل LED على المنفذ %1",
            "LED_OFF": "إيقاف LED على المنفذ %1",
            "LED_TOGGLE": "تبديل LED على المنفذ %1",
            "LED_SETSTATE": "ضبط LED على المنفذ %1 إلى %2",
            "LED_STATE_ON": "تشغيل",
            "LED_STATE_OFF": "إيقاف",
            "LED_BLINK": "وميض LED على المنفذ %1 تأخير %2 مللي ثانية"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
