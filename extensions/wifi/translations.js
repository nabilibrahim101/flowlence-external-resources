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
            "wifi.name": "WiFi",
            "wifi.description": "Connect to WiFi networks and manage wireless connectivity."
        },
        "zh-cn": {
            "wifi.name": "WiFi",
            "wifi.description": "连接到WiFi网络并管理无线连接。"
        },
        "ar": {
            "wifi.name": "واي فاي",
            "wifi.description": "الاتصال بشبكات WiFi وإدارة الاتصال اللاسلكي."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "WIFI_CATEGORY": "WiFi",
            "WIFI_CONNECT": "connect to WiFi SSID %1 password %2",
            "WIFI_IS_CONNECTED": "WiFi is connected?",
            "WIFI_WAIT_CONNECTED": "wait until WiFi connected",
            "WIFI_GET_IP": "WiFi IP address",
            "WIFI_GET_RSSI": "WiFi signal strength (RSSI)",
            "WIFI_GET_MAC": "WiFi MAC address",
            "WIFI_DISCONNECT": "disconnect WiFi"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "WIFI_CATEGORY": "WiFi",
            "WIFI_CONNECT": "连接到WiFi SSID %1 密码 %2",
            "WIFI_IS_CONNECTED": "WiFi已连接？",
            "WIFI_WAIT_CONNECTED": "等待WiFi连接",
            "WIFI_GET_IP": "WiFi IP地址",
            "WIFI_GET_RSSI": "WiFi信号强度 (RSSI)",
            "WIFI_GET_MAC": "WiFi MAC地址",
            "WIFI_DISCONNECT": "断开WiFi连接"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "WIFI_CATEGORY": "واي فاي",
            "WIFI_CONNECT": "الاتصال بشبكة WiFi اسم الشبكة %1 كلمة المرور %2",
            "WIFI_IS_CONNECTED": "هل WiFi متصل؟",
            "WIFI_WAIT_CONNECTED": "انتظر حتى يتم الاتصال بـ WiFi",
            "WIFI_GET_IP": "عنوان IP لـ WiFi",
            "WIFI_GET_RSSI": "قوة إشارة WiFi (RSSI)",
            "WIFI_GET_MAC": "عنوان MAC لـ WiFi",
            "WIFI_DISCONNECT": "قطع الاتصال بـ WiFi"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
