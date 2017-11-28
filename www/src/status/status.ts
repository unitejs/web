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
                    { name: "Angular JavaScript", repo: "angular-javascript", branches: ["master", "develop"] },
                    { name: "Angular TypeScript", repo: "angular-typescript", branches: ["master", "develop"] },
                    { name: "Aurelia JavaScript", repo: "aurelia-javascript", branches: ["master", "develop"] },
                    { name: "Aurelia TypeScript", repo: "aurelia-typescript", branches: ["master", "develop"] },
                    { name: "Polymer JavaScript", repo: "polymer-javascript", branches: ["master", "develop"] },
                    { name: "Polymer TypeScript", repo: "polymer-typescript", branches: ["master", "develop"] },
                    { name: "Preact JavaScript", repo: "preact-javascript", branches: ["master", "develop"] },
                    { name: "Preact TypeScript", repo: "preact-typescript", branches: ["master", "develop"] },
                    { name: "React JavaScript", repo: "react-javascript", branches: ["master", "develop"] },
                    { name: "React TypeScript", repo: "react-typescript", branches: ["master", "develop"] },
                    { name: "Vanilla JavaScript", repo: "vanilla-javascript", branches: ["master", "develop"] },
                    { name: "Vanilla TypeScript", repo: "vanilla-typescript", branches: ["master", "develop"] },
                    { name: "Vue JavaScript", repo: "vue-javascript", branches: ["master", "develop"] },
                    { name: "Vue TypeScript", repo: "vue-typescript", branches: ["master", "develop"] }
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
                        branches: ["master", "develop"]
                    },
                    { name: "Angular SystemJS", repo: "ng-systemjs-matrix", branches: ["master", "develop"] },
                    { name: "Angular Webpack", repo: "ng-webpack-matrix", branches: ["master", "develop"] },
                    {
                        name: "Aurelia RequireJS", repo: "au-requirejs-matrix",
                        branches: ["master", "develop"]
                    },
                    { name: "Aurelia SystemJS", repo: "au-systemjs-matrix", branches: ["master", "develop"] },
                    {
                        name: "Polymer Browserify", repo: "po-browserify-matrix",
                        branches: ["master", "develop"]
                    },
                    { name: "Polymer SystemJS", repo: "po-systemjs-matrix", branches: ["master", "develop"] },
                    { name: "Polymer Webpack", repo: "po-webpack-matrix", branches: ["master", "develop"] },
                    {
                        name: "Preact Browserify", repo: "pr-browserify-matrix",
                        branches: ["master", "develop"]
                    },
                    { name: "Preact RequireJS", repo: "pr-requirejs-matrix", branches: ["master", "develop"] },
                    { name: "Preact SystemJS", repo: "pr-systemjs-matrix", branches: ["master", "develop"] },
                    { name: "Preact Webpack", repo: "pr-webpack-matrix", branches: ["master", "develop"] },
                    {
                        name: "React Browserify", repo: "re-browserify-matrix",
                        branches: ["master", "develop"]
                    },
                    { name: "React RequireJS", repo: "re-requirejs-matrix", branches: ["master", "develop"] },
                    { name: "React SystemJS", repo: "re-systemjs-matrix", branches: ["master", "develop"] },
                    { name: "React Webpack", repo: "re-webpack-matrix", branches: ["master", "develop"] },
                    {
                        name: "Vanilla Browserify", repo: "va-browserify-matrix",
                        branches: ["master", "develop"]
                    },
                    {
                        name: "Vanilla RequireJS", repo: "va-requirejs-matrix",
                        branches: ["master", "develop"]
                    },
                    { name: "Vanilla SystemJS", repo: "va-systemjs-matrix", branches: ["master", "develop"] },
                    { name: "Vanilla Webpack", repo: "va-webpack-matrix", branches: ["master", "develop"] },
                    { name: "Vue Browserify", repo: "vu-browserify-matrix", branches: ["master", "develop"] },
                    { name: "Vue RequireJS", repo: "vu-requirejs-matrix", branches: ["master", "develop"] },
                    { name: "Vue SystemJS", repo: "vu-systemjs-matrix", branches: ["master", "develop"] },
                    { name: "Vue Webpack", repo: "vu-webpack-matrix", branches: ["master", "develop"] },
                ]
            }
        ];
    }
}
