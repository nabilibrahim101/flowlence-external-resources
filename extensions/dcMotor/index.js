const dcMotor = formatMessage => ({
    name: formatMessage({
        id: 'dcMotor.name',
        default: 'DC Motor',
        description: 'Name of DC Motor'
    }),
    extensionId: 'dcMotor',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: 'assets/dcMotor.jpg',
    description: formatMessage({
        id: 'dcMotor.description',
        default: 'DC Motor driver for ESP32',
        description: 'Description of dcMotor'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['actuator'],
    helpLink: 'https://www.flowlence.com/'
});

module.exports = dcMotor;
