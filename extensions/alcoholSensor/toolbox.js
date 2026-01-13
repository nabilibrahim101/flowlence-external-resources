/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_ALCOHOLSENSOR_CATEGORY}" id="ALCOHOLSENSOR_CATEGORY" colour="#9C27B0" secondaryColour="#7B1FA2">
    <block type="alcoholSensor_read" id="alcoholSensor_read">
        <field name="PIN">34</field>
    </block>
</category>`;
}

exports = registerToolboxs;
