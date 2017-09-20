/**
 * Google Analytics Step class.
 */
/// <reference types="google.analytics" />
import { NavigationInstruction, Next } from "aurelia-router";

export class GoogleAnalyticsStep {
    public run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
        if ((window as any).ga !== undefined) {
            ga("send", {
                hitType: "pageview",
                page: navigationInstruction.fragment,
                title: navigationInstruction.config.title
            });
        }
        return next();
    }
}
