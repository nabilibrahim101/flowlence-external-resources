const hornAmplifier = formatMessage => ({
    name: formatMessage({
        id: 'hornAmplifier.name',
        default: 'Horn Buzzer Amplifier'
    }),
    extensionId: 'hornAmplifier',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'Flowlence',
    iconURL: `assets/hornAmplifier.jpg`,
    description: formatMessage({
        id: 'hornAmplifier.description',
        default: 'Horn 8002b audio power amplifier module. Louder passive buzzer for melodies and sound effects.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: false,
    tags: ['actuator'],
    helpLink: 'https://wiki.openblock.cc'
});

module.exports = hornAmplifier;
