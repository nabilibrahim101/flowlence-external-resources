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
            "steamSensor.name": "Steam Sensor (Rain Detector)",
            "steamSensor.description": "Analog sensor for detecting water vapor, steam, and rain droplets."
        },
        "zh-cn": {
            "steamSensor.name": "蒸汽传感器（雨滴检测器）",
            "steamSensor.description": "用于检测水蒸气、蒸汽和雨滴的模拟传感器。"
        },
        "ar": {
            "steamSensor.name": "مستشعر البخار (كاشف المطر)",
            "steamSensor.description": "مستشعر تناظري للكشف عن بخار الماء والبخار وقطرات المطر."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "STEAMSENSOR_CATEGORY": "Steam Sensor",
            "STEAMSENSOR_READ_VALUE": "steam sensor pin %1 moisture value"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "STEAMSENSOR_CATEGORY": "蒸汽传感器",
            "STEAMSENSOR_READ_VALUE": "蒸汽传感器引脚 %1 湿度值"
        }
    );

    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "STEAMSENSOR_CATEGORY": "مستشعر البخار",
            "STEAMSENSOR_READ_VALUE": "مستشعر البخار الدبوس %1 قيمة الرطوبة"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
