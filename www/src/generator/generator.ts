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
    public shortName: string;
    @bindable
    public description: string;
    @bindable
    public keywords: string;
    @bindable
    public organization: string;
    @bindable
    public webSite: string;
    @bindable
    public copyright: string;
    @bindable
    public namespace: string;
    @bindable
    public author: string;
    @bindable
    public authorEmail: string;
    @bindable
    public authorWebSite: string;

    @bindable
    public profile: string;
    public profiles: { id: string; config: UniteConfiguration }[];

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
    public cssLinter: string;
    public cssLinters: string[];

    @bindable
    public documenter: string;
    public documenters: string[];

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
        }, `The combination of Source Language and Linter is not valid.`);

        ValidationRules.customRule("cssLintRule", (value: string, obj: Generator) => {
            return obj.cssLinter === "None" ||
                (obj.cssLinter === "LessHint" && obj.cssPre === "Less") ||
                (obj.cssLinter === "SassLint" && obj.cssPre === "Sass") ||
                (obj.cssLinter === "Stylint" && obj.cssPre === "Stylus") ||
                (obj.cssLinter === "StyleLint" &&
                    (obj.cssPre === "Css" || obj.cssPre === "Less" || obj.cssPre === "Sass"));
        }, `The combination of Css Preprocessor and Css Linter is not valid.`);

        ValidationRules.customRule("documenterRule", (value: string, obj: Generator) => {
            return obj.documenter === "None" ||
                (obj.documenter === "JSDoc" && obj.sourceLanguage === "JavaScript") ||
                (obj.documenter === "TypeDoc" && obj.sourceLanguage === "TypeScript") ||
                (obj.documenter === "ESDoc" &&
                    (obj.sourceLanguage === "JavaScript" || obj.sourceLanguage === "TypeScript"));
        }, `The combination of Source Language and Documenter is not valid.`);

        ValidationRules.customRule("aureliaBundlingRule", (value: string, obj: Generator) => {
            return obj.applicationFramework !== "Aurelia" ||
                !(obj.bundler === "Browserify" || obj.bundler === "Webpack");
        }, `Aurelia does not currently support bundling with Browserify or Webpack.`);

        ValidationRules.customRule("angularBundlingRule", (value: string, obj: Generator) => {
            return obj.applicationFramework !== "Angular" || obj.bundler !== "RequireJS";
        }, `Angular does not currently support bundling with RequireJS.`);

        ValidationRules.customRule("polymerUnitTestEngineRule", (value: string, obj: Generator) => {
            return obj.applicationFramework !== "Polymer" ||
                !(obj.unitTestEngine === "PhantomJS" || obj.unitTestEngine === "JSDom");
        }, `Polymer does not currently support testing using PhantomJS or JSDom.`);

        ValidationRules.customRule("requireJsModuleTypeRule", (value: string, obj: Generator) => {
            return obj.moduleType !== "AMD" || obj.bundler === "RequireJS";
        }, `You can only use AMD modules with RequireJS Bundler`);

        ValidationRules.customRule("webpackBrowserifyModuleTypeRule", (value: string, obj: Generator) => {
            return obj.moduleType !== "CommonJS" || (obj.bundler === "Webpack" || obj.bundler === "Browserify");
        }, `You can only use CommonJS modules with Webpack or Browserify Bundlers.`);

        ValidationRules.customRule("jestModuleTypeRule", (value: string, obj: Generator) => {
            return obj.unitTestRunner !== "Jest" || obj.moduleType === "CommonJS";
        }, `You can only use CommonJS Module Type when the Unit Test Runner is Jest.`);

        ValidationRules.customRule("unitTestFrameworkRule", (value: string, obj: Generator) => {
            return (((obj.unitTestRunner === undefined || obj.unitTestRunner === "None") &&
                obj.unitTestFramework === undefined)) ||
                obj.unitTestFramework !== undefined;
        }, `Unit Test Runner is required.`);

        ValidationRules.customRule("jestJasmineRule", (value: string, obj: Generator) => {
            return obj.unitTestRunner !== "Jest" || obj.unitTestFramework === "Jasmine";
        }, `You can only use Jasmine Unit Test Framework when the Unit Test Runner is Jest.`);

        ValidationRules.customRule("jestJSDomRule", (value: string, obj: Generator) => {
            return obj.unitTestRunner !== "Jest" || obj.unitTestEngine === "JSDom";
        }, `You can only use JSDom Unit Test Engine when the Unit Test Runner is Jest.`);

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
            .satisfiesRule("webpackBrowserifyModuleTypeRule")
            .then()
            .satisfiesRule("jestModuleTypeRule")
            .ensure((m: Generator) => m.bundler).displayName("Bundler").required()
            .then()
            .satisfiesRule("aureliaBundlingRule")
            .then()
            .satisfiesRule("angularBundlingRule")
            .then()
            .satisfiesRule("requireJsModuleTypeRule")
            .then()
            .satisfiesRule("webpackBrowserifyModuleTypeRule")
            .ensure((m: Generator) => m.linter).displayName("Linter").required()
            .then()
            .satisfiesRule("languageLintRule")
            .ensure((m: Generator) => m.unitTestRunner).displayName("Unit Test Runner").required()
            .ensure((m: Generator) => m.unitTestFramework).displayName("Unit Test Framework")
            .satisfiesRule("unitTestFrameworkRule")
            .then()
            .satisfiesRule("jestJasmineRule")
            .ensure((m: Generator) => m.unitTestEngine).displayName("Unit Test Engine")
            .satisfiesRule("unitTestEngineRule")
            .then()
            .satisfiesRule("jestJSDomRule")
            .then()
            .satisfiesRule("polymerUnitTestEngineRule")
            .ensure((m: Generator) => m.e2eTestRunner).displayName("E2E Test Runner").required()
            .ensure((m: Generator) => m.e2eTestFramework).displayName("E2E Test Framework")
            .satisfiesRule("e2eTestFrameworkRule")
            .ensure((m: Generator) => m.cssPre).displayName("CSS Pre-Processor").required()
            .then()
            .satisfiesRule("cssLintRule")
            .ensure((m: Generator) => m.cssPost).displayName("CSS Post-Processor").required()
            .ensure((m: Generator) => m.cssLinter).displayName("CSS Linter").required()
            .then()
            .satisfiesRule("cssLintRule")
            .ensure((m: Generator) => m.documenter).displayName("Documenter").required()
            .then()
            .satisfiesRule("documenterRule")
            .ensure((m: Generator) => m.packageManager).displayName("Package Manager").required()
            .on(this);
    }

    public attached(): void {
        const httpClient = new HttpClient();
        httpClient.get("./assets/spdx-lite.json")
            .then((response) => {
                if (response.statusCode === 200) {
                    const licenses: ISpdx = response.content;

                    this.licenses = [ { id: "None", license: {
                        name: "No License",
                        osiApproved: false,
                         licenseText: "",
                         url: ""
                        }
                    }];
                    Object.keys(licenses).forEach((licenseKey) => {
                        this.licenses.push({ id: licenseKey, license: licenses[licenseKey] });
                    });

                    const httpClient2 = new HttpClient();
                    httpClient.get("./assets/profiles/configure.json")
                        .then((response2) => {
                            if (response2.statusCode === 200) {
                                const profiles: { [id: string]: UniteConfiguration } = response2.content;
                                this.profiles = [];
                                Object.keys(profiles).forEach((profileKey) => {
                                    this.profiles.push({ id: profileKey, config: profiles[profileKey] });
                                });

                                const uniteConfiguration = LocalStorage.get<UniteConfiguration>("uniteConfiguration");
                                const profile = LocalStorage.get<string>("profile");

                                this.defaultValues(uniteConfiguration, profile);

                                if (uniteConfiguration) {
                                    this.generate();
                                }
                            } else {
                                this.status = "Unable to load the profile configurations so can not continue.";
                            }
                        });
                } else {
                    this.status = "Unable to load the SPDX licenses so can not continue.";
                }
            })
            .catch((err) => {
                this.status = "Unable to load the SPDX licenses so can not continue.";
            });
    }

    public defaultValues(uniteConfiguration?: UniteConfiguration, profile?: string): void {
        this.applicationFrameworks = ["Angular", "Aurelia", "Polymer", "Preact", "React", "Vanilla", "Vue"];
        this.sourceLanguages = ["JavaScript", "TypeScript"];
        this.moduleTypes = ["AMD", "CommonJS", "SystemJS"];
        this.bundlers = ["Browserify", "RequireJS", "SystemJSBuilder", "Webpack"];
        this.linters = ["ESLint", "TSLint", "None"];
        this.unitTestRunners = ["Jest", "Karma", "None"];
        this.unitTestFrameworks = ["Jasmine", "MochaChai"];
        this.unitTestEngines = ["PhantomJS", "JSDom", "ChromeHeadless"];
        this.e2eTestRunners = ["Protractor", "WebdriverIO", "None"];
        this.e2eTestFrameworks = ["Jasmine", "MochaChai"];
        this.cssPres = ["Css", "Less", "Sass", "Stylus"];
        this.cssPosts = ["None", "PostCss"];
        this.cssLinters = ["LessHint", "None", "SassLint", "Stylint", "StyleLint"];
        this.documenters = ["ESDoc", "JSDoc", "None", "TypeDoc"];
        this.packageManagers = ["Npm", "Yarn"];

        this.profile = profile;
        this.packageName = uniteConfiguration ? uniteConfiguration.packageName : undefined;
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
        this.cssLinter = uniteConfiguration ? uniteConfiguration.cssLinter : undefined;
        this.documenter = uniteConfiguration ? uniteConfiguration.documenter : undefined;
        this.packageManager = uniteConfiguration ? uniteConfiguration.packageManager : undefined;
        this.outputDirectory = uniteConfiguration ? uniteConfiguration.outputDirectory : undefined;

        this.title = uniteConfiguration ? uniteConfiguration.title : undefined;
        this.shortName = uniteConfiguration ? uniteConfiguration.shortName : undefined;
        this.description = uniteConfiguration ? uniteConfiguration.description : undefined;
        this.keywords = uniteConfiguration && uniteConfiguration.keywords
                                    ? uniteConfiguration.keywords.join(",") : undefined;
        this.organization = uniteConfiguration ? uniteConfiguration.organization : undefined;
        this.copyright = uniteConfiguration ? uniteConfiguration.copyright : undefined;
        this.webSite = uniteConfiguration ? uniteConfiguration.webSite : undefined;
        this.namespace = uniteConfiguration ? uniteConfiguration.namespace : undefined;
        this.author = uniteConfiguration ? uniteConfiguration.author : undefined;
        this.authorEmail = uniteConfiguration ? uniteConfiguration.authorEmail : undefined;
        this.authorWebSite = uniteConfiguration ? uniteConfiguration.authorWebSite : undefined;
    }

    public profileChanged(): void {
        if (this.profile) {
            const profile = this.profiles.find((p) => p.id === this.profile);

            if (profile) {
                this.license = profile.config.license;
                this.applicationFramework = profile.config.applicationFramework;
                this.sourceLanguage = profile.config.sourceLanguage;
                this.moduleType = profile.config.moduleType;
                this.bundler = profile.config.bundler;
                this.linter = profile.config.linter;
                this.unitTestRunner = profile.config.unitTestRunner;
                this.unitTestFramework = profile.config.unitTestFramework;
                this.unitTestFrameworkEnabled = this.unitTestFramework !== undefined;
                this.unitTestEngine = profile.config.unitTestEngine;
                this.unitTestEngineEnabled = this.unitTestEngine !== undefined;
                this.e2eTestRunner = profile.config.e2eTestRunner;
                this.e2eTestFramework = profile.config.e2eTestFramework;
                this.e2eTestFrameworkEnabled = this.e2eTestFramework !== undefined;
                this.cssPre = profile.config.cssPre;
                this.cssPost = profile.config.cssPost;
                this.cssLinter = profile.config.cssLinter;
                this.documenter = profile.config.documenter;
                this.packageManager = profile.config.packageManager;
            }
        }
    }

    public applicationFrameworkChanged(): void {
        this.controller.validate({ object: this, propertyName: "bundler" });
        this.controller.validate({ object: this, propertyName: "unitTestEngine" });
    }

    public moduleTypeChanged(): void {
        this.controller.validate({ object: this, propertyName: "applicationFramework" });
        this.controller.validate({ object: this, propertyName: "bundler" });
        this.controller.validate({ object: this, propertyName: "unitTestRunner" });
    }

    public bundlerChanged(): void {
        this.controller.validate({ object: this, propertyName: "applicationFramework" });
        this.controller.validate({ object: this, propertyName: "moduleType" });
    }

    public sourceLanguageChanged(): void {
        this.controller.validate({ object: this, propertyName: "linter" });
        this.controller.validate({ object: this, propertyName: "documenter" });
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
        this.controller.validate({ object: this, propertyName: "moduleType" });
    }

    public unitTestFrameworkChanged(): void {
        this.controller.validate({ object: this, propertyName: "unitTestRunner" });
    }

    public unitTestEngineChanged(): void {
        this.controller.validate({ object: this, propertyName: "unitTestRunner" });
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

    public cssPreChanged(): void {
        this.controller.validate({ object: this, propertyName: "cssLinter" });
    }

    public cssLinterChanged(): void {
        this.controller.validate({ object: this, propertyName: "cssPre" });
    }

    public generate(): void {
        const uniteConfiguration = new UniteConfiguration();
        uniteConfiguration.packageName = this.packageName;
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
        uniteConfiguration.cssLinter = this.cssLinter;
        uniteConfiguration.documenter = this.documenter;
        uniteConfiguration.packageManager = this.packageManager;
        uniteConfiguration.outputDirectory = this.outputDirectory;

        uniteConfiguration.title = this.title;
        uniteConfiguration.shortName = this.shortName;
        uniteConfiguration.description = this.description;
        uniteConfiguration.keywords = this.keywords ? this.keywords.split(",") : undefined;
        uniteConfiguration.organization = this.organization;
        uniteConfiguration.copyright = this.copyright;
        uniteConfiguration.webSite = this.webSite;
        uniteConfiguration.namespace = this.namespace;
        uniteConfiguration.author = this.author;
        uniteConfiguration.authorEmail = this.authorEmail;
        uniteConfiguration.authorWebSite = this.authorWebSite;

        let profile: UniteConfiguration;

        if (this.profile) {
            const item = this.profiles.find((p) => p.id === this.profile);
            if (item) {
                profile = item.config;
            }
        }

        LocalStorage.set("uniteConfiguration", uniteConfiguration);
        LocalStorage.set("profile", this.profile);

        this.controller.validate()
            .then((result) => {
                if (result.valid) {
                    this.commandLine = `unite configure` +
                        ` --packageName=${this.packageName}` +
                        (this.profile === undefined
                            ? "" : ` --profile=${this.profile}`) +
                        this.generateArg(profile, uniteConfiguration, "license") +
                        this.generateArg(profile, uniteConfiguration, "applicationFramework", "appFramework") +
                        this.generateArg(profile, uniteConfiguration, "moduleType") +
                        this.generateArg(profile, uniteConfiguration, "bundler") +
                        this.generateArg(profile, uniteConfiguration, "sourceLanguage") +
                        this.generateArg(profile, uniteConfiguration, "linter") +
                        this.generateArg(profile, uniteConfiguration, "unitTestRunner") +
                        this.generateArg(profile, uniteConfiguration, "unitTestFramework") +
                        this.generateArg(profile, uniteConfiguration, "unitTestEngine") +
                        this.generateArg(profile, uniteConfiguration, "e2eTestRunner") +
                        this.generateArg(profile, uniteConfiguration, "e2eTestFramework") +
                        this.generateArg(profile, uniteConfiguration, "cssPre") +
                        this.generateArg(profile, uniteConfiguration, "cssPost") +
                        this.generateArg(profile, uniteConfiguration, "cssLinter") +
                        this.generateArg(profile, uniteConfiguration, "documenter") +
                        this.generateArg(profile, uniteConfiguration, "packageManager") +
                        this.generateArg(profile, uniteConfiguration, "title") +
                        this.generateArg(profile, uniteConfiguration, "shortName") +
                        this.generateArg(profile, uniteConfiguration, "description") +
                        this.generateArg(profile, uniteConfiguration, "keywords") +
                        this.generateArg(profile, uniteConfiguration, "organization") +
                        this.generateArg(profile, uniteConfiguration, "copyright") +
                        this.generateArg(profile, uniteConfiguration, "webSite") +
                        this.generateArg(profile, uniteConfiguration, "namespace") +
                        this.generateArg(profile, uniteConfiguration, "author") +
                        this.generateArg(profile, uniteConfiguration, "authorEmail") +
                        this.generateArg(profile, uniteConfiguration, "authorWebSite") +
                        (this.outputDirectory === undefined ||
                            this.outputDirectory === null ||
                            this.outputDirectory.length === 0
                            ? "" : ` --outputDirectory=${this.outputDirectory}`);
                } else {
                    this.commandLine = "The parameter choices are not all valid.";
                }
            });
    }

    public generateArg(profile: UniteConfiguration,
                       uniteConfiguration: UniteConfiguration,
                       propertyName: keyof UniteConfiguration,
                       argName?: string): string {
        if (profile && profile[propertyName] === uniteConfiguration[propertyName]) {
            return "";
        } else if (uniteConfiguration[propertyName] === undefined ||
                    uniteConfiguration[propertyName] === null ||
                    uniteConfiguration[propertyName].length === 0) {
            return "";
        } else {
            const delim = uniteConfiguration[propertyName].indexOf(" ") >= 0 ? "\"" : "";
            return ` --${argName ? argName : propertyName}=${delim}${uniteConfiguration[propertyName]}${delim}`;
        }
    }

    public clear(): void {
        LocalStorage.remove("uniteConfiguration");
        LocalStorage.remove("profile");

        this.defaultValues();
        this.commandLine = undefined;

        setTimeout(() => this.controller.reset(), 0);
    }

    public copyToClipboard(): void {
        Clipboard.copyTo(this.commandLine);
    }
}
