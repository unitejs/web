/**
 * Scroll To Top Pipeline Step class.
 */
import { NavigationInstruction, Next } from "aurelia-router";
import { Scroll } from "../domHelpers/scroll";

export class ScrollToTopPipelineStep {
    public run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
        Scroll.smoothScroll(window, 0, 0);
        return next();
    }
}
