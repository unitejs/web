/**
 * Generator class.
 */
import { inject, NewInstance } from "aurelia-dependency-injection";
import { HttpClient } from "aurelia-http-client";
import { bindable } from "aurelia-templating";
import { validateTrigger, ValidationController, ValidationRules } from "aurelia-validation";
import { Clipboard } from "../domHelpers/clipboard";
import { LocalStorage } from "../domHelpers/localStorage";
import { Style } from "../domHelpers/style";
import { ISpdx } from "../models/ISpdx";
import { ISpdxLicense } from "../models/ISpdxLicense";
import { UniteConfiguration } from "../models/uniteConfiguration";
import { BootstrapFormRenderer } from "../validation/bootstrapFormRenderer";

@inject(NewInstance.of(ValidationController))
export class Generator {
    public controller: ValidationController;

    @bindable
    public packageName: string;
    @bindable
    public title: string;

    @bindable
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

    @bindable
    public moduleType: string;
    public moduleTypes: string[];

    @bindable
    public bundler: string;
    public bundlers: string[];

    @bindable
    public unitTestRunner: string;
    public unitTestRunners: string[];

    @bindable
    public unitTestFramework: string;
    public unitTestFrameworks: string[];
    public unitTestFrameworkEnabled: boolean;

    @bindable
    public unitTestEngine: string;
    public unitTestEngines: string[];
    public unitTestEngineEnabled: boolean;

    @bindable
    public e2eTestRunner: string;
    public e2eTestRunners: string[];

    @bindable
    public e2eTestFramework: string;
    public e2eTestFrameworks: string[];
    public e2eTestFrameworkEnabled: boolean;

    @bindable
    public cssPre: string;
    public cssPres: string[];

    @bindable
    public cssPost: string;
    public cssPosts: string[];

    @bindable
    public packageManager: string;
    public packageManagers: string[];

    @bindable
    public outputDirectory: string;

    public commandLine: string;

    public status: string;

