/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TRAFFICLIGHT_CATEGORY}" id="TRAFFICLIGHT_CATEGORY" colour="#E74C3C" secondaryColour="#C0392B" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0U3NEMzQyIvPjxyZWN0IHg9IjEzIiB5PSI3IiB3aWR0aD0iMTQiIGhlaWdodD0iMjYiIHJ4PSIzLjUiIGZpbGw9IiMzMzMiIHN0cm9rZT0iIzU1NSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjEzIiByPSIzIiBmaWxsPSIjZTUzOTM1Ii8+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMyIgZmlsbD0iI0ZGQTcyNiIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjciIHI9IjMiIGZpbGw9IiM0Q0FGNTAiLz48L3N2Zz4K">
    <block type="trafficLight_init" id="trafficLight_init">
        <field name="RED_PIN">12</field>
        <field name="ORANGE_PIN">13</field>
        <field name="GREEN_PIN">14</field>
    </block>
    <block type="trafficLight_set" id="trafficLight_set">
        <field name="COLOR">RED</field>
        <field name="STATE">HIGH</field>
    </block>
    <block type="trafficLight_setAll" id="trafficLight_setAll">
        <field name="RED_STATE">LOW</field>
        <field name="ORANGE_STATE">LOW</field>
        <field name="GREEN_STATE">LOW</field>
    </block>
</category>`;
}

exports = registerToolboxs;
