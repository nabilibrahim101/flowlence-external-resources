/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_BUTTON_CATEGORY}" id="BUTTON_CATEGORY" colour="#FFD500" secondaryColour="#FFA500" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0ZGRDUwMCIvPjxyZWN0IHg9IjciIHk9IjEzIiB3aWR0aD0iMjYiIGhlaWdodD0iMTYiIHJ4PSIzIiBmaWxsPSIjMzMzIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC44Ii8+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iNyIgZmlsbD0iI0ZERDgzNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSI0LjUiIGZpbGw9IiNGRkVFNTgiLz48Y2lyY2xlIGN4PSIxOC41IiBjeT0iMTguNSIgcj0iMS41IiBmaWxsPSIjRkZGOUM0IiBvcGFjaXR5PSIwLjUiLz48L3N2Zz4K">
    <block type="button_readState" id="button_readState">
        <field name="pin">A0</field>
    </block>
    <block type="button_readValue" id="button_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}

exports = registerToolboxs;
