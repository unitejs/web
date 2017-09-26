var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating"], function (require, exports, aurelia_templating_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Documentation = /** @class */ (function () {
        function Documentation() {
            this.commandDisplay = "intro";
        }
        Documentation.prototype.attached = function () {
            var navBars = document.getElementsByTagName("nav-bar");
            if (navBars.length > 0) {
                var navBarRect = navBars[0].getBoundingClientRect();
                this.topOffset = navBarRect.height;
            }
        };
        Documentation.prototype.displayDocumentation = function (which) {
            this.commandDisplay = which;
        };
        __decorate([
            aurelia_templating_1.bindable
        ], Documentation.prototype, "commandDisplay", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], Documentation.prototype, "topOffset", void 0);
        return Documentation;
    }());
    exports.Documentation = Documentation;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFNQTtRQU9JO1lBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7UUFDbEMsQ0FBQztRQUVNLGdDQUFRLEdBQWY7WUFDSSxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFekQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLENBQUM7UUFDTCxDQUFDO1FBRU0sNENBQW9CLEdBQTNCLFVBQTRCLEtBQWE7WUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQztRQXBCRDtZQURDLDZCQUFROzZEQUNxQjtRQUc5QjtZQURDLDZCQUFRO3dEQUNnQjtRQWtCN0Isb0JBQUM7S0F2QkQsQUF1QkMsSUFBQTtJQXZCWSxzQ0FBYSIsImZpbGUiOiJkb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERvY3VtZW50YXRpb24gY2xhc3MuXG4gKi9cbmltcG9ydCB7IGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtdGVtcGxhdGluZ1wiO1xuaW1wb3J0IHsgU2Nyb2xsIH0gZnJvbSBcIi4uL2RvbUhlbHBlcnMvc2Nyb2xsXCI7XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudGF0aW9uIHtcbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgY29tbWFuZERpc3BsYXk6IHN0cmluZztcblxuICAgIEBiaW5kYWJsZVxuICAgIHB1YmxpYyB0b3BPZmZzZXQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbW1hbmREaXNwbGF5ID0gXCJpbnRyb1wiO1xuICAgIH1cblxuICAgIHB1YmxpYyBhdHRhY2hlZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmF2QmFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibmF2LWJhclwiKTtcblxuICAgICAgICBpZiAobmF2QmFycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuYXZCYXJSZWN0ID0gbmF2QmFyc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHRoaXMudG9wT2Zmc2V0ID0gbmF2QmFyUmVjdC5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcGxheURvY3VtZW50YXRpb24od2hpY2g6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbW1hbmREaXNwbGF5ID0gd2hpY2g7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
