/**
 * GeneratedApp class.
 */
import { bindable } from "aurelia-templating";

export class GeneratedApp {
    @bindable
    public topOffset: number;

    public attached(): void {
        const navBars = document.getElementsByTagName("nav-bar");

        if (navBars.length > 0) {
            const navBarRect = navBars[0].getBoundingClientRect();
            this.topOffset = navBarRect.height;
        }
    }
}
