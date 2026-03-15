/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs() {
    return `
<category name="%{BKY_SERVOARDUINO_CATEGORY}" id="SERVOARDUINO_CATEGORY" colour="#FF6F00" secondaryColour="#E65100">
    <block type="servoArduino_setAngle" id="servoArduino_setAngle">
        <field name="PIN">9</field>
        <value name="ANGLE">
            <shadow type="math_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
        <value name="DURATION">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="servoArduino_readAngle" id="servoArduino_readAngle">
        <field name="PIN">9</field>
    </block>
</category>`;
}

exports = registerToolboxs;
