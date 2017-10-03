var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-http-client", "aurelia-pal", "aurelia-templating"], function (require, exports, aurelia_dependency_injection_1, aurelia_http_client_1, aurelia_pal_1, aurelia_templating_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AureliaSvg = /** @class */ (function () {
        function AureliaSvg(element) {
            this._element = element;
        }
        AureliaSvg.prototype.srcChanged = function () {
            var _this = this;
            if (this.src && this.src.length > 0) {
                var httpClient = new aurelia_http_client_1.HttpClient();
                httpClient.get(this.src)
                    .then(function (response) {
                    if (response.statusCode === 200) {
                        var svg = response.content;
                        if (_this.width) {
                            svg = svg.replace(/width=\"(.*?)\"/, "width=\"" + _this.width + "\"");
                        }
                        if (_this.height) {
                            svg = svg.replace(/height=\"(.*?)\"/, "height=\"" + _this.height + "\"");
                        }
                        _this._element.innerHTML = response.content;
                    }
                })
                    .catch(function (err) {
                    // Just don't display the version its not critical
                });
            }
        };
        __decorate([
            aurelia_templating_1.bindable
        ], AureliaSvg.prototype, "width", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], AureliaSvg.prototype, "height", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], AureliaSvg.prototype, "src", void 0);
        AureliaSvg = __decorate([
            aurelia_templating_1.customElement("au-svg"),
            aurelia_dependency_injection_1.inject(aurelia_pal_1.DOM.Element)
        ], AureliaSvg);
        return AureliaSvg;
    }());
    exports.AureliaSvg = AureliaSvg;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2VsZW1lbnRzL2F1cmVsaWFTdmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBVUE7UUFVSSxvQkFBWSxPQUFvQjtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDO1FBRU0sK0JBQVUsR0FBakI7WUFBQSxpQkFvQkM7WUFuQkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxJQUFNLFVBQVUsR0FBRyxJQUFJLGdDQUFVLEVBQUUsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3FCQUNuQixJQUFJLENBQUMsVUFBQyxRQUFRO29CQUNYLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQzt3QkFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ2IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsYUFBVyxLQUFJLENBQUMsS0FBSyxPQUFJLENBQUMsQ0FBQzt3QkFDcEUsQ0FBQzt3QkFDRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDZCxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxjQUFZLEtBQUksQ0FBQyxNQUFNLE9BQUksQ0FBQyxDQUFDO3dCQUN2RSxDQUFDO3dCQUNELEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0JBQy9DLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7b0JBQ1Asa0RBQWtEO2dCQUN0RCxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7UUFDTCxDQUFDO1FBaENEO1lBREMsNkJBQVE7aURBQ1k7UUFFckI7WUFEQyw2QkFBUTtrREFDYTtRQUV0QjtZQURDLDZCQUFROytDQUNVO1FBTlYsVUFBVTtZQUZ0QixrQ0FBYSxDQUFDLFFBQVEsQ0FBQztZQUN2QixxQ0FBTSxDQUFDLGlCQUFHLENBQUMsT0FBTyxDQUFDO1dBQ1AsVUFBVSxDQW1DdEI7UUFBRCxpQkFBQztLQW5DRCxBQW1DQyxJQUFBO0lBbkNZLGdDQUFVIiwiZmlsZSI6ImVsZW1lbnRzL2F1cmVsaWFTdmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEF1cmVsaWEgU1ZHIGNsYXNzLlxuICovXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJhdXJlbGlhLWh0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBET00gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcbmltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50IH0gZnJvbSBcImF1cmVsaWEtdGVtcGxhdGluZ1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImF1LXN2Z1wiKVxuQGluamVjdChET00uRWxlbWVudClcbmV4cG9ydCBjbGFzcyBBdXJlbGlhU3ZnIHtcbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgd2lkdGg6IHN0cmluZztcbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgaGVpZ2h0OiBzdHJpbmc7XG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIHNyYzogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3JjQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3JjICYmIHRoaXMuc3JjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuICAgICAgICAgICAgaHR0cENsaWVudC5nZXQodGhpcy5zcmMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdmcgPSByZXNwb25zZS5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmcgPSBzdmcucmVwbGFjZSgvd2lkdGg9XFxcIiguKj8pXFxcIi8sIGB3aWR0aD1cXFwiJHt0aGlzLndpZHRofVxcXCJgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2ZyA9IHN2Zy5yZXBsYWNlKC9oZWlnaHQ9XFxcIiguKj8pXFxcIi8sIGBoZWlnaHQ9XFxcIiR7dGhpcy5oZWlnaHR9XFxcImApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5pbm5lckhUTUwgPSByZXNwb25zZS5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBKdXN0IGRvbid0IGRpc3BsYXkgdGhlIHZlcnNpb24gaXRzIG5vdCBjcml0aWNhbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
