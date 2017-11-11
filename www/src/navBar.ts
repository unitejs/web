/**
 * NavBar class.
 */
import { HttpClient } from "aurelia-fetch-client";
import { Router } from "aurelia-router";
import { bindable, customElement } from "aurelia-templating";

@customElement("nav-bar")
export class NavBar {
    @bindable
    public router: Router;

    public version: string;

    public attached(): void {
        const httpClient = new HttpClient();
        httpClient.fetch("https://api.npms.io/v2/package/unitejs-cli")
        .then((response) => response.json())
        .then((json) => {
            if (json.collected &&
                json.collected.metadata) {
                this.version = `v${json.collected.metadata.version}`;
            }
        })
        .catch(() => {
            // ignoer error we just wont display version
        });
    }
}
