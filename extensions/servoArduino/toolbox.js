/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs() {
    return `
<category name="%{BKY_SERVOARDUINO_CATEGORY}" id="SERVOARDUINO_CATEGORY" colour="#FF6F00" secondaryColour="#E65100" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0ZGNkYwMCIvPjxyZWN0IHg9IjgiIHk9IjE2IiB3aWR0aD0iMjQiIGhlaWdodD0iMTQiIHJ4PSIyIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjkiLz48cmVjdCB4PSI1IiB5PSIyNCIgd2lkdGg9IjUiIGhlaWdodD0iMyIgcng9IjAuNSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC43Ii8+PHJlY3QgeD0iMzAiIHk9IjI0IiB3aWR0aD0iNSIgaGVpZ2h0PSIzIiByeD0iMC41IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjciLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE2IiByPSI0LjUiIGZpbGw9IiNGRkIzMDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48bGluZSB4MT0iMjAiIHkxPSIxNiIgeDI9IjI4IiB5Mj0iMTAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMTYiIHI9IjEuNSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=">
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
