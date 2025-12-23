const pirMotion = formatMessage => ({
    name: formatMessage({
        id: 'pirMotion.name',
        default: 'PIR Motion Sensor'
    }),
    extensionId: 'pirMotion',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32'],
    author: 'Flowlence',
    iconURL: `assets/pirMotion.png`,
    description: formatMessage({
        id: 'pirMotion.description',
        default: 'Detect motion using passive infrared sensor for security and automation.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['sensor']
});

module.exports = pirMotion;
