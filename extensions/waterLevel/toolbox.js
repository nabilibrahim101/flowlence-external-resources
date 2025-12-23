/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_WATERLEVEL_CATEGORY}" id="WATERLEVEL_CATEGORY" colour="#4A90D9" secondaryColour="#3A7BC8">
    <block type="waterLevel_init" id="waterLevel_init">
        <field name="PIN">32</field>
    </block>
    <block type="waterLevel_readValue" id="waterLevel_readValue">
    </block>
    <block type="waterLevel_readPercent" id="waterLevel_readPercent">
    </block>
    <block type="waterLevel_isLow" id="waterLevel_isLow">
        <value name="THRESHOLD">
            <shadow type="math_whole_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = registerToolboxs;
