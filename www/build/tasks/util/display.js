/**
 * Gulp utils for display.
 */
const gutil = require("gulp-util");

function log (text) {
    gutil.log(text);
}

function info (caption, args) {
    if (args === undefined) {
        gutil.log(`[${gutil.colors.cyan(caption)}]`);
    } else if (Array.isArray(args)) {
        args.forEach(arg => {
            gutil.log(`[${gutil.colors.cyan(caption)}]`, arg);
        });
    } else {
        gutil.log(`[${gutil.colors.cyan(caption)}]`, args);
    }
}

function error (text, err) {
    gutil.log(gutil.colors.red(`[ERROR] ${text}`));
    if (err !== undefined) {
        gutil.log(gutil.colors.red(`${err}`));
    }
}

function warning (text) {
    gutil.log(gutil.colors.yellow(`[WARNING] ${text}`));
}

function success (text) {
    gutil.log(gutil.colors.green(text));
}

module.exports = {
    error,
    info,
    log,
    success,
    warning
};

/* Generated by UniteJS */
