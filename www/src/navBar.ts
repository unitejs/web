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
        httpClient.fetch("https://registry.npmjs.org/unitejs-cli/")
            .then((response) => response.json())
            .then((json) => {
                if (json && json["dist-tags"] && json["dist-tags"].latest) {
                    this.version = "v" + json["dist-tags"].latest;
                }
            })
            .catch((err) => {
                // Just don't display the version
            });
    }
}
