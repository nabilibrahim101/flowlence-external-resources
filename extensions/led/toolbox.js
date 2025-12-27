/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_LED_CATEGORY}" id="LED_CATEGORY" colour="#27AE60" secondaryColour="#1E8449">
    <block type="led_set" id="led_set">
        <field name="PIN">2</field>
        <field name="STATE">HIGH</field>
    </block>
</category>`;
}

exports = registerToolboxs;
