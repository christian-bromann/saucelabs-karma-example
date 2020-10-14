const build = 'Karma Example Build'

module.exports = function(config) {
    // Example set of browsers to run on Sauce Labs
    // Check out https://saucelabs.com/platforms for all browser/platform combos
    var customLaunchers = {
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            platformName: 'Windows 10',
            browserVersion: 'latest',
            'sauce:options': {
                build,
            }
        },
        sl_safari_9: {
            base: 'SauceLabs',
            browserName: 'safari',
            version: 9,
            platform: 'OS X 10.11'
        },
        sl_ie_9: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            version: 9,
            platform: 'Windows 7'
        },
        sl_ff_54: {
            base: 'SauceLabs',
            browserName: 'firefox',
            version: 54,
            platform: 'Windows 10'
        },
        sl_mse_13: {
            base: 'SauceLabs',
            browserName: 'microsoftedge',
            version: '13.10586',
            platform: 'Windows 10'
        }
        // sl_chrome_55: {
        //     base: 'SauceLabs',
        //     browserName: 'chrome',
        //     version: ,
        //     platform: 'Windows 10'
        // }
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