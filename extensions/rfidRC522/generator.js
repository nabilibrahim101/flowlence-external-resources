/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.rfidRC522_init = function () {
        Blockly.Arduino.includes_.rfidRC522_include = '#include <Wire.h>\n#include <MFRC522_I2C.h>';
        Blockly.Arduino.definitions_.rfidRC522_var = 'MFRC522 mfrc522(0x28);';
        Blockly.Arduino.setups_.rfidRC522_setup = 'Wire.begin();\n  mfrc522.PCD_Init();';

        return '';
    };

    Blockly.Arduino.rfidRC522_read = function () {
        // Read RFID card and return its value (empty string if no card)
        Blockly.Arduino.definitions_.zzz_rfidRC522_readFunc = `String rfidRC522_readCard() {
  String cardId = "";
  if (mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial()) {
    for (byte i = 0; i < mfrc522.uid.size; i++) {
      cardId = cardId + String(mfrc522.uid.uidByte[i], HEX);
    }
  }
  return cardId;
}`;
        return ['rfidRC522_readCard()', Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
