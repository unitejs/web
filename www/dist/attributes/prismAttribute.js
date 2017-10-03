var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-pal", "aurelia-templating", "prismjs"], function (require, exports, aurelia_dependency_injection_1, aurelia_pal_1, aurelia_templating_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PrismAttribute = /** @class */ (function () {
        function PrismAttribute(element) {
            this._element = element;
        }
        PrismAttribute.prototype.valueChanged = function (newValue, oldValue) {
            var _this = this;
            setTimeout(function () {
                _this._element.className = "language-" + newValue;
                Prism.highlightElement(_this._element, false);
            }, 0);
        };
        PrismAttribute = __decorate([
            aurelia_templating_1.customAttribute("au-prism"),
            aurelia_dependency_injection_1.inject(aurelia_pal_1.DOM.Element)
        ], PrismAttribute);
        return PrismAttribute;
    }());
    exports.PrismAttribute = PrismAttribute;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2F0dHJpYnV0ZXMvcHJpc21BdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBWUE7UUFHSSx3QkFBWSxPQUFvQjtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDO1FBRU0scUNBQVksR0FBbkIsVUFBb0IsUUFBZ0IsRUFBRSxRQUFnQjtZQUF0RCxpQkFLQztZQUpHLFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDO2dCQUNqRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVixDQUFDO1FBWlEsY0FBYztZQUYxQixvQ0FBZSxDQUFDLFVBQVUsQ0FBQztZQUMzQixxQ0FBTSxDQUFDLGlCQUFHLENBQUMsT0FBTyxDQUFDO1dBQ1AsY0FBYyxDQWExQjtRQUFELHFCQUFDO0tBYkQsQUFhQyxJQUFBO0lBYlksd0NBQWMiLCJmaWxlIjoiYXR0cmlidXRlcy9wcmlzbUF0dHJpYnV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJpc20gQXR0aWJ1dGUgY2xhc3MuXG4gKi9cbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XG5pbXBvcnQgeyBET00gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcbmltcG9ydCB7IGN1c3RvbUF0dHJpYnV0ZSB9IGZyb20gXCJhdXJlbGlhLXRlbXBsYXRpbmdcIjtcbmltcG9ydCBcInByaXNtanNcIjtcblxuZGVjbGFyZSB2YXIgUHJpc206IGFueTtcblxuQGN1c3RvbUF0dHJpYnV0ZShcImF1LXByaXNtXCIpXG5AaW5qZWN0KERPTS5FbGVtZW50KVxuZXhwb3J0IGNsYXNzIFByaXNtQXR0cmlidXRlIHtcbiAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyB2YWx1ZUNoYW5nZWQobmV3VmFsdWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NOYW1lID0gXCJsYW5ndWFnZS1cIiArIG5ld1ZhbHVlO1xuICAgICAgICAgICAgUHJpc20uaGlnaGxpZ2h0RWxlbWVudCh0aGlzLl9lbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
