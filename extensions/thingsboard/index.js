const thingsboard = formatMessage => ({
    name: formatMessage({
        id: 'thingsboard.name',
        default: 'WiFi & ThingsBoard'
    }),
    extensionId: 'thingsboard',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266NodeMCU'],
    author: 'Flowlence',
    iconURL: `assets/thingsboard.png`,
    description: formatMessage({
        id: 'thingsboard.description',
        default: 'Connect to WiFi and send sensor data to ThingsBoard IoT platform.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: false,
    tags: ['communication']
});

module.exports = thingsboard;
