/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_LIGHTSENSOR_CATEGORY}" id="LIGHTSENSOR_CATEGORY" colour="#F4D03F" secondaryColour="#F39C12">
    <block type="lightSensor_readValue" id="lightSensor_readValue">
        <field name="pin">32</field>
    </block>
</category>`;
}

exports = registerToolboxs;
