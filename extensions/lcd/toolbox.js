/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_LCD_CATEGORY}" id="LCD_CATEGORY" colour="#BBBB00" secondaryColour="#888800" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSIyIiB5PSI1IiB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHJ4PSIyIiBmaWxsPSIjMWE1Mjc2IiBzdHJva2U9IiMyOTgwYjkiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHJlY3QgeD0iNCIgeT0iNyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjYiIHJ4PSIxIiBmaWxsPSIjMzQ5OGRiIi8+PGxpbmUgeDE9IjUiIHkxPSI5IiB4Mj0iMTQiIHkyPSI5IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUiIHkxPSIxMSIgeDI9IjExIiB5Mj0iMTEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE2IiByPSIxIiBmaWxsPSIjMjk4MGI5Ii8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNiIgcj0iMSIgZmlsbD0iIzI5ODBiOSIvPjwvc3ZnPgo=">
    <block type="lcd_init" id="lcd_init">
        <field name="ADDR">0x27</field>
    </block>
    <block type="lcd_setCursorPosition" id="lcd_setCursorPosition">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="lcd_print" id="lcd_print">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Hello Flowlence</field>
            </shadow>
        </value>
    </block>
    <block type="lcd_clear" id="lcd_clear">
    </block>
    <block type="lcd_setBackLight" id="lcd_setBackLight">
    </block>
    <block type="lcd_setCursorStyle" id="lcd_setCursorStyle">
    </block>
</category>`;
}

exports = registerToolboxs;
