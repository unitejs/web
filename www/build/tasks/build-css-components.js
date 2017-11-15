/**
 * Gulp tasks for building css.
 */
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const gutil = require("gulp-util");
const path = require("path");
const asyncUtil = require("./util/async-util");
const display = require("./util/display");
const errorUtil = require("./util/error-util");
const uc = require("./util/unite-config");
gulp.task("build-css-components", async () => {
    display.info("Running", "SASS for Components");
    const uniteConfig = await uc.getUniteConfig();
    const buildConfiguration = uc.getBuildConfiguration(uniteConfig, false);
    let errorCount = 0;
    return asyncUtil.stream(gulp.src(path.join(uniteConfig.dirs.www.src, `**/*.${uniteConfig.styleExtension}`))
        .pipe(buildConfiguration.sourcemaps ? sourcemaps.init() : gutil.noop())
        .pipe(sass())
        .on("error", (err) => {
            display.error(err.message);
            errorCount++;
        })
        .on("error", errorUtil.handleErrorEvent)
        .pipe(buildConfiguration.sourcemaps ? sourcemaps.write() : gutil.noop())
        .pipe(gulp.dest(uniteConfig.dirs.www.dist))
        .on("end", () => {
            errorUtil.handleErrorCount(errorCount);
        }));
});
// Generated by UniteJS
