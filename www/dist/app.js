define(["require", "exports", "./pipelineSteps/scrollToTopPipelineStep"], function (require, exports, scrollToTopPipelineStep_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = /** @class */ (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "UniteJS";
            config.addPostRenderStep(scrollToTopPipelineStep_1.ScrollToTopPipelineStep);
            config.map([
                { route: ["", "home"], name: "home", moduleId: "./home/home", nav: true, title: "Home" },
                {
                    route: "documentation",
                    name: "documentation",
                    moduleId: "./documentation/documentation",
                    nav: true,
                    title: "Documentation"
                },
                {
                    route: "gettingStarted",
                    name: "gettingStarted",
                    moduleId: "./gettingStarted/gettingStarted",
                    nav: true,
                    title: "Getting Started"
                },
                {
                    route: "examples",
                    name: "examples",
                    moduleId: "./examples/examples",
                    nav: true,
                    title: "Examples"
                }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFNQTtRQUFBO1FBaUNBLENBQUM7UUE5QlUsNkJBQWUsR0FBdEIsVUFBdUIsTUFBMkIsRUFBRSxNQUFjO1lBQzlELE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpREFBdUIsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDeEY7b0JBQ0ksS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLElBQUksRUFBRSxlQUFlO29CQUNyQixRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxHQUFHLEVBQUUsSUFBSTtvQkFDVCxLQUFLLEVBQUUsZUFBZTtpQkFDekI7Z0JBQ0Q7b0JBQ0ksS0FBSyxFQUFFLGdCQUFnQjtvQkFDdkIsSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsR0FBRyxFQUFFLElBQUk7b0JBQ1QsS0FBSyxFQUFFLGlCQUFpQjtpQkFDM0I7Z0JBQ0Q7b0JBQ0ksS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLElBQUksRUFBRSxVQUFVO29CQUNoQixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixHQUFHLEVBQUUsSUFBSTtvQkFDVCxLQUFLLEVBQUUsVUFBVTtpQkFDcEI7YUFDSixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBQ0wsVUFBQztJQUFELENBakNBLEFBaUNDLElBQUE7SUFqQ1ksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYWluIGFwcGxpY2F0aW9uIGNsYXNzLlxuICovXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcbmltcG9ydCB7IFNjcm9sbFRvVG9wUGlwZWxpbmVTdGVwIH0gZnJvbSBcIi4vcGlwZWxpbmVTdGVwcy9zY3JvbGxUb1RvcFBpcGVsaW5lU3RlcFwiO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XG5cbiAgICBwdWJsaWMgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpOiBhbnkge1xuICAgICAgICBjb25maWcudGl0bGUgPSBcIlVuaXRlSlNcIjtcbiAgICAgICAgY29uZmlnLmFkZFBvc3RSZW5kZXJTdGVwKFNjcm9sbFRvVG9wUGlwZWxpbmVTdGVwKTtcbiAgICAgICAgY29uZmlnLm1hcChbXG4gICAgICAgICAgICB7IHJvdXRlOiBbXCJcIiwgXCJob21lXCJdLCBuYW1lOiBcImhvbWVcIiwgbW9kdWxlSWQ6IFwiLi9ob21lL2hvbWVcIiwgbmF2OiB0cnVlLCB0aXRsZTogXCJIb21lXCIgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3V0ZTogXCJkb2N1bWVudGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJkb2N1bWVudGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgbW9kdWxlSWQ6IFwiLi9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb25cIixcbiAgICAgICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRG9jdW1lbnRhdGlvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvdXRlOiBcImdldHRpbmdTdGFydGVkXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJnZXR0aW5nU3RhcnRlZFwiLFxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiBcIi4vZ2V0dGluZ1N0YXJ0ZWQvZ2V0dGluZ1N0YXJ0ZWRcIixcbiAgICAgICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiR2V0dGluZyBTdGFydGVkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcm91dGU6IFwiZXhhbXBsZXNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcImV4YW1wbGVzXCIsXG4gICAgICAgICAgICAgICAgbW9kdWxlSWQ6IFwiLi9leGFtcGxlcy9leGFtcGxlc1wiLFxuICAgICAgICAgICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJFeGFtcGxlc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
