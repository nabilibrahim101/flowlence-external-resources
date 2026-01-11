const button = formatMessage => ({
    name: formatMessage({
        id: 'button.name',
        default: 'Button'
    }),
    extensionId: 'button',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/button.jpg`,
    description: formatMessage({
        id: 'button.description',
        default: 'Button detection module for digital input.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['sensor']
});

module.exports = button;
