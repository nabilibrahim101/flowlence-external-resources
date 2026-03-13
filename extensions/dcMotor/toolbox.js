/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_DCMOTOR_CATEGORY}" id="DCMOTOR_CATEGORY" colour="#FF6F00" secondaryColour="#E65100">
    <block type="dcMotor_digital" id="dcMotor_digital">
        <field name="INA">18</field>
        <field name="STATE_A">HIGH</field>
        <field name="INB">19</field>
        <field name="STATE_B">LOW</field>
    </block>
    <block type="dcMotor_analog" id="dcMotor_analog">
        <field name="INA">18</field>
        <field name="STATE_A">HIGH</field>
        <field name="INB">19</field>
        <value name="SPEED">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
    </block>
    <block type="dcMotor_fan" id="dcMotor_fan">
        <field name="IN_NEG">25</field>
        <field name="IN_POS">17</field>
        <value name="SPEED">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = registerToolboxs;
