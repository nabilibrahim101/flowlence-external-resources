/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_DHT_CATEGORY}" id="DHT_CATEGORY" colour="#42CCFF" secondaryColour="#00BFFF" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzQyQ0NGRiIvPjxwYXRoIGQ9Ik0yMyAyNVYxMy41YTMuNSAzLjUgMCAwIDAtNyAwVjI1YTUgNSAwIDEgMCA3IDB6IiBmaWxsPSIjZmZmIiBzdHJva2U9IiMzNzQ3NEYiIHN0cm9rZS13aWR0aD0iMS44Ii8+PGNpcmNsZSBjeD0iMTkuNSIgY3k9IjI4IiByPSIyLjgiIGZpbGw9IiNlNTM5MzUiLz48cmVjdCB4PSIxOCIgeT0iMTciIHdpZHRoPSIzIiBoZWlnaHQ9IjkiIHJ4PSIxLjUiIGZpbGw9IiNlNTM5MzUiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIiBmaWxsPSIjRkREODM1Ii8+PGxpbmUgeDE9IjEyIiB5MT0iOCIgeDI9IjEyIiB5Mj0iOS4yIiBzdHJva2U9IiNGREQ4MzUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iOC41IiB5MT0iMTIiIHgyPSI5LjciIHkyPSIxMiIgc3Ryb2tlPSIjRkREODM1IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjkuNSIgeTE9IjkuNSIgeDI9IjEwLjQiIHkyPSIxMC40IiBzdHJva2U9IiNGREQ4MzUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iOS41IiB5MT0iMTQuNSIgeDI9IjEwLjQiIHkyPSIxMy42IiBzdHJva2U9IiNGREQ4MzUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjUiIHkxPSIxNSIgeDI9IjI5IiB5Mj0iMTUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjUiIHkxPSIxOCIgeDI9IjI4IiB5Mj0iMTgiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjUiIHkxPSIyMSIgeDI9IjI5IiB5Mj0iMjEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjUiIHkxPSIyNCIgeDI9IjI4IiB5Mj0iMjQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4K">
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
