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
            "alcoholSensor.name": "Alcohol Sensor",
            "alcoholSensor.description": "Detect alcohol and ethanol vapors using an MQ alcohol sensor."
        },
        "zh-cn": {
            "alcoholSensor.name": "酒精传感器",
            "alcoholSensor.description": "使用MQ酒精传感器检测酒精和乙醇蒸气。"
        },
        "ar": {
            "alcoholSensor.name": "مستشعر الكحول",
            "alcoholSensor.description": "كشف أبخرة الكحول والإيثانول باستخدام مستشعر الكحول MQ."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "ALCOHOLSENSOR_CATEGORY": "Alcohol Sensor",
            "ALCOHOLSENSOR_READ": "%1 alcohol sensor %2 value",
            "ALCOHOLSENSOR_DETECTED": "%1 alcohol detected %2 ?"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "ALCOHOLSENSOR_CATEGORY": "酒精传感器",
            "ALCOHOLSENSOR_READ": "%1 酒精传感器 %2 值",
            "ALCOHOLSENSOR_DETECTED": "%1 检测到酒精 %2 ？"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "ALCOHOLSENSOR_CATEGORY": "مستشعر الكحول",
            "ALCOHOLSENSOR_READ": "%1 قيمة مستشعر الكحول %2",
            "ALCOHOLSENSOR_DETECTED": "%1 هل تم اكتشاف كحول %2 ؟"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
