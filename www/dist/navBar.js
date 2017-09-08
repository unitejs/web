var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-http-client", "aurelia-templating"], function (require, exports, aurelia_http_client_1, aurelia_templating_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBar = /** @class */ (function () {
        function NavBar() {
        }
        NavBar.prototype.attached = function () {
            var _this = this;
            var httpClient = new aurelia_http_client_1.HttpClient();
            httpClient.get("https://registry.npmjs.org/unitejs-cli/")
                .then(function (response) {
                if (response.statusCode === 200) {
                    if (response.content &&
                        response.content["dist-tags"] &&
                        response.content["dist-tags"].latest) {
                        _this.version = "v" + response.content["dist-tags"].latest;
                    }
                }
            })
                .catch(function (err) {
                // Just don't display the version its not critical
            });
        };
        __decorate([
            aurelia_templating_1.bindable
        ], NavBar.prototype, "router", void 0);
        NavBar = __decorate([
            aurelia_templating_1.customElement("nav-bar")
        ], NavBar);
        return NavBar;
    }());
    exports.NavBar = NavBar;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL25hdkJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFRQTtRQUFBO1FBc0JBLENBQUM7UUFoQlUseUJBQVEsR0FBZjtZQUFBLGlCQWVDO1lBZEcsSUFBTSxVQUFVLEdBQUcsSUFBSSxnQ0FBVSxFQUFFLENBQUM7WUFDcEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQztpQkFDcEQsSUFBSSxDQUFDLFVBQUMsUUFBUTtnQkFDWCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPO3dCQUNoQixRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzt3QkFDN0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDOUQsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ1Asa0RBQWtEO1lBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQW5CRDtZQURDLDZCQUFROzhDQUNhO1FBRmIsTUFBTTtZQURsQixrQ0FBYSxDQUFDLFNBQVMsQ0FBQztXQUNaLE1BQU0sQ0FzQmxCO1FBQUQsYUFBQztLQXRCRCxBQXNCQyxJQUFBO0lBdEJZLHdCQUFNIiwiZmlsZSI6Im5hdkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTmF2QmFyIGNsYXNzLlxuICovXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcImF1cmVsaWEtaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xuaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwiYXVyZWxpYS10ZW1wbGF0aW5nXCI7XG5cbkBjdXN0b21FbGVtZW50KFwibmF2LWJhclwiKVxuZXhwb3J0IGNsYXNzIE5hdkJhciB7XG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyO1xuXG4gICAgcHVibGljIHZlcnNpb246IHN0cmluZztcblxuICAgIHB1YmxpYyBhdHRhY2hlZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaHR0cENsaWVudCA9IG5ldyBIdHRwQ2xpZW50KCk7XG4gICAgICAgIGh0dHBDbGllbnQuZ2V0KFwiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvdW5pdGVqcy1jbGkvXCIpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5jb250ZW50W1wiZGlzdC10YWdzXCJdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5jb250ZW50W1wiZGlzdC10YWdzXCJdLmxhdGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gXCJ2XCIgKyByZXNwb25zZS5jb250ZW50W1wiZGlzdC10YWdzXCJdLmxhdGVzdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEp1c3QgZG9uJ3QgZGlzcGxheSB0aGUgdmVyc2lvbiBpdHMgbm90IGNyaXRpY2FsXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
