/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_LCD_CATEGORY}" id="LCD_CATEGORY" colour="#BBBB00" secondaryColour="#888800" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0JCQkIwMCIvPjxyZWN0IHg9IjgiIHk9IjEyIiB3aWR0aD0iMjQiIGhlaWdodD0iMTYiIHJ4PSIyIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjkiLz48cmVjdCB4PSIxMCIgeT0iMTQiIHdpZHRoPSIyMCIgaGVpZ2h0PSI4IiByeD0iMSIgZmlsbD0iIzRDQUY1MCIgb3BhY2l0eT0iMC43Ii8+PGxpbmUgeDE9IjEyIiB5MT0iMTciIHgyPSIyMiIgeTI9IjE3IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTIiIHkxPSIyMCIgeDI9IjE4IiB5Mj0iMjAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjI3IiBjeT0iMjUiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjI0IiBjeT0iMjUiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNyIvPjwvc3ZnPgo=">
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
