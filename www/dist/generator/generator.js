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
            }, "You can only use AMD modules with RequireJS");
            aurelia_validation_1.ValidationRules.customRule("webpackBrowserifyModuleTypeRule", function (value, obj) {
                return obj.moduleType !== "CommonJS" || (obj.bundler === "Webpack" || obj.bundler === "Browserify");
            }, "You can only use CommonJS modules with Webpack or Browserify.");
            aurelia_validation_1.ValidationRules.customRule("unitTestFrameworkRule", function (value, obj) {
                return (((obj.unitTestRunner === undefined || obj.unitTestRunner === "None") &&
                    obj.unitTestFramework === undefined)) ||
                    obj.unitTestFramework !== undefined;
            }, "Unit Test Runner is required.");
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
                .ensure(function (m) { return m.unitTestEngine; }).displayName("Unit Test Engine")
                .satisfiesRule("unitTestEngineRule")
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
            this.unitTestRunners = ["Karma", "None"];
            this.unitTestFrameworks = ["Jasmine", "MochaChai"];
            this.unitTestEngines = ["PhantomJS", "ChromeHeadless"];
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2dlbmVyYXRvci9nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBZ0JBO1FBOEVJLG1CQUFZLFVBQWdDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBRTdCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksNkNBQXFCLEVBQUUsQ0FBQyxDQUFDO1lBRXpELElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLG9DQUFlLENBQUMsWUFBWSxDQUFDO1lBRS9ELG9DQUFlLENBQUMsVUFBVSxDQUFDLDBCQUEwQixFQUFFLFVBQUMsS0FBYSxFQUFFLEdBQWM7Z0JBQ2pGLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJO29CQUN4QyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDO1lBQ3RDLENBQUMsRUFBRSx3REFBeUQsQ0FBQyxDQUFDO1lBRTlELG9DQUFlLENBQUMsVUFBVSxDQUFDLHNCQUFzQixFQUFFLFVBQUMsS0FBYSxFQUFFLEdBQWM7Z0JBQzdFLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJO29CQUN4QyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNwRSxDQUFDLEVBQUUsa0VBQW1FLENBQUMsQ0FBQztZQUV4RSxvQ0FBZSxDQUFDLFVBQVUsQ0FBQyxrQ0FBa0MsRUFBRSxVQUFDLEtBQWEsRUFBRSxHQUFjO2dCQUN6RixNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSTtvQkFDeEMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDdkQsQ0FBQyxFQUFF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IEdlbmVyYXRvciBjbGFzcy5cbiAqL1xuaW1wb3J0IHsgaW5qZWN0LCBOZXdJbnN0YW5jZSB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcImF1cmVsaWEtaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtdGVtcGxhdGluZ1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVUcmlnZ2VyLCBWYWxpZGF0aW9uQ29udHJvbGxlciwgVmFsaWRhdGlvblJ1bGVzIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgQ2xpcGJvYXJkIH0gZnJvbSBcIi4uL2RvbUhlbHBlcnMvY2xpcGJvYXJkXCI7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vZG9tSGVscGVycy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL2RvbUhlbHBlcnMvc3R5bGVcIjtcbmltcG9ydCB7IElTcGR4IH0gZnJvbSBcIi4uL21vZGVscy9JU3BkeFwiO1xuaW1wb3J0IHsgSVNwZHhMaWNlbnNlIH0gZnJvbSBcIi4uL21vZGVscy9JU3BkeExpY2Vuc2VcIjtcbmltcG9ydCB7IFVuaXRlQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvdW5pdGVDb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBCb290c3RyYXBGb3JtUmVuZGVyZXIgfSBmcm9tIFwiLi4vdmFsaWRhdGlvbi9ib290c3RyYXBGb3JtUmVuZGVyZXJcIjtcblxuQGluamVjdChOZXdJbnN0YW5jZS5vZihWYWxpZGF0aW9uQ29udHJvbGxlcikpXG5leHBvcnQgY2xhc3MgR2VuZXJhdG9yIHtcbiAgICBwdWJsaWMgY29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgcGFja2FnZU5hbWU6IHN0cmluZztcbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyBwcm9maWxlOiBzdHJpbmc7XG4gICAgcHVibGljIHByb2ZpbGVzOiB7IGlkOiBzdHJpbmc7IGNvbmZpZzogVW5pdGVDb25maWd1cmF0aW9uIH1bXTtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyBsaWNlbnNlOiBzdHJpbmc7XG4gICAgcHVibGljIGxpY2Vuc2VzOiB7IGlkOiBzdHJpbmc7IGxpY2Vuc2U6IElTcGR4TGljZW5zZSB9W107XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgYXBwbGljYXRpb25GcmFtZXdvcms6IHN0cmluZztcbiAgICBwdWJsaWMgYXBwbGljYXRpb25GcmFtZXdvcmtzOiBzdHJpbmdbXTtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyBzb3VyY2VMYW5ndWFnZTogc3RyaW5nO1xuICAgIHB1YmxpYyBzb3VyY2VMYW5ndWFnZXM6IHN0cmluZ1tdO1xuXG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIGxpbnRlcjogc3RyaW5nO1xuICAgIHB1YmxpYyBsaW50ZXJzOiBzdHJpbmdbXTtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyBtb2R1bGVUeXBlOiBzdHJpbmc7XG4gICAgcHVibGljIG1vZHVsZVR5cGVzOiBzdHJpbmdbXTtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyBidW5kbGVyOiBzdHJpbmc7XG4gICAgcHVibGljIGJ1bmRsZXJzOiBzdHJpbmdbXTtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyB1bml0VGVzdFJ1bm5lcjogc3RyaW5nO1xuICAgIHB1YmxpYyB1bml0VGVzdFJ1bm5lcnM6IHN0cmluZ1tdO1xuXG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIHVuaXRUZXN0RnJhbWV3b3JrOiBzdHJpbmc7XG4gICAgcHVibGljIHVuaXRUZXN0RnJhbWV3b3Jrczogc3RyaW5nW107XG4gICAgcHVibGljIHVuaXRUZXN0RnJhbWV3b3JrRW5hYmxlZDogYm9vbGVhbjtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyB1bml0VGVzdEVuZ2luZTogc3RyaW5nO1xuICAgIHB1YmxpYyB1bml0VGVzdEVuZ2luZXM6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyB1bml0VGVzdEVuZ2luZUVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgZTJlVGVzdFJ1bm5lcjogc3RyaW5nO1xuICAgIHB1YmxpYyBlMmVUZXN0UnVubmVyczogc3RyaW5nW107XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgZTJlVGVzdEZyYW1ld29yazogc3RyaW5nO1xuICAgIHB1YmxpYyBlMmVUZXN0RnJhbWV3b3Jrczogc3RyaW5nW107XG4gICAgcHVibGljIGUyZVRlc3RGcmFtZXdvcmtFbmFibGVkOiBib29sZWFuO1xuXG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIGNzc1ByZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjc3NQcmVzOiBzdHJpbmdbXTtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyBjc3NQb3N0OiBzdHJpbmc7XG4gICAgcHVibGljIGNzc1Bvc3RzOiBzdHJpbmdbXTtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyBwYWNrYWdlTWFuYWdlcjogc3RyaW5nO1xuICAgIHB1YmxpYyBwYWNrYWdlTWFuYWdlcnM6IHN0cmluZ1tdO1xuXG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIG91dHB1dERpcmVjdG9yeTogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbW1hbmRMaW5lOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgc3RhdHVzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcikge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5hZGRSZW5kZXJlcihuZXcgQm9vdHN0cmFwRm9ybVJlbmRlcmVyKCkpO1xuXG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZVRyaWdnZXIgPSB2YWxpZGF0ZVRyaWdnZXIuY2hhbmdlT3JCbHVyO1xuXG4gICAgICAgIFZhbGlkYXRpb25SdWxlcy5jdXN0b21SdWxlKFwicGFja2FnZU5hbWVMb3dlckNhc2VSdWxlXCIsICh2YWx1ZTogc3RyaW5nLCBvYmo6IEdlbmVyYXRvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZTtcbiAgICAgICAgfSwgYFxcJHskZGlzcGxheU5hbWV9IG11c3Qgbm90IGhhdmUgdXBwZXJjYXNlIGxldHRlcnMgaW4gaXQuYCk7XG5cbiAgICAgICAgVmFsaWRhdGlvblJ1bGVzLmN1c3RvbVJ1bGUoXCJwYWNrYWdlTmFtZVN0YXJ0UnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgISh2YWx1ZVswXSA9PT0gXCIuXCIgfHwgdmFsdWVbMF0gPT09IFwiLVwiIHx8IHZhbHVlWzBdID09PSBcIl9cIik7XG4gICAgICAgIH0sIGBcXCR7JGRpc3BsYXlOYW1lfSBtdXN0IG5vdCBzdGFydCB3aXRoIGEgZG90LCBoeXBoZW4gb3IgdW5kZXJzY29yZS5gKTtcblxuICAgICAgICBWYWxpZGF0aW9uUnVsZXMuY3VzdG9tUnVsZShcInBhY2thZ2VOYW1lU3BlY2lhbENoYXJhY3RlcnNSdWxlXCIsICh2YWx1ZTogc3RyaW5nLCBvYmo6IEdlbmVyYXRvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAhdmFsdWUubWF0Y2goL1tcXC9cXFxcXFwoXFwpJlxcPyNcXHw8PkA6JVxcc1xcKidcIiF+YF0vKTtcbiAgICAgICAgfSwgYFxcJHskZGlzcGxheU5hbWV9IG11c3Qgbm90IGhhdmUgYW55IHNwZWNpYWwgY2hhcmFjdGVycy5gKTtcblxuICAgICAgICBWYWxpZGF0aW9uUnVsZXMuY3VzdG9tUnVsZShcInBhY2thZ2VOYW1lTm9uVXJsU2FmZVJ1bGVcIiwgKHZhbHVlOiBzdHJpbmcsIG9iajogR2VuZXJhdG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgPT09IHZhbHVlO1xuICAgICAgICB9LCBgXFwkeyRkaXNwbGF5TmFtZX0gY2FuJ3QgY29udGFpbiBhbnkgbm9uLVVSTC1zYWZlIGNoYXJhY3RlcnMuYCk7XG5cbiAgICAgICAgVmFsaWRhdGlvblJ1bGVzLmN1c3RvbVJ1bGUoXCJsYW5ndWFnZUxpbnRSdWxlXCIsICh2YWx1ZTogc3RyaW5nLCBvYmo6IEdlbmVyYXRvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5saW50ZXIgPT09IFwiTm9uZVwiIHx8XG4gICAgICAgICAgICAgICAgKG9iai5saW50ZXIgPT09IFwiRVNMaW50XCIgJiYgb2JqLnNvdXJjZUxhbmd1YWdlID09PSBcIkphdmFTY3JpcHRcIikgfHxcbiAgICAgICAgICAgICAgICAob2JqLmxpbnRlciA9PT0gXCJUU0xpbnRcIiAmJiBvYmouc291cmNlTGFuZ3VhZ2UgPT09IFwiVHlwZVNjcmlwdFwiKTtcbiAgICAgICAgfSwgYFRoZSBjb21iaW5hdGlvbiBvZiBzb3VyY2VMYW5ndWFnZSBhbmQgbGludGVyIGlzIG5vdCB2YWxpZC5gKTtcblxuICAgICAgICBWYWxpZGF0aW9uUnVsZXMuY3VzdG9tUnVsZShcImF1cmVsaWFCdW5kbGluZ1J1bGVcIiwgKHZhbHVlOiBzdHJpbmcsIG9iajogR2VuZXJhdG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2JqLmFwcGxpY2F0aW9uRnJhbWV3b3JrICE9PSBcIkF1cmVsaWFcIiB8fFxuICAgICAgICAgICAgICAgICEob2JqLmJ1bmRsZXIgPT09IFwiQnJvd3NlcmlmeVwiIHx8IG9iai5idW5kbGVyID09PSBcIldlYnBhY2tcIik7XG4gICAgICAgIH0sIGBBdXJlbGlhIGRvZXMgbm90IGN1cnJlbnRseSBzdXBwb3J0IGJ1bmRsaW5nIHdpdGggQnJvd3NlcmlmeSBvciBXZWJwYWNrLmApO1xuXG4gICAgICAgIFZhbGlkYXRpb25SdWxlcy5jdXN0b21SdWxlKFwiYW5ndWxhckJ1bmRsaW5nUnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmouYXBwbGljYXRpb25GcmFtZXdvcmsgIT09IFwiQW5ndWxhclwiIHx8IG9iai5idW5kbGVyICE9PSBcIlJlcXVpcmVKU1wiO1xuICAgICAgICB9LCBgQW5ndWxhciBkb2VzIG5vdCBjdXJyZW50bHkgc3VwcG9ydCBidW5kbGluZyB3aXRoIFJlcXVpcmVKUy5gKTtcblxuICAgICAgICBWYWxpZGF0aW9uUnVsZXMuY3VzdG9tUnVsZShcInJlcXVpcmVKc01vZHVsZVR5cGVSdWxlXCIsICh2YWx1ZTogc3RyaW5nLCBvYmo6IEdlbmVyYXRvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5tb2R1bGVUeXBlICE9PSBcIkFNRFwiIHx8IG9iai5idW5kbGVyID09PSBcIlJlcXVpcmVKU1wiO1xuICAgICAgICB9LCBgWW91IGNhbiBvbmx5IHVzZSBBTUQgbW9kdWxlcyB3aXRoIFJlcXVpcmVKU2ApO1xuXG4gICAgICAgIFZhbGlkYXRpb25SdWxlcy5jdXN0b21SdWxlKFwid2VicGFja0Jyb3dzZXJpZnlNb2R1bGVUeXBlUnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmoubW9kdWxlVHlwZSAhPT0gXCJDb21tb25KU1wiIHx8IChvYmouYnVuZGxlciA9PT0gXCJXZWJwYWNrXCIgfHwgb2JqLmJ1bmRsZXIgPT09IFwiQnJvd3NlcmlmeVwiKTtcbiAgICAgICAgfSwgYFlvdSBjYW4gb25seSB1c2UgQ29tbW9uSlMgbW9kdWxlcyB3aXRoIFdlYnBhY2sgb3IgQnJvd3NlcmlmeS5gKTtcblxuICAgICAgICBWYWxpZGF0aW9uUnVsZXMuY3VzdG9tUnVsZShcInVuaXRUZXN0RnJhbWV3b3JrUnVsZVwiLCAodmFsdWU6IHN0cmluZywgb2JqOiBHZW5lcmF0b3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoKChvYmoudW5pdFRlc3RSdW5uZXIgPT09IHVuZGVmaW5lZCB8fCBvYmoudW5pdFRlc3RSdW5uZXIgPT09IFwiTm9uZVwiKSAmJlxuICAgICAgICAgICAgICAgIG9iai51bml0VGVzdEZyYW1ld29yayA9PT0gdW5kZWZpbmVkKSkgfHxcbiAgICAgICAgICAgICAgICBvYmoudW5pdFRlc3RGcmFtZXdvcmsgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfSwgYFVuaXQgVGVzdCBSdW5uZXIgaXMgcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgVmFsaWRhdGlvblJ1bGVzLmN1c3RvbVJ1bGUoXCJ1bml0VGVzdEVuZ2luZVJ1bGVcIiwgKHZhbHVlOiBzdHJpbmcsIG9iajogR2VuZXJhdG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKCgob2JqLnVuaXRUZXN0UnVubmVyID09PSB1bmRlZmluZWQgfHwgb2JqLnVuaXRUZXN0UnVubmVyID09PSBcIk5vbmVcIikgJiZcbiAgICAgICAgICAgICAgICBvYmoudW5pdFRlc3RGcmFtZXdvcmsgPT09IHVuZGVmaW5lZCkpIHx8XG4gICAgICAgICAgICAgICAgb2JqLnVuaXRUZXN0RnJhbWV3b3JrICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH0sIGBVbml0IFRlc3QgRW5naW5lIGlzIHJlcXVpcmVkLmApO1xuXG4gICAgICAgIFZhbGlkYXRpb25SdWxlcy5jdXN0b21SdWxlKFwiZTJlVGVzdEZyYW1ld29ya1J1bGVcIiwgKHZhbHVlOiBzdHJpbmcsIG9iajogR2VuZXJhdG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKCgob2JqLmUyZVRlc3RSdW5uZXIgPT09IHVuZGVmaW5lZCB8fCBvYmouZTJlVGVzdFJ1bm5lciA9PT0gXCJOb25lXCIpICYmXG4gICAgICAgICAgICAgICAgb2JqLmUyZVRlc3RGcmFtZXdvcmsgPT09IHVuZGVmaW5lZCkpIHx8XG4gICAgICAgICAgICAgICAgb2JqLmUyZVRlc3RGcmFtZXdvcmsgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfSwgYEUyRSBUZXN0IEZyYW1ld29yayBpcyByZXF1aXJlZC5gKTtcblxuICAgICAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdlbmVyYXRvcikgPT4gbS5wYWNrYWdlTmFtZSkuZGlzcGxheU5hbWUoXCJQYWNrYWdlIE5hbWVcIilcbiAgICAgICAgICAgIC5yZXF1aXJlZCgpXG4gICAgICAgICAgICAubWF4TGVuZ3RoKDIxNClcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwicGFja2FnZU5hbWVMb3dlckNhc2VSdWxlXCIpXG4gICAgICAgICAgICAuc2F0aXNmaWVzUnVsZShcInBhY2thZ2VOYW1lU3RhcnRSdWxlXCIpXG4gICAgICAgICAgICAuc2F0aXNmaWVzUnVsZShcInBhY2thZ2VOYW1lU3BlY2lhbENoYXJhY3RlcnNSdWxlXCIpXG4gICAgICAgICAgICAuc2F0aXNmaWVzUnVsZShcInBhY2thZ2VOYW1lTm9uVXJsU2FmZVJ1bGVcIilcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdlbmVyYXRvcikgPT4gbS50aXRsZSkuZGlzcGxheU5hbWUoXCJUaXRsZVwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZW5lcmF0b3IpID0+IG0ubGljZW5zZSkuZGlzcGxheU5hbWUoXCJMaWNlbnNlXCIpLnJlcXVpcmVkKClcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdlbmVyYXRvcikgPT4gbS5hcHBsaWNhdGlvbkZyYW1ld29yaykuZGlzcGxheU5hbWUoXCJBcHBsaWNhdGlvbiBGcmFtZXdvcmtcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLnRoZW4oKVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJhdXJlbGlhQnVuZGxpbmdSdWxlXCIpXG4gICAgICAgICAgICAudGhlbigpXG4gICAgICAgICAgICAuc2F0aXNmaWVzUnVsZShcImFuZ3VsYXJCdW5kbGluZ1J1bGVcIilcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdlbmVyYXRvcikgPT4gbS5zb3VyY2VMYW5ndWFnZSkuZGlzcGxheU5hbWUoXCJTb3VyY2UgTGFuZ3VhZ2VcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLnRoZW4oKVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJsYW5ndWFnZUxpbnRSdWxlXCIpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZW5lcmF0b3IpID0+IG0ubW9kdWxlVHlwZSkuZGlzcGxheU5hbWUoXCJNb2R1bGUgVHlwZVwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAudGhlbigpXG4gICAgICAgICAgICAuc2F0aXNmaWVzUnVsZShcInJlcXVpcmVKc01vZHVsZVR5cGVSdWxlXCIpXG4gICAgICAgICAgICAudGhlbigpXG4gICAgICAgICAgICAuc2F0aXNmaWVzUnVsZShcIndlYnBhY2tCcm93c2VyaWZ5TW9kdWxlVHlwZVJ1bGVcIilcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdlbmVyYXRvcikgPT4gbS5idW5kbGVyKS5kaXNwbGF5TmFtZShcIkJ1bmRsZXJcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLnRoZW4oKVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJhdXJlbGlhQnVuZGxpbmdSdWxlXCIpXG4gICAgICAgICAgICAudGhlbigpXG4gICAgICAgICAgICAuc2F0aXNmaWVzUnVsZShcImFuZ3VsYXJCdW5kbGluZ1J1bGVcIilcbiAgICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwicmVxdWlyZUpzTW9kdWxlVHlwZVJ1bGVcIilcbiAgICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwid2VicGFja0Jyb3dzZXJpZnlNb2R1bGVUeXBlUnVsZVwiKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2VuZXJhdG9yKSA9PiBtLmxpbnRlcikuZGlzcGxheU5hbWUoXCJMaW50ZXJcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLnRoZW4oKVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJsYW5ndWFnZUxpbnRSdWxlXCIpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZW5lcmF0b3IpID0+IG0udW5pdFRlc3RSdW5uZXIpLmRpc3BsYXlOYW1lKFwiVW5pdCBUZXN0IFJ1bm5lclwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZW5lcmF0b3IpID0+IG0udW5pdFRlc3RGcmFtZXdvcmspLmRpc3BsYXlOYW1lKFwiVW5pdCBUZXN0IEZyYW1ld29ya1wiKVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJ1bml0VGVzdEZyYW1ld29ya1J1bGVcIilcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdlbmVyYXRvcikgPT4gbS51bml0VGVzdEVuZ2luZSkuZGlzcGxheU5hbWUoXCJVbml0IFRlc3QgRW5naW5lXCIpXG4gICAgICAgICAgICAuc2F0aXNmaWVzUnVsZShcInVuaXRUZXN0RW5naW5lUnVsZVwiKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2VuZXJhdG9yKSA9PiBtLmUyZVRlc3RSdW5uZXIpLmRpc3BsYXlOYW1lKFwiRTJFIFRlc3QgUnVubmVyXCIpLnJlcXVpcmVkKClcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdlbmVyYXRvcikgPT4gbS5lMmVUZXN0RnJhbWV3b3JrKS5kaXNwbGF5TmFtZShcIkUyRSBUZXN0IEZyYW1ld29ya1wiKVxuICAgICAgICAgICAgLnNhdGlzZmllc1J1bGUoXCJlMmVUZXN0RnJhbWV3b3JrUnVsZVwiKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2VuZXJhdG9yKSA9PiBtLmNzc1ByZSkuZGlzcGxheU5hbWUoXCJDU1MgUHJlLVByb2Nlc3NvclwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZW5lcmF0b3IpID0+IG0uY3NzUG9zdCkuZGlzcGxheU5hbWUoXCJDU1MgUG9zdC1Qcm9jZXNzb3JcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2VuZXJhdG9yKSA9PiBtLnBhY2thZ2VNYW5hZ2VyKS5kaXNwbGF5TmFtZShcIlBhY2thZ2UgTWFuYWdlclwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAub24odGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGF0dGFjaGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBodHRwQ2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcbiAgICAgICAgaHR0cENsaWVudC5nZXQoXCIuL2Fzc2V0cy9zcGR4LWxpdGUuanNvblwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaWNlbnNlczogSVNwZHggPSByZXNwb25zZS5jb250ZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGljZW5zZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobGljZW5zZXMpLmZvckVhY2goKGxpY2Vuc2VLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGljZW5zZXMucHVzaCh7IGlkOiBsaWNlbnNlS2V5LCBsaWNlbnNlOiBsaWNlbnNlc1tsaWNlbnNlS2V5XSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHR0cENsaWVudDIgPSBuZXcgSHR0cENsaWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBodHRwQ2xpZW50LmdldChcIi4vYXNzZXRzL3Byb2ZpbGVzL2NvbmZpZ3VyZS5qc29uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlMi5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZmlsZXM6IHsgW2lkOiBzdHJpbmddOiBVbml0ZUNvbmZpZ3VyYXRpb24gfSA9IHJlc3BvbnNlMi5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb2ZpbGVzKS5mb3JFYWNoKChwcm9maWxlS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVzLnB1c2goeyBpZDogcHJvZmlsZUtleSwgY29uZmlnOiBwcm9maWxlc1twcm9maWxlS2V5XSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pdGVDb25maWd1cmF0aW9uID0gTG9jYWxTdG9yYWdlLmdldDxVbml0ZUNvbmZpZ3VyYXRpb24+KFwidW5pdGVDb25maWd1cmF0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9maWxlID0gTG9jYWxTdG9yYWdlLmdldDxzdHJpbmc+KFwicHJvZmlsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZXModW5pdGVDb25maWd1cmF0aW9uLCBwcm9maWxlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5pdGVDb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiVW5hYmxlIHRvIGxvYWQgdGhlIHByb2ZpbGUgY29uZmlndXJhdGlvbnMgc28gY2FuIG5vdCBjb250aW51ZS5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiVW5hYmxlIHRvIGxvYWQgdGhlIFNQRFggbGljZW5zZXMgc28gY2FuIG5vdCBjb250aW51ZS5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiVW5hYmxlIHRvIGxvYWQgdGhlIFNQRFggbGljZW5zZXMgc28gY2FuIG5vdCBjb250aW51ZS5cIjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWZhdWx0VmFsdWVzKHVuaXRlQ29uZmlndXJhdGlvbj86IFVuaXRlQ29uZmlndXJhdGlvbiwgcHJvZmlsZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uRnJhbWV3b3JrcyA9IFtcIkFuZ3VsYXJcIiwgXCJBdXJlbGlhXCIsIFwiUGxhaW5BcHBcIiwgXCJSZWFjdFwiXTtcbiAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZXMgPSBbXCJKYXZhU2NyaXB0XCIsIFwiVHlwZVNjcmlwdFwiXTtcbiAgICAgICAgdGhpcy5tb2R1bGVUeXBlcyA9IFtcIkFNRFwiLCBcIkNvbW1vbkpTXCIsIFwiU3lzdGVtSlNcIl07XG4gICAgICAgIHRoaXMuYnVuZGxlcnMgPSBbXCJCcm93c2VyaWZ5XCIsIFwiUmVxdWlyZUpTXCIsIFwiU3lzdGVtSlNCdWlsZGVyXCIsIFwiV2VicGFja1wiXTtcbiAgICAgICAgdGhpcy5saW50ZXJzID0gW1wiRVNMaW50XCIsIFwiVFNMaW50XCIsIFwiTm9uZVwiXTtcbiAgICAgICAgdGhpcy51bml0VGVzdFJ1bm5lcnMgPSBbXCJLYXJtYVwiLCBcIk5vbmVcIl07XG4gICAgICAgIHRoaXMudW5pdFRlc3RGcmFtZXdvcmtzID0gW1wiSmFzbWluZVwiLCBcIk1vY2hhQ2hhaVwiXTtcbiAgICAgICAgdGhpcy51bml0VGVzdEVuZ2luZXMgPSBbXCJQaGFudG9tSlNcIiwgXCJDaHJvbWVIZWFkbGVzc1wiXTtcbiAgICAgICAgdGhpcy5lMmVUZXN0UnVubmVycyA9IFtcIlByb3RyYWN0b3JcIiwgXCJXZWJkcml2ZXJJT1wiLCBcIk5vbmVcIl07XG4gICAgICAgIHRoaXMuZTJlVGVzdEZyYW1ld29ya3MgPSBbXCJKYXNtaW5lXCIsIFwiTW9jaGFDaGFpXCJdO1xuICAgICAgICB0aGlzLmNzc1ByZXMgPSBbXCJDc3NcIiwgXCJMZXNzXCIsIFwiU2Fzc1wiLCBcIlN0eWx1c1wiXTtcbiAgICAgICAgdGhpcy5jc3NQb3N0cyA9IFtcIk5vbmVcIiwgXCJQb3N0Q3NzXCJdO1xuICAgICAgICB0aGlzLnBhY2thZ2VNYW5hZ2VycyA9IFtcIk5wbVwiLCBcIllhcm5cIl07XG5cbiAgICAgICAgdGhpcy5wcm9maWxlID0gcHJvZmlsZTtcbiAgICAgICAgdGhpcy5wYWNrYWdlTmFtZSA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi5wYWNrYWdlTmFtZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi50aXRsZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5saWNlbnNlID0gdW5pdGVDb25maWd1cmF0aW9uID8gdW5pdGVDb25maWd1cmF0aW9uLmxpY2Vuc2UgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb25GcmFtZXdvcmsgPSB1bml0ZUNvbmZpZ3VyYXRpb24gPyB1bml0ZUNvbmZpZ3VyYXRpb24uYXBwbGljYXRpb25GcmFtZXdvcmsgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2UgPSB1bml0ZUNvbmZpZ3VyYXRpb24gPyB1bml0ZUNvbmZpZ3VyYXRpb24uc291cmNlTGFuZ3VhZ2UgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubW9kdWxlVHlwZSA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi5tb2R1bGVUeXBlIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmJ1bmRsZXIgPSB1bml0ZUNvbmZpZ3VyYXRpb24gPyB1bml0ZUNvbmZpZ3VyYXRpb24uYnVuZGxlciA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5saW50ZXIgPSB1bml0ZUNvbmZpZ3VyYXRpb24gPyB1bml0ZUNvbmZpZ3VyYXRpb24ubGludGVyIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVuaXRUZXN0UnVubmVyID0gdW5pdGVDb25maWd1cmF0aW9uID8gdW5pdGVDb25maWd1cmF0aW9uLnVuaXRUZXN0UnVubmVyIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVuaXRUZXN0RnJhbWV3b3JrID0gdW5pdGVDb25maWd1cmF0aW9uID8gdW5pdGVDb25maWd1cmF0aW9uLnVuaXRUZXN0RnJhbWV3b3JrIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVuaXRUZXN0RnJhbWV3b3JrRW5hYmxlZCA9IHRoaXMudW5pdFRlc3RGcmFtZXdvcmsgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy51bml0VGVzdEVuZ2luZSA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi51bml0VGVzdEVuZ2luZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy51bml0VGVzdEVuZ2luZUVuYWJsZWQgPSB0aGlzLnVuaXRUZXN0RW5naW5lICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZTJlVGVzdFJ1bm5lciA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi5lMmVUZXN0UnVubmVyIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmUyZVRlc3RGcmFtZXdvcmsgPSB1bml0ZUNvbmZpZ3VyYXRpb24gPyB1bml0ZUNvbmZpZ3VyYXRpb24uZTJlVGVzdEZyYW1ld29yayA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lMmVUZXN0RnJhbWV3b3JrRW5hYmxlZCA9IHRoaXMuZTJlVGVzdEZyYW1ld29yayAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNzc1ByZSA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi5jc3NQcmUgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY3NzUG9zdCA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi5jc3NQb3N0IDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBhY2thZ2VNYW5hZ2VyID0gdW5pdGVDb25maWd1cmF0aW9uID8gdW5pdGVDb25maWd1cmF0aW9uLnBhY2thZ2VNYW5hZ2VyIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm91dHB1dERpcmVjdG9yeSA9IHVuaXRlQ29uZmlndXJhdGlvbiA/IHVuaXRlQ29uZmlndXJhdGlvbi5vdXRwdXREaXJlY3RvcnkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHByb2ZpbGVDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcm9maWxlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9maWxlID0gdGhpcy5wcm9maWxlcy5maW5kKChwKSA9PiBwLmlkID09PSB0aGlzLnByb2ZpbGUpO1xuXG4gICAgICAgICAgICBpZiAocHJvZmlsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGljZW5zZSA9IHByb2ZpbGUuY29uZmlnLmxpY2Vuc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbkZyYW1ld29yayA9IHByb2ZpbGUuY29uZmlnLmFwcGxpY2F0aW9uRnJhbWV3b3JrO1xuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2UgPSBwcm9maWxlLmNvbmZpZy5zb3VyY2VMYW5ndWFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZVR5cGUgPSBwcm9maWxlLmNvbmZpZy5tb2R1bGVUeXBlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVuZGxlciA9IHByb2ZpbGUuY29uZmlnLmJ1bmRsZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5saW50ZXIgPSBwcm9maWxlLmNvbmZpZy5saW50ZXI7XG4gICAgICAgICAgICAgICAgdGhpcy51bml0VGVzdFJ1bm5lciA9IHByb2ZpbGUuY29uZmlnLnVuaXRUZXN0UnVubmVyO1xuICAgICAgICAgICAgICAgIHRoaXMudW5pdFRlc3RGcmFtZXdvcmsgPSBwcm9maWxlLmNvbmZpZy51bml0VGVzdEZyYW1ld29yaztcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXRUZXN0RnJhbWV3b3JrRW5hYmxlZCA9IHRoaXMudW5pdFRlc3RGcmFtZXdvcmsgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXRUZXN0RW5naW5lID0gcHJvZmlsZS5jb25maWcudW5pdFRlc3RFbmdpbmU7XG4gICAgICAgICAgICAgICAgdGhpcy51bml0VGVzdEVuZ2luZUVuYWJsZWQgPSB0aGlzLnVuaXRUZXN0RW5naW5lICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5lMmVUZXN0UnVubmVyID0gcHJvZmlsZS5jb25maWcuZTJlVGVzdFJ1bm5lcjtcbiAgICAgICAgICAgICAgICB0aGlzLmUyZVRlc3RGcmFtZXdvcmsgPSBwcm9maWxlLmNvbmZpZy5lMmVUZXN0RnJhbWV3b3JrO1xuICAgICAgICAgICAgICAgIHRoaXMuZTJlVGVzdEZyYW1ld29ya0VuYWJsZWQgPSB0aGlzLmUyZVRlc3RGcmFtZXdvcmsgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmNzc1ByZSA9IHByb2ZpbGUuY29uZmlnLmNzc1ByZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNzc1Bvc3QgPSBwcm9maWxlLmNvbmZpZy5jc3NQb3N0O1xuICAgICAgICAgICAgICAgIHRoaXMucGFja2FnZU1hbmFnZXIgPSBwcm9maWxlLmNvbmZpZy5wYWNrYWdlTWFuYWdlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhcHBsaWNhdGlvbkZyYW1ld29ya0NoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcImJ1bmRsZXJcIiB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW9kdWxlVHlwZUNoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcImJ1bmRsZXJcIiB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVuZGxlckNoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcImFwcGxpY2F0aW9uRnJhbWV3b3JrXCIgfSk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcIm1vZHVsZVR5cGVcIiB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc291cmNlTGFuZ3VhZ2VDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMsIHByb3BlcnR5TmFtZTogXCJsaW50ZXJcIiB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGludGVyQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLCBwcm9wZXJ0eU5hbWU6IFwic291cmNlTGFuZ3VhZ2VcIiB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5pdFRlc3RSdW5uZXJDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy51bml0VGVzdFJ1bm5lciA9PT0gdW5kZWZpbmVkIHx8IHRoaXMudW5pdFRlc3RSdW5uZXIgPT09IFwiTm9uZVwiKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXRUZXN0RnJhbWV3b3JrID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy51bml0VGVzdEVuZ2luZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMudW5pdFRlc3RGcmFtZXdvcmtFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuaXRUZXN0RW5naW5lRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bml0VGVzdEZyYW1ld29ya0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy51bml0VGVzdEVuZ2luZUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcInVuaXRUZXN0RnJhbWV3b3JrXCIgfSk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcInVuaXRUZXN0RW5naW5lXCIgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGUyZVRlc3RSdW5uZXJDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5lMmVUZXN0UnVubmVyID09PSB1bmRlZmluZWQgfHwgdGhpcy5lMmVUZXN0UnVubmVyID09PSBcIk5vbmVcIikge1xuICAgICAgICAgICAgdGhpcy5lMmVUZXN0RnJhbWV3b3JrID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5lMmVUZXN0RnJhbWV3b3JrRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lMmVUZXN0RnJhbWV3b3JrRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLCBwcm9wZXJ0eU5hbWU6IFwiZTJlVGVzdEZyYW1ld29ya1wiIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZW5lcmF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdW5pdGVDb25maWd1cmF0aW9uID0gbmV3IFVuaXRlQ29uZmlndXJhdGlvbigpO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24ucGFja2FnZU5hbWUgPSB0aGlzLnBhY2thZ2VOYW1lO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24udGl0bGUgPSB0aGlzLnRpdGxlO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24ubGljZW5zZSA9IHRoaXMubGljZW5zZTtcbiAgICAgICAgdW5pdGVDb25maWd1cmF0aW9uLmFwcGxpY2F0aW9uRnJhbWV3b3JrID0gdGhpcy5hcHBsaWNhdGlvbkZyYW1ld29yaztcbiAgICAgICAgdW5pdGVDb25maWd1cmF0aW9uLm1vZHVsZVR5cGUgPSB0aGlzLm1vZHVsZVR5cGU7XG4gICAgICAgIHVuaXRlQ29uZmlndXJhdGlvbi5idW5kbGVyID0gdGhpcy5idW5kbGVyO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24uc291cmNlTGFuZ3VhZ2UgPSB0aGlzLnNvdXJjZUxhbmd1YWdlO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24ubGludGVyID0gdGhpcy5saW50ZXI7XG4gICAgICAgIHVuaXRlQ29uZmlndXJhdGlvbi51bml0VGVzdFJ1bm5lciA9IHRoaXMudW5pdFRlc3RSdW5uZXI7XG4gICAgICAgIHVuaXRlQ29uZmlndXJhdGlvbi51bml0VGVzdEZyYW1ld29yayA9IHRoaXMudW5pdFRlc3RGcmFtZXdvcms7XG4gICAgICAgIHVuaXRlQ29uZmlndXJhdGlvbi51bml0VGVzdEVuZ2luZSA9IHRoaXMudW5pdFRlc3RFbmdpbmU7XG4gICAgICAgIHVuaXRlQ29uZmlndXJhdGlvbi5lMmVUZXN0UnVubmVyID0gdGhpcy5lMmVUZXN0UnVubmVyO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24uZTJlVGVzdEZyYW1ld29yayA9IHRoaXMuZTJlVGVzdEZyYW1ld29yaztcbiAgICAgICAgdW5pdGVDb25maWd1cmF0aW9uLmNzc1ByZSA9IHRoaXMuY3NzUHJlO1xuICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb24uY3NzUG9zdCA9IHRoaXMuY3NzUG9zdDtcbiAgICAgICAgdW5pdGVDb25maWd1cmF0aW9uLnBhY2thZ2VNYW5hZ2VyID0gdGhpcy5wYWNrYWdlTWFuYWdlcjtcbiAgICAgICAgdW5pdGVDb25maWd1cmF0aW9uLm91dHB1dERpcmVjdG9yeSA9IHRoaXMub3V0cHV0RGlyZWN0b3J5O1xuXG4gICAgICAgIGxldCBwcm9maWxlOiBVbml0ZUNvbmZpZ3VyYXRpb247XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMucHJvZmlsZXMuZmluZCgocCkgPT4gcC5pZCA9PT0gdGhpcy5wcm9maWxlKTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcHJvZmlsZSA9IGl0ZW0uY29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldChcInVuaXRlQ29uZmlndXJhdGlvblwiLCB1bml0ZUNvbmZpZ3VyYXRpb24pO1xuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0KFwicHJvZmlsZVwiLCB0aGlzLnByb2ZpbGUpO1xuXG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSgpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmRMaW5lID0gYHVuaXRlIGNvbmZpZ3VyZWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCAtLXBhY2thZ2VOYW1lPSR7dGhpcy5wYWNrYWdlTmFtZX1gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgLS10aXRsZT1cIiR7dGhpcy50aXRsZX1cImAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvZmlsZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiIDogYCAtLXByb2ZpbGU9JHt0aGlzLnByb2ZpbGV9YCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUFyZyhwcm9maWxlLCB1bml0ZUNvbmZpZ3VyYXRpb24sIFwibGljZW5zZVwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQXJnKHByb2ZpbGUsIHVuaXRlQ29uZmlndXJhdGlvbiwgXCJhcHBsaWNhdGlvbkZyYW1ld29ya1wiLCBcImFwcEZyYW1ld29ya1wiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQXJnKHByb2ZpbGUsIHVuaXRlQ29uZmlndXJhdGlvbiwgXCJtb2R1bGVUeXBlXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBcmcocHJvZmlsZSwgdW5pdGVDb25maWd1cmF0aW9uLCBcImJ1bmRsZXJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUFyZyhwcm9maWxlLCB1bml0ZUNvbmZpZ3VyYXRpb24sIFwic291cmNlTGFuZ3VhZ2VcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUFyZyhwcm9maWxlLCB1bml0ZUNvbmZpZ3VyYXRpb24sIFwibGludGVyXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBcmcocHJvZmlsZSwgdW5pdGVDb25maWd1cmF0aW9uLCBcInVuaXRUZXN0UnVubmVyXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBcmcocHJvZmlsZSwgdW5pdGVDb25maWd1cmF0aW9uLCBcInVuaXRUZXN0RnJhbWV3b3JrXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBcmcocHJvZmlsZSwgdW5pdGVDb25maWd1cmF0aW9uLCBcInVuaXRUZXN0RW5naW5lXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVBcmcocHJvZmlsZSwgdW5pdGVDb25maWd1cmF0aW9uLCBcImUyZVRlc3RSdW5uZXJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUFyZyhwcm9maWxlLCB1bml0ZUNvbmZpZ3VyYXRpb24sIFwiZTJlVGVzdEZyYW1ld29ya1wiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQXJnKHByb2ZpbGUsIHVuaXRlQ29uZmlndXJhdGlvbiwgXCJjc3NQcmVcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUFyZyhwcm9maWxlLCB1bml0ZUNvbmZpZ3VyYXRpb24sIFwiY3NzUG9zdFwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQXJnKHByb2ZpbGUsIHVuaXRlQ29uZmlndXJhdGlvbiwgXCJwYWNrYWdlTWFuYWdlclwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5vdXRwdXREaXJlY3RvcnkgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0RGlyZWN0b3J5ID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXREaXJlY3RvcnkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiIDogYCAtLW91dHB1dERpcmVjdG9yeT0ke3RoaXMub3V0cHV0RGlyZWN0b3J5fWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZExpbmUgPSBcIlRoZSBwYXJhbWV0ZXIgY2hvaWNlcyBhcmUgbm90IGFsbCB2YWxpZC5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2VuZXJhdGVBcmcocHJvZmlsZTogVW5pdGVDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICB1bml0ZUNvbmZpZ3VyYXRpb246IFVuaXRlQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBrZXlvZiBVbml0ZUNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgIGFyZ05hbWU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAocHJvZmlsZSAmJiBwcm9maWxlW3Byb3BlcnR5TmFtZV0gPT09IHVuaXRlQ29uZmlndXJhdGlvbltwcm9wZXJ0eU5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSBlbHNlIGlmICh1bml0ZUNvbmZpZ3VyYXRpb25bcHJvcGVydHlOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgIC0tJHthcmdOYW1lID8gYXJnTmFtZSA6IHByb3BlcnR5TmFtZX09JHt1bml0ZUNvbmZpZ3VyYXRpb25bcHJvcGVydHlOYW1lXX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBMb2NhbFN0b3JhZ2UucmVtb3ZlKFwidW5pdGVDb25maWd1cmF0aW9uXCIpO1xuICAgICAgICBMb2NhbFN0b3JhZ2UucmVtb3ZlKFwicHJvZmlsZVwiKTtcblxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kTGluZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY29udHJvbGxlci5yZXNldCgpLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29weVRvQ2xpcGJvYXJkKCk6IHZvaWQge1xuICAgICAgICBDbGlwYm9hcmQuY29weVRvKHRoaXMuY29tbWFuZExpbmUpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
