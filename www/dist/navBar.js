var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating"], function (require, exports, aurelia_templating_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBar = /** @class */ (function () {
        function NavBar() {
        }
        NavBar.prototype.attached = function () {
            this.version = "Engine v1.2.2";
            // registry.npmjs.org CORS fails
            // const httpClient = new HttpClient();
            // httpClient.get("https://registry.npmjs.org/unitejs-cli/")
            //     .then((response) => {
            //         if (response.statusCode === 200) {
            //             if (response.content &&
            //                 response.content["dist-tags"] &&
            //                 response.content["dist-tags"].latest) {
            //                 this.version = "v" + response.content["dist-tags"].latest;
            //             }
            //         }
            //     })
            //     .catch((err) => {
            //         // Just don't display the version its not critical
            //     });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL25hdkJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFPQTtRQUFBO1FBd0JBLENBQUM7UUFsQlUseUJBQVEsR0FBZjtZQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1lBQy9CLGdDQUFnQztZQUNoQyx1Q0FBdUM7WUFDdkMsNERBQTREO1lBQzVELDRCQUE0QjtZQUM1Qiw2Q0FBNkM7WUFDN0Msc0NBQXNDO1lBQ3RDLG1EQUFtRDtZQUNuRCwwREFBMEQ7WUFDMUQsNkVBQTZFO1lBQzdFLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osU0FBUztZQUNULHdCQUF3QjtZQUN4Qiw2REFBNkQ7WUFDN0QsVUFBVTtRQUNkLENBQUM7UUFyQkQ7WUFEQyw2QkFBUTs4Q0FDYTtRQUZiLE1BQU07WUFEbEIsa0NBQWEsQ0FBQyxTQUFTLENBQUM7V0FDWixNQUFNLENBd0JsQjtRQUFELGFBQUM7S0F4QkQsQUF3QkMsSUFBQTtJQXhCWSx3QkFBTSIsImZpbGUiOiJuYXZCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE5hdkJhciBjbGFzcy5cbiAqL1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XG5pbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJhdXJlbGlhLXRlbXBsYXRpbmdcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJuYXYtYmFyXCIpXG5leHBvcnQgY2xhc3MgTmF2QmFyIHtcbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XG5cbiAgICBwdWJsaWMgdmVyc2lvbjogc3RyaW5nO1xuXG4gICAgcHVibGljIGF0dGFjaGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIkVuZ2luZSB2MS4yLjJcIjtcbiAgICAgICAgLy8gcmVnaXN0cnkubnBtanMub3JnIENPUlMgZmFpbHNcbiAgICAgICAgLy8gY29uc3QgaHR0cENsaWVudCA9IG5ldyBIdHRwQ2xpZW50KCk7XG4gICAgICAgIC8vIGh0dHBDbGllbnQuZ2V0KFwiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvdW5pdGVqcy1jbGkvXCIpXG4gICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50ICYmXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXNwb25zZS5jb250ZW50W1wiZGlzdC10YWdzXCJdICYmXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXNwb25zZS5jb250ZW50W1wiZGlzdC10YWdzXCJdLmxhdGVzdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gXCJ2XCIgKyByZXNwb25zZS5jb250ZW50W1wiZGlzdC10YWdzXCJdLmxhdGVzdDtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyAgICAgICAgIC8vIEp1c3QgZG9uJ3QgZGlzcGxheSB0aGUgdmVyc2lvbiBpdHMgbm90IGNyaXRpY2FsXG4gICAgICAgIC8vICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
