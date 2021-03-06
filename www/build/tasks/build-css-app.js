/**
 * Gulp tasks for building css.
 */
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const path = require("path");
const through2 = require("through2");
const asyncUtil = require("./util/async-util");
const display = require("./util/display");
const errorUtil = require("./util/error-util");
const uc = require("./util/unite-config");
gulp.task("build-css-app", async () => {
    display.info("Running", "SASS for App");
    const uniteConfig = await uc.getUniteConfig();
    const buildConfiguration = uc.getBuildConfiguration(uniteConfig, false);
    let errorCount = 0;
    return asyncUtil.stream(gulp.src(path.join(uniteConfig.dirs.www.cssSrc, `main.${uniteConfig.styleExtension}`))
        .pipe(buildConfiguration.sourcemaps ? sourcemaps.init() : through2.obj())
        .pipe(sass())
        .on("error", (err) => {
            display.error(err.message);
            errorCount++;
        })
        .on("error", errorUtil.handleErrorEvent)
        .pipe(buildConfiguration.sourcemaps ? sourcemaps.write() : through2.obj())
        .pipe(gulp.dest(uniteConfig.dirs.www.cssDist))
        .on("end", () => {
            errorUtil.handleErrorCount(errorCount);
        }));
});
// Generated by UniteJS
