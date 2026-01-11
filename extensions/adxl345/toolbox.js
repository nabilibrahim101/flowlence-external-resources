/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_ADXL345_CATEGORY}" id="ADXL345_CATEGORY" colour="#42CCFF" secondaryColour="#2BA3D9">
    <block type="adxl345_read" id="adxl345_read">
    </block>
</category>`;
}

exports = registerToolboxs;
