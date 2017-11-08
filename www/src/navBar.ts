/**
 * NavBar class.
 */
import { Router } from "aurelia-router";
import { bindable, customElement } from "aurelia-templating";

@customElement("nav-bar")
export class NavBar {
    @bindable
    public router: Router;

    public version: string;

    public attached(): void {
        this.version = "Engine v1.6.4";
    }
}
