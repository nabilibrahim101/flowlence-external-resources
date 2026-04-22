/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TOUCHSWITCH_CATEGORY}" id="TOUCHSWITCH_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0QzOUREQiIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEzIiBmaWxsPSIjRTFCRUU3IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0xMiAyNyBRMTIgMTEgMjAgOSBRMjggMTEgMjggMjEiIHN0cm9rZT0iIzZBMUI5QSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTQgMjUgUTE0IDEzLjUgMjAgMTIgUTI2IDEzLjUgMjYgMjAiIHN0cm9rZT0iIzdCMUZBMiIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNiAyMy41IFExNiAxNiAyMCAxNC41IFEyNCAxNiAyNCAxOS41IiBzdHJva2U9IiM5QzI3QjAiIHN0cm9rZS13aWR0aD0iMS40IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTggMjIgUTE4IDE4IDIwIDE3IFEyMiAxOCAyMiAyMCIgc3Ryb2tlPSIjQUI0N0JDIiBzdHJva2Utd2lkdGg9IjEuMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMjAiIGN5PSIyNCIgcj0iMSIgZmlsbD0iIzZBMUI5QSIvPjwvc3ZnPgo=">
    <block type="touchSwitch_readValue" id="touchSwitch_readValue">
        <field name="pin">A0</field>
    </block>
    <block type="touchSwitch_state" id="touchSwitch_state">
        <field name="pin">A0</field>
    </block>
</category>`;
}

exports = registerToolboxs;
