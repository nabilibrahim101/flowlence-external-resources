/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_FLAMESENSOR_CATEGORY}" id="FLAMESENSOR_CATEGORY" colour="#FF5722" secondaryColour="#E64A19">
    <block type="flameSensor_read" id="flameSensor_read">
        <field name="PIN">34</field>
    </block>
</category>`;
}

exports = registerToolboxs;
