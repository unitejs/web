/**
 * Gulp tasks for serving site.
 */
const gulp = require("gulp");
const browserSync = require("browser-sync");
const util = require("util");
const minimist = require("minimist");

gulp.task("serve", () => {
    const knownOptions = {
        "default": {
            "secure": false,
            "port": "9000"
        },
        "boolean": [
            "secure"
        ],
        "string": [
            "port"
        ]
    };

    const options = minimist(process.argv.slice(2), knownOptions);

    const browserSyncInstance = browserSync.create();
    const initAsync = util.promisify(browserSyncInstance.init);
    return initAsync({
        "https": options.secure,
        "online": true,
        "open": true,
        "port": options.port,
        "server": {"baseDir": ["."]}
    });
});
/* Generated by UniteJS */