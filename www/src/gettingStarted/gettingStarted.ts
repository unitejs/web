/**
 * GettingStarted class.
 */
import { inject, NewInstance } from "aurelia-dependency-injection";
import { HttpClient } from "aurelia-http-client";
import { bindable } from "aurelia-templating";
import { validateTrigger, ValidationController, ValidationRules } from "aurelia-validation";
import { Style } from "../domHelpers/style";
import { ISpdx } from "../models/ISpdx";
import { ISpdxLicense } from "../models/ISpdxLicense";
import { BootstrapFormRenderer } from "../validation/bootstrapFormRenderer";

@inject(NewInstance.of(ValidationController))
export class GettingStarted {
    public controller: ValidationController;

    public packageName: string;
    public title: string;

    public license: string;
    public licenses: { id: string; license: ISpdxLicense }[];

    @bindable
    public applicationFramework: string;
    public applicationFrameworks: string[];

    @bindable
    public sourceLanguage: string;
    public sourceLanguages: string[];

    @bindable
    public linter: string;
    public linters: string[];

    public moduleType: string;
    public moduleTypes: string[];

    public bundler: string;
    public bundlers: string[];

    public unitTestRunner: string;
    public unitTestRunners: string[];

    public unitTestFramework: string;
    public unitTestFrameworks: string[];

    public unitTestEngine: string;
    public unitTestEngines: string[];

    public e2eTestRunner: string;
    public e2eTestRunners: string[];

    public e2eTestFramework: string;
    public e2eTestFrameworks: string[];

    public cssPre: string;
    public cssPres: string[];

    public cssPost: string;
    public cssPosts: string[];

    public packageManager: string;
    public packageManagers: string[];

    public validationStatus: string;

    public status: string;

    private _initialised: boolean;

    constructor(controller: ValidationController) {
        this.controller = controller;

        this.controller.addRenderer(new BootstrapFormRenderer());

        ValidationRules.customRule("languageLintRule", (value, obj) => {
            return obj.linter !== undefined && obj.sourceLanguage !== undefined &&
                (obj.linter === "None" ||
                (obj.linter === "ESLint" && obj.sourceLanguage === "JavaScript") ||
                (obj.linter === "TSLint" && obj.sourceLanguage === "TypeScript"));
        }, `the combination of sourceLanguage and linter is not valid`);

        ValidationRules
            .ensure((m: GettingStarted) => m.packageName).displayName("Package Name").required().maxLength(214)
            .ensure((m: GettingStarted) => m.title).displayName("Title").required()
            .ensure((m: GettingStarted) => m.license).displayName("License").required()
            .ensure((m: GettingStarted) => m.applicationFramework).displayName("Application Framework").required()
            .ensure((m: GettingStarted) => m.sourceLanguage).displayName("Source Language").required()
            .satisfiesRule("languageLintRule")
            .ensure((m: GettingStarted) => m.moduleType).displayName("Module Type").required()
            .ensure((m: GettingStarted) => m.bundler).displayName("Bundler").required()
            .ensure((m: GettingStarted) => m.linter).displayName("Linter").required()
            .satisfiesRule("languageLintRule")
            .ensure((m: GettingStarted) => m.unitTestRunner).displayName("Unit Test Runner").required()
            .ensure((m: GettingStarted) => m.unitTestFramework).displayName("Unit Test Framework").required()
            .ensure((m: GettingStarted) => m.unitTestEngine).displayName("Unit Test Engine").required()
            .ensure((m: GettingStarted) => m.e2eTestRunner).displayName("E2E Test Runner").required()
            .ensure((m: GettingStarted) => m.e2eTestFramework).displayName("E2E Test Framework").required()
            .ensure((m: GettingStarted) => m.cssPre).displayName("CSS Pre-Processor").required()
            .ensure((m: GettingStarted) => m.cssPost).displayName("CSS Post-Processor").required()
            .ensure((m: GettingStarted) => m.packageManager).displayName("Package Manager").required()
            .on(this);
    }

    public attached(): void {
        const httpClient = new HttpClient();
        httpClient.get("./assets/spdx-full.json")
            .then((response) => {
                if (response.statusCode === 200) {
                    const licenses: ISpdx = response.content;

                    this.licenses = [];
                    Object.keys(licenses).forEach((licenseKey) => {
                        this.licenses.push({ id: licenseKey, license: licenses[licenseKey] });
                    });

                    this.defaultValues();
                    this._initialised = true;
                } else {
                    this.status = "Unable to load the SPDX licenses so can not continue.";
                }
            })
            .catch((err) => {
                this.status = "Unable to load the SPDX licenses so can not continue.";
            });
    }

    public generate(): void {
        this.controller.validate();
    }

    public clear(): void {
        this._initialised = false;
        this.defaultValues();

        this.controller.reset();
        this._initialised = true;
    }

    public defaultValues(): void {
        this.applicationFrameworks = ["Angular", "Aurelia", "PlainApp", "React"];
        this.sourceLanguages = ["JavaScript", "TypeScript"];
        this.moduleTypes = ["AMD", "CommonJS", "SystemJS"];
        this.bundlers = ["Browserify", "RequireJS", "SystemJSBuilder", "Webpack"];
        this.linters = ["ESLint", "TSLint", "None"];
        this.unitTestRunners = ["Karma", "None"];
        this.unitTestFrameworks = ["Jasmine", "MochaChai"];
        this.unitTestEngines = ["PhantomJS", "ChromeHeadlesss"];
        this.e2eTestRunners = ["Protractor", "WebdriverIO", "None"];
        this.e2eTestFrameworks = ["Jasmine", "MochaChai"];
        this.cssPres = ["Css", "Less", "Sass", "Stylus"];
        this.cssPosts = ["None", "PostCss"];
        this.packageManagers = ["Npm", "Yarn"];

        this.packageName = undefined;
        this.title = undefined;
        this.license = undefined;
        this.license = undefined;
        this.applicationFramework = undefined;
        this.sourceLanguage = undefined;
        this.moduleType = undefined;
        this.bundler = undefined;
        this.linter = undefined;
        this.unitTestRunner = undefined;
        this.unitTestFramework = undefined;
        this.unitTestEngine = undefined;
        this.e2eTestRunner = undefined;
        this.e2eTestFramework = undefined;
        this.cssPre = undefined;
        this.cssPost = undefined;
        this.packageManager = undefined;
    }

    public sourceLanguageChanged(): void {
        if (this._initialised) {
            this.controller.validate({ object: this, propertyName: "linter" });
        }
    }

    public linterChanged(): void {
        if (this._initialised) {
            this.controller.validate({ object: this, propertyName: "sourceLanguage" });
        }
    }
}
