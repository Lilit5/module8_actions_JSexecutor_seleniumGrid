// conf.js
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./*spec.js'],
    capabilities: {
        'browserName': 'chrome',
        'goog:chromeOptions': {
            'w3c': false,
        }
        },
    getPageTimeout: 10000
}