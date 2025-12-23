const waterLevel = formatMessage => ({
    name: formatMessage({
        id: 'waterLevel.name',
        default: 'Water Level Sensor'
    }),
    extensionId: 'waterLevel',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32'],
    author: 'Flowlence',
    iconURL: `assets/waterLevel.png`,
    description: formatMessage({
        id: 'waterLevel.description',
        default: 'Detect water level for flood monitoring and smart irrigation.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['sensor']
});

module.exports = waterLevel;
