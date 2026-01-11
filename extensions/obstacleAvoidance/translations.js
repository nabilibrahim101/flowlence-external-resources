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
            "obstacleAvoidance.name": "Obstacle Avoidance",
            "obstacleAvoidance.description": "IR obstacle avoidance sensor for detecting objects."
        },
        "zh-cn": {
            "obstacleAvoidance.name": "避障传感器",
            "obstacleAvoidance.description": "红外避障传感器用于检测物体。"
        },
        "ar": {
            "obstacleAvoidance.name": "تجنب العوائق",
            "obstacleAvoidance.description": "مستشعر تجنب العوائق بالأشعة تحت الحمراء للكشف عن الأجسام."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "OBSTACLEAVOIDANCE_CATEGORY": "Obstacle Avoidance",
            "OBSTACLEAVOIDANCE_DETECTED": "obstacle detected on pin %1?",
            "OBSTACLEAVOIDANCE_READ_VALUE": "IR sensor pin %1 value"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "OBSTACLEAVOIDANCE_CATEGORY": "避障传感器",
            "OBSTACLEAVOIDANCE_DETECTED": "引脚 %1 检测到障碍物?",
            "OBSTACLEAVOIDANCE_READ_VALUE": "红外传感器引脚 %1 值"
        }
    );

    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "OBSTACLEAVOIDANCE_CATEGORY": "تجنب العوائق",
            "OBSTACLEAVOIDANCE_DETECTED": "كشف عائق على الدبوس %1؟",
            "OBSTACLEAVOIDANCE_READ_VALUE": "مستشعر الأشعة تحت الحمراء الدبوس %1 قيمة"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
