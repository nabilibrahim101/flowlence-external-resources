/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_DHT_CATEGORY}" id="DHT_CATEGORY" colour="#42CCFF" secondaryColour="#00BFFF" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzQyQ0NGRiIvPjxwYXRoIGQ9Ik0xNyAyNS41VjE1YTIgMiAwIDAgMC00IDB2MTAuNWEzLjUgMy41IDAgMSAwIDQgMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48Y2lyY2xlIGN4PSIxNSIgY3k9IjI4IiByPSIxLjgiIGZpbGw9IiNmZmYiLz48bGluZSB4MT0iMTUiIHkxPSIyNiIgeDI9IjE1IiB5Mj0iMTgiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBkPSJNMjYgMTdjMCAyLjUtMi41IDUtMi41IDVTMjEgMTkuNSAyMSAxN2EyLjUgMi41IDAgMCAxIDUgMHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMjIgMjRjMC43LTAuNSAxLjgtMC41IDIuNSAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjEuNSAyNmMxLTAuNyAyLjUtMC43IDMuNSAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4K">
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
