const soilMoisture = formatMessage => ({
    name: formatMessage({
        id: 'soilMoisture.name',
        default: 'Soil Moisture Sensor'
    }),
    extensionId: 'soilMoisture',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32'],
    author: 'Flowlence',
    iconURL: `assets/soilMoisture.png`,
    description: formatMessage({
        id: 'soilMoisture.description',
        default: 'Measure soil moisture level for smart irrigation systems.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['sensor']
});

module.exports = soilMoisture;