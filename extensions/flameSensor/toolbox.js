/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_FLAMESENSOR_CATEGORY}" id="FLAMESENSOR_CATEGORY" colour="#FF5722" secondaryColour="#E64A19" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0ZGNTcyMiIvPjxwYXRoIGQ9Ik0xNiA2QzE2IDYgOSAxNCA5IDIwYTcgNyAwIDAgMCAxNCAwQzIzIDE0IDE2IDYgMTYgNnoiIGZpbGw9IiNGRjk4MDAiLz48cGF0aCBkPSJNMTYgMTFDMTYgMTEgMTIgMTYgMTIgMjBhNCA0IDAgMCAwIDggMEMyMCAxNiAxNiAxMSAxNiAxMXoiIGZpbGw9IiNGRkVCM0IiLz48cGF0aCBkPSJNMTYgMTZDMTYgMTYgMTQgMTguNSAxNCAyMC41YTIgMiAwIDAgMCA0IDBDMTggMTguNSAxNiAxNiAxNiAxNnoiIGZpbGw9IiNGRkY5QzQiLz48cmVjdCB4PSIyNyIgeT0iMTMiIHdpZHRoPSI3IiBoZWlnaHQ9IjEzIiByeD0iMS41IiBmaWxsPSIjMzMzIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGNpcmNsZSBjeD0iMzAuNSIgY3k9IjE3IiByPSIyLjUiIGZpbGw9IiM0MkE1RjUiLz48Y2lyY2xlIGN4PSIzMC41IiBjeT0iMTciIHI9IjEiIGZpbGw9IiNlNTM5MzUiLz48L3N2Zz4K">
    <block type="flameSensor_read" id="flameSensor_read">
        <field name="PIN">34</field>
    </block>
</category>`;
}

exports = registerToolboxs;
