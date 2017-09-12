/**
 * Main entry point for app.
 */
/// <reference types="unitejs-types" />
import { bootstrap } from "./bootstrapper";

const bbPromise = Promise as any;
if (bbPromise.config) {
    bbPromise.config({
        warnings: window.unite.configName === "dev" ?
            { wForgottenReturn: false } : false
    });
}

bootstrap();
