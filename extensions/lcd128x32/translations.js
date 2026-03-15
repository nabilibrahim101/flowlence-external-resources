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
            "lcd128x32.name": "LCD 128x32",
            "lcd128x32.description": "ST7567A 128x32 dot matrix LCD display (I2C)."
        },
        "zh-cn": {
            "lcd128x32.name": "LCD 128x32 点阵屏",
            "lcd128x32.description": "ST7567A 128x32 点阵液晶显示屏 (I2C)。"
        },
        "ar": {
            "lcd128x32.name": "شاشة LCD 128x32",
            "lcd128x32.description": "شاشة LCD نقطية 128x32 بمتحكم ST7567A عبر I2C."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "LCD128X32_CATEGORY": "LCD 128x32",
            "LCD128X32_INIT": "initialize LCD 128x32",
            "LCD128X32_CLEAR": "clear LCD",
            "LCD128X32_SETCURSOR": "set cursor row %1 column %2",
            "LCD128X32_PRINTSTRING": "print text %1",
            "LCD128X32_PRINTNUMBER": "print number %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "LCD128X32_CATEGORY": "LCD 128x32",
            "LCD128X32_INIT": "初始化 LCD 128x32",
            "LCD128X32_CLEAR": "清除 LCD",
            "LCD128X32_SETCURSOR": "设置光标 行 %1 列 %2",
            "LCD128X32_PRINTSTRING": "显示文本 %1",
            "LCD128X32_PRINTNUMBER": "显示数字 %1"
        }
    );

    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "LCD128X32_CATEGORY": "شاشة LCD 128x32",
            "LCD128X32_INIT": "تهيئة شاشة LCD 128x32",
            "LCD128X32_CLEAR": "مسح الشاشة",
            "LCD128X32_SETCURSOR": "تعيين المؤشر صف %1 عمود %2",
            "LCD128X32_PRINTSTRING": "طباعة نص %1",
            "LCD128X32_PRINTNUMBER": "طباعة رقم %1"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
