var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-pal", "aurelia-templating", "../domHelpers/scroll", "../domHelpers/style"], function (require, exports, aurelia_dependency_injection_1, aurelia_pal_1, aurelia_templating_1, scroll_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScrollToTopAttribute = /** @class */ (function () {
        function ScrollToTopAttribute(element) {
            this._element = element;
        }
        ScrollToTopAttribute.prototype.bind = function () {
            var _this = this;
            window.addEventListener("scroll", function (e) { return _this.scrollEvent(); }, false);
            this._element.addEventListener("click", function (e) { return _this.clickEvent(); }, false);
            this.scrollEvent();
        };
        ScrollToTopAttribute.prototype.unbind = function () {
            var _this = this;
            window.removeEventListener("scroll", function (e) { return _this.scrollEvent(); });
            this._element.removeEventListener("click", function (e) { return _this.clickEvent(); });
        };
        ScrollToTopAttribute.prototype.scrollEvent = function () {
            style_1.Style.toggle(this._element, "hidden", scroll_1.Scroll.getOffset(window).y < 10);
        };
        ScrollToTopAttribute.prototype.clickEvent = function () {
            scroll_1.Scroll.smoothScroll(window, 0, 0);
        };
        ScrollToTopAttribute = __decorate([
            aurelia_templating_1.customAttribute("au-scroll-to-top"),
            aurelia_dependency_injection_1.inject(aurelia_pal_1.DOM.Element)
        ], ScrollToTopAttribute);
        return ScrollToTopAttribute;
    }());
    exports.ScrollToTopAttribute = ScrollToTopAttribute;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2F0dHJpYnV0ZXMvc2Nyb2xsVG9Ub3BBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBV0E7UUFHSSw4QkFBWSxPQUFvQjtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDO1FBRU0sbUNBQUksR0FBWDtZQUFBLGlCQUlDO1lBSEcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUUsRUFBakIsQ0FBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQztRQUVNLHFDQUFNLEdBQWI7WUFBQSxpQkFHQztZQUZHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFFTywwQ0FBVyxHQUFuQjtZQUNJLGFBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsZUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUVPLHlDQUFVLEdBQWxCO1lBQ0ksZUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUF4QlEsb0JBQW9CO1lBRmhDLG9DQUFlLENBQUMsa0JBQWtCLENBQUM7WUFDbkMscUNBQU0sQ0FBQyxpQkFBRyxDQUFDLE9BQU8sQ0FBQztXQUNQLG9CQUFvQixDQXlCaEM7UUFBRCwyQkFBQztLQXpCRCxBQXlCQyxJQUFBO0lBekJZLG9EQUFvQiIsImZpbGUiOiJhdHRyaWJ1dGVzL3Njcm9sbFRvVG9wQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTY3JvbGwgVG8gVG9wIGNsYXNzLlxuICovXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xuaW1wb3J0IHsgRE9NIH0gZnJvbSBcImF1cmVsaWEtcGFsXCI7XG5pbXBvcnQgeyBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tIFwiYXVyZWxpYS10ZW1wbGF0aW5nXCI7XG5pbXBvcnQgeyBTY3JvbGwgfSBmcm9tIFwiLi4vZG9tSGVscGVycy9zY3JvbGxcIjtcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL2RvbUhlbHBlcnMvc3R5bGVcIjtcblxuQGN1c3RvbUF0dHJpYnV0ZShcImF1LXNjcm9sbC10by10b3BcIilcbkBpbmplY3QoRE9NLkVsZW1lbnQpXG5leHBvcnQgY2xhc3MgU2Nyb2xsVG9Ub3BBdHRyaWJ1dGUge1xuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGJpbmQoKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB0aGlzLnNjcm9sbEV2ZW50KCksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuY2xpY2tFdmVudCgpLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5iaW5kKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4gdGhpcy5zY3JvbGxFdmVudCgpKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuY2xpY2tFdmVudCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNjcm9sbEV2ZW50KCk6IHZvaWQge1xuICAgICAgICBTdHlsZS50b2dnbGUodGhpcy5fZWxlbWVudCwgXCJoaWRkZW5cIiwgU2Nyb2xsLmdldE9mZnNldCh3aW5kb3cpLnkgPCAxMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGlja0V2ZW50KCk6IHZvaWQge1xuICAgICAgICBTY3JvbGwuc21vb3RoU2Nyb2xsKHdpbmRvdywgMCwgMCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
