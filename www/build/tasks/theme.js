/**
 * Gulp tasks for building theme favicons.
 */
const del = require("del");
const gulp = require("gulp");
const path = require("path");
const runSequence = require("run-sequence");
const util = require("util");
const display = require("./util/display");
const packageConfig = require("./util/package-config");
const themeUtils = require("./util/theme-utils");
const uc = require("./util/unite-config");
gulp.task("theme-clean", async () => {
    const uniteConfig = await uc.getUniteConfig();
    const toClean = [
        path.join(uniteConfig.dirs.www.assets, "favicon/**/*")
    ];
    display.info("Cleaning", toClean);
    return del(toClean);
});
gulp.task("theme-favicons", async () => {
    display.info("Generating", "Fav Icons");
    const uniteConfig = await uc.getUniteConfig();
    const uniteThemeConfig = await uc.getUniteThemeConfig(uniteConfig);
    const favIconDirectory = path.join(uniteConfig.dirs.www.assets, "favicon");
    return themeUtils.generateFavIcons(uniteConfig, uniteThemeConfig, favIconDirectory);
});
gulp.task("theme-browser-config", async () => {
    display.info("Generating", "browserconfig.xml");
    const uniteConfig = await uc.getUniteConfig();
    const uniteThemeConfig = await uc.getUniteThemeConfig(uniteConfig);
    return themeUtils.buildBrowserConfig(uniteConfig, uniteThemeConfig);
});
gulp.task("theme-manifest-json", async () => {
    display.info("Generating", "manifest.json");
    const uniteConfig = await uc.getUniteConfig();
    const uniteThemeConfig = await uc.getUniteThemeConfig(uniteConfig);
    const packageJson = await packageConfig.getPackageJson();
    return themeUtils.buildManifestJson(uniteConfig, uniteThemeConfig, packageJson);
});
gulp.task("theme-headers", async () => {
    display.info("Generating", "theme headers");
    const uniteConfig = await uc.getUniteConfig();
    const uniteThemeConfig = await uc.getUniteThemeConfig(uniteConfig);
    await themeUtils.buildThemeHeaders(uniteConfig, uniteThemeConfig);
    return uc.setUniteThemeConfig(uniteConfig, uniteThemeConfig);
});
gulp.task("theme-build", async () => {
    try {
        await util.promisify(runSequence)("theme-clean", "theme-favicons", "theme-browser-config", "theme-manifest-json", "theme-headers");
    } catch (err) {
        display.error("Unhandled error during task", err);
        process.exit(1);
    }
});
// Generated by UniteJS
