/**
 * Gulp tasks for serving site.
 */
const gulp = require("gulp");
const browserSync = require("browser-sync");
const util = require("util");
const path = require("path");
const minimist = require("minimist");
const uc = require("./util/unite-config");
const envUtil = require("./util/env-util");
const runSequence = require("run-sequence");

let browserSyncInstance = null;

gulp.task("serve", async () => {
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

    const uniteConfig = await uc.getUniteConfig();

    envUtil.set("transpileContinueOnError", true);

    gulp.watch(
        path.join(uniteConfig.dirs.www.src, `**/*.${uc.extensionMap(uniteConfig.sourceExtensions)}`),
        () => {
            runSequence("build-src-all", "serve-reload");
        }
    );
    gulp.watch(
        path.join(uniteConfig.dirs.www.src, `**/*.${uc.extensionMap(uniteConfig.viewExtensions)}`),
        () => {
            runSequence("build-src-view-all", "serve-reload");
        }
    );
    gulp.watch(
        path.join(uniteConfig.dirs.www.src, `**/*.${uniteConfig.styleExtension}`),
        () => {
            runSequence("build-src-style-all", "serve-reload");
        }
    );
    gulp.watch(
        path.join(uniteConfig.dirs.www.cssSrc, `**/*.${uniteConfig.styleExtension}`),
        () => {
            runSequence("build-css-all", "serve-reload");
        }
    );

    browserSyncInstance = browserSync.create();
    const initAsync = util.promisify(browserSyncInstance.init);
    return initAsync({
        "https": options.secure,
        "online": true,
        "open": true,
        "port": options.port,
        "server": {"baseDir": ["."]},
        "reloadDebounce": 2000
    });
});

gulp.task("serve-reload", () => {
    if (browserSyncInstance) {
        browserSyncInstance.reload();
    }
});


/* Generated by UniteJS */
