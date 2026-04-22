/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_LCD128X32_CATEGORY}" id="LCD128X32_CATEGORY" colour="#42CCFF" secondaryColour="#33BBEE" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzQyQ0NGRiIvPjxyZWN0IHg9IjYiIHk9IjExIiB3aWR0aD0iMjgiIGhlaWdodD0iMTgiIHJ4PSIyLjUiIGZpbGw9IiMxNTY1QzAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHJlY3QgeD0iOSIgeT0iMTQiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxMiIgcng9IjEuNSIgZmlsbD0iI0UzRjJGRCIvPjx0ZXh0IHg9IjExIiB5PSIyMiIgZmlsbD0iIzE1NjVDMCIgZm9udC1zaXplPSI2IiBmb250LWZhbWlseT0ibW9ub3NwYWNlIj5MQ0Q8L3RleHQ+PC9zdmc+Cg==">
    <block type="lcd128x32_init" id="lcd128x32_init">
    </block>
    <block type="lcd128x32_setCursor" id="lcd128x32_setCursor">
    </block>
    <block type="lcd128x32_printString" id="lcd128x32_printString">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">Hello</field>
            </shadow>
        </value>
    </block>
    <block type="lcd128x32_printNumber" id="lcd128x32_printNumber">
        <value name="NUMBER">
            <shadow type="math_number">
                <field name="NUM">123</field>
            </shadow>
        </value>
    </block>
    <block type="lcd128x32_clear" id="lcd128x32_clear">
    </block>
</category>`;
}

exports = registerToolboxs;
