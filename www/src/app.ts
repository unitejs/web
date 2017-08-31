/**
 * Main application class.
 */
import { Router, RouterConfiguration } from "aurelia-router";

export class App {
    public router: Router;

    public configureRouter(config: RouterConfiguration, router: Router): any {
        config.title = "UniteJS";
        config.map([
            { route: ["", "home"], name: "home", moduleId: "./home/home", nav: true, title: "Home" },
            {
                route: "documentation",
                name: "documentation",
                moduleId: "./documentation/documentation",
                nav: true,
                title: "Documentation"
            },
            {
                route: "gettingStarted",
                name: "gettingStarted",
                moduleId: "./gettingStarted/gettingStarted",
                nav: true,
                title: "Getting Started"
            },
            {
                route: "examples",
                name: "examples",
                moduleId: "./examples/examples",
                nav: true,
                title: "Examples"
            }
        ]);

        this.router = router;
    }
}
