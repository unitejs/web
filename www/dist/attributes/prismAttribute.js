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
            this._element.className = "language-" + newValue;
            Prism.highlightElement(this._element, false);
        };
        PrismAttribute = __decorate([
            aurelia_templating_1.customAttribute("au-prism"),
            aurelia_dependency_injection_1.inject(aurelia_pal_1.DOM.Element)
        ], PrismAttribute);
        return PrismAttribute;
    }());
    exports.PrismAttribute = PrismAttribute;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2F0dHJpYnV0ZXMvcHJpc21BdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBWUE7UUFHSSx3QkFBWSxPQUFvQjtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDO1FBRU0scUNBQVksR0FBbkIsVUFBb0IsUUFBZ0IsRUFBRSxRQUFnQjtZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQ2pELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFWUSxjQUFjO1lBRjFCLG9DQUFlLENBQUMsVUFBVSxDQUFDO1lBQzNCLHFDQUFNLENBQUMsaUJBQUcsQ0FBQyxPQUFPLENBQUM7V0FDUCxjQUFjLENBVzFCO1FBQUQscUJBQUM7S0FYRCxBQVdDLElBQUE7SUFYWSx3Q0FBYyIsImZpbGUiOiJhdHRyaWJ1dGVzL3ByaXNtQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcmlzbSBBdHRpYnV0ZSBjbGFzcy5cbiAqL1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcbmltcG9ydCB7IERPTSB9IGZyb20gXCJhdXJlbGlhLXBhbFwiO1xuaW1wb3J0IHsgY3VzdG9tQXR0cmlidXRlIH0gZnJvbSBcImF1cmVsaWEtdGVtcGxhdGluZ1wiO1xuaW1wb3J0IFwicHJpc21qc1wiO1xuXG5kZWNsYXJlIHZhciBQcmlzbTogYW55O1xuXG5AY3VzdG9tQXR0cmlidXRlKFwiYXUtcHJpc21cIilcbkBpbmplY3QoRE9NLkVsZW1lbnQpXG5leHBvcnQgY2xhc3MgUHJpc21BdHRyaWJ1dGUge1xuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NOYW1lID0gXCJsYW5ndWFnZS1cIiArIG5ld1ZhbHVlO1xuICAgICAgICBQcmlzbS5oaWdobGlnaHRFbGVtZW50KHRoaXMuX2VsZW1lbnQsIGZhbHNlKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
