// eslint-disable-next-line func-style
function registerToolboxs () {
    return `
<category name="%{BKY_STEAMSENSOR_CATEGORY}" id="STEAMSENSOR_CATEGORY" colour="#4A90E2" secondaryColour="#357ABD">
    <block type="steamSensor_readValue" id="steamSensor_readValue">
        <field name="pin">35</field>
    </block>
</category>
    `;
}

exports = registerToolboxs;
