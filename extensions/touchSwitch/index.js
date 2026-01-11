const touchSwitch = formatMessage => ({
    name: formatMessage({
        id: 'touchSwitch.name',
        default: 'Touch Switch'
    }),
    extensionId: 'touchSwitch',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/touchSwitch.jpg`,
    description: formatMessage({
        id: 'touchSwitch.description',
        default: 'Touch switch detection module for digital input.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['sensor']
});

module.exports = touchSwitch;
