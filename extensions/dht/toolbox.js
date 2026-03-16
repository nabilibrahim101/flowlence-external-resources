/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_DHT_CATEGORY}" id="DHT_CATEGORY" colour="#42CCFF" secondaryColour="#00BFFF" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTMgMTQuNzZWMy41YTIuNSAyLjUgMCAwIDAtNSAwdjExLjI2YTQuNSA0LjUgMCAxIDAgNSAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmYyMDIwIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxjaXJjbGUgY3g9IjEwLjUiIGN5PSIxNy41IiByPSIyIiBmaWxsPSIjZmYyMDIwIi8+PGxpbmUgeDE9IjEwLjUiIHkxPSIxNSIgeDI9IjEwLjUiIHkyPSI3IiBzdHJva2U9IiNmZjIwMjAiIHN0cm9rZS13aWR0aD0iMS41Ii8+PGxpbmUgeDE9IjE3IiB5MT0iNSIgeDI9IjIwIiB5Mj0iNSIgc3Ryb2tlPSIjZmY0NDQ0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNyIgeTE9IjgiIHgyPSIyMCIgeTI9IjgiIHN0cm9rZT0iI2ZmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTciIHkxPSIxMSIgeDI9IjE5IiB5Mj0iMTEiIHN0cm9rZT0iI2ZmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTciIHkxPSIxNCIgeDI9IjE5IiB5Mj0iMTQiIHN0cm9rZT0iI2ZmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4K">
    <block type="dht_init" id="dht_init">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <field name="PIN">2</field>
    </block>
    <block type="dht_readHumidity" id="dht_readHumidity">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="dht_readTemperature" id="dht_readTemperature">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = registerToolboxs;
