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
            "ACTIVEBUZZER_INIT": "%1 %2 initialize active buzzer pin %3",
            "ACTIVEBUZZER_SETSTATE": "%1 %2 set buzzer %3",
            "ACTIVEBUZZER_ON": "ON",
            "ACTIVEBUZZER_OFF": "OFF",
            "ACTIVEBUZZER_BEEP": "%1 %2 beep for %3 ms",
            "ACTIVEBUZZER_BEEPTIMES": "%1 %2 beep %3 times, %4 ms on, %5 ms off"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "ACTIVEBUZZER_CATEGORY": "有源蜂鸣器",
            "ACTIVEBUZZER_INIT": "%1 %2 初始化有源蜂鸣器引脚 %3",
            "ACTIVEBUZZER_SETSTATE": "%1 %2 设置蜂鸣器 %3",
            "ACTIVEBUZZER_ON": "开",
            "ACTIVEBUZZER_OFF": "关",
            "ACTIVEBUZZER_BEEP": "%1 %2 蜂鸣 %3 毫秒",
            "ACTIVEBUZZER_BEEPTIMES": "%1 %2 蜂鸣 %3 次，响 %4 毫秒，停 %5 毫秒"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "ACTIVEBUZZER_CATEGORY": "جرس نشط",
            "ACTIVEBUZZER_INIT": "%1 %2 تهيئة منفذ الجرس النشط %3",
            "ACTIVEBUZZER_SETSTATE": "%1 %2 اضبط الجرس %3",
            "ACTIVEBUZZER_ON": "تشغيل",
            "ACTIVEBUZZER_OFF": "إيقاف",
            "ACTIVEBUZZER_BEEP": "%1 %2 صفير لمدة %3 مللي ثانية",
            "ACTIVEBUZZER_BEEPTIMES": "%1 %2 صفير %3 مرات، %4 مللي ثانية تشغيل، %5 مللي ثانية إيقاف"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
