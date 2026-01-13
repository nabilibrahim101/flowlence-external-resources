const gasSensor = formatMessage => ({
    name: formatMessage({
        id: 'gasSensor.name',
        default: 'Gas Sensor'
    }),
    extensionId: 'gasSensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/gasSensor.png`,
    description: formatMessage({
        id: 'gasSensor.description',
        default: 'Detect gases like smoke, LPG, and natural gas using an analog gas sensor.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['sensor']
});

module.exports = gasSensor;
