const flameSensor = formatMessage => ({
    name: formatMessage({
        id: 'flameSensor.name',
        default: 'Flame Sensor'
    }),
    extensionId: 'flameSensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/flameSensor.png`,
    description: formatMessage({
        id: 'flameSensor.description',
        default: 'Detect fire and flames using an infrared flame sensor.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['sensor']
});

module.exports = flameSensor;
