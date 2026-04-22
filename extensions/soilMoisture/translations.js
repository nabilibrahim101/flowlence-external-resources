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
            "soilMoisture.name": "Soil Moisture Sensor",
            "soilMoisture.description": "Measure soil moisture level for smart irrigation systems."
        },
        "zh-cn": {
            "soilMoisture.name": "土壤湿度传感器",
            "soilMoisture.description": "测量土壤湿度，用于智能灌溉系统。"
        },
        "ar": {
            "soilMoisture.name": "مستشعر رطوبة التربة",
            "soilMoisture.description": "قياس مستوى رطوبة التربة لأنظمة الري الذكية."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "SOILMOISTURE_CATEGORY": "Soil Moisture",
            "SOILMOISTURE_INIT": "%1 %2 initialize soil moisture sensor pin %3",
            "SOILMOISTURE_CALIBRATE": "%1 %2 calibrate: min value %3 max value %4",
            "SOILMOISTURE_READVALUE": "%1 %2 read soil moisture raw value",
            "SOILMOISTURE_READPERCENT": "%1 %2 read soil moisture %",
            "SOILMOISTURE_ISSOILDRY": "%1 %2 soil is dry (below %3 %)?"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "SOILMOISTURE_CATEGORY": "土壤湿度",
            "SOILMOISTURE_INIT": "%1 %2 初始化土壤湿度传感器引脚 %3",
            "SOILMOISTURE_CALIBRATE": "%1 %2 校准: 最小值 %3 最大值 %4",
            "SOILMOISTURE_READVALUE": "%1 %2 读取土壤湿度原始值",
            "SOILMOISTURE_READPERCENT": "%1 %2 读取土壤湿度百分比",
            "SOILMOISTURE_ISSOILDRY": "%1 %2 土壤干燥 (低于 %3 %)?"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "SOILMOISTURE_CATEGORY": "رطوبة التربة",
            "SOILMOISTURE_INIT": "%1 %2 تهيئة مستشعر رطوبة التربة منفذ %3",
            "SOILMOISTURE_CALIBRATE": "%1 %2 معايرة: القيمة الأدنى %3 القيمة القصوى %4",
            "SOILMOISTURE_READVALUE": "%1 %2 قراءة قيمة رطوبة التربة الخام",
            "SOILMOISTURE_READPERCENT": "%1 %2 قراءة نسبة رطوبة التربة %",
            "SOILMOISTURE_ISSOILDRY": "%1 %2 التربة جافة (أقل من %3 %)؟"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
