/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs() {
    return `
<category name="%{BKY_SERVOARDUINO_CATEGORY}" id="SERVOARDUINO_CATEGORY" colour="#FF6F00" secondaryColour="#E65100" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0ZGNkYwMCIvPjxwYXRoIGQ9Ik04IDI2YTEyIDEyIDAgMCAxIDI0IDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMSAyMmE4IDggMCAwIDEgMTggMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiIHN0cm9rZS13aWR0aD0iMS41Ii8+PGxpbmUgeDE9IjIwIiB5MT0iMjYiIHgyPSIyOCIgeTI9IjE0IiBzdHJva2U9IiNGRkQ1NEYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMjAiIGN5PSIyNiIgcj0iMyIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjYiIHI9IjEuMiIgZmlsbD0iIzVkNDAzNyIvPjwvc3ZnPgo=">
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
