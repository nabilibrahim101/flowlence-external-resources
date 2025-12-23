/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs() {
    return `
<category name="%{BKY_SOILMOISTURE_CATEGORY}" id="SOILMOISTURE_CATEGORY" colour="#2E8B57" secondaryColour="#228B22">
    <block type="soilMoisture_init" id="soilMoisture_init">
        <field name="PIN">32</field>
    </block>
    <block type="soilMoisture_readValue" id="soilMoisture_readValue">
    </block>
    <block type="soilMoisture_readPercent" id="soilMoisture_readPercent">
    </block>
    <block type="soilMoisture_isSoilDry" id="soilMoisture_isSoilDry">
        <value name="THRESHOLD">
            <shadow type="math_whole_number">
                <field name="NUM">30</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = registerToolboxs;