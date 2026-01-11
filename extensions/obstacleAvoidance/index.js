const obstacleAvoidance = formatMessage => ({
    name: formatMessage({
        id: 'obstacleAvoidance.name',
        default: 'Obstacle Avoidance'
    }),
    extensionId: 'obstacleAvoidance',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Flowlence',
    iconURL: `assets/obstacleAvoidance.png`,
    description: formatMessage({
        id: 'obstacleAvoidance.description',
        default: 'IR obstacle avoidance sensor for detecting objects.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['sensor']
});

module.exports = obstacleAvoidance;
