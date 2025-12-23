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
            "pirMotion.name": "PIR Motion Sensor",
            "pirMotion.description": "Detect motion using passive infrared sensor for security and automation."
        },
        "zh-cn": {
            "pirMotion.name": "人体红外传感器",
            "pirMotion.description": "使用被动红外传感器检测运动，用于安防和自动化。"
        },
        "ar": {
            "pirMotion.name": "مستشعر الحركة PIR",
            "pirMotion.description": "كشف الحركة باستخدام مستشعر الأشعة تحت الحمراء للأمان والأتمتة."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "PIRMOTION_CATEGORY": "PIR Motion",
            "PIRMOTION_INIT": "initialize PIR motion sensor pin %1",
            "PIRMOTION_DETECTED": "motion detected?",
            "PIRMOTION_WAITUNTILMOTION": "wait until motion detected",
            "PIRMOTION_WAITUNTILNOMOTION": "wait until no motion"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "PIRMOTION_CATEGORY": "人体红外",
            "PIRMOTION_INIT": "初始化人体红外传感器引脚 %1",
            "PIRMOTION_DETECTED": "检测到运动?",
            "PIRMOTION_WAITUNTILMOTION": "等待直到检测到运动",
            "PIRMOTION_WAITUNTILNOMOTION": "等待直到没有运动"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "PIRMOTION_CATEGORY": "مستشعر الحركة",
            "PIRMOTION_INIT": "تهيئة مستشعر الحركة PIR منفذ %1",
            "PIRMOTION_DETECTED": "تم كشف حركة؟",
            "PIRMOTION_WAITUNTILMOTION": "انتظر حتى يتم كشف حركة",
            "PIRMOTION_WAITUNTILNOMOTION": "انتظر حتى لا توجد حركة"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
