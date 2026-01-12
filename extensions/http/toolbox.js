/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_HTTP_CATEGORY}" id="HTTP_CATEGORY" colour="#FF9800" secondaryColour="#F57C00">
    <block type="http_get" id="http_get">
        <value name="URL">
            <shadow type="text">
                <field name="TEXT">http://example.com/api</field>
            </shadow>
        </value>
    </block>
    <block type="http_post" id="http_post">
        <value name="URL">
            <shadow type="text">
                <field name="TEXT">http://example.com/api</field>
            </shadow>
        </value>
        <value name="BODY">
            <shadow type="text">
                <field name="TEXT">{"key":"value"}</field>
            </shadow>
        </value>
    </block>
    <block type="http_put" id="http_put">
        <value name="URL">
            <shadow type="text">
                <field name="TEXT">http://example.com/api</field>
            </shadow>
        </value>
        <value name="BODY">
            <shadow type="text">
                <field name="TEXT">{"key":"value"}</field>
            </shadow>
        </value>
    </block>
    <block type="http_delete" id="http_delete">
        <value name="URL">
            <shadow type="text">
                <field name="TEXT">http://example.com/api</field>
            </shadow>
        </value>
    </block>
    <block type="http_responseCode" id="http_responseCode"></block>
</category>`;
}

exports = registerToolboxs;
