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
            "lightSensor.name": "Light Sensor (Photoresistance)",
            "lightSensor.description": "Photoresistance sensor for measuring light intensity."
        },
        "zh-cn": {
            "lightSensor.name": "光线传感器",
            "lightSensor.description": "光敏电阻传感器用于测量光照强度。"
        },
        "ar": {
            "lightSensor.name": "مستشعر الضوء",
            "lightSensor.description": "مستشعر المقاومة الضوئية لقياس شدة الضوء."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "LIGHTSENSOR_CATEGORY": "Light Sensor",
            "LIGHTSENSOR_READ_VALUE": "light sensor pin %1 value"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "LIGHTSENSOR_CATEGORY": "光线传感器",
            "LIGHTSENSOR_READ_VALUE": "光线传感器引脚 %1 值"
        }
    );

    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "LIGHTSENSOR_CATEGORY": "مستشعر الضوء",
            "LIGHTSENSOR_READ_VALUE": "مستشعر الضوء الدبوس %1 قيمة"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
