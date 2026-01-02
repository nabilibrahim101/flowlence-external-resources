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
            "rfidRC522.name": "RFID RC522 (I2C)",
            "rfidRC522.description": "RFID RC522 module using I2C communication."
        },
        "zh-cn": {
            "rfidRC522.name": "RFID RC522 (I2C)",
            "rfidRC522.description": "使用I2C通信的RFID RC522模块。"
        },
        "ar": {
            "rfidRC522.name": "RFID RC522 (I2C)",
            "rfidRC522.description": "وحدة RFID RC522 باستخدام اتصال I2C."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "RFIDRC522_CATEGORY": "RFID RC522",
            "RFIDRC522_INIT": "initialize RFID RC522 (I2C)",
            "RFIDRC522_DETECTED": "RFID card detected?",
            "RFIDRC522_READ": "read RFID card value"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "RFIDRC522_CATEGORY": "RFID RC522",
            "RFIDRC522_INIT": "初始化 RFID RC522 (I2C)",
            "RFIDRC522_DETECTED": "检测到RFID卡？",
            "RFIDRC522_READ": "读取RFID卡值"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "RFIDRC522_CATEGORY": "RFID RC522",
            "RFIDRC522_INIT": "تهيئة RFID RC522 (I2C)",
            "RFIDRC522_DETECTED": "تم اكتشاف بطاقة RFID؟",
            "RFIDRC522_READ": "قراءة قيمة بطاقة RFID"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
