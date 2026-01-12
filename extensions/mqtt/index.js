const mqtt = formatMessage => ({
    name: formatMessage({
        id: 'mqtt.name',
        default: 'MQTT'
    }),
    extensionId: 'mqtt',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266NodeMCU'],
    author: 'Flowlence',
    iconURL: `assets/mqtt.png`,
    description: formatMessage({
        id: 'mqtt.description',
        default: 'Connect to MQTT brokers and publish/subscribe to topics.'
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

module.exports = mqtt;
