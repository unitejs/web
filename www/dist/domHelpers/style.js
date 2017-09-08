define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Style class.
     */
    var Style = /** @class */ (function () {
        function Style() {
        }
        Style.toggle = function (element, classStyle, add) {
            if (add) {
                if (!element.classList.contains(classStyle)) {
                    element.classList.add(classStyle);
                }
            }
            else {
                if (element.classList.contains(classStyle)) {
                    element.classList.remove(classStyle);
                }
            }
        };
        Style.has = function (element, classStyle) {
            return element.classList.contains(classStyle);
        };
        return Style;
    }());
    exports.Style = Style;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2RvbUhlbHBlcnMvc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7O09BRUc7SUFDSDtRQUFBO1FBZ0JBLENBQUM7UUFmaUIsWUFBTSxHQUFwQixVQUFxQixPQUFnQixFQUFFLFVBQWtCLEVBQUUsR0FBWTtZQUNuRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNOLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztZQUNMLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFYSxTQUFHLEdBQWpCLFVBQWtCLE9BQWdCLEVBQUUsVUFBa0I7WUFDbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDTCxZQUFDO0lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtJQWhCWSxzQkFBSyIsImZpbGUiOiJkb21IZWxwZXJzL3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdHlsZSBjbGFzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0eWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIHRvZ2dsZShlbGVtZW50OiBFbGVtZW50LCBjbGFzc1N0eWxlOiBzdHJpbmcsIGFkZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoYWRkKSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzU3R5bGUpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzU3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzU3R5bGUpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzU3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBoYXMoZWxlbWVudDogRWxlbWVudCwgY2xhc3NTdHlsZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc1N0eWxlKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
