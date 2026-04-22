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
            "hornAmplifier.name": "Horn Buzzer Amplifier",
            "hornAmplifier.description": "Horn 8002b audio power amplifier module. Louder passive buzzer for melodies and sound effects."
        },
        "zh-cn": {
            "hornAmplifier.name": "喇叭8002b功放",
            "hornAmplifier.description": "喇叭8002b音频功放模块。用于播放音乐和音效的大音量无源蜂鸣器。"
        },
        "ar": {
            "hornAmplifier.name": "مكبر صوت 8002b",
            "hornAmplifier.description": "وحدة مكبر صوت 8002b. جرس سلبي بصوت عالٍ للألحان والمؤثرات الصوتية."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "HORNAMPLIFIER_CATEGORY": "Horn Amplifier",
            "HORNAMPLIFIER_INIT": "%1 %2 initialize horn amplifier pin %3",
            "HORNAMPLIFIER_PLAYTONEFORBEAT": "%1 %2 play note %3 for %4 beat",
            "HORNAMPLIFIER_PLAYTONEFORMS": "%1 %2 play tone %3 Hz for %4 ms",
            "HORNAMPLIFIER_SETTEMPO": "%1 %2 set tempo to %3 BPM",
            "HORNAMPLIFIER_STOP": "%1 %2 stop sound",
            "HORNAMPLIFIER_PLAYRINGTONE": "%1 %2 play ringtone %3",
            "HORNAMPLIFIER_CONNECTION": "connection",
            "HORNAMPLIFIER_DISCONNECTION": "disconnection",
            "HORNAMPLIFIER_DIDI": "button pushed",
            "HORNAMPLIFIER_MODE1": "mode 1",
            "HORNAMPLIFIER_MODE2": "mode 2",
            "HORNAMPLIFIER_MODE3": "mode 3",
            "HORNAMPLIFIER_SURPRISE": "surprise",
            "HORNAMPLIFIER_OHOOH": "oh ooh",
            "HORNAMPLIFIER_OHOOH2": "oh ooh 2",
            "HORNAMPLIFIER_CUDDLY": "cuddly",
            "HORNAMPLIFIER_SLEEPING": "sleeping",
            "HORNAMPLIFIER_HAPPY": "happy",
            "HORNAMPLIFIER_SUPERHAPPY": "super happy",
            "HORNAMPLIFIER_HAPPYSHORT": "happy short",
            "HORNAMPLIFIER_SAD": "sad",
            "HORNAMPLIFIER_CONFUSED": "confused",
            "HORNAMPLIFIER_FART1": "fart 1",
            "HORNAMPLIFIER_FART2": "fart 2",
            "HORNAMPLIFIER_FART3": "fart 3"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "HORNAMPLIFIER_CATEGORY": "喇叭功放",
            "HORNAMPLIFIER_INIT": "%1 %2 初始化喇叭功放引脚 %3",
            "HORNAMPLIFIER_PLAYTONEFORBEAT": "%1 %2 播放音符 %3 持续 %4 拍",
            "HORNAMPLIFIER_PLAYTONEFORMS": "%1 %2 播放频率 %3 赫兹 持续 %4 毫秒",
            "HORNAMPLIFIER_SETTEMPO": "%1 %2 设置节拍为 %3 BPM",
            "HORNAMPLIFIER_STOP": "%1 %2 停止声音",
            "HORNAMPLIFIER_PLAYRINGTONE": "%1 %2 播放铃声 %3",
            "HORNAMPLIFIER_CONNECTION": "连接",
            "HORNAMPLIFIER_DISCONNECTION": "断开",
            "HORNAMPLIFIER_DIDI": "按钮按下",
            "HORNAMPLIFIER_MODE1": "模式1",
            "HORNAMPLIFIER_MODE2": "模式2",
            "HORNAMPLIFIER_MODE3": "模式3",
            "HORNAMPLIFIER_SURPRISE": "惊喜",
            "HORNAMPLIFIER_OHOOH": "哦噢",
            "HORNAMPLIFIER_OHOOH2": "哦噢2",
            "HORNAMPLIFIER_CUDDLY": "可爱",
            "HORNAMPLIFIER_SLEEPING": "睡觉",
            "HORNAMPLIFIER_HAPPY": "开心",
            "HORNAMPLIFIER_SUPERHAPPY": "超开心",
            "HORNAMPLIFIER_HAPPYSHORT": "短开心",
            "HORNAMPLIFIER_SAD": "悲伤",
            "HORNAMPLIFIER_CONFUSED": "困惑",
            "HORNAMPLIFIER_FART1": "放屁1",
            "HORNAMPLIFIER_FART2": "放屁2",
            "HORNAMPLIFIER_FART3": "放屁3"
        }
    );

    // Initialize ar locale if it doesn't exist
    if (!Blockly.ScratchMsgs.locales["ar"]) {
        Blockly.ScratchMsgs.locales["ar"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["ar"],
        {
            "HORNAMPLIFIER_CATEGORY": "مكبر صوت",
            "HORNAMPLIFIER_INIT": "%1 %2 تهيئة منفذ مكبر الصوت %3",
            "HORNAMPLIFIER_PLAYTONEFORBEAT": "%1 %2 تشغيل نغمة %3 لمدة %4 ضربة",
            "HORNAMPLIFIER_PLAYTONEFORMS": "%1 %2 تشغيل تردد %3 هرتز لمدة %4 مللي ثانية",
            "HORNAMPLIFIER_SETTEMPO": "%1 %2 ضبط الإيقاع إلى %3 BPM",
            "HORNAMPLIFIER_STOP": "%1 %2 إيقاف الصوت",
            "HORNAMPLIFIER_PLAYRINGTONE": "%1 %2 تشغيل نغمة الرنين %3",
            "HORNAMPLIFIER_CONNECTION": "اتصال",
            "HORNAMPLIFIER_DISCONNECTION": "قطع اتصال",
            "HORNAMPLIFIER_DIDI": "ضغط زر",
            "HORNAMPLIFIER_MODE1": "الوضع 1",
            "HORNAMPLIFIER_MODE2": "الوضع 2",
            "HORNAMPLIFIER_MODE3": "الوضع 3",
            "HORNAMPLIFIER_SURPRISE": "مفاجأة",
            "HORNAMPLIFIER_OHOOH": "أوه أوه",
            "HORNAMPLIFIER_OHOOH2": "أوه أوه 2",
            "HORNAMPLIFIER_CUDDLY": "لطيف",
            "HORNAMPLIFIER_SLEEPING": "نائم",
            "HORNAMPLIFIER_HAPPY": "سعيد",
            "HORNAMPLIFIER_SUPERHAPPY": "سعيد جداً",
            "HORNAMPLIFIER_HAPPYSHORT": "سعيد قصير",
            "HORNAMPLIFIER_SAD": "حزين",
            "HORNAMPLIFIER_CONFUSED": "مرتبك",
            "HORNAMPLIFIER_FART1": "ضراط 1",
            "HORNAMPLIFIER_FART2": "ضراط 2",
            "HORNAMPLIFIER_FART3": "ضراط 3"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
