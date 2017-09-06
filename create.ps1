unite configure --packageName=unitejs-web --title="UniteJS" --sourceLanguage=TypeScript --moduleType=AMD --bundler=RequireJS --unitTestRunner=Karma --unitTestFramework=Jasmine --unitTestEngine=ChromeHeadless --e2eTestRunner=Protractor --e2eTestFramework=Jasmine --linter=TSLint --license=MIT --packageManager=Yarn --cssPre=Sass --cssPost=PostCss --appFramework=Aurelia

unite clientPackage --operation=add --packageName=bootstrap --version=4.0.0-beta --noScript

unite clientPackage --operation=add --packageName=font-awesome --assets=fonts/**/*

unite clientPackage --operation=add --packageName=bluebird --main=/js/browser/bluebird.js --mainMinified=/js/browser/bluebird.min.js --includeMode=app --scriptIncludeMode=both

unite clientPackage --operation=remove --packageName=bootstrap
unite clientPackage --operation=remove --packageName=bluebird
unite clientPackage --operation=remove --packageName=font-awesome
