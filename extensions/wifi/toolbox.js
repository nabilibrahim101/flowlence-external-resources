/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_WIFI_CATEGORY}" id="WIFI_CATEGORY" colour="#5B9BD5" secondaryColour="#4A8BC4" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzVCOUJENSIvPjxwYXRoIGQ9Ik01IDE2QTE4IDE4IDAgMCAxIDM1IDE2IiBzdHJva2U9IiMxNTY1QzAiIHN0cm9rZS13aWR0aD0iMy41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNOSAyMUExMiAxMiAwIDAgMSAzMSAyMSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNCAyNkE2IDYgMCAwIDEgMjYgMjYiIHN0cm9rZT0iI0UzRjJGRCIgc3Ryb2tlLXdpZHRoPSIyLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMzEiIHI9IjIuNSIgZmlsbD0iI0ZERDgzNSIvPjwvc3ZnPgo=">
    <block type="wifi_connect" id="wifi_connect">
        <value name="SSID">
            <shadow type="text">
                <field name="TEXT">YourSSID</field>
            </shadow>
        </value>
        <value name="PASSWORD">
            <shadow type="text">
                <field name="TEXT">YourPassword</field>
            </shadow>
        </value>
    </block>
    <block type="wifi_isConnected" id="wifi_isConnected"/>
    <block type="wifi_waitConnected" id="wifi_waitConnected"/>
    <block type="wifi_getIP" id="wifi_getIP"/>
    <block type="wifi_getRSSI" id="wifi_getRSSI"/>
    <block type="wifi_getMAC" id="wifi_getMAC"/>
    <block type="wifi_disconnect" id="wifi_disconnect"/>
</category>
    `;
}

exports = registerToolboxs;
