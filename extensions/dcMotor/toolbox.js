/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_DCMOTOR_CATEGORY}" id="DCMOTOR_CATEGORY" colour="#FF6F00" secondaryColour="#E65100" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0ZGNkYwMCIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjMuNSIgZmlsbD0iI0U2NTEwMCIvPjxwYXRoIGQ9Ik0yMCAxNi41QzE4LjUgMTIgMjEgNyAyMSA3UzE1LjUgOS41IDE1IDE0QzE0LjUgMTYuNSAxNyAxOCAyMCAxNi41eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC44NSIvPjxwYXRoIGQ9Ik0yMy41IDIwQzI4IDE4LjUgMzMgMjEgMzMgMjFTMzAuNSAxNS41IDI2IDE1QzIzLjUgMTQuNSAyMiAxNyAyMy41IDIweiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC44NSIvPjxwYXRoIGQ9Ik0yMCAyMy41QzIxLjUgMjggMTkgMzMgMTkgMzNTMjQuNSAzMC41IDI1IDI2QzI1LjUgMjMuNSAyMyAyMiAyMCAyMy41eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC44NSIvPjxwYXRoIGQ9Ik0xNi41IDIwQzEyIDIxLjUgNyAxOSA3IDE5UzkuNSAyNC41IDE0IDI1QzE2LjUgMjUuNSAxOCAyMyAxNi41IDIweiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC44NSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9IiNGREQ4MzUiLz48L3N2Zz4K">
    <block type="dcMotor_digital" id="dcMotor_digital">
        <field name="INA">18</field>
        <field name="STATE_A">HIGH</field>
        <field name="INB">19</field>
        <field name="STATE_B">LOW</field>
    </block>
    <block type="dcMotor_analog" id="dcMotor_analog">
        <field name="INA">18</field>
        <field name="STATE_A">HIGH</field>
        <field name="INB">19</field>
        <value name="SPEED">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
    </block>
    <block type="dcMotor_fan" id="dcMotor_fan">
        <field name="IN_NEG">25</field>
        <field name="IN_POS">17</field>
        <value name="SPEED">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = registerToolboxs;
