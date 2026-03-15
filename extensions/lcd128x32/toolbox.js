/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_LCD128X32_CATEGORY}" id="LCD128X32_CATEGORY" colour="#42CCFF" secondaryColour="#33BBEE">
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
