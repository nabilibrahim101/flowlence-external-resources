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
            "relay.name": "Relay",
            "relay.description": "Control relay module for switching high-power devices."
        },
        "zh-cn": {
            "relay.name": "继电器",
            "relay.description": "控制继电器模块，用于切换大功率设备。"
        },
        "ar": {
            "relay.name": "مُرحّل",
            "relay.description": "التحكم في وحدة المُرحّل لتبديل الأجهزة ذات الطاقة العالية."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "RELAY_CATEGORY": "Relay",
            "RELAY_OUTPUT": "%1 relay pin %2 output %3",
            "RELAY_ON": "ON",
            "RELAY_OFF": "OFF"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "RELAY_CATEGORY": "继电器",
            "RELAY_OUTPUT": "%1 继电器引脚 %2 输出 %3",
            "RELAY_ON": "开",
            "RELAY_OFF": "关"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "RELAY_CATEGORY": "مُرحّل",
            "RELAY_OUTPUT": "%1 مُرحّل منفذ %2 مخرج %3",
            "RELAY_ON": "تشغيل",
            "RELAY_OFF": "إيقاف"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
