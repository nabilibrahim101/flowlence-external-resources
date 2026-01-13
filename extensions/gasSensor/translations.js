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
            "gasSensor.name": "Gas Sensor",
            "gasSensor.description": "Detect gases like smoke, LPG, and natural gas using an analog gas sensor."
        },
        "zh-cn": {
            "gasSensor.name": "气体传感器",
            "gasSensor.description": "使用模拟气体传感器检测烟雾、液化石油气和天然气等气体。"
        },
        "ar": {
            "gasSensor.name": "مستشعر الغاز",
            "gasSensor.description": "كشف الغازات مثل الدخان وغاز البترول المسال والغاز الطبيعي باستخدام مستشعر الغاز التناظري."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "GASSENSOR_CATEGORY": "Gas Sensor",
            "GASSENSOR_READ": "%1 gas sensor %2 value",
            "GASSENSOR_DETECTED": "%1 gas detected %2 ?"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "GASSENSOR_CATEGORY": "气体传感器",
            "GASSENSOR_READ": "%1 气体传感器 %2 值",
            "GASSENSOR_DETECTED": "%1 检测到气体 %2 ？"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "GASSENSOR_CATEGORY": "مستشعر الغاز",
            "GASSENSOR_READ": "%1 قيمة مستشعر الغاز %2",
            "GASSENSOR_DETECTED": "%1 هل تم اكتشاف غاز %2 ؟"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
