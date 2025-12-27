const trafficLight = formatMessage => ({
    name: formatMessage({
        id: 'trafficLight.name',
        default: 'Traffic Light'
    }),
    extensionId: 'trafficLight',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/trafficLight.svg`,
    description: formatMessage({
        id: 'trafficLight.description',
        default: 'Control traffic light module with red, orange, and green LEDs.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['actuator']
});

module.exports = trafficLight;
