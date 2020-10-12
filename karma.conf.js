module.exports = function(config) {
    // Example set of browsers to run on Sauce Labs
    // Check out https://saucelabs.com/platforms for all browser/platform combos
    var customLaunchers = {
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            platformName: 'Windows 10',
            browserVersion: 'latest'
        }
    }
  
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/*.js',
            'test/*.js'
        ],
        sauceLabs: {
            testName: 'Web App Unit Tests'
        },
        customLaunchers: customLaunchers,
        browsers: Object.keys(customLaunchers),
        reporters: ['dots'],
        logLevel: config.LOG_DEBUG,
        singleRun: true
    })
  }