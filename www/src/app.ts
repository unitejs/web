/**
 * Main application class.
 */
import { Router, RouterConfiguration } from "aurelia-router";
import { ScrollToTopPipelineStep } from "./pipelineSteps/scrollToTopPipelineStep";

export class App {
    public router: Router;

    public configureRouter(config: RouterConfiguration, router: Router): any {
        config.title = "UniteJS";
        config.addPostRenderStep(ScrollToTopPipelineStep);
        config.map([
            {
                route: ["", "home"],
                name: "home",
                moduleId: "./home/home",
                nav: true,
                title: "Home"
            },
            {
                route: "documentation",
                name: "documentation",
                moduleId: "./documentation/documentation",
                nav: true,
                title: "Documentation"
            },
            {
                route: "generator",
                name: "generator",
                moduleId: "./generator/generator",
                nav: true,
                title: "Generator"
            },
            {
                route: "examples",
                name: "examples",
                moduleId: "./examples/examples",
                nav: true,
                title: "Examples"
            },
            {
                route: "about",
                name: "about",
                moduleId: "./info/about",
                nav: false,
                title: "About"
            },
            {
                route: "the-team",
                name: "the-team",
                moduleId: "./info/theTeam",
                nav: false,
                title: "The Team"
            },
            {
                route: "license",
                name: "license",
                moduleId: "./info/license",
                nav: false,
                title: "License"
            }
        ]);

        this.router = router;
    }
}
