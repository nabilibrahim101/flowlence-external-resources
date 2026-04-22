/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs() {
    return `
<category name="%{BKY_SOILMOISTURE_CATEGORY}" id="SOILMOISTURE_CATEGORY" colour="#2E8B57" secondaryColour="#228B22" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzJFOEI1NyIvPjxyZWN0IHg9IjciIHk9IjIzIiB3aWR0aD0iMjYiIGhlaWdodD0iMTAiIHJ4PSIyIiBmaWxsPSIjOEI2OTE0Ii8+PHJlY3QgeD0iMTQiIHk9IjYiIHdpZHRoPSI0IiBoZWlnaHQ9IjIyIiByeD0iMS4yIiBmaWxsPSIjQjBCRUM1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHJlY3QgeD0iMjIiIHk9IjYiIHdpZHRoPSI0IiBoZWlnaHQ9IjIyIiByeD0iMS4yIiBmaWxsPSIjQjBCRUM1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHJlY3QgeD0iMTMiIHk9IjYiIHdpZHRoPSIxNCIgaGVpZ2h0PSI0IiByeD0iMS4yIiBmaWxsPSIjOTBBNEFFIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC44Ii8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNSIgcj0iMSIgZmlsbD0iI0ZERDgzNSIvPjxjaXJjbGUgY3g9IjI0IiBjeT0iMTUiIHI9IjEiIGZpbGw9IiNGREQ4MzUiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjE5IiByPSIxIiBmaWxsPSIjRkREODM1Ii8+PGNpcmNsZSBjeD0iMjQiIGN5PSIxOSIgcj0iMSIgZmlsbD0iI0ZERDgzNSIvPjwvc3ZnPgo=">
    <block type="soilMoisture_init" id="soilMoisture_init">
        <field name="PIN">32</field>
    </block>
    <block type="soilMoisture_calibrate" id="soilMoisture_calibrate">
        <value name="DRYVALUE">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="WETVALUE">
            <shadow type="math_whole_number">
                <field name="NUM">4095</field>
            </shadow>
        </value>
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