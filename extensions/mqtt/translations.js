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
            "mqtt.name": "MQTT",
            "mqtt.description": "Connect to MQTT brokers and publish/subscribe to topics."
        },
        "zh-cn": {
            "mqtt.name": "MQTT",
            "mqtt.description": "连接到MQTT代理并发布/订阅主题。"
        },
        "ar": {
            "mqtt.name": "MQTT",
            "mqtt.description": "الاتصال بوسطاء MQTT ونشر/الاشتراك في المواضيع."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "MQTT_CATEGORY": "MQTT",
            "MQTT_CONNECT": "%1 %2 connect to broker %3 port %4 client ID %5",
            "MQTT_CONNECT_AUTH": "%1 %2 connect to broker %3 port %4 client ID %5 user %6 password %7",
            "MQTT_PUBLISH": "%1 %2 publish to topic %3 message %4",
            "MQTT_SUBSCRIBE": "%1 %2 subscribe to topic %3",
            "MQTT_IS_CONNECTED": "%1 %2 is connected?",
            "MQTT_LOOP": "%1 %2 MQTT loop",
            "MQTT_DISCONNECT": "%1 %2 disconnect"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "MQTT_CATEGORY": "MQTT",
            "MQTT_CONNECT": "%1 %2 连接到代理 %3 端口 %4 客户端ID %5",
            "MQTT_CONNECT_AUTH": "%1 %2 连接到代理 %3 端口 %4 客户端ID %5 用户 %6 密码 %7",
            "MQTT_PUBLISH": "%1 %2 发布到主题 %3 消息 %4",
            "MQTT_SUBSCRIBE": "%1 %2 订阅主题 %3",
            "MQTT_IS_CONNECTED": "%1 %2 已连接?",
            "MQTT_LOOP": "%1 %2 MQTT循环",
            "MQTT_DISCONNECT": "%1 %2 断开连接"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "MQTT_CATEGORY": "MQTT",
            "MQTT_CONNECT": "%1 %2 الاتصال بالوسيط %3 المنفذ %4 معرف العميل %5",
            "MQTT_CONNECT_AUTH": "%1 %2 الاتصال بالوسيط %3 المنفذ %4 معرف العميل %5 المستخدم %6 كلمة المرور %7",
            "MQTT_PUBLISH": "%1 %2 نشر إلى الموضوع %3 الرسالة %4",
            "MQTT_SUBSCRIBE": "%1 %2 الاشتراك في الموضوع %3",
            "MQTT_IS_CONNECTED": "%1 %2 متصل؟",
            "MQTT_LOOP": "%1 %2 حلقة MQTT",
            "MQTT_DISCONNECT": "%1 %2 قطع الاتصال"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
