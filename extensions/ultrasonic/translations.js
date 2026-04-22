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
            "ultrasonic.name": "Ultrasonic",
            "ultrasonic.description": "Standard ultrasonic distance measurement module."
        },
        "ru": {
            "ultrasonic.name": "Ультразвуковой",
            "ultrasonic.description": "Стандартный модуль ультразвукового измерения расстояния."
        },
        "zh-cn": {
            "ultrasonic.name": "超声波",
            "ultrasonic.description": "标准的超声波测距传感器模块。"
        },
        "zh-tw": {
            "ultrasonic.name": "超聲波",
            "ultrasonic.description": "標準的超聲波測距傳感器模塊。"
        }
    };
}

function registerScratchExtensionTranslations () {
    return {
        "en": {
            "ultrasonic.categoryName": "Ultrasonic",
            "ultrasonic.readDistance": "ultrasonic sensor pin TRIG [TRIG] ECHO [ECHO] read distance [UNIT]"
        },
        "ru": {
            "ultrasonic.categoryName": "Ультразвуковой",
            "ultrasonic.readDistance": "пины ультразвукового датчика TRIG [TRIG] ECHO [ECHO] расстояние считывания [UNIT]"
        },
        "zh-cn": {
            "ultrasonic.categoryName": "超声波",
            "ultrasonic.readDistance": "超声波传感器引脚 TRIG [TRIG] ECHO [ECHO] 读取距离 [UNIT]"
        },
        "zh-tw": {
            "ultrasonic.categoryName": "超聲波",
            "ultrasonic.readDistance": "超聲波傳感器管腳 TRIG [TRIG] ECHO [ECHO] 讀取距離 [UNIT]"
        }
    };
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "ULTRASONIC_CATEGORY": "Ultrasonic",
            "ULTRASONIC_READ_DISTANCE": "%1 %2 ultrasonic sensor pin TRIG %3 ECHO %4 read distance %5"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "ULTRASONIC_CATEGORY": "Ультразвуковой",
            "ULTRASONIC_READ_DISTANCE": "%1 %2 пины ультразвукового датчика TRIG %3 ECHO %4 расстояние считывания %5"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "ULTRASONIC_CATEGORY": "超声波",
            "ULTRASONIC_READ_DISTANCE": "%1 %2 超声波传感器引脚 TRIG %3 ECHO %4 读取距离 %5"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "ULTRASONIC_CATEGORY": "超聲波",
            "ULTRASONIC_READ_DISTANCE": "%1 %2 超聲波傳感器管腳 TRIG %3 ECHO %4 讀取距離 %5"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
