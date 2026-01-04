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
            "activeBuzzer.name": "Active Buzzer",
            "activeBuzzer.description": "Active buzzer with built-in oscillator. Simple ON/OFF control for alarms and notifications."
        },
        "zh-cn": {
            "activeBuzzer.name": "有源蜂鸣器",
            "activeBuzzer.description": "内置振荡器的有源蜂鸣器。简单的开关控制，用于警报和通知。"
        },
        "ar": {
            "activeBuzzer.name": "جرس نشط",
            "activeBuzzer.description": "جرس نشط مع مذبذب مدمج. تحكم بسيط بالتشغيل/الإيقاف للإنذارات والإشعارات."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "ACTIVEBUZZER_CATEGORY": "Active Buzzer",
            "ACTIVEBUZZER_INIT": "initialize active buzzer pin %1",
            "ACTIVEBUZZER_SETSTATE": "set buzzer %1",
            "ACTIVEBUZZER_ON": "ON",
            "ACTIVEBUZZER_OFF": "OFF",
            "ACTIVEBUZZER_BEEP": "beep for %1 ms",
            "ACTIVEBUZZER_BEEPTIMES": "beep %1 times, %2 ms on, %3 ms off"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "ACTIVEBUZZER_CATEGORY": "有源蜂鸣器",
            "ACTIVEBUZZER_INIT": "初始化有源蜂鸣器引脚 %1",
            "ACTIVEBUZZER_SETSTATE": "设置蜂鸣器 %1",
            "ACTIVEBUZZER_ON": "开",
            "ACTIVEBUZZER_OFF": "关",
            "ACTIVEBUZZER_BEEP": "蜂鸣 %1 毫秒",
            "ACTIVEBUZZER_BEEPTIMES": "蜂鸣 %1 次，响 %2 毫秒，停 %3 毫秒"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "ACTIVEBUZZER_CATEGORY": "جرس نشط",
            "ACTIVEBUZZER_INIT": "تهيئة منفذ الجرس النشط %1",
            "ACTIVEBUZZER_SETSTATE": "اضبط الجرس %1",
            "ACTIVEBUZZER_ON": "تشغيل",
            "ACTIVEBUZZER_OFF": "إيقاف",
            "ACTIVEBUZZER_BEEP": "صفير لمدة %1 مللي ثانية",
            "ACTIVEBUZZER_BEEPTIMES": "صفير %1 مرات، %2 مللي ثانية تشغيل، %3 مللي ثانية إيقاف"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
