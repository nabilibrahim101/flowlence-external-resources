/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_GASSENSOR_CATEGORY}" id="GASSENSOR_CATEGORY" colour="#607D8B" secondaryColour="#455A64">
    <block type="gasSensor_init" id="gasSensor_init">
        <field name="PIN">34</field>
    </block>
    <block type="gasSensor_read" id="gasSensor_read"></block>
    <block type="gasSensor_detected" id="gasSensor_detected"></block>
</category>`;
}

exports = registerToolboxs;
