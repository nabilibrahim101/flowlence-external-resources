/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_MQTT_CATEGORY}" id="MQTT_CATEGORY" colour="#5C6BC0" secondaryColour="#3F51B5">
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
    <block type="mqtt_disconnect" id="mqtt_disconnect"></block>
</category>`;
}

exports = registerToolboxs;
