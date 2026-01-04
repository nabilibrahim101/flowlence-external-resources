/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_ACTIVEBUZZER_CATEGORY}" id="ACTIVEBUZZER_CATEGORY" colour="#FF6B35" secondaryColour="#E55A2B">
    <block type="activeBuzzer_init"/>
    <block type="activeBuzzer_setState"/>
    <block type="activeBuzzer_beep">
        <value name="TIME">
            <shadow type="math_whole_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
    <block type="activeBuzzer_beepTimes">
        <value name="TIMES">
            <shadow type="math_whole_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <value name="DURATION">
            <shadow type="math_whole_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
        <value name="INTERVAL">
            <shadow type="math_whole_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
    </block>
</category>
`;
}

exports = registerToolboxs;
