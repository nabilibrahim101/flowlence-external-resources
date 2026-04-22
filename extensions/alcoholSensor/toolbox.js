/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_ALCOHOLSENSOR_CATEGORY}" id="ALCOHOLSENSOR_CATEGORY" colour="#9C27B0" secondaryColour="#7B1FA2" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzlDMjdCMCIvPjxyZWN0IHg9IjE2IiB5PSI1IiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiByeD0iMS41IiBmaWxsPSIjRTFCRUU3IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHBhdGggZD0iTTE2IDEzIEw5IDI2IFE3IDMyIDE0IDMyIEgyNiBRMzMgMzIgMzEgMjYgTDI0IDEzeiIgZmlsbD0iI0UxQkVFNyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuOCIvPjxwYXRoIGQ9Ik0xMCAyNCBMMzAgMjQgUTMyIDMwIDI2IDMwIEgxNCBROCAzMCAxMCAyNHoiIGZpbGw9IiNBQjQ3QkMiIG9wYWNpdHk9IjAuNSIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMjciIHI9IjEuNSIgZmlsbD0iI0NFOTNEOCIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iMjMiIGN5PSIyNiIgcj0iMS4yIiBmaWxsPSIjQ0U5M0Q4IiBvcGFjaXR5PSIwLjQiLz48L3N2Zz4K">
    <block type="alcoholSensor_read" id="alcoholSensor_read">
        <field name="PIN">34</field>
    </block>
</category>`;
}

exports = registerToolboxs;
