/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_THINGSBOARD_CATEGORY}" id="THINGSBOARD_CATEGORY" colour="#5B9BD5" secondaryColour="#4A8BC4">
    <label text="── WiFi ──"></label>
    <block type="thingsboard_wifiConnect" id="thingsboard_wifiConnect">
        <value name="SSID">
            <shadow type="text">
                <field name="TEXT">YourWiFiName</field>
            </shadow>
        </value>
        <value name="PASSWORD">
            <shadow type="text">
                <field name="TEXT">YourPassword</field>
            </shadow>
        </value>
    </block>
    <block type="thingsboard_wifiWaitConnected" id="thingsboard_wifiWaitConnected">
    </block>
    <block type="thingsboard_wifiIsConnected" id="thingsboard_wifiIsConnected">
    </block>
    <block type="thingsboard_wifiGetIP" id="thingsboard_wifiGetIP">
    </block>
    <block type="thingsboard_wifiDisconnect" id="thingsboard_wifiDisconnect">
    </block>
    <label text="── ThingsBoard ──"></label>
    <block type="thingsboard_connect" id="thingsboard_connect">
        <value name="SERVER">
            <shadow type="text">
                <field name="TEXT">demo.thingsboard.io</field>
            </shadow>
        </value>
        <value name="TOKEN">
            <shadow type="text">
                <field name="TEXT">YOUR_DEVICE_TOKEN</field>
            </shadow>
        </value>
    </block>
    <block type="thingsboard_isConnected" id="thingsboard_isConnected">
    </block>
    <block type="thingsboard_sendKeyValue" id="thingsboard_sendKeyValue">
        <value name="KEY">
            <shadow type="text">
                <field name="TEXT">temperature</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">25</field>
            </shadow>
        </value>
    </block>
    <block type="thingsboard_sendMultiple" id="thingsboard_sendMultiple">
        <value name="KEY1">
            <shadow type="text">
                <field name="TEXT">temperature</field>
            </shadow>
        </value>
        <value name="VALUE1">
            <shadow type="math_number">
                <field name="NUM">25</field>
            </shadow>
        </value>
        <value name="KEY2">
            <shadow type="text">
                <field name="TEXT">humidity</field>
            </shadow>
        </value>
        <value name="VALUE2">
            <shadow type="math_number">
                <field name="NUM">60</field>
            </shadow>
        </value>
    </block>
    <block type="thingsboard_loop" id="thingsboard_loop">
    </block>
    <block type="thingsboard_disconnect" id="thingsboard_disconnect">
    </block>
</category>`;
}

exports = registerToolboxs;
