/**
 * Documentation class.
 */
import { bindable } from "aurelia-templating";
import { Scroll } from "../domHelpers/scroll";

export class Documentation {
    @bindable
    public commandDisplay: string;

    constructor() {
        this.commandDisplay = "intro";
    }

    public displayDocumentation(which: string): void {
        this.commandDisplay = which;

        const elements = document.getElementsByTagName("hr");
        const navBars = document.getElementsByTagName("nav-bar");

        if (elements.length > 0 && navBars.length > 0) {
            const clientRect = elements[0].getBoundingClientRect();
            const navBarRect = navBars[0].getBoundingClientRect();
            Scroll.smoothScroll(window, 0, clientRect.top - navBarRect.height);
        }
    }
}
