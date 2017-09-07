/**
 * Documentation class.
 */
import { bindable } from "aurelia-templating";

export class Documentation {
    @bindable
    public commandDisplay: string;

    constructor() {
        this.commandDisplay = "intro";
    }

    public displayDocumentation(which: string): void {
        this.commandDisplay = which;
    }
}
