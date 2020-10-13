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
        sl_ios_13: {
            base: 'SauceLabs',
            browserName: 'Safari',
            platformName: 'iOS',
            'appium:deviceName': 'iPhone Simulator',
            'appium:platformVersion': '13.2',
            'sauce:options': {
                build,
            }
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