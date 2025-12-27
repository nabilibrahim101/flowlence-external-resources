/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_LED_CATEGORY}" id="LED_CATEGORY" colour="#27AE60" secondaryColour="#1E8449">
    <block type="led_init" id="led_init">
        <field name="PIN">2</field>
    </block>
    <block type="led_on" id="led_on">
        <field name="PIN">2</field>
    </block>
    <block type="led_off" id="led_off">
        <field name="PIN">2</field>
    </block>
    <block type="led_toggle" id="led_toggle">
        <field name="PIN">2</field>
    </block>
    <block type="led_setState" id="led_setState">
        <field name="PIN">2</field>
        <field name="STATE">HIGH</field>
    </block>
    <block type="led_blink" id="led_blink">
        <field name="PIN">2</field>
        <value name="DURATION">
            <shadow type="math_whole_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = registerToolboxs;
