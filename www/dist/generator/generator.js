var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-http-client", "aurelia-templating", "aurelia-validation", "../domHelpers/clipboard", "../domHelpers/localStorage", "../models/uniteConfiguration", "../validation/bootstrapFormRenderer"], function (require, exports, aurelia_dependency_injection_1, aurelia_http_client_1, aurelia_templating_1, aurelia_validation_1, clipboard_1, localStorage_1, uniteConfiguration_1, bootstrapFormRenderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Generator = /** @class */ (function () {
        function Generator(controller) {
            this.controller = controller;
            this.controller.addRenderer(new bootstrapFormRenderer_1.BootstrapFormRenderer());
            this.controller.validateTrigger = aurelia_validation_1.validateTrigger.changeOrBlur;
            aurelia_validation_1.ValidationRules.customRule("packageNameLowerCaseRule", function (value, obj) {
                return value === undefined || value === null ||
                    value.toLowerCase() === value;
            }, "${$displayName} must not have uppercase letters in it.");
            aurelia_validation_1.ValidationRules.customRule("packageNameStartRule", function (value, obj) {
                return value === undefined || value === null ||
                    !(value[0] === "." || value[0] === "-" || value[0] === "_");
            }, "${$displayName} must not start with a dot, hyphen or underscore.");
            aurelia_validation_1.ValidationRules.customRule("packageNameSpecialCharactersRule", function (value, obj) {
                return value === undefined || value === null ||
                    !value.match(/[\/\\\(\)&\?#\|<>@:%\s\*'"!~`]/);
            }, "${$displayName} must not have any special characters.");
            aurelia_validation_1.ValidationRules.customRule("packageNameNonUrlSafeRule", function (value, obj) {
                return value === undefined || value === null ||
                    encodeURIComponent(value) === value;
            }, "${$displayName} can't contain any non-URL-safe characters.");
            aurelia_validation_1.ValidationRules.customRule("languageLintRule", function (value, obj) {
                return obj.linter === "None" ||
                    (obj.linter === "ESLint" && obj.sourceLanguage === "JavaScript") ||
                    (obj.linter === "TSLint" && obj.sourceLanguage === "TypeScript");
            }, "The combination of sourceLanguage and linter is not valid.");
            aurelia_validation_1.ValidationRules.customRule("aureliaBundlingRule", function (value, obj) {
                return obj.applicationFramework !== "Aurelia" ||
                    !(obj.bundler === "Browserify" || obj.bundler === "Webpack");
            }, "Aurelia does not currently support bundling with Browserify or Webpack.");
            aurelia_validation_1.ValidationRules.customRule("angularBundlingRule", function (value, obj) {
                return obj.applicationFramework !== "Angular" || obj.bundler !== "RequireJS";
            }, "Angular does not currently support bundling with RequireJS.");
            aurelia_validation_1.ValidationRules.customRule("requireJsModuleTypeRule", function (value, obj) {
                return obj.moduleType !== "AMD" || obj.bundler === "RequireJS";
            }, "You can only use AMD modules with RequireJS Bundler");
            aurelia_validation_1.ValidationRules.customRule("webpackBrowserifyModuleTypeRule", function (value, obj) {
                return obj.moduleType !== "CommonJS" || (obj.bundler === "Webpack" || obj.bundler === "Browserify");
            }, "You can only use CommonJS modules with Webpack or Browserify Bundlers.");
            aurelia_validation_1.ValidationRules.customRule("jestModuleTypeRule", function (value, obj) {
                return obj.unitTestRunner !== "Jest" || obj.moduleType === "CommonJS";
            }, "You can only use CommonJS Module Type when the Unit Test Runner is Jest.");
            aurelia_validation_1.ValidationRules.customRule("unitTestFrameworkRule", function (value, obj) {
                return (((obj.unitTestRunner === undefined || obj.unitTestRunner === "None") &&
                    obj.unitTestFramework === undefined)) ||
                    obj.unitTestFramework !== undefined;
            }, "Unit Test Runner is required.");
            aurelia_validation_1.ValidationRules.customRule("jestJasmineRule", function (value, obj) {
                return obj.unitTestRunner !== "Jest" || obj.unitTestFramework === "Jasmine";
            }, "You can only use Jasmine Unit Test Framework when the Unit Test Runner is Jest.");
            aurelia_validation_1.ValidationRules.customRule("jestJSDomRule", function (value, obj) {
                return obj.unitTestRunner !== "Jest" || obj.unitTestEngine === "JSDom";
            }, "You can only use JSDom Unit Test Engine when the Unit Test Runner is Jest.");
            aurelia_validation_1.ValidationRules.customRule("unitTestEngineRule", function (value, obj) {
                return (((obj.unitTestRunner === undefined || obj.unitTestRunner === "None") &&
                    obj.unitTestFramework === undefined)) ||
                    obj.unitTestFramework !== undefined;
            }, "Unit Test Engine is required.");
            aurelia_validation_1.ValidationRules.customRule("e2eTestFrameworkRule", function (value, obj) {
                return (((obj.e2eTestRunner === undefined || obj.e2eTestRunner === "None") &&
                    obj.e2eTestFramework === undefined)) ||
                    obj.e2eTestFramework !== undefined;
            }, "E2E Test Framework is required.");
            aurelia_validation_1.ValidationRules
                .ensure(function (m) { return m.packageName; }).displayName("Package Name")
                .required()
                .maxLength(214)
                .satisfiesRule("packageNameLowerCaseRule")
                .satisfiesRule("packageNameStartRule")
                .satisfiesRule("packageNameSpecialCharactersRule")
                .satisfiesRule("packageNameNonUrlSafeRule")
                .ensure(function (m) { return m.title; }).displayName("Title").required()
                .ensure(function (m) { return m.license; }).displayName("License").required()
                .ensure(function (m) { return m.applicationFramework; }).displayName("Application Framework").required()
                .then()
                .satisfiesRule("aureliaBundlingRule")
                .then()
                .satisfiesRule("angularBundlingRule")
                .ensure(function (m) { return m.sourceLanguage; }).displayName("Source Language").required()
                .then()
                .satisfiesRule("languageLintRule")
                .ensure(function (m) { return m.moduleType; }).displayName("Module Type").required()
                .then()
                .satisfiesRule("requireJsModuleTypeRule")
                .then()
                .satisfiesRule("webpackBrowserifyModuleTypeRule")
                .then()
                .satisfiesRule("jestModuleTypeRule")
                .ensure(function (m) { return m.bundler; }).displayName("Bundler").required()
                .then()
                .satisfiesRule("aureliaBundlingRule")
                .then()
                .satisfiesRule("angularBundlingRule")
                .then()
                .satisfiesRule("requireJsModuleTypeRule")
                .then()
                .satisfiesRule("webpackBrowserifyModuleTypeRule")
                .ensure(function (m) { return m.linter; }).displayName("Linter").required()
                .then()
                .satisfiesRule("languageLintRule")
                .ensure(function (m) { return m.unitTestRunner; }).displayName("Unit Test Runner").required()
                .ensure(function (m) { return m.unitTestFramework; }).displayName("Unit Test Framework")
                .satisfiesRule("unitTestFrameworkRule")
                .then()
                .satisfiesRule("jestJasmineRule")
                .ensure(function (m) { return m.unitTestEngine; }).displayName("Unit Test Engine")
                .satisfiesRule("unitTestEngineRule")
                .then()
                .satisfiesRule("jestJSDomRule")
                .ensure(function (m) { return m.e2eTestRunner; }).displayName("E2E Test Runner").required()
                .ensure(function (m) { return m.e2eTestFramework; }).displayName("E2E Test Framework")
                .satisfiesRule("e2eTestFrameworkRule")
                .ensure(function (m) { return m.cssPre; }).displayName("CSS Pre-Processor").required()
                .ensure(function (m) { return m.cssPost; }).displayName("CSS Post-Processor").required()
                .ensure(function (m) { return m.packageManager; }).displayName("Package Manager").required()
                .on(this);
        }
        Generator.prototype.attached = function () {
            var _this = this;
            var httpClient = new aurelia_http_client_1.HttpClient();
            httpClient.get("./assets/spdx-lite.json")
                .then(function (response) {
                if (response.statusCode === 200) {
                    var licenses_1 = response.content;
                    _this.licenses = [];
                    Object.keys(licenses_1).forEach(function (licenseKey) {
                        _this.licenses.push({ id: licenseKey, license: licenses_1[licenseKey] });
                    });
                    var httpClient2 = new aurelia_http_client_1.HttpClient();
                    httpClient.get("./assets/profiles/configure.json")
                        .then(function (response2) {
                        if (response2.statusCode === 200) {
                            var profiles_1 = response2.content;
                            _this.profiles = [];
                            Object.keys(profiles_1).forEach(function (profileKey) {
                                _this.profiles.push({ id: profileKey, config: profiles_1[profileKey] });
                            });
                            var uniteConfiguration = localStorage_1.LocalStorage.get("uniteConfiguration");
                            var profile = localStorage_1.LocalStorage.get("profile");
                            _this.defaultValues(uniteConfiguration, profile);
                            if (uniteConfiguration) {
                                _this.generate();
                            }
                        }
                        else {
                            _this.status = "Unable to load the profile configurations so can not continue.";
                        }
                    });
                }
                else {
                    _this.status = "Unable to load the SPDX licenses so can not continue.";
                }
            })
                .catch(function (err) {
                _this.status = "Unable to load the SPDX licenses so can not continue.";
            });
        };
        Generator.prototype.defaultValues = function (uniteConfiguration, profile) {
            this.applicationFrameworks = ["Angular", "Aurelia", "PlainApp", "React"];
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
            this.packageManagers = ["Npm", "Yarn"];
            this.profile = profile;
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
        };
        Generator.prototype.profileChanged = function () {
            var _this = this;
            if (this.profile) {
                var profile = this.profiles.find(function (p) { return p.id === _this.profile; });
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
                    this.packageManager = profile.config.packageManager;
                }
            }
        };
        Generator.prototype.applicationFrameworkChanged = function () {
            this.controller.validate({ object: this, propertyName: "bundler" });
        };
        Generator.prototype.moduleTypeChanged = function () {
            this.controller.validate({ object: this, propertyName: "bundler" });
            this.controller.validate({ object: this, propertyName: "unitTestRunner" });
        };
        Generator.prototype.bundlerChanged = function () {
            this.controller.validate({ object: this, propertyName: "applicationFramework" });
            this.controller.validate({ object: this, propertyName: "moduleType" });
        };
        Generator.prototype.sourceLanguageChanged = function () {
            this.controller.validate({ object: this, propertyName: "linter" });
        };
        Generator.prototype.linterChanged = function () {
            this.controller.validate({ object: this, propertyName: "sourceLanguage" });
        };
        Generator.prototype.unitTestRunnerChanged = function () {
            if (this.unitTestRunner === undefined || this.unitTestRunner === "None") {
                this.unitTestFramework = undefined;
                this.unitTestEngine = undefined;
                this.unitTestFrameworkEnabled = false;
                this.unitTestEngineEnabled = false;
            }
            else {
                this.unitTestFrameworkEnabled = true;
                this.unitTestEngineEnabled = true;
            }
            this.controller.validate({ object: this, propertyName: "unitTestFramework" });
            this.controller.validate({ object: this, propertyName: "unitTestEngine" });
            this.controller.validate({ object: this, propertyName: "moduleType" });
        };
        Generator.prototype.unitTestFrameworkChanged = function () {
            this.controller.validate({ object: this, propertyName: "unitTestRunner" });
        };
        Generator.prototype.unitTestEngineChanged = function () {
            this.controller.validate({ object: this, propertyName: "unitTestRunner" });
        };
        Generator.prototype.e2eTestRunnerChanged = function () {
            if (this.e2eTestRunner === undefined || this.e2eTestRunner === "None") {
                this.e2eTestFramework = undefined;
                this.e2eTestFrameworkEnabled = false;
            }
            else {
                this.e2eTestFrameworkEnabled = true;
            }
            this.controller.validate({ object: this, propertyName: "e2eTestFramework" });
        };
        Generator.prototype.generate = function () {
            var _this = this;
            var uniteConfiguration = new uniteConfiguration_1.UniteConfiguration();
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
            var profile;
            if (this.profile) {
                var item = this.profiles.find(function (p) { return p.id === _this.profile; });
                if (item) {
                    profile = item.config;
                }
            }
            localStorage_1.LocalStorage.set("uniteConfiguration", uniteConfiguration);
            localStorage_1.LocalStorage.set("profile", this.profile);
            this.controller.validate()
                .then(function (result) {
                if (result.valid) {
                    _this.commandLine = "unite configure" +
                        (" --packageName=" + _this.packageName) +
                        (" --title=\"" + _this.title + "\"") +
                        (_this.profile === undefined
                            ? "" : " --profile=" + _this.profile) +
                        _this.generateArg(profile, uniteConfiguration, "license") +
                        _this.generateArg(profile, uniteConfiguration, "applicationFramework", "appFramework") +
                        _this.generateArg(profile, uniteConfiguration, "moduleType") +
                        _this.generateArg(profile, uniteConfiguration, "bundler") +
                        _this.generateArg(profile, uniteConfiguration, "sourceLanguage") +
                        _this.generateArg(profile, uniteConfiguration, "linter") +
                        _this.generateArg(profile, uniteConfiguration, "unitTestRunner") +
                        _this.generateArg(profile, uniteConfiguration, "unitTestFramework") +
                        _this.generateArg(profile, uniteConfiguration, "unitTestEngine") +
                        _this.generateArg(profile, uniteConfiguration, "e2eTestRunner") +
                        _this.generateArg(profile, uniteConfiguration, "e2eTestFramework") +
                        _this.generateArg(profile, uniteConfiguration, "cssPre") +
                        _this.generateArg(profile, uniteConfiguration, "cssPost") +
                        _this.generateArg(profile, uniteConfiguration, "packageManager") +
                        (_this.outputDirectory === undefined ||
                            _this.outputDirectory === null ||
                            _this.outputDirectory.length === 0
                            ? "" : " --outputDirectory=" + _this.outputDirectory);
                }
                else {
                    _this.commandLine = "The parameter choices are not all valid.";
                }
            });
        };
        Generator.prototype.generateArg = function (profile, uniteConfiguration, propertyName, argName) {
            if (profile && profile[propertyName] === uniteConfiguration[propertyName]) {
                return "";
            }
            else if (uniteConfiguration[propertyName] === undefined) {
                return "";
            }
            else {
                return " --" + (argName ? argName : propertyName) + "=" + uniteConfiguration[propertyName];
            }
        };
        Generator.prototype.clear = function () {
            var _this = this;
            localStorage_1.LocalStorage.remove("uniteConfiguration");
            localStorage_1.LocalStorage.remove("profile");
            this.defaultValues();
            this.commandLine = undefined;
            setTimeout(function () { return _this.controller.reset(); }, 0);
        };
        Generator.prototype.copyToClipboard = function () {
            clipboard_1.Clipboard.copyTo(this.commandLine);
        };
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "packageName", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "title", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "profile", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "license", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "applicationFramework", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "sourceLanguage", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "linter", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "moduleType", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "bundler", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "unitTestRunner", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "unitTestFramework", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "unitTestEngine", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "e2eTestRunner", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "e2eTestFramework", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "cssPre", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "cssPost", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "packageManager", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Generator.prototype, "outputDirectory", void 0);
        Generator = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dependency_injection_1.NewInstance.of(aurelia_validation_1.ValidationController))
        ], Generator);
        return Generator;
    }());
    exports.Generator = Generator;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2dlbmVyYXRvci9nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBZ0JBO1FBOEVJLG1CQUFZLFVBQWdDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBRTdCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksNkNBQXFCLEVBQUUsQ0FBQyxDQUFDO1lBRXpELElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLG9DQUFlLENBQUMsWUFBWSxDQUFDO1lBRS9ELG9DQUFlLENBQUMsVUFBVSxDQUFDLDBCQUEwQixFQUFFLFVBQUMsS0FBYSxFQUFFLEdBQWM7Z0JBQ2pGLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJO29CQUN4QyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDO1lBQ3RDLENBQUMsRUFBRSx3REFBeUQsQ0FBQyxDQUFDO1lBRTlELG9DQUFlLENBQUMsVUFBVSxDQUFDLHNCQUFzQixFQUFFLFVBQUMsS0FBYSxFQUFFLEdBQWM7Z0JBQzdFLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJO29CQUN4QyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNwRSxDQUFDLEVBQUUsa0VBQW1FLENBQUMsQ0FBQztZQUV4RSxvQ0FBZSxDQUFDLFVBQVUsQ0FBQyxrQ0FBa0MsRUFBRSxVQUFDLEtBQWEsRUFBRSxHQUFjO2dCQUN6RixNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSTtvQkFDeEMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDdkQsQ0FBQyxFQUFF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O1FBRTNCO1lBREMsNkJBQVE7Z0RBQ1k7UUFHckI7WUFEQyw2QkFBUTtrREFDYztRQUl2QjtZQURDLDZCQUFRO2tEQUNjO1FBSXZCO1lBREMsNkJBQVE7K0RBQzJCO1FBSXBDO1lBREMsNkJBQVE7eURBQ3FCO1FBSTlCO1lBREMsNkJBQVE7aURBQ2E7UUFJdEI7WUFEQyw2QkFBUTtxREFDaUI7UUFJMUI7WUFEQyw2QkFBUTtrREFDYztRQUl2QjtZQURDLDZCQUFRO3lEQUNxQjtRQUk5QjtZQURDLDZCQUFROzREQUN3QjtRQUtqQztZQURDLDZCQUFRO3lEQUNxQjtRQUs5QjtZQURDLDZCQUFRO3dEQUNvQjtRQUk3QjtZQURDLDZCQUFROzJEQUN1QjtRQUtoQztZQURDLDZCQUFRO2lEQUNhO1FBSXRCO1lBREMsNkJBQVE7a0RBQ2M7UUFJdkI7WUFEQyw2QkFBUTt5REFDcUI7UUFJOUI7WUFEQyw2QkFBUTswREFDc0I7UUF4RXRCLFNBQVM7WUFEckIscUNBQU0sQ0FBQywwQ0FBVyxDQUFDLEVBQUUsQ0FBQyx5Q0FBb0IsQ0FBQyxDQUFDO1dBQ2hDLFNBQVMsQ0FpZHJCO1FBQUQsZ0JBQUM7S0FqZEQsQUFpZEMsSUFBQTtJQWpkWSw4QkFBUyIsImZpbGUiOiJnZW5lcmF0b3IvZ2VuZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZW5lcmF0b3IgY2xhc3MuXG4gKi9cbmltcG9ydCB7IGluamVjdCwgTmV3SW5zdGFuY2UgfSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJhdXJlbGlhLWh0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBiaW5kYWJsZSB9IGZyb20gXCJhdXJlbGlhLXRlbXBsYXRpbmdcIjtcbmltcG9ydCB7IHZhbGlkYXRlVHJpZ2dlciwgVmFsaWRhdGlvbkNvbnRyb2xsZXIsIFZhbGlkYXRpb25SdWxlcyB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IENsaXBib2FyZCB9IGZyb20gXCIuLi9kb21IZWxwZXJzL2NsaXBib2FyZFwiO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2RvbUhlbHBlcnMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi9kb21IZWxwZXJzL3N0eWxlXCI7XG5pbXBvcnQgeyBJU3BkeCB9IGZyb20gXCIuLi9tb2RlbHMvSVNwZHhcIjtcbmltcG9ydCB7IElTcGR4TGljZW5zZSB9IGZyb20gXCIuLi9tb2RlbHMvSVNwZHhMaWNlbnNlXCI7XG5pbXBvcnQgeyBVbml0ZUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL3VuaXRlQ29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgQm9vdHN0cmFwRm9ybVJlbmRlcmVyIH0gZnJvbSBcIi4uL3ZhbGlkYXRpb24vYm9vdHN0cmFwRm9ybVJlbmRlcmVyXCI7XG5cbkBpbmplY3QoTmV3SW5zdGFuY2Uub2YoVmFsaWRhdGlvbkNvbnRyb2xsZXIpKVxuZXhwb3J0IGNsYXNzIEdlbmVyYXRvciB7XG4gICAgcHVibGljIGNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xuXG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIHBhY2thZ2VOYW1lOiBzdHJpbmc7XG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgcHJvZmlsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwcm9maWxlczogeyBpZDogc3RyaW5nOyBjb25maWc6IFVuaXRlQ29uZmlndXJhdGlvbiB9W107XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgbGljZW5zZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsaWNlbnNlczogeyBpZDogc3RyaW5nOyBsaWNlbnNlOiBJU3BkeExpY2Vuc2UgfVtdO1xuXG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIGFwcGxpY2F0aW9uRnJhbWV3b3JrOiBzdHJpbmc7XG4gICAgcHVibGljIGFwcGxpY2F0aW9uRnJhbWV3b3Jrczogc3RyaW5nW107XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgc291cmNlTGFuZ3VhZ2U6IHN0cmluZztcbiAgICBwdWJsaWMgc291cmNlTGFuZ3VhZ2VzOiBzdHJpbmdbXTtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyBsaW50ZXI6IHN0cmluZztcbiAgICBwdWJsaWMgbGludGVyczogc3RyaW5nW107XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgbW9kdWxlVHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBtb2R1bGVUeXBlczogc3RyaW5nW107XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgYnVuZGxlcjogc3RyaW5nO1xuICAgIHB1YmxpYyBidW5kbGVyczogc3RyaW5nW107XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgdW5pdFRlc3RSdW5uZXI6IHN0cmluZztcbiAgICBwdWJsaWMgdW5pdFRlc3RSdW5uZXJzOiBzdHJpbmdbXTtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyB1bml0VGVzdEZyYW1ld29yazogc3RyaW5nO1xuICAgIHB1YmxpYyB1bml0VGVzdEZyYW1ld29ya3M6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyB1bml0VGVzdEZyYW1ld29ya0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgdW5pdFRlc3RFbmdpbmU6IHN0cmluZztcbiAgICBwdWJsaWMgdW5pdFRlc3RFbmdpbmVzOiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgdW5pdFRlc3RFbmdpbmVFbmFibGVkOiBib29sZWFuO1xuXG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIGUyZVRlc3RSdW5uZXI6IHN0cmluZztcbiAgICBwdWJsaWMgZTJlVGVzdFJ1bm5lcnM6IHN0cmluZ1tdO1xuXG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIGUyZVRlc3RGcmFtZXdvcms6IHN0cmluZztcbiAgICBwdWJsaWMgZTJlVGVzdEZyYW1ld29ya3M6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyBlMmVUZXN0RnJhbWV3b3JrRW5hYmxlZDogYm9vbGVhbjtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyBjc3NQcmU6IHN0cmluZztcbiAgICBwdWJsaWMgY3NzUHJlczogc3RyaW5nW107XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgY3NzUG9zdDogc3RyaW5nO1xuICAgIHB1YmxpYyBjc3NQb3N0czogc3RyaW5nW107XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgcGFja2FnZU1hbmFnZXI6IHN0cmluZztcbiAgICBwdWJsaWMgcGFja2FnZU1hbmFnZXJzOiBzdHJpbmdbXTtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyBvdXRwdXREaXJlY3Rvcnk6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb21tYW5kTGluZTogc3RyaW5nO1xuXG4gICAgcHVibGljIHN0YXR1czogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcblxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuYWRkUmVuZGVyZXIobmV3IEJvb3RzdHJhcEZvcm1SZW5kZXJlcigpKTtcblxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIudmFsaWRhdGVUcmlnZ2VyID0gdmFsaWRhdGVUcmlnZ2VyLmNoYW5nZU9yQmx1cjtcblxuICAgICAgICBWYWxpZGF0aW9uUnVsZXMuY3VzdG9tUnVsZShcInBhY2thZ2VOYW1lTG93ZXJDYXNlUnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gdmFsdWU7XG4gICAgICAgIH0sIGBcXCR7JGRpc3BsYXlOYW1lfSBtdXN0IG5vdCBoYXZlIHVwcGVyY2FzZSBsZXR0ZXJzIGluIGl0LmApO1xuXG4gICAgICAgIFZhbGlkYXRpb25SdWxlcy5jdXN0b21SdWxlKFwicGFja2FnZU5hbWVTdGFydFJ1bGVcIiwgKHZhbHVlOiBzdHJpbmcsIG9iajogR2VuZXJhdG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICEodmFsdWVbMF0gPT09IFwiLlwiIHx8IHZhbHVlWzBdID09PSBcIi1cIiB8fCB2YWx1ZVswXSA9PT0gXCJfXCIpO1xuICAgICAgICB9LCBgXFwkeyRkaXNwbGF5TmFtZX0gbXVzdCBub3Qgc3RhcnQgd2l0aCBhIGRvdCwgaHlwaGVuIG9yIHVuZGVyc2NvcmUuYCk7XG5cbiAgICAgICAgVmFsaWRhdGlvblJ1bGVzLmN1c3RvbVJ1bGUoXCJwYWNrYWdlTmFtZVNwZWNpYWxDaGFyYWN0ZXJzUnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgIXZhbHVlLm1hdGNoKC9bXFwvXFxcXFxcKFxcKSZcXD8jXFx8PD5AOiVcXHNcXConXCIhfmBdLyk7XG4gICAgICAgIH0sIGBcXCR7JGRpc3BsYXlOYW1lfSBtdXN0IG5vdCBoYXZlIGFueSBzcGVjaWFsIGNoYXJhY3RlcnMuYCk7XG5cbiAgICAgICAgVmFsaWRhdGlvblJ1bGVzLmN1c3RvbVJ1bGUoXCJwYWNrYWdlTmFtZU5vblVybFNhZmVSdWxlXCIsICh2YWx1ZTogc3RyaW5nLCBvYmo6IEdlbmVyYXRvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpID09PSB2YWx1ZTtcbiAgICAgICAgfSwgYFxcJHskZGlzcGxheU5hbWV9IGNhbid0IGNvbnRhaW4gYW55IG5vbi1VUkwtc2FmZSBjaGFyYWN0ZXJzLmApO1xuXG4gICAgICAgIFZhbGlkYXRpb25SdWxlcy5jdXN0b21SdWxlKFwibGFuZ3VhZ2VMaW50UnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmoubGludGVyID09PSBcIk5vbmVcIiB8fFxuICAgICAgICAgICAgICAgIChvYmoubGludGVyID09PSBcIkVTTGludFwiICYmIG9iai5zb3VyY2VMYW5ndWFnZSA9PT0gXCJKYXZhU2NyaXB0XCIpIHx8XG4gICAgICAgICAgICAgICAgKG9iai5saW50ZXIgPT09IFwiVFNMaW50XCIgJiYgb2JqLnNvdXJjZUxhbmd1YWdlID09PSBcIlR5cGVTY3JpcHRcIik7XG4gICAgICAgIH0sIGBUaGUgY29tYmluYXRpb24gb2Ygc291cmNlTGFuZ3VhZ2UgYW5kIGxpbnRlciBpcyBub3QgdmFsaWQuYCk7XG5cbiAgICAgICAgVmFsaWRhdGlvblJ1bGVzLmN1c3RvbVJ1bGUoXCJhdXJlbGlhQnVuZGxpbmdSdWxlXCIsICh2YWx1ZTogc3RyaW5nLCBvYmo6IEdlbmVyYXRvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5hcHBsaWNhdGlvbkZyYW1ld29yayAhPT0gXCJBdXJlbGlhXCIgfHxcbiAgICAgICAgICAgICAgICAhKG9iai5idW5kbGVyID09PSBcIkJyb3dzZXJpZnlcIiB8fCBvYmouYnVuZGxlciA9PT0gXCJXZWJwYWNrXCIpO1xuICAgICAgICB9LCBgQXVyZWxpYSBkb2VzIG5vdCBjdXJyZW50bHkgc3VwcG9ydCBidW5kbGluZyB3aXRoIEJyb3dzZXJpZnkgb3IgV2VicGFjay5gKTtcblxuICAgICAgICBWYWxpZGF0aW9uUnVsZXMuY3VzdG9tUnVsZShcImFuZ3VsYXJCdW5kbGluZ1J1bGVcIiwgKHZhbHVlOiBzdHJpbmcsIG9iajogR2VuZXJhdG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2JqLmFwcGxpY2F0aW9uRnJhbWV3b3JrICE9PSBcIkFuZ3VsYXJcIiB8fCBvYmouYnVuZGxlciAhPT0gXCJSZXF1aXJlSlNcIjtcbiAgICAgICAgfSwgYEFuZ3VsYXIgZG9lcyBub3QgY3VycmVudGx5IHN1cHBvcnQgYnVuZGxpbmcgd2l0aCBSZXF1aXJlSlMuYCk7XG5cbiAgICAgICAgVmFsaWRhdGlvblJ1bGVzLmN1c3RvbVJ1bGUoXCJyZXF1aXJlSnNNb2R1bGVUeXBlUnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmoubW9kdWxlVHlwZSAhPT0gXCJBTURcIiB8fCBvYmouYnVuZGxlciA9PT0gXCJSZXF1aXJlSlNcIjtcbiAgICAgICAgfSwgYFlvdSBjYW4gb25seSB1c2UgQU1EIG1vZHVsZXMgd2l0aCBSZXF1aXJlSlMgQnVuZGxlcmApO1xuXG4gICAgICAgIFZhbGlkYXRpb25SdWxlcy5jdXN0b21SdWxlKFwid2VicGFja0Jyb3dzZXJpZnlNb2R1bGVUeXBlUnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmoubW9kdWxlVHlwZSAhPT0gXCJDb21tb25KU1wiIHx8IChvYmouYnVuZGxlciA9PT0gXCJXZWJwYWNrXCIgfHwgb2JqLmJ1bmRsZXIgPT09IFwiQnJvd3NlcmlmeVwiKTtcbiAgICAgICAgfSwgYFlvdSBjYW4gb25seSB1c2UgQ29tbW9uSlMgbW9kdWxlcyB3aXRoIFdlYnBhY2sgb3IgQnJvd3NlcmlmeSBCdW5kbGVycy5gKTtcblxuICAgICAgICBWYWxpZGF0aW9uUnVsZXMuY3VzdG9tUnVsZShcImplc3RNb2R1bGVUeXBlUnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmoudW5pdFRlc3RSdW5uZXIgIT09IFwiSmVzdFwiIHx8IG9iai5tb2R1bGVUeXBlID09PSBcIkNvbW1vbkpTXCI7XG4gICAgICAgIH0sIGBZb3UgY2FuIG9ubHkgdXNlIENvbW1vbkpTIE1vZHVsZSBUeXBlIHdoZW4gdGhlIFVuaXQgVGVzdCBSdW5uZXIgaXMgSmVzdC5gKTtcblxuICAgICAgICBWYWxpZGF0aW9uUnVsZXMuY3VzdG9tUnVsZShcInVuaXRUZXN0RnJhbWV3b3JrUnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoKChvYmoudW5pdFRlc3RSdW5uZXIgPT09IHVuZGVmaW5lZCB8fCBvYmoudW5pdFRlc3RSdW5uZXIgPT09IFwiTm9uZVwiKSAmJlxuICAgICAgICAgICAgICAgIG9iai51bml0VGVzdEZyYW1ld29yayA9PT0gdW5kZWZpbmVkKSkgfHxcbiAgICAgICAgICAgICAgICBvYmoudW5pdFRlc3RGcmFtZXdvcmsgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfSwgYFVuaXQgVGVzdCBSdW5uZXIgaXMgcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgVmFsaWRhdGlvblJ1bGVzLmN1c3RvbVJ1bGUoXCJqZXN0SmFzbWluZVJ1bGVcIiwgKHZhbHVlOiBzdHJpbmcsIG9iajogR2VuZXJhdG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2JqLnVuaXRUZXN0UnVubmVyICE9PSBcIkplc3RcIiB8fCBvYmoudW5pdFRlc3RGcmFtZXdvcmsgPT09IFwiSmFzbWluZVwiO1xuICAgICAgICB9LCBgWW91IGNhbiBvbmx5IHVzZSBKYXNtaW5lIFVuaXQgVGVzdCBGcmFtZXdvcmsgd2hlbiB0aGUgVW5pdCBUZXN0IFJ1bm5lciBpcyBKZXN0LmApO1xuXG4gICAgICAgIFZhbGlkYXRpb25SdWxlcy5jdXN0b21SdWxlKFwiamVzdEpTRG9tUnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmoudW5pdFRlc3RSdW5uZXIgIT09IFwiSmVzdFwiIHx8IG9iai51bml0VGVzdEVuZ2luZSA9PT0gXCJKU0RvbVwiO1xuICAgICAgICB9LCBgWW91IGNhbiBvbmx5IHVzZSBKU0RvbSBVbml0IFRlc3QgRW5naW5lIHdoZW4gdGhlIFVuaXQgVGVzdCBSdW5uZXIgaXMgSmVzdC5gKTtcblxuICAgICAgICBWYWxpZGF0aW9uUnVsZXMuY3VzdG9tUnVsZShcInVuaXRUZXN0RW5naW5lUnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoKChvYmoudW5pdFRlc3RSdW5uZXIgPT09IHVuZGVmaW5lZCB8fCBvYmoudW5pdFRlc3RSdW5uZXIgPT09IFwiTm9uZVwiKSAmJlxuICAgICAgICAgICAgICAgIG9iai51bml0VGVzdEZyYW1ld29yayA9PT0gdW5kZWZpbmVkKSkgfHxcbiAgICAgICAgICAgICAgICBvYmoudW5pdFRlc3RGcmFtZXdvcmsgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfSwgYFVuaXQgVGVzdCBFbmdpbmUgaXMgcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgVmFsaWRhdGlvblJ1bGVzLmN1c3RvbVJ1bGUoXCJlMmVUZXN0RnJhbWV3b3JrUnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoKChvYmouZTJlVGVzdFJ1bm5lciA9PT0gdW5kZWZpbmVkIHx8IG9iai5lMmVUZXN0UnVubmVyID09PSBcIk5vbmVcIikgJiZcbiAgICAgICAgICAgICAgICBvYmouZTJlVGVzdEZyYW1ld29yayA9PT0gdW5kZWZpbmVkKSkgfHxcbiAgICAgICAgICAgICAgICBvYmouZTJlVGVzdEZyYW1ld29yayAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB9LCBgRTJFIFRlc3QgRnJhbWV3b3JrIGlzIHJlcXVpcmVkLmApO1xuXG4gICAgICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgICAgICAgLmVuc3VyZSgobTogR2VuZXJhdG9yKSA9PiBtLnBhY2thZ2VOYW1lKS5kaXNwbGF5TmFtZShcIlBhY2thZ2UgTmFtZVwiKVxuICAgICAgICAgICAgLnJlcXVpcmVkKClcbiAgICAgICAgICAgIC5tYXhMZW5ndGgoMjE0KVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJwYWNrYWdlTmFtZUxvd2VyQ2FzZVJ1bGVcIilcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwicGFja2FnZU5hbWVTdGFydFJ1bGVcIilcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwicGFja2FnZU5hbWVTcGVjaWFsQ2hhcmFjdGVyc1J1bGVcIilcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwicGFja2FnZU5hbWVOb25VcmxTYWZlUnVsZVwiKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2VuZXJhdG9yKSA9PiBtLnRpdGxlKS5kaXNwbGF5TmFtZShcIlRpdGxlXCIpLnJlcXVpcmVkKClcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdlbmVyYXRvcikgPT4gbS5saWNlbnNlKS5kaXNwbGF5TmFtZShcIkxpY2Vuc2VcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2VuZXJhdG9yKSA9PiBtLmFwcGxpY2F0aW9uRnJhbWV3b3JrKS5kaXNwbGF5TmFtZShcIkFwcGxpY2F0aW9uIEZyYW1ld29ya1wiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAudGhlbigpXG4gICAgICAgICAgICAuc2F0aXNmaWVzUnVsZShcImF1cmVsaWFCdW5kbGluZ1J1bGVcIilcbiAgICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwiYW5ndWxhckJ1bmRsaW5nUnVsZVwiKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2VuZXJhdG9yKSA9PiBtLnNvdXJjZUxhbmd1YWdlKS5kaXNwbGF5TmFtZShcIlNvdXJjZSBMYW5ndWFnZVwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAudGhlbigpXG4gICAgICAgICAgICAuc2F0aXNmaWVzUnVsZShcImxhbmd1YWdlTGludFJ1bGVcIilcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdlbmVyYXRvcikgPT4gbS5tb2R1bGVUeXBlKS5kaXNwbGF5TmFtZShcIk1vZHVsZSBUeXBlXCIpLnJlcXVpcmVkKClcbiAgICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwicmVxdWlyZUpzTW9kdWxlVHlwZVJ1bGVcIilcbiAgICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwid2VicGFja0Jyb3dzZXJpZnlNb2R1bGVUeXBlUnVsZVwiKVxuICAgICAgICAgICAgLnRoZW4oKVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJqZXN0TW9kdWxlVHlwZVJ1bGVcIilcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdlbmVyYXRvcikgPT4gbS5idW5kbGVyKS5kaXNwbGF5TmFtZShcIkJ1bmRsZXJcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLnRoZW4oKVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJhdXJlbGlhQnVuZGxpbmdSdWxlXCIpXG4gICAgICAgICAgICAudGhlbigpXG4gICAgICAgICAgICAuc2F0aXNmaWVzUnVsZShcImFuZ3VsYXJCdW5kbGluZ1J1bGVcIilcbiAgICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwicmVxdWlyZUpzTW9kdWxlVHlwZVJ1bGVcIilcbiAgICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwid2VicGFja0Jyb3dzZXJpZnlNb2R1bGVUeXBlUnVsZVwiKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2VuZXJhdG9yKSA9PiBtLmxpbnRlcikuZGlzcGxheU5hbWUoXCJMaW50ZXJcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLnRoZW4oKVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJsYW5ndWFnZUxpbnRSdWxlXCIpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZW5lcmF0b3IpID0+IG0udW5pdFRlc3RSdW5uZXIpLmRpc3BsYXlOYW1lKFwiVW5pdCBUZXN0IFJ1bm5lclwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZW5lcmF0b3IpID0+IG0udW5pdFRlc3RGcmFtZXdvcmspLmRpc3BsYXlOYW1lKFwiVW5pdCBUZXN0IEZyYW1ld29ya1wiKVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJ1bml0VGVzdEZyYW1ld29ya1J1bGVcIilcbiAgICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwiamVzdEphc21pbmVSdWxlXCIpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZW5lcmF0b3IpID0+IG0udW5pdFRlc3RFbmdpbmUpLmRpc3BsYXlOYW1lKFwiVW5pdCBUZXN0IEVuZ2luZVwiKVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJ1bml0VGVzdEVuZ2luZVJ1bGVcIilcbiAgICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwiamVzdEpTRG9tUnVsZVwiKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2VuZXJhdG9yKSA9PiBtLmUyZVRlc3RSdW5uZXIpLmRpc3BsYXlOYW1lKFwiRTJFIFRlc3QgUnVubmVyXCIpLnJlcXVpcmVkKClcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdlbmVyYXRvcikgPT4gbS5lMmVUZXN0RnJhbWV3b3JrKS5kaXNwbGF5TmFtZShcIkUyRSBUZXN0IEZyYW1ld29ya1wiKVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJlMmVUZXN0RnJhbWV3b3JrUnVsZVwiKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2VuZXJhdG9yKSA9PiBtLmNzc1ByZSkuZGlzcGxheU5hbWUoXCJDU1MgUHJlLVByb2Nlc3NvclwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZW5lcmF0b3IpID0+IG0uY3NzUG9zdCkuZGlzcGxheU5hbWUoXCJDU1MgUG9zdC1Qcm9jZXNzb3JcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2VuZXJhdG9yKSA9PiBtLnBhY2thZ2VNYW5hZ2VyKS5kaXNwbGF5TmFtZShcIlBhY2thZ2UgTWFuYWdlclwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAub24odGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGF0dGFjaGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBodHRwQ2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcbiAgICAgICAgaHR0cENsaWVudC5nZXQoXCIuL2Fzc2V0cy9zcGR4LWxpdGUuanNvblwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaWNlbnNlczogSVNwZHggPSByZXNwb25zZS5jb250ZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGljZW5zZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobGljZW5zZXMpLmZvckVhY2goKGxpY2Vuc2VLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGljZW5zZXMucHVzaCh7IGlkOiBsaWNlbnNlS2V5LCBsaWNlbnNlOiBsaWNlbnNlc1tsaWNlbnNlS2V5XSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHR0cENsaWVudDIgPSBuZXcgSHR0cENsaWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBodHRwQ2xpZW50LmdldChcIi4vYXNzZXRzL3Byb2ZpbGVzL2NvbmZpZ3VyZS5qc29uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlMi5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZmlsZXM6IHsgW2lkOiBzdHJpbmddOiBVbml0ZUNvbmZpZ3VyYXRpb24gfSA9IHJlc3BvbnNlMi5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb2ZpbGVzKS5mb3JFYWNoKChwcm9maWxlS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVzLnB1c2goeyBpZDogcHJvZmlsZUtleSwgY29uZmlnOiBwcm9maWxlc1twcm9maWxlS2V5XSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pdGVDb25maWd1cmF0aW9uID0gTG9jYWxTdG9yYWdlLmdldDxVbml0ZUNvbmZpZ3VyYXRpb24+KFwidW5pdGVDb25maWd1cmF0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9maWxlID0gTG9jYWxTdG9yYWdlLmdldDxzdHJpbmc+KFwicHJvZmlsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZXModW5pdGVDb25maWd1cmF0aW9uLCBwcm9maWxlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5pdGVDb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiVW5hYmxlIHRvIGxvYWQgdGhlIHByb2ZpbGUgY29uZmlndXJhdGlvbnMgc28gY2FuIG5vdCBjb250aW51ZS5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiVW5hYmxlIHRvIGxvYWQgdGhlIFNQRFggbGljZW5zZXMgc28gY2FuIG5vdCBjb250aW51ZS5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiVW5hYmxlIHRvIGxvYWQgdGhlIFNQRFggbGljZW5zZXMgc28gY2FuIG5vdCBjb250aW51ZS5cIjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWZhdWx0VmFsdWVzKHVuaXRlQ29uZmlndXJhdGlvbj86IFVuaXRlQ29uZmlndXJhdGlvbiwgcHJvZmlsZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uRnJhbWV3b3JrcyA9IFtcIkFuZ3VsYXJcIiwgXCJBdXJlbGlhXCIsIFwiUGxhaW5BcHBcIiwgXCJSZWFjdFwiXTtcbiAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZXMgPSBbXCJKYXZhU2NyaXB0XCIsIFwiVHlwZVNjcmlwdFwiXTtcbiAgICAgICAgdGhpcy5tb2R1bGVUeXBlcyA9IFtcIkFNRFwiLCBcIkNvbW1vbkpTXCIsIFwiU3lzdGVtSlNcIl07XG4gICAgICAgIHRoaXMuYnVuZGxlcnMgPSBbXCJCcm93c2VyaWZ5XCIsIFwiUmVxdWlyZUpTXCIsIFwiU3lzdGVtSlNCdWlsZGVyXCIsIFwiV2VicGFja1wiXTtcbiAgICAgICAgdGhpcy5saW50ZXJzID0gW1wiRVNMaW50XCIsIFwiVFNMaW50XCIsIFwiTm9uZVwiXTtcbiAgICAgICAgdGhpcy51bml0VGVzdFJ1bm5lcnMgPSBbXCJKZXN0XCIsIFwiS2FybWFcIiwgXCJOb25lXCJdO1xuICAgICAgICB0aGlzLnVuaXRUZXN0RnJhbWV3b3JrcyA9IFtcIkphc21pbmVcIiwgXCJNb2NoYUNoYWlcIl07XG4gICAgICAgIHRoaXMudW5pdFRlc3RFbmdpbmVzID0gW1wiUGhhbnRvbUpTXCIsIFwiSlNEb21cIiwgXCJDaHJvbWVIZWFkbGVzc1wiXTtcbiAgICAgICAgdGhpcy5lMmVUZXN0UnVubmVycyA9IFtcIlByb3RyYWN0b3JcIiwgXCJXZWJkcml2ZXJJT1wiLCBcIk5vbmVcIl07XG4gICAgICAgIHRoaXMuZTJlVGVzdEZyYW1ld29ya3MgPSBbXCJKYXNtaW5lXCIsIFwiTW9jaGFDaGFpXCJdO1xuICAgICAgICB0aGlzLmNzc1ByZXMgPSBbXCJDc3NcIiwgXCJMZXNzXCIsIFwiU2Fzc1wiLCBcIlN0eWx1c1wiXTtcbiAgICAgICAgdGhpcy5jc3NQb3N0cyA9IFtcIk5vbmVcIiwgXCJQb3N0Q3NzXCJdO1xuICAgICAgICB0aGlzLnBhY2thZ2VNYW5hZ2VycyA9IFtcIk5wbVwiLCBcIllhcm5cIl07XG5cbiAgICAgICAgdGhpcy5wcm9maWxlID0gcHJvZmlsZTtcbiAgICAgICAgdGhpcy5wYWNrYWdlTmFtZSA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi5wYWNrYWdlTmFtZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi50aXRsZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5saWNlbnNlID0gdW5pdGVDb25maWd1cmF0aW9uID8gdW5pdGVDb25maWd1cmF0aW9uLmxpY2Vuc2UgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb25GcmFtZXdvcmsgPSB1bml0ZUNvbmZpZ3VyYXRpb24gPyB1bml0ZUNvbmZpZ3VyYXRpb24uYXBwbGljYXRpb25GcmFtZXdvcmsgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2UgPSB1bml0ZUNvbmZpZ3VyYXRpb24gPyB1bml0ZUNvbmZpZ3VyYXRpb24uc291cmNlTGFuZ3VhZ2UgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubW9kdWxlVHlwZSA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi5tb2R1bGVUeXBlIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmJ1bmRsZXIgPSB1bml0ZUNvbmZpZ3VyYXRpb24gPyB1bml0ZUNvbmZpZ3VyYXRpb24uYnVuZGxlciA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5saW50ZXIgPSB1bml0ZUNvbmZpZ3VyYXRpb24gPyB1bml0ZUNvbmZpZ3VyYXRpb24ubGludGVyIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVuaXRUZXN0UnVubmVyID0gdW5pdGVDb25maWd1cmF0aW9uID8gdW5pdGVDb25maWd1cmF0aW9uLnVuaXRUZXN0UnVubmVyIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVuaXRUZXN0RnJhbWV3b3JrID0gdW5pdGVDb25maWd1cmF0aW9uID8gdW5pdGVDb25maWd1cmF0aW9uLnVuaXRUZXN0RnJhbWV3b3JrIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVuaXRUZXN0RnJhbWV3b3JrRW5hYmxlZCA9IHRoaXMudW5pdFRlc3RGcmFtZXdvcmsgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy51bml0VGVzdEVuZ2luZSA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi51bml0VGVzdEVuZ2luZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy51bml0VGVzdEVuZ2luZUVuYWJsZWQgPSB0aGlzLnVuaXRUZXN0RW5naW5lICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZTJlVGVzdFJ1bm5lciA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi5lMmVUZXN0UnVubmVyIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmUyZVRlc3RGcmFtZXdvcmsgPSB1bml0ZUNvbmZpZ3VyYXRpb24gPyB1bml0ZUNvbmZpZ3VyYXRpb24uZTJlVGVzdEZyYW1ld29yayA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lMmVUZXN0RnJhbWV3b3JrRW5hYmxlZCA9IHRoaXMuZTJlVGVzdEZyYW1ld29yayAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNzc1ByZSA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi5jc3NQcmUgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY3NzUG9zdCA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi5jc3NQb3N0IDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBhY2thZ2VNYW5hZ2VyID0gdW5pdGVDb25maWd1cmF0aW9uID8gdW5pdGVDb25maWd1cmF0aW9uLnBhY2thZ2VNYW5hZ2VyIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm91dHB1dERpcmVjdG9yeSA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi5vdXRwdXREaXJlY3RvcnkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHByb2ZpbGVDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcm9maWxlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9maWxlID0gdGhpcy5wcm9maWxlcy5maW5kKChwKSA9PiBwLmlkID09PSB0aGlzLnByb2ZpbGUpO1xuXG4gICAgICAgICAgICBpZiAocHJvZmlsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGljZW5zZSA9IHByb2ZpbGUuY29uZmlnLmxpY2Vuc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbkZyYW1ld29yayA9IHByb2ZpbGUuY29uZmlnLmFwcGxpY2F0aW9uRnJhbWV3b3JrO1xuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2UgPSBwcm9maWxlLmNvbmZpZy5zb3VyY2VMYW5ndWFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZVR5cGUgPSBwcm9maWxlLmNvbmZpZy5tb2R1bGVUeXBlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVuZGxlciA9IHByb2ZpbGUuY29uZmlnLmJ1bmRsZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5saW50ZXIgPSBwcm9maWxlLmNvbmZpZy5saW50ZXI7XG4gICAgICAgICAgICAgICAgdGhpcy51bml0VGVzdFJ1bm5lciA9IHByb2ZpbGUuY29uZmlnLnVuaXRUZXN0UnVubmVyO1xuICAgICAgICAgICAgICAgIHRoaXMudW5pdFRlc3RGcmFtZXdvcmsgPSBwcm9maWxlLmNvbmZpZy51bml0VGVzdEZyYW1ld29yaztcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXRUZXN0RnJhbWV3b3JrRW5hYmxlZCA9IHRoaXMudW5pdFRlc3RGcmFtZXdvcmsgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXRUZXN0RW5naW5lID0gcHJvZmlsZS5jb25maWcudW5pdFRlc3RFbmdpbmU7XG4gICAgICAgICAgICAgICAgdGhpcy51bml0VGVzdEVuZ2luZUVuYWJsZWQgPSB0aGlzLnVuaXRUZXN0RW5naW5lICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5lMmVUZXN0UnVubmVyID0gcHJvZmlsZS5jb25maWcuZTJlVGVzdFJ1bm5lcjtcbiAgICAgICAgICAgICAgICB0aGlzLmUyZVRlc3RGcmFtZXdvcmsgPSBwcm9maWxlLmNvbmZpZy5lMmVUZXN0RnJhbWV3b3JrO1xuICAgICAgICAgICAgICAgIHRoaXMuZTJlVGVzdEZyYW1ld29ya0VuYWJsZWQgPSB0aGlzLmUyZVRlc3RGcmFtZXdvcmsgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmNzc1ByZSA9IHByb2ZpbGUuY29uZmlnLmNzc1ByZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNzc1Bvc3QgPSBwcm9maWxlLmNvbmZpZy5jc3NQb3N0O1xuICAgICAgICAgICAgICAgIHRoaXMucGFja2FnZU1hbmFnZXIgPSBwcm9maWxlLmNvbmZpZy5wYWNrYWdlTWFuYWdlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhcHBsaWNhdGlvbkZyYW1ld29ya0NoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcImJ1bmRsZXJcIiB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW9kdWxlVHlwZUNoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcImJ1bmRsZXJcIiB9KTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLCBwcm9wZXJ0eU5hbWU6IFwidW5pdFRlc3RSdW5uZXJcIiB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVuZGxlckNoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcImFwcGxpY2F0aW9uRnJhbWV3b3JrXCIgfSk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcIm1vZHVsZVR5cGVcIiB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc291cmNlTGFuZ3VhZ2VDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMsIHByb3BlcnR5TmFtZTogXCJsaW50ZXJcIiB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGludGVyQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLCBwcm9wZXJ0eU5hbWU6IFwic291cmNlTGFuZ3VhZ2VcIiB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5pdFRlc3RSdW5uZXJDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy51bml0VGVzdFJ1bm5lciA9PT0gdW5kZWZpbmVkIHx8IHRoaXMudW5pdFRlc3RSdW5uZXIgPT09IFwiTm9uZVwiKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXRUZXN0RnJhbWV3b3JrID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy51bml0VGVzdEVuZ2luZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMudW5pdFRlc3RGcmFtZXdvcmtFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuaXRUZXN0RW5naW5lRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bml0VGVzdEZyYW1ld29ya0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy51bml0VGVzdEVuZ2luZUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcInVuaXRUZXN0RnJhbWV3b3JrXCIgfSk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcInVuaXRUZXN0RW5naW5lXCIgfSk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcIm1vZHVsZVR5cGVcIiB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5pdFRlc3RGcmFtZXdvcmtDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMsIHByb3BlcnR5TmFtZTogXCJ1bml0VGVzdFJ1bm5lclwiIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1bml0VGVzdEVuZ2luZUNoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcInVuaXRUZXN0UnVubmVyXCIgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGUyZVRlc3RSdW5uZXJDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5lMmVUZXN0UnVubmVyID09PSB1bmRlZmluZWQgfHwgdGhpcy5lMmVUZXN0UnVubmVyID09PSBcIk5vbmVcIikge1xuICAgICAgICAgICAgdGhpcy5lMmVUZXN0RnJhbWV3b3JrID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5lMmVUZXN0RnJhbWV3b3JrRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lMmVUZXN0RnJhbWV3b3JrRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLCBwcm9wZXJ0eU5hbWU6IFwiZTJlVGVzdEZyYW1ld29ya1wiIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZW5lcmF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdW5pdGVDb25maWd1cmF0aW9uID0gbmV3IFVuaXRlQ29uZmlndXJhdGlvbigpO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24ucGFja2FnZU5hbWUgPSB0aGlzLnBhY2thZ2VOYW1lO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24udGl0bGUgPSB0aGlzLnRpdGxlO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24ubGljZW5zZSA9IHRoaXMubGljZW5zZTtcbiAgICAgICAgdW5pdGVDb25maWd1cmF0aW9uLmFwcGxpY2F0aW9uRnJhbWV3b3JrID0gdGhpcy5hcHBsaWNhdGlvbkZyYW1ld29yaztcbiAgICAgICAgdW5pdGVDb25maWd1cmF0aW9uLm1vZHVsZVR5cGUgPSB0aGlzLm1vZHVsZVR5cGU7XG4gICAgICAgIHVuaXRlQ29uZmlndXJhdGlvbi5idW5kbGVyID0gdGhpcy5idW5kbGVyO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24uc291cmNlTGFuZ3VhZ2UgPSB0aGlzLnNvdXJjZUxhbmd1YWdlO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24ubGludGVyID0gdGhpcy5saW50ZXI7XG4gICAgICAgIHVuaXRlQ29uZmlndXJhdGlvbi51bml0VGVzdFJ1bm5lciA9IHRoaXMudW5pdFRlc3RSdW5uZXI7XG4gICAgICAgIHVuaXRlQ29uZmlndXJhdGlvbi51bml0VGVzdEZyYW1ld29yayA9IHRoaXMudW5pdFRlc3RGcmFtZXdvcms7XG4gICAgICAgIHVuaXRlQ29uZmlndXJhdGlvbi51bml0VGVzdEVuZ2luZSA9IHRoaXMudW5pdFRlc3RFbmdpbmU7XG4gICAgICAgIHVuaXRlQ29uZmlndXJhdGlvbi5lMmVUZXN0UnVubmVyID0gdGhpcy5lMmVUZXN0UnVubmVyO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24uZTJlVGVzdEZyYW1ld29yayA9IHRoaXMuZTJlVGVzdEZyYW1ld29yaztcbiAgICAgICAgdW5pdGVDb25maWd1cmF0aW9uLmNzc1ByZSA9IHRoaXMuY3NzUHJlO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24uY3NzUG9zdCA9IHRoaXMuY3NzUG9zdDtcbiAgICAgICAgdW5pdGVDb25maWd1cmF0aW9uLnBhY2thZ2VNYW5hZ2VyID0gdGhpcy5wYWNrYWdlTWFuYWdlcjtcbiAgICAgICAgdW5pdGVDb25maWd1cmF0aW9uLm91dHB1dERpcmVjdG9yeSA9IHRoaXMub3V0cHV0RGlyZWN0b3J5O1xuXG4gICAgICAgIGxldCBwcm9maWxlOiBVbml0ZUNvbmZpZ3VyYXRpb247XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMucHJvZmlsZXMuZmluZCgocCkgPT4gcC5pZCA9PT0gdGhpcy5wcm9maWxlKTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcHJvZmlsZSA9IGl0ZW0uY29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldChcInVuaXRlQ29uZmlndXJhdGlvblwiLCB1bml0ZUNvbmZpZ3VyYXRpb24pO1xuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0KFwicHJvZmlsZVwiLCB0aGlzLnByb2ZpbGUpO1xuXG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSgpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmRMaW5lID0gYHVuaXRlIGNvbmZpZ3VyZWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCAtLXBhY2thZ2VOYW1lPSR7dGhpcy5wYWNrYWdlTmFtZX1gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgLS10aXRsZT1cIiR7dGhpcy50aXRsZX1cImAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvZmlsZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiIDogYCAtLXByb2ZpbGU9JHt0aGlzLnByb2ZpbGV9YCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUFyZyhwcm9maWxlLCB1bml0ZUNvbmZpZ3VyYXRpb24sIFwibGljZW5zZVwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQXJnKHByb2ZpbGUsIHVuaXRlQ29uZmlndXJhdGlvbiwgXCJhcHBsaWNhdGlvbkZyYW1ld29ya1wiLCBcImFwcEZyYW1ld29ya1wiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQXJnKHByb2ZpbGUsIHVuaXRlQ29uZmlndXJhdGlvbiwgXCJtb2R1bGVUeXBlXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBcmcocHJvZmlsZSwgdW5pdGVDb25maWd1cmF0aW9uLCBcImJ1bmRsZXJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUFyZyhwcm9maWxlLCB1bml0ZUNvbmZpZ3VyYXRpb24sIFwic291cmNlTGFuZ3VhZ2VcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUFyZyhwcm9maWxlLCB1bml0ZUNvbmZpZ3VyYXRpb24sIFwibGludGVyXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBcmcocHJvZmlsZSwgdW5pdGVDb25maWd1cmF0aW9uLCBcInVuaXRUZXN0UnVubmVyXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBcmcocHJvZmlsZSwgdW5pdGVDb25maWd1cmF0aW9uLCBcInVuaXRUZXN0RnJhbWV3b3JrXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBcmcocHJvZmlsZSwgdW5pdGVDb25maWd1cmF0aW9uLCBcInVuaXRUZXN0RW5naW5lXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBcmcocHJvZmlsZSwgdW5pdGVDb25maWd1cmF0aW9uLCBcImUyZVRlc3RSdW5uZXJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUFyZyhwcm9maWxlLCB1bml0ZUNvbmZpZ3VyYXRpb24sIFwiZTJlVGVzdEZyYW1ld29ya1wiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQXJnKHByb2ZpbGUsIHVuaXRlQ29uZmlndXJhdGlvbiwgXCJjc3NQcmVcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUFyZyhwcm9maWxlLCB1bml0ZUNvbmZpZ3VyYXRpb24sIFwiY3NzUG9zdFwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQXJnKHByb2ZpbGUsIHVuaXRlQ29uZmlndXJhdGlvbiwgXCJwYWNrYWdlTWFuYWdlclwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5vdXRwdXREaXJlY3RvcnkgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0RGlyZWN0b3J5ID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXREaXJlY3RvcnkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiIDogYCAtLW91dHB1dERpcmVjdG9yeT0ke3RoaXMub3V0cHV0RGlyZWN0b3J5fWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZExpbmUgPSBcIlRoZSBwYXJhbWV0ZXIgY2hvaWNlcyBhcmUgbm90IGFsbCB2YWxpZC5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2VuZXJhdGVBcmcocHJvZmlsZTogVW5pdGVDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb246IFVuaXRlQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBrZXlvZiBVbml0ZUNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgIGFyZ05hbWU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAocHJvZmlsZSAmJiBwcm9maWxlW3Byb3BlcnR5TmFtZV0gPT09IHVuaXRlQ29uZmlndXJhdGlvbltwcm9wZXJ0eU5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSBlbHNlIGlmICh1bml0ZUNvbmZpZ3VyYXRpb25bcHJvcGVydHlOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgIC0tJHthcmdOYW1lID8gYXJnTmFtZSA6IHByb3BlcnR5TmFtZX09JHt1bml0ZUNvbmZpZ3VyYXRpb25bcHJvcGVydHlOYW1lXX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBMb2NhbFN0b3JhZ2UucmVtb3ZlKFwidW5pdGVDb25maWd1cmF0aW9uXCIpO1xuICAgICAgICBMb2NhbFN0b3JhZ2UucmVtb3ZlKFwicHJvZmlsZVwiKTtcblxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kTGluZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY29udHJvbGxlci5yZXNldCgpLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29weVRvQ2xpcGJvYXJkKCk6IHZvaWQge1xuICAgICAgICBDbGlwYm9hcmQuY29weVRvKHRoaXMuY29tbWFuZExpbmUpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
