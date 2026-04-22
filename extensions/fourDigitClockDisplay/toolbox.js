/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_FOURDIGITCLOCKDISPLAY_CATEGORY}" id="FOURDIGITCLOCKDISPLAY_CATEGORY" colour="#FF7F50" secondaryColour="#FF6347" iconURI="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0ZGN0Y1MCIvPjxyZWN0IHg9IjQiIHk9IjEyIiB3aWR0aD0iMzIiIGhlaWdodD0iMTYiIHJ4PSIzIiBmaWxsPSIjMWExYTFhIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHJlY3QgeD0iNyIgeT0iMTQuNSIgd2lkdGg9IjQuNSIgaGVpZ2h0PSIxIiByeD0iMC4zIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iNyIgeT0iMTkiIHdpZHRoPSI0LjUiIGhlaWdodD0iMSIgcng9IjAuMyIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjciIHk9IjIzLjUiIHdpZHRoPSI0LjUiIGhlaWdodD0iMSIgcng9IjAuMyIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjYuNSIgeT0iMTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjQiIHJ4PSIwLjMiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxMC41IiB5PSIxNSIgd2lkdGg9IjEiIGhlaWdodD0iNCIgcng9IjAuMyIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjYuNSIgeT0iMTkuNSIgd2lkdGg9IjEiIGhlaWdodD0iNCIgcng9IjAuMyIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjEwLjUiIHk9IjE5LjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjQiIHJ4PSIwLjMiIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSIxMy41IiBjeT0iMTcuNSIgcj0iMC44IiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMTMuNSIgY3k9IjIyIiByPSIwLjgiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxNS41IiB5PSIxNC41IiB3aWR0aD0iNC41IiBoZWlnaHQ9IjEiIHJ4PSIwLjMiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxNS41IiB5PSIyMy41IiB3aWR0aD0iNC41IiBoZWlnaHQ9IjEiIHJ4PSIwLjMiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxOSIgeT0iMTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjQiIHJ4PSIwLjMiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxNSIgeT0iMTkuNSIgd2lkdGg9IjEiIGhlaWdodD0iNCIgcng9IjAuMyIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjIzIiB5PSIxNC41IiB3aWR0aD0iNC41IiBoZWlnaHQ9IjEiIHJ4PSIwLjMiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIyMyIgeT0iMTkiIHdpZHRoPSI0LjUiIGhlaWdodD0iMSIgcng9IjAuMyIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjIzIiB5PSIyMy41IiB3aWR0aD0iNC41IiBoZWlnaHQ9IjEiIHJ4PSIwLjMiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIyNi41IiB5PSIxNSIgd2lkdGg9IjEiIGhlaWdodD0iNCIgcng9IjAuMyIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjI2LjUiIHk9IjE5LjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjQiIHJ4PSIwLjMiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIzMC41IiB5PSIxNC41IiB3aWR0aD0iNC41IiBoZWlnaHQ9IjEiIHJ4PSIwLjMiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIzMC41IiB5PSIxOSIgd2lkdGg9IjQuNSIgaGVpZ2h0PSIxIiByeD0iMC4zIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMzAuNSIgeT0iMjMuNSIgd2lkdGg9IjQuNSIgaGVpZ2h0PSIxIiByeD0iMC4zIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMzAiIHk9IjE1IiB3aWR0aD0iMSIgaGVpZ2h0PSI0IiByeD0iMC4zIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMzQiIHk9IjE1IiB3aWR0aD0iMSIgaGVpZ2h0PSI0IiByeD0iMC4zIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMzQiIHk9IjE5LjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjQiIHJ4PSIwLjMiIGZpbGw9IiNmZmYiLz48L3N2Zz4K">
    <block type="fourDigitClockDisplay_init" id="fourDigitClockDisplay_init">
    </block>
    <block type="fourDigitClockDisplay_displayNumber" id="fourDigitClockDisplay_displayNumber">
        <value name="DATA">
            <shadow type="math_integer">
                <field name="NUM">1024</field>
            </shadow>
        </value>
    </block>
    <block type="fourDigitClockDisplay_displayString" id="fourDigitClockDisplay_displayString">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Open</field>
            </shadow>
        </value>
    </block>
    <block type="fourDigitClockDisplay_display" id="fourDigitClockDisplay_display">
        <value name="DATA">
            <shadow type="math_integer">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="fourDigitClockDisplay_clear" id="fourDigitClockDisplay_clear">
    </block>
    <block type="fourDigitClockDisplay_setBrightness" id="fourDigitClockDisplay_setBrightness">
        <value name="BRT">
            <shadow type="fourDigitClockDisplay_brightnessNumber">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="fourDigitClockDisplay_setPoint" id="fourDigitClockDisplay_setPoint">
    </block>
</category>`;
}

exports = registerToolboxs;
