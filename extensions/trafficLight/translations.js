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
            "trafficLight.name": "Traffic Light",
            "trafficLight.description": "Control traffic light module with red, orange, and green LEDs."
        },
        "zh-cn": {
            "trafficLight.name": "交通灯",
            "trafficLight.description": "控制带有红色、橙色和绿色LED的交通灯模块。"
        },
        "ar": {
            "trafficLight.name": "إشارة المرور",
            "trafficLight.description": "التحكم في وحدة إشارة المرور مع LED أحمر وبرتقالي وأخضر."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "TRAFFICLIGHT_CATEGORY": "Traffic Light",
            "TRAFFICLIGHT_SET": "set %1 light pin %2 to %3",
            "TRAFFICLIGHT_RED": "red",
            "TRAFFICLIGHT_ORANGE": "orange",
            "TRAFFICLIGHT_GREEN": "green",
            "TRAFFICLIGHT_ON": "ON",
            "TRAFFICLIGHT_OFF": "OFF"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TRAFFICLIGHT_CATEGORY": "交通灯",
            "TRAFFICLIGHT_SET": "设置 %1 灯引脚 %2 为 %3",
            "TRAFFICLIGHT_RED": "红",
            "TRAFFICLIGHT_ORANGE": "橙",
            "TRAFFICLIGHT_GREEN": "绿",
            "TRAFFICLIGHT_ON": "开",
            "TRAFFICLIGHT_OFF": "关"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "TRAFFICLIGHT_CATEGORY": "إشارة المرور",
            "TRAFFICLIGHT_SET": "ضبط ضوء %1 منفذ %2 إلى %3",
            "TRAFFICLIGHT_RED": "أحمر",
            "TRAFFICLIGHT_ORANGE": "برتقالي",
            "TRAFFICLIGHT_GREEN": "أخضر",
            "TRAFFICLIGHT_ON": "تشغيل",
            "TRAFFICLIGHT_OFF": "إيقاف"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
