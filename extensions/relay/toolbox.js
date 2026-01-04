/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs() {
    return `
<category name="%{BKY_RELAY_CATEGORY}" id="RELAY_CATEGORY" colour="#2196F3" secondaryColour="#1976D2">
    <block type="relay_output" id="relay_output">
        <field name="PIN">26</field>
        <field name="STATE">HIGH</field>
    </block>
</category>`;
}

exports = registerToolboxs;
