/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_RFIDRC522_CATEGORY}" id="RFIDRC522_CATEGORY" colour="#42CCFF" secondaryColour="#00BFFF">
    <block type="rfidRC522_init" id="rfidRC522_init"></block>
    <block type="rfidRC522_read" id="rfidRC522_read"></block>
    <block type="rfidRC522_isNewCard" id="rfidRC522_isNewCard"></block>
</category>`;
}

exports = registerToolboxs;
