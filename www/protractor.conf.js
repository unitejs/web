const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const fs = require('fs');
const path = require('path');
const webDriverPath = path.resolve('./node_modules/webdriver-manager/selenium/');
exports.config = {
	baseUrl: 'http://localhost:9000',
	specs: [
		'./test/e2e/dist/**/*.spec.js'
	],
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: [
				'--headless',
				'--disable-gpu'
			]
		}
	},
	plugins: [
		{
			path: './node_modules/aurelia-protractor-plugin'
		}
	],
	localSeleniumStandaloneOpts: {
		jvmArgs: []
	},
	framework: 'jasmine',
	jasmineNodeOpts: {
		showColors: true
	}
};
const files = fs.readdirSync(webDriverPath);
const jvmArgs = [];
files.forEach(file => {
    const lowerFile = file.toLowerCase();
    if (lowerFile.substr(-3) !== "zip" && lowerFile.substr(-6) !== "tar.gz" && lowerFile.substr(-3) !== "xml" && lowerFile.substr(-4) !== "json") {
        if (lowerFile.substr(0, 5) === "gecko") {
            jvmArgs.push('-Dwebdriver.gecko.driver=' + path.join(webDriverPath, file));
        } else if (lowerFile.substr(0, 6) === "chrome") {
            jvmArgs.push('-Dwebdriver.chrome.driver=' + path.join(webDriverPath, file));
        } else if (lowerFile.substr(0, 8) === "iedriver") {
            jvmArgs.push('-Dwebdriver.ie.driver=' + path.join(webDriverPath, file));
        } else if (lowerFile.substr(0, 18) === "microsoftwebdriver") {
            jvmArgs.push('-Dwebdriver.edge.driver=' + path.join(webDriverPath, file));
        }
    }
});
exports.config.localSeleniumStandaloneOpts.jvmArgs = jvmArgs;
exports.config.onPrepare = () => {
    jasmine.getEnv().clearReporters();
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
            savePath: './test/reports/e2e/',
            fileName: 'index'
        })
    );
    jasmine.getEnv().addReporter(
        new SpecReporter({
            displayStacktrace: 'all'
        })
    );
};
/* Generated by UniteJS */
