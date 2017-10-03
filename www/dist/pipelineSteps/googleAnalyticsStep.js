define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoogleAnalyticsStep = /** @class */ (function () {
        function GoogleAnalyticsStep() {
        }
        GoogleAnalyticsStep.prototype.run = function (navigationInstruction, next) {
            if (window.ga !== undefined) {
                ga("send", {
                    hitType: "pageview",
                    page: navigationInstruction.fragment,
                    title: navigationInstruction.config.title
                });
            }
            return next();
        };
        return GoogleAnalyticsStep;
    }());
    exports.GoogleAnalyticsStep = GoogleAnalyticsStep;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL3BpcGVsaW5lU3RlcHMvZ29vZ2xlQW5hbHl0aWNzU3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFNQTtRQUFBO1FBV0EsQ0FBQztRQVZVLGlDQUFHLEdBQVYsVUFBVyxxQkFBNEMsRUFBRSxJQUFVO1lBQy9ELEVBQUUsQ0FBQyxDQUFFLE1BQWMsQ0FBQyxFQUFFLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsRUFBRSxDQUFDLE1BQU0sRUFBRTtvQkFDUCxPQUFPLEVBQUUsVUFBVTtvQkFDbkIsSUFBSSxFQUFFLHFCQUFxQixDQUFDLFFBQVE7b0JBQ3BDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBSztpQkFDNUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBQ0wsMEJBQUM7SUFBRCxDQVhBLEFBV0MsSUFBQTtJQVhZLGtEQUFtQiIsImZpbGUiOiJwaXBlbGluZVN0ZXBzL2dvb2dsZUFuYWx5dGljc1N0ZXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdvb2dsZSBBbmFseXRpY3MgU3RlcCBjbGFzcy5cbiAqL1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJnb29nbGUuYW5hbHl0aWNzXCIgLz5cbmltcG9ydCB7IE5hdmlnYXRpb25JbnN0cnVjdGlvbiwgTmV4dCB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xuXG5leHBvcnQgY2xhc3MgR29vZ2xlQW5hbHl0aWNzU3RlcCB7XG4gICAgcHVibGljIHJ1bihuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb246IE5hdmlnYXRpb25JbnN0cnVjdGlvbiwgbmV4dDogTmV4dCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGlmICgod2luZG93IGFzIGFueSkuZ2EgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZ2EoXCJzZW5kXCIsIHtcbiAgICAgICAgICAgICAgICBoaXRUeXBlOiBcInBhZ2V2aWV3XCIsXG4gICAgICAgICAgICAgICAgcGFnZTogbmF2aWdhdGlvbkluc3RydWN0aW9uLmZyYWdtZW50LFxuICAgICAgICAgICAgICAgIHRpdGxlOiBuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24uY29uZmlnLnRpdGxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
