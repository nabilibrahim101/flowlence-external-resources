/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_ACTIVEBUZZER_CATEGORY}" id="ACTIVEBUZZER_CATEGORY" colour="#FF6B35" secondaryColour="#E55A2B" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0ZGNkIzNSIvPjxwYXRoIGQ9Ik0yMCA3QzE1LjUgNyAxMiAxMSAxMiAxNXY3bC0zIDN2MWgyMnYtMWwtMy0zdi03YzAtNC0zLjUtOC04LTh6IiBmaWxsPSIjRkZBNzI2IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMzAiIHI9IjIuNSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yNyAxM2EyIDIgMCAwIDAgMy41IDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yOSAxMC41YTIgMiAwIDAgMCAzLjUgMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+Cg==">
    <block type="activeBuzzer_init"/>
    <block type="activeBuzzer_setState"/>
    <block type="activeBuzzer_beep">
        <value name="TIME">
            <shadow type="math_whole_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
    <block type="activeBuzzer_beepTimes">
        <value name="TIMES">
            <shadow type="math_whole_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <value name="DURATION">
            <shadow type="math_whole_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
        <value name="INTERVAL">
            <shadow type="math_whole_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
    </block>
</category>
`;
}

exports = registerToolboxs;
