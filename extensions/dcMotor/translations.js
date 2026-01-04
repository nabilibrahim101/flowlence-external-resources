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
            "DCMOTOR_DIGITAL": "motor INA pin %1 state %2 INB pin %3 state %4",
            "DCMOTOR_ANALOG": "motor INA pin %1 state %2 INB pin %3 speed %4"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "DCMOTOR_CATEGORY": "直流电机",
            "DCMOTOR_DIGITAL": "直流电机 INA引脚 %1 电平 %2 INB引脚 %3 电平 %4",
            "DCMOTOR_ANALOG": "直流电机 INA引脚 %1 电平 %2 INB引脚 %3 速度 %4"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "DCMOTOR_CATEGORY": "محرك DC",
            "DCMOTOR_DIGITAL": "محرك INA منفذ %1 حالة %2 INB منفذ %3 حالة %4",
            "DCMOTOR_ANALOG": "محرك INA منفذ %1 حالة %2 INB منفذ %3 سرعة %4"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
