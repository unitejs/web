/**
 * Status class.
 */
export class Status {
    public sections: {
        name: string;
        description: string,
        org: string,
        items: {
            name: string;
            repo: string;
            branches: string[],
            hasCoverage?: boolean
        }[]
    }[];

    constructor() {
        this.sections = [
            {
                name: "Application Components",
                description: "Main libraries used by the UniteJS application.",
                org: "unitejs",
                items: [
                    {
                        name: "Framework", repo: "framework", branches: ["master", "develop"],
                        hasCoverage: true
                    },
                    { name: "CLI-Core", repo: "cli-core", branches: ["master", "develop"], hasCoverage: true },
                    { name: "Engine", repo: "engine", branches: ["master", "develop"], hasCoverage: true },
                    { name: "CLI", repo: "cli", branches: ["master", "develop"], hasCoverage: true },
                    { name: "Image", repo: "image", branches: ["master", "develop"], hasCoverage: true },
                    { name: "Image CLI", repo: "image-cli", branches: ["master", "develop"], hasCoverage: true }
                ]
            },
            {
                name: "Quick Start Examples",
                description: "Quick Start examples used by articles.",
                org: "unitejs-examples",
                items: [
                    { name: "Cordova", repo: "cordova-quickstart", branches: ["master"] },
                    { name: "Docker", repo: "docker-quickstart", branches: ["master"] },
                    { name: "Electron", repo: "electron-quickstart", branches: ["master"] }
                ]
            },
            {
                name: "Profiles",
                description: "UniteJS standard profiles.",
                org: "unitejs-test",
                items: [
                    { name: "Angular JavaScript", repo: "angular-javascript", branches: ["master"] },
                    { name: "Angular TypeScript", repo: "angular-typescript", branches: ["master"] },
                    { name: "Aurelia JavaScript", repo: "aurelia-javascript", branches: ["master"] },
                    { name: "Aurelia TypeScript", repo: "aurelia-typescript", branches: ["master"] },
                    { name: "Polymer JavaScript", repo: "polymer-javascript", branches: ["master"] },
                    { name: "Polymer TypeScript", repo: "polymer-typescript", branches: ["master"] },
                    { name: "Preact JavaScript", repo: "preact-javascript", branches: ["master"] },
                    { name: "Preact TypeScript", repo: "preact-typescript", branches: ["master"] },
                    { name: "React JavaScript", repo: "react-javascript", branches: ["master"] },
                    { name: "React TypeScript", repo: "react-typescript", branches: ["master"] },
                    { name: "Vanilla JavaScript", repo: "vanilla-javascript", branches: ["master"] },
                    { name: "Vanilla TypeScript", repo: "vanilla-typescript", branches: ["master"] },
                    { name: "Vue JavaScript", repo: "vue-javascript", branches: ["master"] },
                    { name: "Vue TypeScript", repo: "vue-typescript", branches: ["master"] }
                ]
            },
            {
                name: "Matrix",
                description: "Application framework matrix, each repo has multiple configuration combinations. " +
                    "<br/>Check the create-apps.sh in each repo to see the combinations it is testing.",
                org: "unitejs-test-matrix",
                items: [
                    {
                        name: "Angular Browserify", repo: "ng-browserify-matrix",
                        branches: ["master"]
                    },
                    { name: "Angular SystemJS", repo: "ng-systemjs-matrix", branches: ["master"] },
                    { name: "Angular Webpack", repo: "ng-webpack-matrix", branches: ["master"] },
                    {
                        name: "Aurelia RequireJS", repo: "au-requirejs-matrix",
                        branches: ["master"]
                    },
                    { name: "Aurelia SystemJS", repo: "au-systemjs-matrix", branches: ["master"] },
                    {
                        name: "Polymer Browserify", repo: "po-browserify-matrix",
                        branches: ["master"]
                    },
                    { name: "Polymer SystemJS", repo: "po-systemjs-matrix", branches: ["master"] },
                    { name: "Polymer Webpack", repo: "po-webpack-matrix", branches: ["master"] },
                    {
                        name: "Preact Browserify", repo: "pr-browserify-matrix",
                        branches: ["master"]
                    },
                    { name: "Preact RequireJS", repo: "pr-requirejs-matrix", branches: ["master"] },
                    { name: "Preact SystemJS", repo: "pr-systemjs-matrix", branches: ["master"] },
                    { name: "Preact Webpack", repo: "pr-webpack-matrix", branches: ["master"] },
                    {
                        name: "React Browserify", repo: "re-browserify-matrix",
                        branches: ["master"]
                    },
                    { name: "React RequireJS", repo: "re-requirejs-matrix", branches: ["master"] },
                    { name: "React SystemJS", repo: "re-systemjs-matrix", branches: ["master"] },
                    { name: "React Webpack", repo: "re-webpack-matrix", branches: ["master"] },
                    {
                        name: "Vanilla Browserify", repo: "va-browserify-matrix",
                        branches: ["master"]
                    },
                    {
                        name: "Vanilla RequireJS", repo: "va-requirejs-matrix",
                        branches: ["master"]
                    },
                    { name: "Vanilla SystemJS", repo: "pa-systemjs-matrix", branches: ["master"] },
                    { name: "Vanilla Webpack", repo: "va-webpack-matrix", branches: ["master"] },
                    { name: "Vue Browserify", repo: "vu-browserify-matrix", branches: ["master"] },
                    { name: "Vue RequireJS", repo: "vu-requirejs-matrix", branches: ["master"] },
                    { name: "Vue SystemJS", repo: "vu-systemjs-matrix", branches: ["master"] },
                    { name: "Vue Webpack", repo: "vu-webpack-matrix", branches: ["master"] },
                ]
            }
        ];
    }
}
