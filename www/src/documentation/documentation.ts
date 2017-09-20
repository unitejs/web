/**
 * Documentation class.
 */
import { bindable } from "aurelia-templating";
import { Scroll } from "../domHelpers/scroll";

export class Documentation {
    @bindable
    public commandDisplay: string;

    @bindable
    public topOffset: number;

    constructor() {
        this.commandDisplay = "intro";
    }

    public attached(): void {
        const navBars = document.getElementsByTagName("nav-bar");

        if (navBars.length > 0) {
            const navBarRect = navBars[0].getBoundingClientRect();
            this.topOffset = navBarRect.height;
        }
    }

    public displayDocumentation(which: string): void {
        this.commandDisplay = which;
    }
}
