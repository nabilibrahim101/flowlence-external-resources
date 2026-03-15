const lcd128x32 = formatMessage => ({
    name: formatMessage({
        id: 'lcd128x32.name',
        default: 'LCD 128x32'
    }),
    extensionId: 'lcd128x32',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32'],
    author: 'Flowlence',
    iconURL: `assets/lcd128_32.jpg`,
    description: formatMessage({
        id: 'lcd128x32.description',
        default: 'ST7567A 128x32 dot matrix LCD display (I2C).'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: false,
    tags: ['display']
});

module.exports = lcd128x32;
