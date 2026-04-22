/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_WATERLEVEL_CATEGORY}" id="WATERLEVEL_CATEGORY" colour="#4A90D9" secondaryColour="#3A7BC8" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzRBOTBEOSIvPjxwYXRoIGQ9Ik0xMyA4aDE0djE3YTUgNSAwIDAgMS01IDVoLTRhNSA1IDAgMCAxLTUtNVY4eiIgZmlsbD0iI0UzRjJGRCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMTQuNSAxOC41aDExdjZhNCA0IDAgMCAxLTQgNGgtM2E0IDQgMCAwIDEtNC00VjE4LjV6IiBmaWxsPSIjNDJBNUY1Ii8+PGxpbmUgeDE9IjEwIiB5MT0iMTguNSIgeDI9IjEzIiB5Mj0iMTguNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=">
    <block type="waterLevel_init" id="waterLevel_init">
        <field name="PIN">32</field>
    </block>
    <block type="waterLevel_calibrate" id="waterLevel_calibrate">
        <value name="MINVALUE">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="MAXVALUE">
            <shadow type="math_whole_number">
                <field name="NUM">1400</field>
            </shadow>
        </value>
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
