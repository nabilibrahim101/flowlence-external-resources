const servoArduino = formatMessage => ({
    name: formatMessage({
        id: 'servoArduino.name',
        default: 'Servo',
        description: 'Name of servo'
    }),
    extensionId: 'servoArduino',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: 'assets/servo.jpg',
    description: formatMessage({
        id: 'servoArduino.description',
        default: 'Servo motor driver for Arduino and ESP32',
        description: 'Description of servoArduino'
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

module.exports = servoArduino;
