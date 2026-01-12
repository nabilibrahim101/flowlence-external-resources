/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_WIFI_CATEGORY}" id="WIFI_CATEGORY" colour="#5B9BD5" secondaryColour="#4A8BC4">
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
