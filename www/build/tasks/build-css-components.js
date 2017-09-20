/**
 * Gulp tasks for building css.
 */
const display = require("./util/display");
const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const path = require("path");
const sass = require("gulp-sass");
const uc = require("./util/unite-config");
const asyncUtil = require("./util/async-util");
const gutil = require("gulp-util");
const errorUtil = require("./util/error-util");

gulp.task("build-css-components", async () => {
    display.info("Running", "SASS for Components");

    const uniteConfig = await uc.getUniteConfig();
    const buildConfiguration = uc.getBuildConfiguration(uniteConfig);

    let errorCount = 0;

    return asyncUtil.stream(gulp.src(path.join(uniteConfig.dirs.www.src, "**/*.scss"))
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

/* Generated by UniteJS */
