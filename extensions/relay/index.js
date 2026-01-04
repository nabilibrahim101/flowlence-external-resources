const relay = formatMessage => ({
    name: formatMessage({
        id: 'relay.name',
        default: 'Relay'
    }),
    extensionId: 'relay',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/relay.png`,
    description: formatMessage({
        id: 'relay.description',
        default: 'Control relay module for switching high-power devices.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['actuator']
});

module.exports = relay;
