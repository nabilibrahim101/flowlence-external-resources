const json = formatMessage => ({
    name: formatMessage({
        id: 'json.name',
        default: 'JSON'
    }),
    extensionId: 'json',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266NodeMCU'],
    author: 'Flowlence',
    iconURL: `assets/json.png`,
    description: formatMessage({
        id: 'json.description',
        default: 'Create and manipulate JSON data for IoT applications.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['communication', 'data']
});

module.exports = json;
