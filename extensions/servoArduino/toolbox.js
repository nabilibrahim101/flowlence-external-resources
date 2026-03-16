/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs() {
    return `
<category name="%{BKY_SERVOARDUINO_CATEGORY}" id="SERVOARDUINO_CATEGORY" colour="#FF6F00" secondaryColour="#E65100" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cmVjdCB4PSI0IiB5PSIxMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEwIiByeD0iMS41IiBmaWxsPSIjRkY2RjAwIiBzdHJva2U9IiNFNjUxMDAiIHN0cm9rZS13aWR0aD0iMSIvPjxyZWN0IHg9IjIiIHk9IjE2IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIiByeD0iMC41IiBmaWxsPSIjRkY4RjAwIi8+PHJlY3QgeD0iMTgiIHk9IjE2IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIiByeD0iMC41IiBmaWxsPSIjRkY4RjAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMyIgZmlsbD0iI0ZGQjMwMCIgc3Ryb2tlPSIjRTY1MTAwIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMTIiIHkxPSIxMCIgeDI9IjE4IiB5Mj0iNSIgc3Ryb2tlPSIjRTY1MTAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjEiIGZpbGw9IiNFNjUxMDAiLz48L3N2Zz4K">
    <block type="servoArduino_setAngle" id="servoArduino_setAngle">
        <field name="PIN">9</field>
        <value name="ANGLE">
            <shadow type="math_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
        <value name="DURATION">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="servoArduino_readAngle" id="servoArduino_readAngle">
        <field name="PIN">9</field>
    </block>
</category>`;
}

exports = registerToolboxs;
