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
            "waterLevel.name": "Water Level Sensor",
            "waterLevel.description": "Detect water level for flood monitoring and smart irrigation."
        },
        "zh-cn": {
            "waterLevel.name": "水位传感器",
            "waterLevel.description": "检测水位，用于洪水监测和智能灌溉。"
        },
        "ar": {
            "waterLevel.name": "مستشعر مستوى المياه",
            "waterLevel.description": "كشف مستوى المياه لمراقبة الفيضانات والري الذكي."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "WATERLEVEL_CATEGORY": "Water Level",
            "WATERLEVEL_INIT": "%1 %2 initialize water level sensor pin %3",
            "WATERLEVEL_CALIBRATE": "%1 %2 calibrate: min value %3 max value %4",
            "WATERLEVEL_READVALUE": "%1 %2 read water level raw value",
            "WATERLEVEL_READPERCENT": "%1 %2 read water level %",
            "WATERLEVEL_ISLOW": "%1 %2 water level is low (below %3 %)?"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "WATERLEVEL_CATEGORY": "水位",
            "WATERLEVEL_INIT": "%1 %2 初始化水位传感器引脚 %3",
            "WATERLEVEL_CALIBRATE": "%1 %2 校准: 最小值 %3 最大值 %4",
            "WATERLEVEL_READVALUE": "%1 %2 读取水位原始值",
            "WATERLEVEL_READPERCENT": "%1 %2 读取水位百分比",
            "WATERLEVEL_ISLOW": "%1 %2 水位过低 (低于 %3 %)?"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "WATERLEVEL_CATEGORY": "مستوى المياه",
            "WATERLEVEL_INIT": "%1 %2 تهيئة مستشعر مستوى المياه منفذ %3",
            "WATERLEVEL_CALIBRATE": "%1 %2 معايرة: القيمة الدنيا %3 القيمة القصوى %4",
            "WATERLEVEL_READVALUE": "%1 %2 قراءة قيمة مستوى المياه الخام",
            "WATERLEVEL_READPERCENT": "%1 %2 قراءة نسبة مستوى المياه %",
            "WATERLEVEL_ISLOW": "%1 %2 مستوى المياه منخفض (أقل من %3 %)؟"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
