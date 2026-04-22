/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_RGBLEDSTRIP_CATEGORY}" id="RGBLEDSTRIP_CATEGORY" colour="#7700FF" secondaryColour="#4400B3" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzc3MDBGRiIvPjxyZWN0IHg9IjQiIHk9IjE2IiB3aWR0aD0iMzIiIGhlaWdodD0iOCIgcng9IjIiIGZpbGw9IiMzMzMiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48Y2lyY2xlIGN4PSI5IiBjeT0iMjAiIHI9IjIuNSIgZmlsbD0iI2U1MzkzNSIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMjAiIHI9IjIuNSIgZmlsbD0iIzRDQUY1MCIvPjxjaXJjbGUgY3g9IjIzIiBjeT0iMjAiIHI9IjIuNSIgZmlsbD0iIzIxOTZGMyIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMjAiIHI9IjIuNSIgZmlsbD0iI0ZGRUU1OCIvPjwvc3ZnPgo=">
    <block type="rgbLedStrip_init" id="rgbLedStrip_init">
        <value name="LEN">
            <shadow type="math_whole_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <field name="PIN">2</field>
    </block>
    <block type="rgbLedStrip_setPixelColor" id="rgbLedStrip_setPixelColor">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="rgbLedStrip_fill" id="rgbLedStrip_fill">
        <value name="FIRST">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="rgbLedStrip_color" id="rgbLedStrip_color">
        <value name="R">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="rgbLedStrip_setBrightness" id="rgbLedStrip_setBrightness">
        <value name="BRT">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="rgbLedStrip_clear" id="rgbLedStrip_clear">
    </block>
    <block type="rgbLedStrip_show" id="rgbLedStrip_show">
    </block>
</category>`;
}

exports = registerToolboxs;
