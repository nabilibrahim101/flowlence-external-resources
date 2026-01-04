/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_HORNAMPLIFIER_CATEGORY}" id="HORNAMPLIFIER_CATEGORY" colour="#9C27B0" secondaryColour="#7B1FA2">
    <block type="hornAmplifier_init"/>
    <block type="hornAmplifier_playToneForBeat"/>
    <block type="hornAmplifier_playToneForMs">
        <value name="FREQ">
            <shadow type="math_whole_number">
                <field name="NUM">440</field>
            </shadow>
        </value>
        <value name="TIME">
            <shadow type="math_whole_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
    <block type="hornAmplifier_setTempo">
        <value name="BPM">
            <shadow type="math_whole_number">
                <field name="NUM">120</field>
            </shadow>
        </value>
    </block>
    <block type="hornAmplifier_stop"/>
    <block type="hornAmplifier_playRingtone"/>
</category>
`;
}

exports = registerToolboxs;
