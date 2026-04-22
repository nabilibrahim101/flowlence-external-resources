/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs() {
    return `
<category name="%{BKY_RELAY_CATEGORY}" id="RELAY_CATEGORY" colour="#2196F3" secondaryColour="#1976D2" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzIxOTZGMyIvPjxyZWN0IHg9IjYiIHk9IjExIiB3aWR0aD0iMjgiIGhlaWdodD0iMTgiIHJ4PSIzIiBmaWxsPSIjMTU2NUMwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjE0IiBjeT0iMjQiIHI9IjMiIGZpbGw9IiNGREQ4MzUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48bGluZSB4MT0iMTQiIHkxPSIyMSIgeDI9IjI0IiB5Mj0iMTUiIHN0cm9rZT0iI0ZERDgzNSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjI0IiBjeT0iMTUiIHI9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2U1MzkzNSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48Y2lyY2xlIGN4PSIyNCIgY3k9IjI0IiByPSIyIiBmaWxsPSIjNENBRjUwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC44Ii8+PC9zdmc+Cg==">
    <block type="relay_output" id="relay_output">
        <field name="PIN">26</field>
        <field name="STATE">HIGH</field>
    </block>
</category>`;
}

exports = registerToolboxs;
