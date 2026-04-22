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
            "dcMotor.name": "DC Motor",
            "dcMotor.description": "DC Motor driver for ESP32"
        },
        "zh-cn": {
            "dcMotor.name": "直流电机",
            "dcMotor.description": "ESP32直流电机驱动"
        },
        "ar": {
            "dcMotor.name": "محرك DC",
            "dcMotor.description": "تحكم بمحرك DC لـ ESP32"
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "DCMOTOR_CATEGORY": "DC Motor",
            "DCMOTOR_DIGITAL": "%1 %2 motor INA pin %3 state %4 INB pin %5 state %6",
            "DCMOTOR_ANALOG": "%1 %2 motor INA pin %3 state %4 INB pin %5 speed %6",
            "DCMOTOR_FAN": "%1 %2 fan IN- %3 IN+ %4 direction %5 speed %6 %"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "DCMOTOR_CATEGORY": "直流电机",
            "DCMOTOR_DIGITAL": "%1 %2 直流电机 INA引脚 %3 电平 %4 INB引脚 %5 电平 %6",
            "DCMOTOR_ANALOG": "%1 %2 直流电机 INA引脚 %3 电平 %4 INB引脚 %5 速度 %6",
            "DCMOTOR_FAN": "%1 %2 风扇 IN- %3 IN+ %4 方向 %5 速度 %6 %"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "DCMOTOR_CATEGORY": "محرك DC",
            "DCMOTOR_DIGITAL": "%1 %2 محرك INA منفذ %3 حالة %4 INB منفذ %5 حالة %6",
            "DCMOTOR_ANALOG": "%1 %2 محرك INA منفذ %3 حالة %4 INB منفذ %5 سرعة %6",
            "DCMOTOR_FAN": "%1 %2 مروحة IN- %3 IN+ %4 اتجاه %5 سرعة %6 %"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
