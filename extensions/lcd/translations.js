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
            "lcd.name": "1602 LCD",
            "lcd.description": "1602 liquid crystal display which based on I2C bus."
        },
        "ru": {
            "lcd.name": "Символьный дисплей 1602 LCD",
            "lcd.description": "1602 символьный дисплей на шине I2C."
        },
        "zh-cn": {
            "lcd.name": "1602 液晶显示器",
            "lcd.description": "基于 I2C 总线的1602液晶显示器。"
        },
        "zh-tw": {
            "lcd.name": "1602 液晶顯示器",
            "lcd.description": "基於 I2C 總線的1602液晶顯示器。"
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "LCD_CATEGORY": "1602 LCD",
            "LCD_CLEAR": "%1 clear lcd",
            "LCD_INIT": "%1 init lcd I2C address %2",
            "LCD_PRINT": "%1 lcd print %2",
            "LCD_SATE_DISPLAY": "display",
            "LCD_SATE_HIDE": "hide",
            "LCD_SATE_OFF": "off",
            "LCD_SATE_ON": "on",
            "LCD_SETBACKLIGHT": "%1 set lcd back light %2",
            "LCD_SETCURSORPOSITION": "%1 set lcd cursor position x: %2 y: %3",
            "LCD_SETCURSORSTYLE": "%1 set lcd cursor %2 style %3",
            "LCD_STYLE_BLINK": "blink",
            "LCD_STYLE_NOBLINK": "no-blink"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "LCD_CATEGORY": "1602 LCD",
            "LCD_CLEAR": "%1 Очистить ЖК-дисплей",
            "LCD_INIT": "%1 Инициализировать ЖК-дисплей адрес I2C %2",
            "LCD_PRINT": "%1 Напечатать %2 на ЖК-дисплее",
            "LCD_SATE_DISPLAY": "Дисплей",
            "LCD_SATE_HIDE": "Скрыть",
            "LCD_SATE_OFF": "Выключить",
            "LCD_SATE_ON": "Включить",
            "LCD_SETBACKLIGHT": "%1 установить подсветку ЖК-дисплея в %2",
            "LCD_SETCURSORPOSITION": "%1 установить позицию курсора ЖК-дисплея в (x: %2 y: %3)",
            "LCD_SETCURSORSTYLE": "%1 установить курсор на ЖК-дисплее в %2 стиль %3",
            "LCD_STYLE_BLINK": "Мерцать",
            "LCD_STYLE_NOBLINK": "Не мерцать"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "LCD_CATEGORY": "1602 LCD",
            "LCD_CLEAR": "%1 清空 lcd",
            "LCD_INIT": "%1 初始化 lcd I2C 地址 %2",
            "LCD_PRINT": "%1 lcd 打印 %2",
            "LCD_SATE_DISPLAY": "显示",
            "LCD_SATE_HIDE": "隐藏",
            "LCD_SATE_OFF": "关",
            "LCD_SATE_ON": "开",
            "LCD_SETBACKLIGHT": "%1 设置 lcd 背光 %2",
            "LCD_SETCURSORPOSITION": "%1 设置 lcd 光标位置 x: %2 y: %3",
            "LCD_SETCURSORSTYLE": "%1 设置 lcd 光标 %2 样式 %3",
            "LCD_STYLE_BLINK": "闪烁",
            "LCD_STYLE_NOBLINK": "不闪烁"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "LCD_CATEGORY": "1602 液晶顯示器",
            "LCD_CLEAR": "%1 清空 lcd",
            "LCD_INIT": "%1 初始化 lcd I2C 地址 %2",
            "LCD_PRINT": "%1 lcd 打印 %2",
            "LCD_SATE_DISPLAY": "顯示",
            "LCD_SATE_HIDE": "隱藏",
            "LCD_SATE_OFF": "關閉",
            "LCD_SATE_ON": "打開",
            "LCD_SETBACKLIGHT": "%1 設置 lcd 背光 %2",
            "LCD_SETCURSORPOSITION": "%1 設置 lcd 光標位置 x: %2 y: %3",
            "LCD_SETCURSORSTYLE": "%1 設置 lcd 光標 %2 樣式 %3",
            "LCD_STYLE_BLINK": "閃爍",
            "LCD_STYLE_NOBLINK": "不閃爍"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
