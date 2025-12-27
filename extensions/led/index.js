const led = formatMessage => ({
    name: formatMessage({
        id: 'led.name',
        default: 'LED'
    }),
    extensionId: 'led',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/led.svg`,
    description: formatMessage({
        id: 'led.description',
        default: 'Control LEDs - turn on, off, toggle, and blink.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['actuator']
});

module.exports = led;
