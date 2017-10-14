/**
 * Gulp utils for unite configuration.
 */
const display = require("./display");
const envUtil = require("./env-util");
const minimist = require("minimist");
const fs = require("fs");
const util = require("util");
const path = require("path");

async function getUniteConfig () {
    let uc = envUtil.get("uniteConfig");

    if (uc) {
        return uc;
    } else {
        try {
            const data = await util.promisify(fs.readFile)("../unite.json");
            uc = JSON.parse(data.toString());
            envUtil.set("uniteConfig", uc);
            return uc;
        } catch (err) {
            display.error("Reading unite.json", err);
            process.exit(1);
            return undefined;
        }
    }
}

async function getUniteThemeConfig (uniteConfig) {
    try {
        const data = await util.promisify(fs.readFile)(path.join(
            uniteConfig.dirs.www.assetsSrc,
            "/theme/unite-theme.json"
        ));
        return JSON.parse(data.toString());
    } catch (err) {
        display.error("Reading unite-theme.json", err);
        process.exit(1);
        return undefined;
    }
}

async function setUniteThemeConfig (uniteConfig, uniteThemeConfig) {
    try {
        await util.promisify(fs.writeFile)(
            path.join(uniteConfig.dirs.www.assetsSrc, "/theme/unite-theme.json"),
            JSON.stringify(uniteThemeConfig, undefined, "\t")
        );
    } catch (err) {
        display.error("Writing unite-theme.json", err);
        process.exit(1);
    }
}

function getBuildConfiguration (uniteConfig, showInfo) {
    const knownOptions = {
        "default": {"buildConfiguration": "dev"},
        "string": ["buildConfiguration"]
    };

    const options = minimist(process.argv.slice(2), knownOptions);

    let buildConfiguration = null;

    if (uniteConfig &&
        uniteConfig.buildConfigurations &&
        uniteConfig.buildConfigurations[options.buildConfiguration]) {
        buildConfiguration = uniteConfig.buildConfigurations[options.buildConfiguration];
        if (showInfo) {
            display.info("Build Configuration", options.buildConfiguration);
        }
    } else {
        display.error(`Unknown build configuration '${options.buildConfiguration}' in unite.json, aborting.`);
        process.exit(1);
    }

    buildConfiguration = buildConfiguration || {};
    if (buildConfiguration.bundle === undefined) {
        buildConfiguration.bundle = false;
    }
    if (buildConfiguration.sourcemaps === undefined) {
        buildConfiguration.sourcemaps = true;
    }
    if (buildConfiguration.minify === undefined) {
        buildConfiguration.minify = false;
    }

    buildConfiguration.name = options.buildConfiguration;
    if (showInfo) {
        display.info("Sourcemaps", buildConfiguration.sourcemaps);
        display.info("Minify", buildConfiguration.minify);
        display.info("Bundle", buildConfiguration.bundle);
    }

    return buildConfiguration;
}

function extensionMap (extensions) {
    if (extensions.length === 1) {
        return extensions[0];
    } else {
        return `{${extensions.join(",")}}`;
    }
}

module.exports = {
    getBuildConfiguration,
    getUniteConfig,
    getUniteThemeConfig,
    setUniteThemeConfig,
    extensionMap
};

/* Generated by UniteJS */
