var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating", "../domHelpers/scroll"], function (require, exports, aurelia_templating_1, scroll_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Documentation = /** @class */ (function () {
        function Documentation() {
            this.commandDisplay = "intro";
        }
        Documentation.prototype.displayDocumentation = function (which) {
            this.commandDisplay = which;
            var elements = document.getElementsByTagName("hr");
            var navBars = document.getElementsByTagName("nav-bar");
            if (elements.length > 0 && navBars.length > 0) {
                var clientRect = elements[0].getBoundingClientRect();
                var navBarRect = navBars[0].getBoundingClientRect();
                scroll_1.Scroll.smoothScroll(window, 0, clientRect.top - navBarRect.height);
            }
        };
        __decorate([
            aurelia_templating_1.bindable
        ], Documentation.prototype, "commandDisplay", void 0);
        return Documentation;
    }());
    exports.Documentation = Documentation;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFNQTtRQUlJO1lBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7UUFDbEMsQ0FBQztRQUVNLDRDQUFvQixHQUEzQixVQUE0QixLQUFhO1lBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBRTVCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFekQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDdkQsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ3RELGVBQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RSxDQUFDO1FBQ0wsQ0FBQztRQWpCRDtZQURDLDZCQUFROzZEQUNxQjtRQWtCbEMsb0JBQUM7S0FwQkQsQUFvQkMsSUFBQTtJQXBCWSxzQ0FBYSIsImZpbGUiOiJkb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERvY3VtZW50YXRpb24gY2xhc3MuXG4gKi9cbmltcG9ydCB7IGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtdGVtcGxhdGluZ1wiO1xuaW1wb3J0IHsgU2Nyb2xsIH0gZnJvbSBcIi4uL2RvbUhlbHBlcnMvc2Nyb2xsXCI7XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudGF0aW9uIHtcbiAgICBAYmluZGFibGVcbiAgICBwdWJsaWMgY29tbWFuZERpc3BsYXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbW1hbmREaXNwbGF5ID0gXCJpbnRyb1wiO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwbGF5RG9jdW1lbnRhdGlvbih3aGljaDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29tbWFuZERpc3BsYXkgPSB3aGljaDtcblxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHJcIik7XG4gICAgICAgIGNvbnN0IG5hdkJhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm5hdi1iYXJcIik7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDAgJiYgbmF2QmFycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRSZWN0ID0gZWxlbWVudHNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBuYXZCYXJSZWN0ID0gbmF2QmFyc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIFNjcm9sbC5zbW9vdGhTY3JvbGwod2luZG93LCAwLCBjbGllbnRSZWN0LnRvcCAtIG5hdkJhclJlY3QuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
