const lightSensor = formatMessage => ({
    name: formatMessage({
        id: 'lightSensor.name',
        default: 'Light Sensor (Photoresistance)'
    }),
    extensionId: 'lightSensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/lightSensor.jpg`,
    description: formatMessage({
        id: 'lightSensor.description',
        default: 'Photoresistance sensor for measuring light intensity.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['sensor']
});

module.exports = lightSensor;
