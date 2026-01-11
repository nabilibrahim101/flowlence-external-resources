const steamSensor = formatMessage => ({
    name: formatMessage({
        id: 'steamSensor.name',
        default: 'Steam Sensor (Rain Detector)'
    }),
    extensionId: 'steamSensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/steamSensor.png`,
    description: formatMessage({
        id: 'steamSensor.description',
        default: 'Analog sensor for detecting water vapor, steam, and rain droplets.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['sensor']
});

module.exports = steamSensor;
