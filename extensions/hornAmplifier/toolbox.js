/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_HORNAMPLIFIER_CATEGORY}" id="HORNAMPLIFIER_CATEGORY" colour="#9C27B0" secondaryColour="#7B1FA2" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzlDMjdCMCIvPjxwYXRoIGQ9Ik03IDE1aDRsNy03djI0bC03LTdIN1YxNXoiIGZpbGw9IiNDRTkzRDgiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48cGF0aCBkPSJNMjQgMTRhNS41IDUuNSAwIDAgMSAwIDEyIiBzdHJva2U9IiNGRkE3MjYiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjggMTAuNWE5LjUgOS41IDAgMCAxIDAgMTkiIHN0cm9rZT0iI0ZGNzA0MyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4K">
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
