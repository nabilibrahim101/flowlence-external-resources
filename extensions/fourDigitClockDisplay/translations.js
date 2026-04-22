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
            "fourDigitClockDisplay.name": "4-Digit Clock Display",
            "fourDigitClockDisplay.description": "4-digit clock display module based on TM1650 (I2C)."
        },
        "ru": {
            "fourDigitClockDisplay.name": "4-разрядный индикатор для часов",
            "fourDigitClockDisplay.description": "4-разрядный индикатор для часов на базе TM1637."
        },
        "zh-cn": {
            "fourDigitClockDisplay.name": "4位时钟数码管",
            "fourDigitClockDisplay.description": "基于 TM1637 的4位时钟数码管。"
        },
        "zh-tw": {
            "fourDigitClockDisplay.name": "4位時鐘數碼管",
            "fourDigitClockDisplay.description": "基於 TM1637 的4位時鐘數碼管。"
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "FOURDIGITCLOCKDISPLAY_CATEGORY": "4-Digit Clock Display",
            "FOURDIGITCLOCKDISPLAY_CLEAR": "%1 %2 clear 4-digit clock display",
            "FOURDIGITCLOCKDISPLAY_DISPLAY": "%1 %2 4-digit clock display show %3 at bit %4",
            "FOURDIGITCLOCKDISPLAY_DISPLAYNUMBER": "%1 %2 4-digit clock display show number %3",
            "FOURDIGITCLOCKDISPLAY_DISPLAYSTRING": "%1 %2 4-digit clock display show string %3",
            "FOURDIGITCLOCKDISPLAY_INIT": "%1 %2 init 4-digit clock display (I2C)",
            "FOURDIGITCLOCKDISPLAY_SETBRIGHTNESS": "%1 %2 set 4-digit clock display brightness %3",
            "FOURDIGITCLOCKDISPLAY_SETPOINT": "%1 %2 4-digit clock display set point %3",
            "FOURDIGITCLOCKDISPLAY_SETPOINT_TOOLTIP": "It will take effect after the next update of the display.",
            "FOURDIGITCLOCKDISPLAY_STATE_OFF": "off",
            "FOURDIGITCLOCKDISPLAY_STATE_ON": "on"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "FOURDIGITCLOCKDISPLAY_CATEGORY": "4-значный дисплей часов",
            "FOURDIGITCLOCKDISPLAY_CLEAR": "%1 %2 Очистить 4-значный дисплей часов",
            "FOURDIGITCLOCKDISPLAY_DISPLAY": "%1 %2 Отобразить число %3 как бит %4 на 4-разрядном дисплее часов",
            "FOURDIGITCLOCKDISPLAY_DISPLAYNUMBER": "%1 %2 Отобразить число %3 на 4-разрядном дисплее часов",
            "FOURDIGITCLOCKDISPLAY_DISPLAYSTRING": "%1 %2 Отобразить строку %3 на 4-разрядном дисплее часов",
            "FOURDIGITCLOCKDISPLAY_INIT": "%1 %2 Инициализировать 4-разрядный дисплей часов (I2C)",
            "FOURDIGITCLOCKDISPLAY_SETBRIGHTNESS": "%1 %2 установить яркость 4-разрядного дисплея часов в %3",
            "FOURDIGITCLOCKDISPLAY_SETPOINT": "%1 %2 Отобразить точку %3 на 4-разрядном дисплее часов",
            "FOURDIGITCLOCKDISPLAY_SETPOINT_TOOLTIP": "Это вступит в силу после следующего обновления дисплея.",
            "FOURDIGITCLOCKDISPLAY_STATE_OFF": "Выключить",
            "FOURDIGITCLOCKDISPLAY_STATE_ON": "Включить"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "FOURDIGITCLOCKDISPLAY_CATEGORY": "4位时钟数码管",
            "FOURDIGITCLOCKDISPLAY_CLEAR": "%1 %2 清空4位时钟数码管",
            "FOURDIGITCLOCKDISPLAY_DISPLAY": "%1 %2 4位时钟数码管显示 %3 第 %4 位",
            "FOURDIGITCLOCKDISPLAY_DISPLAYNUMBER": "%1 %2 4位时钟数码管显示数字 %3",
            "FOURDIGITCLOCKDISPLAY_DISPLAYSTRING": "%1 %2 4位时钟数码管显示字符 %3",
            "FOURDIGITCLOCKDISPLAY_INIT": "%1 %2 初始化4位时钟数码管 (I2C)",
            "FOURDIGITCLOCKDISPLAY_SETBRIGHTNESS": "%1 %2 设置4位时钟数码管亮度 %3",
            "FOURDIGITCLOCKDISPLAY_SETPOINT": "%1 %2 4位时钟数码管设置点 %3",
            "FOURDIGITCLOCKDISPLAY_SETPOINT_TOOLTIP": "将在下次更新显示后生效.",
            "FOURDIGITCLOCKDISPLAY_STATE_OFF": "关",
            "FOURDIGITCLOCKDISPLAY_STATE_ON": "开"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "FOURDIGITCLOCKDISPLAY_CATEGORY": "4位時鐘數碼管",
            "FOURDIGITCLOCKDISPLAY_CLEAR": "%1 %2 清空4位時鐘數碼管",
            "FOURDIGITCLOCKDISPLAY_DISPLAY": "%1 %2 4位時鐘數碼管顯示 %3 第 %4 位",
            "FOURDIGITCLOCKDISPLAY_DISPLAYNUMBER": "%1 %2 4位時鐘數碼管顯示數字 %3",
            "FOURDIGITCLOCKDISPLAY_DISPLAYSTRING": "%1 %2 4位時鐘數碼管顯示字符 %3",
            "FOURDIGITCLOCKDISPLAY_INIT": "%1 %2 初始化4位時鐘數碼管 (I2C)",
            "FOURDIGITCLOCKDISPLAY_SETBRIGHTNESS": "%1 %2 設置4位時鐘數碼管亮度 %3",
            "FOURDIGITCLOCKDISPLAY_SETPOINT": "%1 %2 4位時鐘數碼管設置點 %3",
            "FOURDIGITCLOCKDISPLAY_SETPOINT_TOOLTIP": "將在下次更新顯示後生效.",
            "FOURDIGITCLOCKDISPLAY_STATE_OFF": "關閉",
            "FOURDIGITCLOCKDISPLAY_STATE_ON": "打開"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
