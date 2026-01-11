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
            "adxl345.name": "ADXL345 Acceleration Sensor",
            "adxl345.description": "ADXL345 3-axis digital accelerometer sensor (I2C)."
        },
        "zh-cn": {
            "adxl345.name": "ADXL345 加速度传感器",
            "adxl345.description": "ADXL345 三轴数字加速度计传感器（I2C）。"
        },
        "ar": {
            "adxl345.name": "مستشعر التسارع ADXL345",
            "adxl345.description": "مستشعر مقياس التسارع الرقمي ثلاثي المحاور ADXL345 (I2C)."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "ADXL345_CATEGORY": "ADXL345",
            "ADXL345_READ": "ADXL345 read %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "ADXL345_CATEGORY": "ADXL345",
            "ADXL345_READ": "读取ADXL345 %1"
        }
    );

    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "ADXL345_CATEGORY": "ADXL345",
            "ADXL345_READ": "قراءة ADXL345 %1"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
