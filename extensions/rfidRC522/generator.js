/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    Blockly.Arduino.rfidRC522_init = function () {
        Blockly.Arduino.includes_.rfidRC522_include = `#include <Wire.h>\n#include <MFRC522_I2C.h>`;
        Blockly.Arduino.definitions_.rfidRC522_var = `MFRC522 mfrc522(0x28);`;
        Blockly.Arduino.definitions_.rfidRC522_readFunc = `String rfidRC522_readCard() {
  if (!mfrc522.PICC_IsNewCardPresent() || !mfrc522.PICC_ReadCardSerial()) {
    return "0";
  }
  String rfid_str = "";
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    rfid_str = rfid_str + String(mfrc522.uid.uidByte[i], HEX);
  }
  return rfid_str;
}`;
        Blockly.Arduino.setups_.rfidRC522_setup = `Wire.begin();\n  mfrc522.PCD_Init();`;
        return '';
    };

    Blockly.Arduino.rfidRC522_read = function () {
        return [`rfidRC522_readCard()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
