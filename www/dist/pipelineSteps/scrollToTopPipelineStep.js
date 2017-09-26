define(["require", "exports", "../domHelpers/scroll"], function (require, exports, scroll_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScrollToTopPipelineStep = /** @class */ (function () {
        function ScrollToTopPipelineStep() {
        }
        ScrollToTopPipelineStep.prototype.run = function (navigationInstruction, next) {
            scroll_1.Scroll.smoothScroll(window, 0, 0);
            return next();
        };
        return ScrollToTopPipelineStep;
    }());
    exports.ScrollToTopPipelineStep = ScrollToTopPipelineStep;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL3BpcGVsaW5lU3RlcHMvc2Nyb2xsVG9Ub3BQaXBlbGluZVN0ZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBTUE7UUFBQTtRQUtBLENBQUM7UUFKVSxxQ0FBRyxHQUFWLFVBQVcscUJBQTRDLEVBQUUsSUFBVTtZQUMvRCxlQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFDTCw4QkFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksMERBQXVCIiwiZmlsZSI6InBpcGVsaW5lU3RlcHMvc2Nyb2xsVG9Ub3BQaXBlbGluZVN0ZXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNjcm9sbCBUbyBUb3AgUGlwZWxpbmUgU3RlcCBjbGFzcy5cbiAqL1xuaW1wb3J0IHsgTmF2aWdhdGlvbkluc3RydWN0aW9uLCBOZXh0IH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XG5pbXBvcnQgeyBTY3JvbGwgfSBmcm9tIFwiLi4vZG9tSGVscGVycy9zY3JvbGxcIjtcblxuZXhwb3J0IGNsYXNzIFNjcm9sbFRvVG9wUGlwZWxpbmVTdGVwIHtcbiAgICBwdWJsaWMgcnVuKG5hdmlnYXRpb25JbnN0cnVjdGlvbjogTmF2aWdhdGlvbkluc3RydWN0aW9uLCBuZXh0OiBOZXh0KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgU2Nyb2xsLnNtb290aFNjcm9sbCh3aW5kb3csIDAsIDApO1xuICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
