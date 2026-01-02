/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function registerTranslations (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: 'initialize RFID RC522 (I2C)',
        RFIDRC522_READ: 'read RFID card value',
        RFIDRC522_IS_NEW_CARD: 'new card detected?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: '初始化 RFID RC522 (I2C)',
        RFIDRC522_READ: '读取RFID卡值',
        RFIDRC522_IS_NEW_CARD: '检测到新卡?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: '初始化 RFID RC522 (I2C)',
        RFIDRC522_READ: '讀取RFID卡值',
        RFIDRC522_IS_NEW_CARD: '偵測到新卡?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ar'], {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: 'تهيئة RFID RC522 (I2C)',
        RFIDRC522_READ: 'قراءة قيمة بطاقة RFID',
        RFIDRC522_IS_NEW_CARD: 'تم اكتشاف بطاقة جديدة؟'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: 'inicializar RFID RC522 (I2C)',
        RFIDRC522_READ: 'leer valor de tarjeta RFID',
        RFIDRC522_IS_NEW_CARD: '¿nueva tarjeta detectada?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: 'initialiser RFID RC522 (I2C)',
        RFIDRC522_READ: 'lire la valeur de la carte RFID',
        RFIDRC522_IS_NEW_CARD: 'nouvelle carte détectée?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: 'RFID RC522 initialisieren (I2C)',
        RFIDRC522_READ: 'RFID-Kartenwert lesen',
        RFIDRC522_IS_NEW_CARD: 'neue Karte erkannt?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: 'RFID RC522を初期化 (I2C)',
        RFIDRC522_READ: 'RFIDカード値を読み取る',
        RFIDRC522_IS_NEW_CARD: '新しいカードを検出?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: 'RFID RC522 초기화 (I2C)',
        RFIDRC522_READ: 'RFID 카드 값 읽기',
        RFIDRC522_IS_NEW_CARD: '새 카드 감지됨?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: 'inicializar RFID RC522 (I2C)',
        RFIDRC522_READ: 'ler valor do cartão RFID',
        RFIDRC522_IS_NEW_CARD: 'novo cartão detectado?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: 'инициализировать RFID RC522 (I2C)',
        RFIDRC522_READ: 'прочитать значение RFID карты',
        RFIDRC522_IS_NEW_CARD: 'обнаружена новая карта?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: 'inizializza RFID RC522 (I2C)',
        RFIDRC522_READ: 'leggi valore carta RFID',
        RFIDRC522_IS_NEW_CARD: 'nuova carta rilevata?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        RFIDRC522_CATEGORY: 'RFID RC522',
        RFIDRC522_INIT: 'inicjalizuj RFID RC522 (I2C)',
        RFIDRC522_READ: 'odczytaj wartość karty RFID',
        RFIDRC522_IS_NEW_CARD: 'wykryto nową kartę?'
    });
    return Blockly;
}

exports = registerTranslations;
