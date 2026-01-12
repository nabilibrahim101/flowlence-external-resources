const http = formatMessage => ({
    name: formatMessage({
        id: 'http.name',
        default: 'HTTP'
    }),
    extensionId: 'http',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266NodeMCU'],
    author: 'Flowlence',
    iconURL: `assets/http.png`,
    description: formatMessage({
        id: 'http.description',
        default: 'Make HTTP requests to REST APIs (GET, POST, PUT, DELETE).'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['communication']
});

module.exports = http;
