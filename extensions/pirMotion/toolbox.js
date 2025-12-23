/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_PIRMOTION_CATEGORY}" id="PIRMOTION_CATEGORY" colour="#E74C3C" secondaryColour="#C0392B">
    <block type="pirMotion_init" id="pirMotion_init">
        <field name="PIN">13</field>
    </block>
    <block type="pirMotion_detected" id="pirMotion_detected">
    </block>
    <block type="pirMotion_waitUntilMotion" id="pirMotion_waitUntilMotion">
    </block>
    <block type="pirMotion_waitUntilNoMotion" id="pirMotion_waitUntilNoMotion">
    </block>
</category>`;
}

exports = registerToolboxs;
