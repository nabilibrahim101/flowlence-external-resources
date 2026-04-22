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
            "LCD128X32_INIT": "%1 %2 initialize LCD 128x32",
            "LCD128X32_CLEAR": "%1 %2 clear LCD",
            "LCD128X32_SETCURSOR": "%1 %2 set cursor row %3 column %4",
            "LCD128X32_PRINTSTRING": "%1 %2 print text %3",
            "LCD128X32_PRINTNUMBER": "%1 %2 print number %3"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "LCD128X32_CATEGORY": "LCD 128x32",
            "LCD128X32_INIT": "%1 %2 初始化 LCD 128x32",
            "LCD128X32_CLEAR": "%1 %2 清除 LCD",
            "LCD128X32_SETCURSOR": "%1 %2 设置光标 行 %3 列 %4",
            "LCD128X32_PRINTSTRING": "%1 %2 显示文本 %3",
            "LCD128X32_PRINTNUMBER": "%1 %2 显示数字 %3"
        }
    );

    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "LCD128X32_CATEGORY": "شاشة LCD 128x32",
            "LCD128X32_INIT": "%1 %2 تهيئة شاشة LCD 128x32",
            "LCD128X32_CLEAR": "%1 %2 مسح الشاشة",
            "LCD128X32_SETCURSOR": "%1 %2 تعيين المؤشر صف %3 عمود %4",
            "LCD128X32_PRINTSTRING": "%1 %2 طباعة نص %3",
            "LCD128X32_PRINTNUMBER": "%1 %2 طباعة رقم %3"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
