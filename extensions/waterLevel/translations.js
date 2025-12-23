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
            "WATERLEVEL_INIT": "initialize water level sensor pin %1",
            "WATERLEVEL_READVALUE": "read water level raw value",
            "WATERLEVEL_READPERCENT": "read water level %",
            "WATERLEVEL_ISLOW": "water level is low (below %1 %)?"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "WATERLEVEL_CATEGORY": "水位",
            "WATERLEVEL_INIT": "初始化水位传感器引脚 %1",
            "WATERLEVEL_READVALUE": "读取水位原始值",
            "WATERLEVEL_READPERCENT": "读取水位百分比",
            "WATERLEVEL_ISLOW": "水位过低 (低于 %1 %)?"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "WATERLEVEL_CATEGORY": "مستوى المياه",
            "WATERLEVEL_INIT": "تهيئة مستشعر مستوى المياه منفذ %1",
            "WATERLEVEL_READVALUE": "قراءة قيمة مستوى المياه الخام",
            "WATERLEVEL_READPERCENT": "قراءة نسبة مستوى المياه %",
            "WATERLEVEL_ISLOW": "مستوى المياه منخفض (أقل من %1 %)؟"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
