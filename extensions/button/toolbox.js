/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_BUTTON_CATEGORY}" id="BUTTON_CATEGORY" colour="#FFD500" secondaryColour="#FFA500">
    <block type="button_readState" id="button_readState">
        <field name="pin">A0</field>
    </block>
    <block type="button_readValue" id="button_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}

exports = registerToolboxs;
