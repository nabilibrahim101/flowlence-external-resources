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
            "thingsboard.name": "WiFi & ThingsBoard",
            "thingsboard.description": "Connect to WiFi and send sensor data to ThingsBoard IoT platform."
        },
        "zh-cn": {
            "thingsboard.name": "WiFi & ThingsBoard",
            "thingsboard.description": "连接WiFi并将传感器数据发送到ThingsBoard物联网平台。"
        },
        "ar": {
            "thingsboard.name": "WiFi و ThingsBoard",
            "thingsboard.description": "الاتصال بشبكة WiFi وإرسال بيانات المستشعرات إلى منصة ThingsBoard لإنترنت الأشياء."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "THINGSBOARD_CATEGORY": "WiFi & ThingsBoard",
            "THINGSBOARD_WIFI_CONNECT": "connect to WiFi SSID %1 password %2",
            "THINGSBOARD_WIFI_IS_CONNECTED": "WiFi is connected?",
            "THINGSBOARD_WIFI_WAIT_CONNECTED": "wait until WiFi connected",
            "THINGSBOARD_WIFI_GET_IP": "get IP address",
            "THINGSBOARD_WIFI_DISCONNECT": "disconnect WiFi",
            "THINGSBOARD_CONNECT": "connect to ThingsBoard server %1 device token %2",
            "THINGSBOARD_IS_CONNECTED": "ThingsBoard is connected?",
            "THINGSBOARD_SEND_KEY_VALUE": "send to ThingsBoard key %1 value %2",
            "THINGSBOARD_SEND_MULTIPLE": "send to ThingsBoard %1 = %2 and %3 = %4",
            "THINGSBOARD_LOOP": "ThingsBoard keep connection alive",
            "THINGSBOARD_DISCONNECT": "disconnect from ThingsBoard"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "THINGSBOARD_CATEGORY": "WiFi & ThingsBoard",
            "THINGSBOARD_WIFI_CONNECT": "连接WiFi 名称 %1 密码 %2",
            "THINGSBOARD_WIFI_IS_CONNECTED": "WiFi已连接?",
            "THINGSBOARD_WIFI_WAIT_CONNECTED": "等待WiFi连接",
            "THINGSBOARD_WIFI_GET_IP": "获取IP地址",
            "THINGSBOARD_WIFI_DISCONNECT": "断开WiFi",
            "THINGSBOARD_CONNECT": "连接ThingsBoard服务器 %1 设备令牌 %2",
            "THINGSBOARD_IS_CONNECTED": "ThingsBoard已连接?",
            "THINGSBOARD_SEND_KEY_VALUE": "发送到ThingsBoard 键 %1 值 %2",
            "THINGSBOARD_SEND_MULTIPLE": "发送到ThingsBoard %1 = %2 和 %3 = %4",
            "THINGSBOARD_LOOP": "ThingsBoard保持连接",
            "THINGSBOARD_DISCONNECT": "断开ThingsBoard连接"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "THINGSBOARD_CATEGORY": "WiFi و ThingsBoard",
            "THINGSBOARD_WIFI_CONNECT": "الاتصال بشبكة WiFi اسم %1 كلمة المرور %2",
            "THINGSBOARD_WIFI_IS_CONNECTED": "WiFi متصل؟",
            "THINGSBOARD_WIFI_WAIT_CONNECTED": "انتظر حتى يتصل WiFi",
            "THINGSBOARD_WIFI_GET_IP": "الحصول على عنوان IP",
            "THINGSBOARD_WIFI_DISCONNECT": "قطع اتصال WiFi",
            "THINGSBOARD_CONNECT": "الاتصال بخادم ThingsBoard %1 رمز الجهاز %2",
            "THINGSBOARD_IS_CONNECTED": "ThingsBoard متصل؟",
            "THINGSBOARD_SEND_KEY_VALUE": "إرسال إلى ThingsBoard مفتاح %1 قيمة %2",
            "THINGSBOARD_SEND_MULTIPLE": "إرسال إلى ThingsBoard %1 = %2 و %3 = %4",
            "THINGSBOARD_LOOP": "ThingsBoard إبقاء الاتصال نشطاً",
            "THINGSBOARD_DISCONNECT": "قطع الاتصال من ThingsBoard"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
