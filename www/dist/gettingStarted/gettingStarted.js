var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-http-client", "aurelia-templating", "aurelia-validation", "../validation/bootstrapFormRenderer"], function (require, exports, aurelia_dependency_injection_1, aurelia_http_client_1, aurelia_templating_1, aurelia_validation_1, bootstrapFormRenderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GettingStarted = /** @class */ (function () {
        function GettingStarted(controller) {
            this.controller = controller;
            this.controller.addRenderer(new bootstrapFormRenderer_1.BootstrapFormRenderer());
            aurelia_validation_1.ValidationRules.customRule("languageLintRule", function (value, obj) {
                return obj.linter !== undefined && obj.sourceLanguage !== undefined &&
                    (obj.linter === "None" ||
                        (obj.linter === "ESLint" && obj.sourceLanguage === "JavaScript") ||
                        (obj.linter === "TSLint" && obj.sourceLanguage === "TypeScript"));
            }, "the combination of sourceLanguage and linter is not valid");
            aurelia_validation_1.ValidationRules
                .ensure(function (m) { return m.packageName; }).displayName("Package Name").required().maxLength(214)
                .ensure(function (m) { return m.title; }).displayName("Title").required()
                .ensure(function (m) { return m.license; }).displayName("License").required()
                .ensure(function (m) { return m.applicationFramework; }).displayName("Application Framework").required()
                .ensure(function (m) { return m.sourceLanguage; }).displayName("Source Language").required()
                .satisfiesRule("languageLintRule")
                .ensure(function (m) { return m.moduleType; }).displayName("Module Type").required()
                .ensure(function (m) { return m.bundler; }).displayName("Bundler").required()
                .ensure(function (m) { return m.linter; }).displayName("Linter").required()
                .satisfiesRule("languageLintRule")
                .ensure(function (m) { return m.unitTestRunner; }).displayName("Unit Test Runner").required()
                .ensure(function (m) { return m.unitTestFramework; }).displayName("Unit Test Framework").required()
                .ensure(function (m) { return m.unitTestEngine; }).displayName("Unit Test Engine").required()
                .ensure(function (m) { return m.e2eTestRunner; }).displayName("E2E Test Runner").required()
                .ensure(function (m) { return m.e2eTestFramework; }).displayName("E2E Test Framework").required()
                .ensure(function (m) { return m.cssPre; }).displayName("CSS Pre-Processor").required()
                .ensure(function (m) { return m.cssPost; }).displayName("CSS Post-Processor").required()
                .ensure(function (m) { return m.packageManager; }).displayName("Package Manager").required()
                .on(this);
        }
        GettingStarted.prototype.attached = function () {
            var _this = this;
            var httpClient = new aurelia_http_client_1.HttpClient();
            httpClient.get("./assets/spdx-full.json")
                .then(function (response) {
                if (response.statusCode === 200) {
                    var licenses_1 = response.content;
                    _this.licenses = [];
                    Object.keys(licenses_1).forEach(function (licenseKey) {
                        _this.licenses.push({ id: licenseKey, license: licenses_1[licenseKey] });
                    });
                    _this.defaultValues();
                    _this._initialised = true;
                }
                else {
                    _this.status = "Unable to load the SPDX licenses so can not continue.";
                }
            })
                .catch(function (err) {
                _this.status = "Unable to load the SPDX licenses so can not continue.";
            });
        };
        GettingStarted.prototype.generate = function () {
            this.controller.validate();
        };
        GettingStarted.prototype.clear = function () {
            this._initialised = false;
            this.defaultValues();
            this.controller.reset();
            this._initialised = true;
        };
        GettingStarted.prototype.defaultValues = function () {
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
        };
        GettingStarted.prototype.sourceLanguageChanged = function () {
            if (this._initialised) {
                this.controller.validate({ object: this, propertyName: "linter" });
            }
        };
        GettingStarted.prototype.linterChanged = function () {
            if (this._initialised) {
                this.controller.validate({ object: this, propertyName: "sourceLanguage" });
            }
        };
        __decorate([
            aurelia_templating_1.bindable
        ], GettingStarted.prototype, "applicationFramework", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], GettingStarted.prototype, "sourceLanguage", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], GettingStarted.prototype, "linter", void 0);
        GettingStarted = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dependency_injection_1.NewInstance.of(aurelia_validation_1.ValidationController))
        ], GettingStarted);
        return GettingStarted;
    }());
    exports.GettingStarted = GettingStarted;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2dldHRpbmdTdGFydGVkL2dldHRpbmdTdGFydGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQWFBO1FBeURJLHdCQUFZLFVBQWdDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBRTdCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksNkNBQXFCLEVBQUUsQ0FBQyxDQUFDO1lBRXpELG9DQUFlLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUc7Z0JBQ3RELE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxHQUFHLENBQUMsY0FBYyxLQUFLLFNBQVM7b0JBQy9ELENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxNQUFNO3dCQUN0QixDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDO3dCQUNoRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMxRSxDQUFDLEVBQUUsMkRBQTJELENBQUMsQ0FBQztZQUVoRSxvQ0FBZTtpQkFDVixNQUFNLENBQUMsVUFBQyxDQUFpQixJQUFLLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBYixDQUFhLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztpQkFDbEcsTUFBTSxDQUFDLFVBQUMsQ0FBaUIsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRTtpQkFDdEUsTUFBTSxDQUFDLFVBQUMsQ0FBaUIsSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxDQUFDLENBQUMs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eUNBQW9CLENBQUMsQ0FBQztXQUNoQyxjQUFjLENBMksxQjtRQUFELHFCQUFDO0tBM0tELEFBMktDLElBQUE7SUEzS1ksd0NBQWMiLCJmaWxlIjoiZ2V0dGluZ1N0YXJ0ZWQvZ2V0dGluZ1N0YXJ0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdldHRpbmdTdGFydGVkIGNsYXNzLlxuICovXG5pbXBvcnQgeyBpbmplY3QsIE5ld0luc3RhbmNlIH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiYXVyZWxpYS1odHRwLWNsaWVudFwiO1xuaW1wb3J0IHsgYmluZGFibGUgfSBmcm9tIFwiYXVyZWxpYS10ZW1wbGF0aW5nXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVRyaWdnZXIsIFZhbGlkYXRpb25Db250cm9sbGVyLCBWYWxpZGF0aW9uUnVsZXMgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi9kb21IZWxwZXJzL3N0eWxlXCI7XG5pbXBvcnQgeyBJU3BkeCB9IGZyb20gXCIuLi9tb2RlbHMvSVNwZHhcIjtcbmltcG9ydCB7IElTcGR4TGljZW5zZSB9IGZyb20gXCIuLi9tb2RlbHMvSVNwZHhMaWNlbnNlXCI7XG5pbXBvcnQgeyBCb290c3RyYXBGb3JtUmVuZGVyZXIgfSBmcm9tIFwiLi4vdmFsaWRhdGlvbi9ib290c3RyYXBGb3JtUmVuZGVyZXJcIjtcblxuQGluamVjdChOZXdJbnN0YW5jZS5vZihWYWxpZGF0aW9uQ29udHJvbGxlcikpXG5leHBvcnQgY2xhc3MgR2V0dGluZ1N0YXJ0ZWQge1xuICAgIHB1YmxpYyBjb250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcblxuICAgIHB1YmxpYyBwYWNrYWdlTmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gICAgcHVibGljIGxpY2Vuc2U6IHN0cmluZztcbiAgICBwdWJsaWMgbGljZW5zZXM6IHsgaWQ6IHN0cmluZzsgbGljZW5zZTogSVNwZHhMaWNlbnNlIH1bXTtcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyBhcHBsaWNhdGlvbkZyYW1ld29yazogc3RyaW5nO1xuICAgIHB1YmxpYyBhcHBsaWNhdGlvbkZyYW1ld29ya3M6IHN0cmluZ1tdO1xuXG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIHNvdXJjZUxhbmd1YWdlOiBzdHJpbmc7XG4gICAgcHVibGljIHNvdXJjZUxhbmd1YWdlczogc3RyaW5nW107XG5cbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgbGludGVyOiBzdHJpbmc7XG4gICAgcHVibGljIGxpbnRlcnM6IHN0cmluZ1tdO1xuXG4gICAgcHVibGljIG1vZHVsZVR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgbW9kdWxlVHlwZXM6IHN0cmluZ1tdO1xuXG4gICAgcHVibGljIGJ1bmRsZXI6IHN0cmluZztcbiAgICBwdWJsaWMgYnVuZGxlcnM6IHN0cmluZ1tdO1xuXG4gICAgcHVibGljIHVuaXRUZXN0UnVubmVyOiBzdHJpbmc7XG4gICAgcHVibGljIHVuaXRUZXN0UnVubmVyczogc3RyaW5nW107XG5cbiAgICBwdWJsaWMgdW5pdFRlc3RGcmFtZXdvcms6IHN0cmluZztcbiAgICBwdWJsaWMgdW5pdFRlc3RGcmFtZXdvcmtzOiBzdHJpbmdbXTtcblxuICAgIHB1YmxpYyB1bml0VGVzdEVuZ2luZTogc3RyaW5nO1xuICAgIHB1YmxpYyB1bml0VGVzdEVuZ2luZXM6IHN0cmluZ1tdO1xuXG4gICAgcHVibGljIGUyZVRlc3RSdW5uZXI6IHN0cmluZztcbiAgICBwdWJsaWMgZTJlVGVzdFJ1bm5lcnM6IHN0cmluZ1tdO1xuXG4gICAgcHVibGljIGUyZVRlc3RGcmFtZXdvcms6IHN0cmluZztcbiAgICBwdWJsaWMgZTJlVGVzdEZyYW1ld29ya3M6IHN0cmluZ1tdO1xuXG4gICAgcHVibGljIGNzc1ByZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjc3NQcmVzOiBzdHJpbmdbXTtcblxuICAgIHB1YmxpYyBjc3NQb3N0OiBzdHJpbmc7XG4gICAgcHVibGljIGNzc1Bvc3RzOiBzdHJpbmdbXTtcblxuICAgIHB1YmxpYyBwYWNrYWdlTWFuYWdlcjogc3RyaW5nO1xuICAgIHB1YmxpYyBwYWNrYWdlTWFuYWdlcnM6IHN0cmluZ1tdO1xuXG4gICAgcHVibGljIHZhbGlkYXRpb25TdGF0dXM6IHN0cmluZztcblxuICAgIHB1YmxpYyBzdGF0dXM6IHN0cmluZztcblxuICAgIHByaXZhdGUgX2luaXRpYWxpc2VkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcblxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuYWRkUmVuZGVyZXIobmV3IEJvb3RzdHJhcEZvcm1SZW5kZXJlcigpKTtcblxuICAgICAgICBWYWxpZGF0aW9uUnVsZXMuY3VzdG9tUnVsZShcImxhbmd1YWdlTGludFJ1bGVcIiwgKHZhbHVlLCBvYmopID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmoubGludGVyICE9PSB1bmRlZmluZWQgJiYgb2JqLnNvdXJjZUxhbmd1YWdlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAob2JqLmxpbnRlciA9PT0gXCJOb25lXCIgfHxcbiAgICAgICAgICAgICAgICAob2JqLmxpbnRlciA9PT0gXCJFU0xpbnRcIiAmJiBvYmouc291cmNlTGFuZ3VhZ2UgPT09IFwiSmF2YVNjcmlwdFwiKSB8fFxuICAgICAgICAgICAgICAgIChvYmoubGludGVyID09PSBcIlRTTGludFwiICYmIG9iai5zb3VyY2VMYW5ndWFnZSA9PT0gXCJUeXBlU2NyaXB0XCIpKTtcbiAgICAgICAgfSwgYHRoZSBjb21iaW5hdGlvbiBvZiBzb3VyY2VMYW5ndWFnZSBhbmQgbGludGVyIGlzIG5vdCB2YWxpZGApO1xuXG4gICAgICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgICAgICAgLmVuc3VyZSgobTogR2V0dGluZ1N0YXJ0ZWQpID0+IG0ucGFja2FnZU5hbWUpLmRpc3BsYXlOYW1lKFwiUGFja2FnZSBOYW1lXCIpLnJlcXVpcmVkKCkubWF4TGVuZ3RoKDIxNClcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdldHRpbmdTdGFydGVkKSA9PiBtLnRpdGxlKS5kaXNwbGF5TmFtZShcIlRpdGxlXCIpLnJlcXVpcmVkKClcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdldHRpbmdTdGFydGVkKSA9PiBtLmxpY2Vuc2UpLmRpc3BsYXlOYW1lKFwiTGljZW5zZVwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZXR0aW5nU3RhcnRlZCkgPT4gbS5hcHBsaWNhdGlvbkZyYW1ld29yaykuZGlzcGxheU5hbWUoXCJBcHBsaWNhdGlvbiBGcmFtZXdvcmtcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2V0dGluZ1N0YXJ0ZWQpID0+IG0uc291cmNlTGFuZ3VhZ2UpLmRpc3BsYXlOYW1lKFwiU291cmNlIExhbmd1YWdlXCIpLnJlcXVpcmVkKClcbiAgICAgICAgICAgIC5zYXRpc2ZpZXNSdWxlKFwibGFuZ3VhZ2VMaW50UnVsZVwiKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2V0dGluZ1N0YXJ0ZWQpID0+IG0ubW9kdWxlVHlwZSkuZGlzcGxheU5hbWUoXCJNb2R1bGUgVHlwZVwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZXR0aW5nU3RhcnRlZCkgPT4gbS5idW5kbGVyKS5kaXNwbGF5TmFtZShcIkJ1bmRsZXJcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2V0dGluZ1N0YXJ0ZWQpID0+IG0ubGludGVyKS5kaXNwbGF5TmFtZShcIkxpbnRlclwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAuc2F0aXNmaWVzUnVsZShcImxhbmd1YWdlTGludFJ1bGVcIilcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdldHRpbmdTdGFydGVkKSA9PiBtLnVuaXRUZXN0UnVubmVyKS5kaXNwbGF5TmFtZShcIlVuaXQgVGVzdCBSdW5uZXJcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLmVuc3VyZSgobTogR2V0dGluZ1N0YXJ0ZWQpID0+IG0udW5pdFRlc3RGcmFtZXdvcmspLmRpc3BsYXlOYW1lKFwiVW5pdCBUZXN0IEZyYW1ld29ya1wiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZXR0aW5nU3RhcnRlZCkgPT4gbS51bml0VGVzdEVuZ2luZSkuZGlzcGxheU5hbWUoXCJVbml0IFRlc3QgRW5naW5lXCIpLnJlcXVpcmVkKClcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdldHRpbmdTdGFydGVkKSA9PiBtLmUyZVRlc3RSdW5uZXIpLmRpc3BsYXlOYW1lKFwiRTJFIFRlc3QgUnVubmVyXCIpLnJlcXVpcmVkKClcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdldHRpbmdTdGFydGVkKSA9PiBtLmUyZVRlc3RGcmFtZXdvcmspLmRpc3BsYXlOYW1lKFwiRTJFIFRlc3QgRnJhbWV3b3JrXCIpLnJlcXVpcmVkKClcbiAgICAgICAgICAgIC5lbnN1cmUoKG06IEdldHRpbmdTdGFydGVkKSA9PiBtLmNzc1ByZSkuZGlzcGxheU5hbWUoXCJDU1MgUHJlLVByb2Nlc3NvclwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZXR0aW5nU3RhcnRlZCkgPT4gbS5jc3NQb3N0KS5kaXNwbGF5TmFtZShcIkNTUyBQb3N0LVByb2Nlc3NvclwiKS5yZXF1aXJlZCgpXG4gICAgICAgICAgICAuZW5zdXJlKChtOiBHZXR0aW5nU3RhcnRlZCkgPT4gbS5wYWNrYWdlTWFuYWdlcikuZGlzcGxheU5hbWUoXCJQYWNrYWdlIE1hbmFnZXJcIikucmVxdWlyZWQoKVxuICAgICAgICAgICAgLm9uKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhdHRhY2hlZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaHR0cENsaWVudCA9IG5ldyBIdHRwQ2xpZW50KCk7XG4gICAgICAgIGh0dHBDbGllbnQuZ2V0KFwiLi9hc3NldHMvc3BkeC1mdWxsLmpzb25cIilcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGljZW5zZXM6IElTcGR4ID0gcmVzcG9uc2UuY29udGVudDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpY2Vuc2VzID0gW107XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpY2Vuc2VzKS5mb3JFYWNoKChsaWNlbnNlS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpY2Vuc2VzLnB1c2goeyBpZDogbGljZW5zZUtleSwgbGljZW5zZTogbGljZW5zZXNbbGljZW5zZUtleV0gfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBcIlVuYWJsZSB0byBsb2FkIHRoZSBTUERYIGxpY2Vuc2VzIHNvIGNhbiBub3QgY29udGludWUuXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBcIlVuYWJsZSB0byBsb2FkIHRoZSBTUERYIGxpY2Vuc2VzIHNvIGNhbiBub3QgY29udGludWUuXCI7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2VuZXJhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faW5pdGlhbGlzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWVzKCk7XG5cbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVmYXVsdFZhbHVlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbkZyYW1ld29ya3MgPSBbXCJBbmd1bGFyXCIsIFwiQXVyZWxpYVwiLCBcIlBsYWluQXBwXCIsIFwiUmVhY3RcIl07XG4gICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2VzID0gW1wiSmF2YVNjcmlwdFwiLCBcIlR5cGVTY3JpcHRcIl07XG4gICAgICAgIHRoaXMubW9kdWxlVHlwZXMgPSBbXCJBTURcIiwgXCJDb21tb25KU1wiLCBcIlN5c3RlbUpTXCJdO1xuICAgICAgICB0aGlzLmJ1bmRsZXJzID0gW1wiQnJvd3NlcmlmeVwiLCBcIlJlcXVpcmVKU1wiLCBcIlN5c3RlbUpTQnVpbGRlclwiLCBcIldlYnBhY2tcIl07XG4gICAgICAgIHRoaXMubGludGVycyA9IFtcIkVTTGludFwiLCBcIlRTTGludFwiLCBcIk5vbmVcIl07XG4gICAgICAgIHRoaXMudW5pdFRlc3RSdW5uZXJzID0gW1wiS2FybWFcIiwgXCJOb25lXCJdO1xuICAgICAgICB0aGlzLnVuaXRUZXN0RnJhbWV3b3JrcyA9IFtcIkphc21pbmVcIiwgXCJNb2NoYUNoYWlcIl07XG4gICAgICAgIHRoaXMudW5pdFRlc3RFbmdpbmVzID0gW1wiUGhhbnRvbUpTXCIsIFwiQ2hyb21lSGVhZGxlc3NzXCJdO1xuICAgICAgICB0aGlzLmUyZVRlc3RSdW5uZXJzID0gW1wiUHJvdHJhY3RvclwiLCBcIldlYmRyaXZlcklPXCIsIFwiTm9uZVwiXTtcbiAgICAgICAgdGhpcy5lMmVUZXN0RnJhbWV3b3JrcyA9IFtcIkphc21pbmVcIiwgXCJNb2NoYUNoYWlcIl07XG4gICAgICAgIHRoaXMuY3NzUHJlcyA9IFtcIkNzc1wiLCBcIkxlc3NcIiwgXCJTYXNzXCIsIFwiU3R5bHVzXCJdO1xuICAgICAgICB0aGlzLmNzc1Bvc3RzID0gW1wiTm9uZVwiLCBcIlBvc3RDc3NcIl07XG4gICAgICAgIHRoaXMucGFja2FnZU1hbmFnZXJzID0gW1wiTnBtXCIsIFwiWWFyblwiXTtcblxuICAgICAgICB0aGlzLnBhY2thZ2VOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmxpY2Vuc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubGljZW5zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbkZyYW1ld29yayA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5tb2R1bGVUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmJ1bmRsZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubGludGVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVuaXRUZXN0UnVubmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVuaXRUZXN0RnJhbWV3b3JrID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVuaXRUZXN0RW5naW5lID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmUyZVRlc3RSdW5uZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZTJlVGVzdEZyYW1ld29yayA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jc3NQcmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY3NzUG9zdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wYWNrYWdlTWFuYWdlciA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc291cmNlTGFuZ3VhZ2VDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5faW5pdGlhbGlzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcywgcHJvcGVydHlOYW1lOiBcImxpbnRlclwiIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGxpbnRlckNoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXNlZCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLCBwcm9wZXJ0eU5hbWU6IFwic291cmNlTGFuZ3VhZ2VcIiB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
