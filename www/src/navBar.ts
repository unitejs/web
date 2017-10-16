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
        this.version = "Engine v1.2.7";
        // registry.npmjs.org CORS fails
        // const httpClient = new HttpClient();
        // httpClient.get("https://registry.npmjs.org/unitejs-cli/")
        //     .then((response) => {
        //         if (response.statusCode === 200) {
        //             if (response.content &&
        //                 response.content["dist-tags"] &&
        //                 response.content["dist-tags"].latest) {
        //                 this.version = "v" + response.content["dist-tags"].latest;
        //             }
        //         }
        //     })
        //     .catch((err) => {
        //         // Just don't display the version its not critical
        //     });
    }
}
