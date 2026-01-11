const adxl345 = formatMessage => ({
    name: formatMessage({
        id: 'adxl345.name',
        default: 'ADXL345 Acceleration Sensor'
    }),
    extensionId: 'adxl345',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/adxl345.jpg`,
    description: formatMessage({
        id: 'adxl345.description',
        default: 'ADXL345 3-axis digital accelerometer sensor (I2C).'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: false,
    tags: ['sensor']
});

module.exports = adxl345;
