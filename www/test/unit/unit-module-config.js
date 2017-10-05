require.config({
	"paths": {
		"aurelia-animator-css": "./node_modules/aurelia-animator-css/dist/amd/aurelia-animator-css",
		"aurelia-binding": "./node_modules/aurelia-binding/dist/amd/aurelia-binding",
		"aurelia-bootstrapper": "./node_modules/aurelia-bootstrapper/dist/amd/aurelia-bootstrapper",
		"aurelia-dependency-injection": "./node_modules/aurelia-dependency-injection/dist/amd/aurelia-dependency-injection",
		"aurelia-event-aggregator": "./node_modules/aurelia-event-aggregator/dist/amd/aurelia-event-aggregator",
		"aurelia-fetch-client": "./node_modules/aurelia-fetch-client/dist/amd/aurelia-fetch-client",
		"aurelia-http-client": "./node_modules/aurelia-http-client/dist/amd/aurelia-http-client",
		"aurelia-framework": "./node_modules/aurelia-framework/dist/amd/aurelia-framework",
		"aurelia-history": "./node_modules/aurelia-history/dist/amd/aurelia-history",
		"aurelia-history-browser": "./node_modules/aurelia-history-browser/dist/amd/aurelia-history-browser",
		"aurelia-loader": "./node_modules/aurelia-loader/dist/amd/aurelia-loader",
		"aurelia-loader-default": "./node_modules/aurelia-loader-default/dist/amd/aurelia-loader-default",
		"aurelia-logging": "./node_modules/aurelia-logging/dist/amd/aurelia-logging",
		"aurelia-logging-console": "./node_modules/aurelia-logging-console/dist/amd/aurelia-logging-console",
		"aurelia-metadata": "./node_modules/aurelia-metadata/dist/amd/aurelia-metadata",
		"aurelia-pal": "./node_modules/aurelia-pal/dist/amd/aurelia-pal",
		"aurelia-pal-browser": "./node_modules/aurelia-pal-browser/dist/amd/aurelia-pal-browser",
		"aurelia-path": "./node_modules/aurelia-path/dist/amd/aurelia-path",
		"aurelia-polyfills": "./node_modules/aurelia-polyfills/dist/amd/aurelia-polyfills",
		"aurelia-route-recognizer": "./node_modules/aurelia-route-recognizer/dist/amd/aurelia-route-recognizer",
		"aurelia-router": "./node_modules/aurelia-router/dist/amd/aurelia-router",
		"aurelia-task-queue": "./node_modules/aurelia-task-queue/dist/amd/aurelia-task-queue",
		"aurelia-templating": "./node_modules/aurelia-templating/dist/amd/aurelia-templating",
		"aurelia-templating-binding": "./node_modules/aurelia-templating-binding/dist/amd/aurelia-templating-binding",
		"whatwg-fetch": "./node_modules/whatwg-fetch/fetch",
		"requirejs-text": "./node_modules/requirejs-text/text"
	},
	"packages": [
		{
			"name": "aurelia-dialog",
			"location": "./node_modules/aurelia-dialog/dist/amd",
			"main": "aurelia-dialog"
		},
		{
			"name": "aurelia-templating-resources",
			"location": "./node_modules/aurelia-templating-resources/dist/amd",
			"main": "aurelia-templating-resources"
		},
		{
			"name": "aurelia-templating-router",
			"location": "./node_modules/aurelia-templating-router/dist/amd",
			"main": "aurelia-templating-router"
		},
		{
			"name": "aurelia-validation",
			"location": "./node_modules/aurelia-validation/dist/amd",
			"main": "aurelia-validation"
		}
	],
	"map": {
		"*": {
			"text": "requirejs-text"
		}
	},
	"baseUrl": "/base/"
});
preloadModules = [];