    constructor(controller: ValidationController) {
        this.controller = controller;

        this.controller.addRenderer(new BootstrapFormRenderer());

        this.controller.validateTrigger = validateTrigger.changeOrBlur;

        ValidationRules.customRule("packageNameLowerCaseRule", (value: string, obj: Generator) => {
            return value === undefined || value === null ||
                value.toLowerCase() === value;
        }, `\${$displayName} must not have uppercase letters in it.`);

        ValidationRules.customRule("packageNameStartRule", (value: string, obj: Generator) => {
            return value === undefined || value === null ||
                !(value[0] === "." || value[0] === "-" || value[0] === "_");
        }, `\${$displayName} must not start with a dot, hyphen or underscore.`);

        ValidationRules.customRule("packageNameSpecialCharactersRule", (value: string, obj: Generator) => {
            return value === undefined || value === null ||
                !value.match(/[\/\\\(\)&\?#\|<>@:%\s\*'"!~`]/);
        }, `\${$displayName} must not have any special characters.`);

        ValidationRules.customRule("packageNameNonUrlSafeRule", (value: string, obj: Generator) => {
            return value === undefined || value === null ||
                encodeURIComponent(value) === value;
        }, `\${$displayName} can't contain any non-URL-safe characters.`);

        ValidationRules.customRule("languageLintRule", (value: string, obj: Generator) => {
            return obj.linter === "None" ||
                (obj.linter === "ESLint" && obj.sourceLanguage === "JavaScript") ||
                (obj.linter === "TSLint" && obj.sourceLanguage === "TypeScript");
        }, `The combination of sourceLanguage and linter is not valid.`);

        ValidationRules.customRule("aureliaBundlingRule", (value: string, obj: Generator) => {
            return obj.applicationFramework !== "Aurelia" ||
                !(obj.bundler === "Browserify" || obj.bundler === "Webpack");
        }, `Aurelia does not currently support bundling with Browserify or Webpack.`);

        ValidationRules.customRule("angularBundlingRule", (value: string, obj: Generator) => {
            return obj.applicationFramework !== "Angular" || obj.bundler !== "RequireJS";
        }, `Angular does not currently support bundling with RequireJS.`);

        ValidationRules.customRule("requireJsModuleTypeRule", (value: string, obj: Generator) => {
            return obj.moduleType !== "AMD" || obj.bundler === "RequireJS";
        }, `You can only use AMD modules with RequireJS`);

        ValidationRules.customRule("systemJsBuilderModuleTypeRule", (value: string, obj: Generator) => {
            return obj.moduleType !== "SystemJS" || obj.bundler === "SystemJSBuilder";
        }, `You can only use SystemJS modules with SystemJSBuilder.`);

        ValidationRules.customRule("webpackBrowserifyModuleTypeRule", (value: string, obj: Generator) => {
            return obj.moduleType !== "CommonJS" || (obj.bundler === "Webpack" || obj.bundler === "Browserify");
        }, `You can only use CommonJS modules with Webpack or Browserify.`);

        ValidationRules.customRule("unitTestFrameworkRule", (value: string, obj: Generator) => {
            return (((obj.unitTestRunner === undefined || obj.unitTestRunner === "None") &&
                obj.unitTestFramework === undefined)) ||
                obj.unitTestFramework !== undefined;
        }, `Unit Test Runner is required.`);

        ValidationRules.customRule("unitTestEngineRule", (value: string, obj: Generator) => {
            return (((obj.unitTestRunner === undefined || obj.unitTestRunner === "None") &&
                obj.unitTestFramework === undefined)) ||
                obj.unitTestFramework !== undefined;
        }, `Unit Test Engine is required.`);

        ValidationRules.customRule("e2eTestFrameworkRule", (value: string, obj: Generator) => {
            return (((obj.e2eTestRunner === undefined || obj.e2eTestRunner === "None") &&
                obj.e2eTestFramework === undefined)) ||
                obj.e2eTestFramework !== undefined;
        }, `E2E Test Framework is required.`);

        ValidationRules
            .ensure((m: Generator) => m.packageName).displayName("Package Name")
            .required()
            .maxLength(214)
            .satisfiesRule("packageNameLowerCaseRule")
            .satisfiesRule("packageNameStartRule")
            .satisfiesRule("packageNameSpecialCharactersRule")
            .satisfiesRule("packageNameNonUrlSafeRule")
            .ensure((m: Generator) => m.title).displayName("Title").required()
            .ensure((m: Generator) => m.license).displayName("License").required()
            .ensure((m: Generator) => m.applicationFramework).displayName("Application Framework").required()
            .then()
            .satisfiesRule("aureliaBundlingRule")
            .then()
            .satisfiesRule("angularBundlingRule")
            .ensure((m: Generator) => m.sourceLanguage).displayName("Source Language").required()
            .then()
            .satisfiesRule("languageLintRule")
            .ensure((m: Generator) => m.moduleType).displayName("Module Type").required()
            .then()
            .satisfiesRule("requireJsModuleTypeRule")
            .then()
            .satisfiesRule("systemJsBuilderModuleTypeRule")
            .then()
            .satisfiesRule("webpackBrowserifyModuleTypeRule")
            .ensure((m: Generator) => m.bundler).displayName("Bundler").required()
            .then()
            .satisfiesRule("aureliaBundlingRule")
            .then()
            .satisfiesRule("angularBundlingRule")
            .then()
            .satisfiesRule("requireJsModuleTypeRule")
            .then()
            .satisfiesRule("systemJsBuilderModuleTypeRule")
            .then()
            .satisfiesRule("webpackBrowserifyModuleTypeRule")
            .ensure((m: Generator) => m.linter).displayName("Linter").required()
            .then()
            .satisfiesRule("languageLintRule")
            .ensure((m: Generator) => m.unitTestRunner).displayName("Unit Test Runner").required()
            .ensure((m: Generator) => m.unitTestFramework).displayName("Unit Test Framework")
            .satisfiesRule("unitTestFrameworkRule")
            .ensure((m: Generator) => m.unitTestEngine).displayName("Unit Test Engine")
            .satisfiesRule("unitTestEngineRule")
            .ensure((m: Generator) => m.e2eTestRunner).displayName("E2E Test Runner").required()
            .ensure((m: Generator) => m.e2eTestFramework).displayName("E2E Test Framework")
            .satisfiesRule("e2eTestFrameworkRule")
            .ensure((m: Generator) => m.cssPre).displayName("CSS Pre-Processor").required()
            .ensure((m: Generator) => m.cssPost).displayName("CSS Post-Processor").required()
            .ensure((m: Generator) => m.packageManager).displayName("Package Manager").required()
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

                    const uniteConfiguration = LocalStorage.get<UniteConfiguration>("uniteConfiguration");

                    this.defaultValues(uniteConfiguration);

                    if (uniteConfiguration) {
                        this.generate();
                    }
                } else {
                    this.status = "Unable to load the SPDX licenses so can not continue.";
                }
            })
            .catch((err) => {
                this.status = "Unable to load the SPDX licenses so can not continue.";
            });
    }

    public defaultValues(uniteConfiguration?: UniteConfiguration): void {
        this.applicationFrameworks = ["Angular", "Aurelia", "PlainApp", "React"];
        this.sourceLanguages = ["JavaScript", "TypeScript"];
        this.moduleTypes = ["AMD", "CommonJS", "SystemJS"];
        this.bundlers = ["Browserify", "RequireJS", "SystemJSBuilder", "Webpack"];
        this.linters = ["ESLint", "TSLint", "None"];
        this.unitTestRunners = ["Karma", "None"];
        this.unitTestFrameworks = ["Jasmine", "MochaChai"];
        this.unitTestEngines = ["PhantomJS", "ChromeHeadless"];
        this.e2eTestRunners = ["Protractor", "WebdriverIO", "None"];
        this.e2eTestFrameworks = ["Jasmine", "MochaChai"];
        this.cssPres = ["Css", "Less", "Sass", "Stylus"];
        this.cssPosts = ["None", "PostCss"];
        this.packageManagers = ["Npm", "Yarn"];

        this.packageName = uniteConfiguration ? uniteConfiguration.packageName : undefined;
        this.title = uniteConfiguration ? uniteConfiguration.title : undefined;
        this.license = uniteConfiguration ? uniteConfiguration.license : undefined;
        this.applicationFramework = uniteConfiguration ? uniteConfiguration.applicationFramework : undefined;
        this.sourceLanguage = uniteConfiguration ? uniteConfiguration.sourceLanguage : undefined;
        this.moduleType = uniteConfiguration ? uniteConfiguration.moduleType : undefined;
        this.bundler = uniteConfiguration ? uniteConfiguration.bundler : undefined;
        this.linter = uniteConfiguration ? uniteConfiguration.linter : undefined;
        this.unitTestRunner = uniteConfiguration ? uniteConfiguration.unitTestRunner : undefined;
        this.unitTestFramework = uniteConfiguration ? uniteConfiguration.unitTestFramework : undefined;
        this.unitTestFrameworkEnabled = this.unitTestFramework !== undefined;
        this.unitTestEngine = uniteConfiguration ? uniteConfiguration.unitTestEngine : undefined;
        this.unitTestEngineEnabled = this.unitTestEngine !== undefined;
        this.e2eTestRunner = uniteConfiguration ? uniteConfiguration.e2eTestRunner : undefined;
        this.e2eTestFramework = uniteConfiguration ? uniteConfiguration.e2eTestFramework : undefined;
        this.e2eTestFrameworkEnabled = this.e2eTestFramework !== undefined;
        this.cssPre = uniteConfiguration ? uniteConfiguration.cssPre : undefined;
        this.cssPost = uniteConfiguration ? uniteConfiguration.cssPost : undefined;
        this.packageManager = uniteConfiguration ? uniteConfiguration.packageManager : undefined;
        this.outputDirectory = uniteConfiguration ? uniteConfiguration.outputDirectory : undefined;
    }

    public applicationFrameworkChanged(): void {
        this.controller.validate({ object: this, propertyName: "bundler" });
    }

    public moduleTypeChanged(): void {
        this.controller.validate({ object: this, propertyName: "bundler" });
    }

    public bundlerChanged(): void {
        this.controller.validate({ object: this, propertyName: "applicationFramework" });
        this.controller.validate({ object: this, propertyName: "moduleType" });
    }

    public sourceLanguageChanged(): void {
        this.controller.validate({ object: this, propertyName: "linter" });
    }

    public linterChanged(): void {
        this.controller.validate({ object: this, propertyName: "sourceLanguage" });
    }

    public unitTestRunnerChanged(): void {
        if (this.unitTestRunner === undefined || this.unitTestRunner === "None") {
            this.unitTestFramework = undefined;
            this.unitTestEngine = undefined;
            this.unitTestFrameworkEnabled = false;
            this.unitTestEngineEnabled = false;
        } else {
            this.unitTestFrameworkEnabled = true;
            this.unitTestEngineEnabled = true;
        }
        this.controller.validate({ object: this, propertyName: "unitTestFramework" });
        this.controller.validate({ object: this, propertyName: "unitTestEngine" });
    }

    public e2eTestRunnerChanged(): void {
        if (this.e2eTestRunner === undefined || this.e2eTestRunner === "None") {
            this.e2eTestFramework = undefined;
            this.e2eTestFrameworkEnabled = false;
        } else {
            this.e2eTestFrameworkEnabled = true;
        }
        this.controller.validate({ object: this, propertyName: "e2eTestFramework" });
    }

    public generate(): void {
        const uniteConfiguration = new UniteConfiguration();
        uniteConfiguration.packageName = this.packageName;
        uniteConfiguration.title = this.title;
        uniteConfiguration.license = this.license;
        uniteConfiguration.applicationFramework = this.applicationFramework;
        uniteConfiguration.moduleType = this.moduleType;
        uniteConfiguration.bundler = this.bundler;
        uniteConfiguration.sourceLanguage = this.sourceLanguage;
        uniteConfiguration.linter = this.linter;
        uniteConfiguration.unitTestRunner = this.unitTestRunner;
        uniteConfiguration.unitTestFramework = this.unitTestFramework;
        uniteConfiguration.unitTestEngine = this.unitTestEngine;
        uniteConfiguration.e2eTestRunner = this.e2eTestRunner;
        uniteConfiguration.e2eTestFramework = this.e2eTestFramework;
        uniteConfiguration.cssPre = this.cssPre;
        uniteConfiguration.cssPost = this.cssPost;
        uniteConfiguration.packageManager = this.packageManager;
        uniteConfiguration.outputDirectory = this.outputDirectory;

        LocalStorage.set("uniteConfiguration", uniteConfiguration);

        this.controller.validate()
            .then((result) => {
                if (result.valid) {
                    this.commandLine = `unite configure` +
                        ` --packageName=${this.packageName}` +
                        ` --title="${this.title}"` +
                        ` --license=${this.license}` +
                        ` --appFramework=${this.applicationFramework}` +
                        ` --moduleType=${this.moduleType}` +
                        ` --bundler=${this.bundler}` +
                        ` --sourceLanguage=${this.sourceLanguage}` +
                        ` --linter=${this.linter}` +
                        ` --unitTestRunner=${this.unitTestRunner}` +
                        (this.unitTestFramework === undefined
                            ? "" : ` --unitTestFramework=${this.unitTestFramework}`) +
                        (this.unitTestEngine === undefined
                            ? "" : ` --unitTestEngine=${this.unitTestEngine}`) +
                        ` --e2eTestRunner=${this.e2eTestRunner}` +
                        (this.e2eTestFramework === undefined
                            ? "" : ` --e2eTestFramework=${this.e2eTestFramework}`) +
                        ` --cssPre=${this.cssPre}` +
                        ` --cssPost=${this.cssPost}` +
                        ` --packageManager=${this.packageManager}` +
                        (this.outputDirectory === undefined ||
                            this.outputDirectory === null ||
                            this.outputDirectory.length === 0
                            ? "" : ` --outputDirectory=${this.outputDirectory}`);
                } else {
                    this.commandLine = "The parameter choices are not all valid.";
                }
            });
    }

    public clear(): void {
        LocalStorage.remove("uniteConfiguration");

        this.defaultValues();
        this.commandLine = undefined;

        setTimeout(() => this.controller.reset(), 0);
    }

    public copyToClipboard(): void {
        Clipboard.copyTo(this.commandLine);
    }
}
