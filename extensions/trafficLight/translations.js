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
            "TRAFFICLIGHT_INIT": "%1 %2 init traffic light red %3 orange %4 green %5",
            "TRAFFICLIGHT_SET": "%1 %2 set %3 light to %4",
            "TRAFFICLIGHT_RED": "Red",
            "TRAFFICLIGHT_ORANGE": "Orange",
            "TRAFFICLIGHT_GREEN": "Green",
            "TRAFFICLIGHT_ON": "ON",
            "TRAFFICLIGHT_OFF": "OFF",
            "TRAFFICLIGHT_SET_ALL": "%1 %2 red %3 orange %4 green %5"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TRAFFICLIGHT_CATEGORY": "交通灯",
            "TRAFFICLIGHT_INIT": "%1 %2 初始化交通灯 红 %3 橙 %4 绿 %5",
            "TRAFFICLIGHT_SET": "%1 %2 设置 %3 灯为 %4",
            "TRAFFICLIGHT_RED": "红",
            "TRAFFICLIGHT_ORANGE": "橙",
            "TRAFFICLIGHT_GREEN": "绿",
            "TRAFFICLIGHT_ON": "开",
            "TRAFFICLIGHT_OFF": "关",
            "TRAFFICLIGHT_SET_ALL": "%1 %2 红 %3 橙 %4 绿 %5"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "TRAFFICLIGHT_CATEGORY": "إشارة المرور",
            "TRAFFICLIGHT_INIT": "%1 %2 تهيئة إشارة المرور أحمر %3 برتقالي %4 أخضر %5",
            "TRAFFICLIGHT_SET": "%1 %2 ضبط ضوء %3 إلى %4",
            "TRAFFICLIGHT_RED": "أحمر",
            "TRAFFICLIGHT_ORANGE": "برتقالي",
            "TRAFFICLIGHT_GREEN": "أخضر",
            "TRAFFICLIGHT_ON": "تشغيل",
            "TRAFFICLIGHT_OFF": "إيقاف",
            "TRAFFICLIGHT_SET_ALL": "%1 %2 أحمر %3 برتقالي %4 أخضر %5"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
