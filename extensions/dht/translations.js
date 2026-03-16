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
            "DHT_INIT": "%1 %2 init dht %3 pin %4 model %5",
            "DHT_READ_HUMIDITY": "%1 %2 dht %3 read humidity",
            "DHT_READ_TEMPERATURE": "%1 %2 dht %3 read temperature %4"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "DHT_CATEGORY": "датчик температуры и влажности DHT",
            "DHT_INIT": "%1 %2 инициализировать dht %3 пин %4 модель %5",
            "DHT_READ_HUMIDITY": "%1 %2 dht %3 считать влажность",
            "DHT_READ_TEMPERATURE": "%1 %2 dht %3 считать температуру %4"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "DHT_CATEGORY": "DHT",
            "DHT_INIT": "%1 %2 初始化 dht %3 引脚 %4 型号 %5",
            "DHT_READ_HUMIDITY": "%1 %2 dht %3 读取湿度",
            "DHT_READ_TEMPERATURE": "%1 %2 dht %3 读取温度 %4"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "DHT_CATEGORY": "DHT",
            "DHT_INIT": "%1 %2 初始化 dht %3 管腳 %4 型號 %5",
            "DHT_READ_HUMIDITY": "%1 %2 dht %3 讀取濕度",
            "DHT_READ_TEMPERATURE": "%1 %2 dht %3 讀取溫度 %4"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
