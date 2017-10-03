var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-binding", "aurelia-dependency-injection", "aurelia-pal", "aurelia-templating", "../domHelpers/scroll"], function (require, exports, aurelia_binding_1, aurelia_dependency_injection_1, aurelia_pal_1, aurelia_templating_1, scroll_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScrollToElementAttribute = /** @class */ (function () {
        function ScrollToElementAttribute(element) {
            this._element = element;
            this._element.href = "javascript:;";
            this.yOffset = 0;
        }
        ScrollToElementAttribute.prototype.bind = function () {
            var _this = this;
            this._element.addEventListener("click", function (e) { return _this.clickEvent(); }, false);
        };
        ScrollToElementAttribute.prototype.unbind = function () {
            var _this = this;
            this._element.removeEventListener("click", function (e) { return _this.clickEvent(); });
        };
        ScrollToElementAttribute.prototype.clickEvent = function () {
            if (this.id) {
                var elem = document.getElementById(this.id);
                if (elem) {
                    var offset = elem.getBoundingClientRect();
                    scroll_1.Scroll.smoothScroll(window, 0, elem.offsetTop - this.yOffset);
                }
            }
        };
        __decorate([
            aurelia_templating_1.bindable
        ], ScrollToElementAttribute.prototype, "id", void 0);
        __decorate([
            aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
        ], ScrollToElementAttribute.prototype, "yOffset", void 0);
        ScrollToElementAttribute = __decorate([
            aurelia_templating_1.customAttribute("au-scroll-to-element"),
            aurelia_dependency_injection_1.inject(aurelia_pal_1.DOM.Element)
        ], ScrollToElementAttribute);
        return ScrollToElementAttribute;
    }());
    exports.ScrollToElementAttribute = ScrollToElementAttribute;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2F0dHJpYnV0ZXMvc2Nyb2xsVG9FbGVtZW50QXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQVlBO1FBU0ksa0NBQVksT0FBd0I7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1lBRXBDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFFTSx1Q0FBSSxHQUFYO1lBQUEsaUJBRUM7WUFERyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUUsRUFBakIsQ0FBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RSxDQUFDO1FBRU0seUNBQU0sR0FBYjtZQUFBLGlCQUVDO1lBREcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRU8sNkNBQVUsR0FBbEI7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDVixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFOUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDUCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDNUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUEvQkQ7WUFEQyw2QkFBUTs0REFDUztRQUdsQjtZQURDLDZCQUFRLENBQUMsRUFBQyxrQkFBa0IsRUFBRSw2QkFBVyxDQUFDLE1BQU0sRUFBQyxDQUFDO2lFQUM1QjtRQUxkLHdCQUF3QjtZQUZwQyxvQ0FBZSxDQUFDLHNCQUFzQixDQUFDO1lBQ3ZDLHFDQUFNLENBQUMsaUJBQUcsQ0FBQyxPQUFPLENBQUM7V0FDUCx3QkFBd0IsQ0FrQ3BDO1FBQUQsK0JBQUM7S0FsQ0QsQUFrQ0MsSUFBQTtJQWxDWSw0REFBd0IiLCJmaWxlIjoiYXR0cmlidXRlcy9zY3JvbGxUb0VsZW1lbnRBdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNjcm9sbCBUbyBFbGVtZW50IGNsYXNzLlxuICovXG5pbXBvcnQgeyBiaW5kaW5nTW9kZSB9IGZyb20gXCJhdXJlbGlhLWJpbmRpbmdcIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XG5pbXBvcnQgeyBET00gfSBmcm9tIFwiYXVyZWxpYS1wYWxcIjtcbmltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21BdHRyaWJ1dGUgfSBmcm9tIFwiYXVyZWxpYS10ZW1wbGF0aW5nXCI7XG5pbXBvcnQgeyBTY3JvbGwgfSBmcm9tIFwiLi4vZG9tSGVscGVycy9zY3JvbGxcIjtcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL2RvbUhlbHBlcnMvc3R5bGVcIjtcblxuQGN1c3RvbUF0dHJpYnV0ZShcImF1LXNjcm9sbC10by1lbGVtZW50XCIpXG5AaW5qZWN0KERPTS5FbGVtZW50KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFRvRWxlbWVudEF0dHJpYnV0ZSB7XG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG5cbiAgICBAYmluZGFibGUoe2RlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5fSlcbiAgICBwdWJsaWMgeU9mZnNldDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTExpbmtFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTExpbmtFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLl9lbGVtZW50LmhyZWYgPSBcImphdmFzY3JpcHQ6O1wiO1xuXG4gICAgICAgIHRoaXMueU9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGJpbmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmNsaWNrRXZlbnQoKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1bmJpbmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmNsaWNrRXZlbnQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGlja0V2ZW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pZCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgU2Nyb2xsLnNtb290aFNjcm9sbCh3aW5kb3csIDAsIGVsZW0ub2Zmc2V0VG9wIC0gdGhpcy55T2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
