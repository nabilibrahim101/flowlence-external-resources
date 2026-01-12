const wifi = formatMessage => ({
    name: formatMessage({
        id: 'wifi.name',
        default: 'WiFi'
    }),
    extensionId: 'wifi',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266NodeMCU'],
    author: 'Flowlence',
    iconURL: `assets/wifi.png`,
    description: formatMessage({
        id: 'wifi.description',
        default: 'Connect to WiFi networks and manage wireless connectivity.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: false,
    tags: ['network', 'communication']
});

module.exports = wifi;
