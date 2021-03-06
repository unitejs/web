/**
 * Main application class.
 */
import { Router, RouterConfiguration } from "aurelia-router";
import { GoogleAnalyticsStep } from "./pipelineSteps/googleAnalyticsStep";
import { ScrollToTopPipelineStep } from "./pipelineSteps/scrollToTopPipelineStep";

export class App {
    public router: Router;

    public configureRouter(config: RouterConfiguration, router: Router): any {
        config.title = "UniteJS";
        config.addPostRenderStep(ScrollToTopPipelineStep);
        config.addPostRenderStep(GoogleAnalyticsStep);
        config.map([
            {
                route: ["", "home"],
                name: "home",
                moduleId: "./home/home",
                nav: true,
                title: "Home"
            },
            {
                route: "whatsnew",
                name: "whatsnew",
                moduleId: "./whatsNew/whatsNew",
                nav: true,
                title: "What's New"
            },
            {
                route: "articles",
                name: "articles",
                moduleId: "./articles/articles",
                nav: true,
                title: "Articles"
            },
            {
                route: "documentation",
                redirect: "cli"
            },
            {
                route: "cli",
                name: "cli",
                moduleId: "./cli/cli",
                nav: true,
                title: "CLI"
            },
            {
                route: "generatedapp",
                name: "generatedapp",
                moduleId: "./generatedApp/generatedApp",
                nav: true,
                title: "Generated App"
            },
            {
                route: "generator",
                name: "generator",
                moduleId: "./generator/generator",
                nav: true,
                title: "Generator"
            },
            {
                route: "status",
                name: "status",
                moduleId: "./status/status",
                nav: true,
                title: "Status"
            },
            {
                route: "examples",
                redirect: "cli"
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
            },
            {
                route: "media",
                name: "media",
                moduleId: "./info/media",
                nav: false,
                title: "Media"
            }
        ]);

        this.router = router;
    }
}
