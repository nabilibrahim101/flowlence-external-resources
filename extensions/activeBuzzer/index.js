const activeBuzzer = formatMessage => ({
    name: formatMessage({
        id: 'activeBuzzer.name',
        default: 'Active Buzzer'
    }),
    extensionId: 'activeBuzzer',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'Flowlence',
    iconURL: `assets/activeBuzzer.jpg`,
    description: formatMessage({
        id: 'activeBuzzer.description',
        default: 'Active buzzer with built-in oscillator. Simple ON/OFF control for alarms and notifications.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['actuator'],
    helpLink: 'https://wiki.openblock.cc'
});

module.exports = activeBuzzer;
