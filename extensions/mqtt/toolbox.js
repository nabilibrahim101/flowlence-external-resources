/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_MQTT_CATEGORY}" id="MQTT_CATEGORY" colour="#5C6BC0" secondaryColour="#3F51B5" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzVDNkJDMCIvPjxwYXRoIGQ9Ik03IDIyIFE3IDE2IDEyIDE2IFExMyAxMCAxOSAxMCBRMjUgMTAgMjUgMTYgUTMwIDE2IDMwIDIwIFEzMCAyNCAyNSAyNCBIMTIgUTcgMjQgNyAyMnoiIGZpbGw9IiNDNUNBRTkiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48cGF0aCBkPSJNMTUgMjFWMjkiIHN0cm9rZT0iIzRDQUY1MCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMi41IDI3bDIuNSAyLjUgMi41LTIuNSIgc3Ryb2tlPSIjNENBRjUwIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNSAyOVYyMSIgc3Ryb2tlPSIjRkY5ODAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIyLjUgMjNsMi41LTIuNSAyLjUgMi41IiBzdHJva2U9IiNGRjk4MDAiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+Cg==">
    <block type="mqtt_connect" id="mqtt_connect">
        <value name="SERVER">
            <shadow type="text">
                <field name="TEXT">broker.hivemq.com</field>
            </shadow>
        </value>
        <value name="PORT">
            <shadow type="math_number">
                <field name="NUM">1883</field>
            </shadow>
        </value>
        <value name="CLIENT_ID">
            <shadow type="text">
                <field name="TEXT">esp_client</field>
            </shadow>
        </value>
    </block>
    <block type="mqtt_connect_auth" id="mqtt_connect_auth">
        <value name="SERVER">
            <shadow type="text">
                <field name="TEXT">broker.hivemq.com</field>
            </shadow>
        </value>
        <value name="PORT">
            <shadow type="math_number">
                <field name="NUM">1883</field>
            </shadow>
        </value>
        <value name="CLIENT_ID">
            <shadow type="text">
                <field name="TEXT">esp_client</field>
            </shadow>
        </value>
        <value name="USERNAME">
            <shadow type="text">
                <field name="TEXT">user</field>
            </shadow>
        </value>
        <value name="PASSWORD">
            <shadow type="text">
                <field name="TEXT">password</field>
            </shadow>
        </value>
    </block>
    <block type="mqtt_publish" id="mqtt_publish">
        <value name="TOPIC">
            <shadow type="text">
                <field name="TEXT">test/topic</field>
            </shadow>
        </value>
        <value name="MESSAGE">
            <shadow type="text">
                <field name="TEXT">Hello MQTT</field>
            </shadow>
        </value>
    </block>
    <block type="mqtt_subscribe" id="mqtt_subscribe">
        <value name="TOPIC">
            <shadow type="text">
                <field name="TEXT">test/topic</field>
            </shadow>
        </value>
    </block>
    <block type="mqtt_isConnected" id="mqtt_isConnected"></block>
    <block type="mqtt_loop" id="mqtt_loop"></block>
    <block type="mqtt_when_message_received" id="mqtt_when_message_received"></block>
    <block type="mqtt_received_topic" id="mqtt_received_topic"></block>
    <block type="mqtt_received_message" id="mqtt_received_message"></block>
    <block type="mqtt_get_value" id="mqtt_get_value">
        <value name="KEY">
            <shadow type="text">
                <field name="TEXT">led_state</field>
            </shadow>
        </value>
    </block>
    <block type="mqtt_disconnect" id="mqtt_disconnect"></block>
</category>`;
}

exports = registerToolboxs;
