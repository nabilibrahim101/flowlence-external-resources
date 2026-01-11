/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_OBSTACLEAVOIDANCE_CATEGORY}" id="OBSTACLEAVOIDANCE_CATEGORY" colour="#FF6B35" secondaryColour="#E55527">
    <block type="obstacleAvoidance_detected" id="obstacleAvoidance_detected">
        <field name="pin">A0</field>
    </block>
    <block type="obstacleAvoidance_readValue" id="obstacleAvoidance_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}

exports = registerToolboxs;
