const rfidRC522 = formatMessage => ({
    name: formatMessage({
        id: 'rfidRC522.name',
        default: 'RFID RC522 (I2C)'
    }),
    extensionId: 'rfidRC522',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/rfidRC522.jpg`,
    description: formatMessage({
        id: 'rfidRC522.description',
        default: 'RFID RC522 module using I2C communication.'
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

module.exports = rfidRC522;
