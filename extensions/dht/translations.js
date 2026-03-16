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
            "dht.name": "DHT Sensor",
            "dht.description": "DHT Temperature and humidity sensor module."
        },
        "ru": {
            "dht.name": "Датчик DHT ",
            "dht.description": "Датчик температуры и влажности DHT "
        },
        "zh-cn": {
            "dht.name": "DHT 传感器",
            "dht.description": "DHT 温湿度传感器模块。"
        },
        "zh-tw": {
            "dht.name": "DHT 傳感器",
            "dht.description": "DHT 溫濕度傳感器模塊。"
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "DHT_CATEGORY": "DHT",
            "DHT_INIT": "%1 init dht %2 pin %3 model %4",
            "DHT_READ_HUMIDITY": "%1 dht %2 read humidity",
            "DHT_READ_TEMPERATURE": "%1 dht %2 read temperature %3"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "DHT_CATEGORY": "датчик температуры и влажности DHT",
            "DHT_INIT": "%1 инициализировать dht %2 пин %3 модель %4",
            "DHT_READ_HUMIDITY": "%1 dht %2 считать влажность",
            "DHT_READ_TEMPERATURE": "%1 dht %2 считать температуру %3"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "DHT_CATEGORY": "DHT",
            "DHT_INIT": "%1 初始化 dht %2 引脚 %3 型号 %4",
            "DHT_READ_HUMIDITY": "%1 dht %2 读取湿度",
            "DHT_READ_TEMPERATURE": "%1 dht %2 读取温度 %3"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "DHT_CATEGORY": "DHT",
            "DHT_INIT": "%1 初始化 dht %2 管腳 %3 型號 %4",
            "DHT_READ_HUMIDITY": "%1 dht %2 讀取濕度",
            "DHT_READ_TEMPERATURE": "%1 dht %2 讀取溫度 %3"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
