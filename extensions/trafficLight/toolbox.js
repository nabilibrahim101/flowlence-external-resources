/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TRAFFICLIGHT_CATEGORY}" id="TRAFFICLIGHT_CATEGORY" colour="#E74C3C" secondaryColour="#C0392B">
    <block type="trafficLight_init" id="trafficLight_init">
        <field name="RED_PIN">12</field>
        <field name="ORANGE_PIN">13</field>
        <field name="GREEN_PIN">14</field>
    </block>
    <block type="trafficLight_set" id="trafficLight_set">
        <field name="COLOR">RED</field>
        <field name="STATE">HIGH</field>
    </block>
</category>`;
}

exports = registerToolboxs;
