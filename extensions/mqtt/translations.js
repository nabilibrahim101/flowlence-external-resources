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
            "MQTT_CONNECT": "%1 connect to broker %2 port %3 client ID %4",
            "MQTT_CONNECT_AUTH": "%1 connect to broker %2 port %3 client ID %4 user %5 password %6",
            "MQTT_PUBLISH": "%1 publish to topic %2 message %3",
            "MQTT_SUBSCRIBE": "%1 subscribe to topic %2",
            "MQTT_IS_CONNECTED": "%1 is connected?",
            "MQTT_LOOP": "%1 MQTT loop",
            "MQTT_DISCONNECT": "%1 disconnect"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "MQTT_CATEGORY": "MQTT",
            "MQTT_CONNECT": "%1 连接到代理 %2 端口 %3 客户端ID %4",
            "MQTT_CONNECT_AUTH": "%1 连接到代理 %2 端口 %3 客户端ID %4 用户 %5 密码 %6",
            "MQTT_PUBLISH": "%1 发布到主题 %2 消息 %3",
            "MQTT_SUBSCRIBE": "%1 订阅主题 %2",
            "MQTT_IS_CONNECTED": "%1 已连接?",
            "MQTT_LOOP": "%1 MQTT循环",
            "MQTT_DISCONNECT": "%1 断开连接"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "MQTT_CATEGORY": "MQTT",
            "MQTT_CONNECT": "%1 الاتصال بالوسيط %2 المنفذ %3 معرف العميل %4",
            "MQTT_CONNECT_AUTH": "%1 الاتصال بالوسيط %2 المنفذ %3 معرف العميل %4 المستخدم %5 كلمة المرور %6",
            "MQTT_PUBLISH": "%1 نشر إلى الموضوع %2 الرسالة %3",
            "MQTT_SUBSCRIBE": "%1 الاشتراك في الموضوع %2",
            "MQTT_IS_CONNECTED": "%1 متصل؟",
            "MQTT_LOOP": "%1 حلقة MQTT",
            "MQTT_DISCONNECT": "%1 قطع الاتصال"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
