# UniteJS Web site

The development infrastructure for this web site was generated using the [UniteJS](https://github.com/unitejs/cli) CLI tool.

The commands to set it up were as follows:

    unite configure --packageName=unitejs-web --title="UniteJS" --sourceLanguage=TypeScript --moduleType=AMD --bundler=RequireJS --unitTestRunner=Karma --unitTestFramework=Jasmine --unitTestEngine=ChromeHeadless --e2eTestRunner=Protractor --e2eTestFramework=Jasmine --linter=TSLint --license=MIT --packageManager=Yarn --cssPre=Sass --cssPost=PostCss --appFramework=Aurelia

At this stage we could do

    gulp build
    gulp theme-build
    gulp unit
    gulp e2e

## Client Packages

We wanted to use Bootstrap, FontAwesome and Bluebird (for IE compatability) so we issued the following UniteJS commnds:

    unite clientPackage --operation=add --packageName=bootstrap --version=4.0.0-beta --noScript

    unite clientPackage --operation=add --packageName=font-awesome --assets=fonts/**/*

    unite clientPackage --operation=add --packageName=bluebird --main=/js/browser/bluebird.js --mainMinified=/js/browser/bluebird.min.js --includeMode=app --scriptIncludeMode=both

Then to main.scss we added

    @import "node_modules/bootstrap/scss/bootstrap.scss";
    $fa-font-path: "../node_modules/font-awesome/fonts/";
    @import "node_modules/font-awesome/scss/font-awesome.scss";

## Production Release

To create the production release we did the following

    gulp build --buildConfiguration=prod
    gulp platform-web-package --buildConfiguration=prod

and that is the content you see pushed to the [unitejs.github.io](https://github.com/unitejs/unitejs.github.io) repository.