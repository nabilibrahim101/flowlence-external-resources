/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    Blockly.Arduino.adxl345_read = function (block) {
        Blockly.Arduino.includes_.include_adxl_init = `#include <Wire.h>\n#include <I2Cdev.h>\n#include <ADXL345.h>\n`;
        Blockly.Arduino.definitions_.adxl_1 = `ADXL345 accel;\n`;
        Blockly.Arduino.setups_.adxl_getAddress = 'Wire.begin();\n  accel.initialize();\n';

        const axis = block.getFieldValue('axis');
        const unit = block.getFieldValue('unit');

        let code = '';
        if (axis === 'X') {
            code = 'accel.getAccelerationX()';
        } else if (axis === 'Y') {
            code = 'accel.getAccelerationY()';
        } else if (axis === 'Z') {
            code = 'accel.getAccelerationZ()';
        }

        // Convert to g-force if requested (divide by 256)
        if (unit === 'g') {
            code = `(${code} / 256.0)`;
        }

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
