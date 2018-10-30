/**
 * Gulp tasks for post building css.
 */
const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const path = require("path");
const through2 = require("through2");
const asyncUtil = require("./util/async-util");
const display = require("./util/display");
const errorUtil = require("./util/error-util");
const uc = require("./util/unite-config");
gulp.task("build-css-post-components", async () => {
    display.info("Running", "PostCss for Components");
    const uniteConfig = await uc.getUniteConfig();
    const buildConfiguration = uc.getBuildConfiguration(uniteConfig, false);
    let errorCount = 0;
    return asyncUtil.stream(gulp.src(path.join(uniteConfig.dirs.www.dist, "**/*.css"))
        .pipe(buildConfiguration.sourcemaps ? sourcemaps.init() : through2.obj())
        .pipe(postcss())
        .on("error", (err) => {
            display.error(err.message);
            errorCount++;
        })
        .on("error", errorUtil.handleErrorEvent)
        .pipe(buildConfiguration.minify ? cssnano() : through2.obj())
        .pipe(buildConfiguration.sourcemaps ? sourcemaps.write({
            includeContent: true,
            sourceRoot: "./src"
        }) : through2.obj())
        .pipe(gulp.dest(uniteConfig.dirs.www.dist))
        .on("end", () => {
            errorUtil.handleErrorCount(errorCount);
        }));
});
// Generated by UniteJS
