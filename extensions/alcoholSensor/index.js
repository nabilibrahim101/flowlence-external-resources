const alcoholSensor = formatMessage => ({
    name: formatMessage({
        id: 'alcoholSensor.name',
        default: 'Alcohol Sensor'
    }),
    extensionId: 'alcoholSensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/alcoholSensor.png`,
    description: formatMessage({
        id: 'alcoholSensor.description',
        default: 'Detect alcohol and ethanol vapors using an MQ alcohol sensor.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['sensor']
});

module.exports = alcoholSensor;
