/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_ULTRASONIC_CATEGORY}" id="ULTRASONIC_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0QzOUREQiIvPjxyZWN0IHg9IjUiIHk9IjExIiB3aWR0aD0iMzAiIGhlaWdodD0iMTgiIHJ4PSIzIiBmaWxsPSIjN0IxRkEyIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjE0IiBjeT0iMjAiIHI9IjUuNSIgZmlsbD0iI0NFOTNEOCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuOCIvPjxjaXJjbGUgY3g9IjE0IiBjeT0iMjAiIHI9IjMiIGZpbGw9IiNFMUJFRTciLz48Y2lyY2xlIGN4PSIyNiIgY3k9IjIwIiByPSI1LjUiIGZpbGw9IiNDRTkzRDgiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48Y2lyY2xlIGN4PSIyNiIgY3k9IjIwIiByPSIzIiBmaWxsPSIjRTFCRUU3Ii8+PC9zdmc+Cg==">
    <block type="ultrasonic_readDistance" id="ultrasonic_readDistance">
        <field name="TRIG">2</field>
        <field name="ECHO">3</field>
    </block>
</category>    `;
}
exports = registerToolboxs;
