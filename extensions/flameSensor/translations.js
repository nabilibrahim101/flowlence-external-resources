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
            "flameSensor.name": "Flame Sensor",
            "flameSensor.description": "Detect fire and flames using an infrared flame sensor."
        },
        "zh-cn": {
            "flameSensor.name": "火焰传感器",
            "flameSensor.description": "使用红外火焰传感器检测火焰和火灾。"
        },
        "ar": {
            "flameSensor.name": "مستشعر اللهب",
            "flameSensor.description": "كشف الحريق واللهب باستخدام مستشعر اللهب بالأشعة تحت الحمراء."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "FLAMESENSOR_CATEGORY": "Flame Sensor",
            "FLAMESENSOR_INIT": "%1 init flame sensor pin %2",
            "FLAMESENSOR_READ": "%1 flame sensor value",
            "FLAMESENSOR_DETECTED": "%1 flame detected?"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "FLAMESENSOR_CATEGORY": "火焰传感器",
            "FLAMESENSOR_INIT": "%1 初始化火焰传感器引脚 %2",
            "FLAMESENSOR_READ": "%1 火焰传感器值",
            "FLAMESENSOR_DETECTED": "%1 检测到火焰？"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "FLAMESENSOR_CATEGORY": "مستشعر اللهب",
            "FLAMESENSOR_INIT": "%1 تهيئة مستشعر اللهب المنفذ %2",
            "FLAMESENSOR_READ": "%1 قيمة مستشعر اللهب",
            "FLAMESENSOR_DETECTED": "%1 هل تم اكتشاف لهب؟"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
