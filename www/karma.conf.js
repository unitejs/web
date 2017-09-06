module.exports = function(config) {
    config.set({
	basePath: __dirname,
	singleRun: true,
	frameworks: [
		'jasmine'
	],
	reporters: [
		'story',
		'coverage-allsources',
		'coverage',
		'html',
		'karma-remap-istanbul'
	],
	browsers: [
		'ChromeHeadless'
	],
	coverageReporter: {
		include: './dist/**/!(app-module-config|entryPoint).js',
		exclude: '',
		reporters: [
			{
				type: 'json',
				dir: './test/reports',
				subdir: '.'
			}
		]
	},
	htmlReporter: {
		outputDir: './test/reports',
		reportName: 'unit'
	},
	remapIstanbulReporter: {
		reports: {
			text: '',
			json: './test/reports/coverage.json',
			html: './test/reports/coverage',
			lcovonly: './test/reports/lcov.info'
		}
	},
	preprocessors: {
		'./dist/**/!(*-bundle|app-module-config|entryPoint).js': [
			'sourcemap',
			'coverage'
		]
	},
	files: [
		{
			pattern: './node_modules/aurelia-animator-css/dist/amd/aurelia-animator-css.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-binding/dist/amd/aurelia-binding.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-bootstrapper/dist/amd/aurelia-bootstrapper.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-dependency-injection/dist/amd/aurelia-dependency-injection.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-event-aggregator/dist/amd/aurelia-event-aggregator.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-fetch-client/dist/amd/aurelia-fetch-client.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-http-client/dist/amd/aurelia-http-client.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-framework/dist/amd/aurelia-framework.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-history/dist/amd/aurelia-history.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-history-browser/dist/amd/aurelia-history-browser.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-loader/dist/amd/aurelia-loader.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-loader-default/dist/amd/aurelia-loader-default.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-logging/dist/amd/aurelia-logging.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-logging-console/dist/amd/aurelia-logging-console.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-metadata/dist/amd/aurelia-metadata.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-pal/dist/amd/aurelia-pal.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-pal-browser/dist/amd/aurelia-pal-browser.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-path/dist/amd/aurelia-path.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-polyfills/dist/amd/aurelia-polyfills.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-route-recognizer/dist/amd/aurelia-route-recognizer.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-router/dist/amd/aurelia-router.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-task-queue/dist/amd/aurelia-task-queue.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-templating/dist/amd/aurelia-templating.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-templating-binding/dist/amd/aurelia-templating-binding.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-dialog/dist/amd/**/*.{js,html,css}',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-templating-resources/dist/amd/**/*.{js,html,css}',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-templating-router/dist/amd/**/*.{js,html,css}',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/aurelia-validation/dist/amd/**/*.{js,html,css}',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/whatwg-fetch/fetch.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/requirejs-text/text.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/font-awesome/fonts/**/*',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/moment/moment.js',
			included: false,
			includeType: 'clientPackage'
		},
		{
			pattern: './node_modules/requirejs/require.js',
			included: true,
			includeType: 'moduleLoader'
		},
		{
			pattern: './dist/**/!(*-bundle|app-module-config|entryPoint).js',
			included: false,
			includeType: 'fixed'
		},
		{
			pattern: '../unite.json',
			included: false,
			includeType: 'fixed'
		},
		{
			pattern: './test/unit/unit-module-config.js',
			included: true,
			includeType: 'fixed'
		},
		{
			pattern: './test/unit/unit-bootstrap.js',
			included: true,
			includeType: 'fixed'
		},
		{
			pattern: './test/unit/dist/**/*.spec.js',
			included: false,
			includeType: 'fixed'
		}
	]
});
};
/* Generated by UniteJS */
