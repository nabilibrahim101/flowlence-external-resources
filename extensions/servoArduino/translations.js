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
            "servoArduino.name": "Servo",
            "servoArduino.description": "Servo motor driver for Arduino and ESP32"
        },
        "zh-cn": {
            "servoArduino.name": "舵机",
            "servoArduino.description": "Arduino和ESP32舵机驱动"
        },
        "ar": {
            "servoArduino.name": "محرك سيرفو",
            "servoArduino.description": "تحكم بمحرك السيرفو لأردوينو وESP32"
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "SERVOARDUINO_CATEGORY": "Servo",
            "SERVOARDUINO_SETANGLE": "servo pin %1 set angle %2 delay (ms) %3",
            "SERVOARDUINO_READANGLE": "servo pin %1 read angle"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "SERVOARDUINO_CATEGORY": "舵机",
            "SERVOARDUINO_SETANGLE": "舵机 引脚 %1 角度 %2 延时(毫秒) %3",
            "SERVOARDUINO_READANGLE": "舵机 引脚 %1 读取角度"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "SERVOARDUINO_CATEGORY": "محرك سيرفو",
            "SERVOARDUINO_SETANGLE": "سيرفو منفذ %1 ضبط الزاوية %2 تأخير (مللي ثانية) %3",
            "SERVOARDUINO_READANGLE": "سيرفو منفذ %1 قراءة الزاوية"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
