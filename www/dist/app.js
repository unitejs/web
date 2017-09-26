define(["require", "exports", "./pipelineSteps/googleAnalyticsStep", "./pipelineSteps/scrollToTopPipelineStep"], function (require, exports, googleAnalyticsStep_1, scrollToTopPipelineStep_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = /** @class */ (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "UniteJS";
            config.addPostRenderStep(scrollToTopPipelineStep_1.ScrollToTopPipelineStep);
            config.addPostRenderStep(googleAnalyticsStep_1.GoogleAnalyticsStep);
            config.map([
                {
                    route: ["", "home"],
                    name: "home",
                    moduleId: "./home/home",
                    nav: true,
                    title: "Home"
                },
                {
                    route: "whatsnew",
                    name: "whatsnew",
                    moduleId: "./whatsNew/whatsNew",
                    nav: true,
                    title: "What's New"
                },
                {
                    route: "documentation",
                    name: "documentation",
                    moduleId: "./documentation/documentation",
                    nav: true,
                    title: "Documentation"
                },
                {
                    route: "generator",
                    name: "generator",
                    moduleId: "./generator/generator",
                    nav: true,
                    title: "Generator"
                },
                {
                    route: "examples",
                    name: "examples",
                    moduleId: "./examples/examples",
                    nav: true,
                    title: "Examples"
                },
                {
                    route: "about",
                    name: "about",
                    moduleId: "./info/about",
                    nav: false,
                    title: "About"
                },
                {
                    route: "the-team",
                    name: "the-team",
                    moduleId: "./info/theTeam",
                    nav: false,
                    title: "The Team"
                },
                {
                    route: "license",
                    name: "license",
                    moduleId: "./info/license",
                    nav: false,
                    title: "License"
                },
                {
                    route: "media",
                    name: "media",
                    moduleId: "./info/media",
                    nav: false,
                    title: "Media"
                }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFPQTtRQUFBO1FBMkVBLENBQUM7UUF4RVUsNkJBQWUsR0FBdEIsVUFBdUIsTUFBMkIsRUFBRSxNQUFjO1lBQzlELE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpREFBdUIsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyx5Q0FBbUIsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1A7b0JBQ0ksS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDbkIsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLEdBQUcsRUFBRSxJQUFJO29CQUNULEtBQUssRUFBRSxNQUFNO2lCQUNoQjtnQkFDRDtvQkFDSSxLQUFLLEVBQUUsVUFBVTtvQkFDakIsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLEdBQUcsRUFBRSxJQUFJO29CQUNULEtBQUssRUFBRSxZQUFZO2lCQUN0QjtnQkFDRDtvQkFDSSxLQUFLLEVBQUUsZUFBZTtvQkFDdEIsSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLEdBQUcsRUFBRSxJQUFJO29CQUNULEtBQUssRUFBRSxlQUFlO2lCQUN6QjtnQkFDRDtvQkFDSSxLQUFLLEVBQUUsV0FBVztvQkFDbEIsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLEdBQUcsRUFBRSxJQUFJO29CQUNULEtBQUssRUFBRSxXQUFXO2lCQUNyQjtnQkFDRDtvQkFDSSxLQUFLLEVBQUUsVUFBVTtvQkFDakIsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLEdBQUcsRUFBRSxJQUFJO29CQUNULEtBQUssRUFBRSxVQUFVO2lCQUNwQjtnQkFDRDtvQkFDSSxLQUFLLEVBQUUsT0FBTztvQkFDZCxJQUFJLEVBQUUsT0FBTztvQkFDYixRQUFRLEVBQUUsY0FBYztvQkFDeEIsR0FBRyxFQUFFLEtBQUs7b0JBQ1YsS0FBSyxFQUFFLE9BQU87aUJBQ2pCO2dCQUNEO29CQUNJLEtBQUssRUFBRSxVQUFVO29CQUNqQixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsR0FBRyxFQUFFLEtBQUs7b0JBQ1YsS0FBSyxFQUFFLFVBQVU7aUJBQ3BCO2dCQUNEO29CQUNJLEtBQUssRUFBRSxTQUFTO29CQUNoQixJQUFJLEVBQUUsU0FBUztvQkFDZixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixHQUFHLEVBQUUsS0FBSztvQkFDVixLQUFLLEVBQUUsU0FBUztpQkFDbkI7Z0JBQ0Q7b0JBQ0ksS0FBSyxFQUFFLE9BQU87b0JBQ2QsSUFBSSxFQUFFLE9BQU87b0JBQ2IsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLEdBQUcsRUFBRSxLQUFLO29CQUNWLEtBQUssRUFBRSxPQUFPO2lCQUNqQjthQUNKLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFDTCxVQUFDO0lBQUQsQ0EzRUEsQUEyRUMsSUFBQTtJQTNFWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1haW4gYXBwbGljYXRpb24gY2xhc3MuXG4gKi9cbmltcG9ydCB7IFJvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xuaW1wb3J0IHsgR29vZ2xlQW5hbHl0aWNzU3RlcCB9IGZyb20gXCIuL3BpcGVsaW5lU3RlcHMvZ29vZ2xlQW5hbHl0aWNzU3RlcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVG9Ub3BQaXBlbGluZVN0ZXAgfSBmcm9tIFwiLi9waXBlbGluZVN0ZXBzL3Njcm9sbFRvVG9wUGlwZWxpbmVTdGVwXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcjtcblxuICAgIHB1YmxpYyBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcik6IGFueSB7XG4gICAgICAgIGNvbmZpZy50aXRsZSA9IFwiVW5pdGVKU1wiO1xuICAgICAgICBjb25maWcuYWRkUG9zdFJlbmRlclN0ZXAoU2Nyb2xsVG9Ub3BQaXBlbGluZVN0ZXApO1xuICAgICAgICBjb25maWcuYWRkUG9zdFJlbmRlclN0ZXAoR29vZ2xlQW5hbHl0aWNzU3RlcCk7XG4gICAgICAgIGNvbmZpZy5tYXAoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvdXRlOiBbXCJcIiwgXCJob21lXCJdLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiaG9tZVwiLFxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiBcIi4vaG9tZS9ob21lXCIsXG4gICAgICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhvbWVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3V0ZTogXCJ3aGF0c25ld1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwid2hhdHNuZXdcIixcbiAgICAgICAgICAgICAgICBtb2R1bGVJZDogXCIuL3doYXRzTmV3L3doYXRzTmV3XCIsXG4gICAgICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIldoYXQncyBOZXdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3V0ZTogXCJkb2N1bWVudGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJkb2N1bWVudGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgbW9kdWxlSWQ6IFwiLi9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb25cIixcbiAgICAgICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRG9jdW1lbnRhdGlvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvdXRlOiBcImdlbmVyYXRvclwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZ2VuZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgbW9kdWxlSWQ6IFwiLi9nZW5lcmF0b3IvZ2VuZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkdlbmVyYXRvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvdXRlOiBcImV4YW1wbGVzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJleGFtcGxlc1wiLFxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiBcIi4vZXhhbXBsZXMvZXhhbXBsZXNcIixcbiAgICAgICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRXhhbXBsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3V0ZTogXCJhYm91dFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYWJvdXRcIixcbiAgICAgICAgICAgICAgICBtb2R1bGVJZDogXCIuL2luZm8vYWJvdXRcIixcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFib3V0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcm91dGU6IFwidGhlLXRlYW1cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcInRoZS10ZWFtXCIsXG4gICAgICAgICAgICAgICAgbW9kdWxlSWQ6IFwiLi9pbmZvL3RoZVRlYW1cIixcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoZSBUZWFtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcm91dGU6IFwibGljZW5zZVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwibGljZW5zZVwiLFxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiBcIi4vaW5mby9saWNlbnNlXCIsXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJMaWNlbnNlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcm91dGU6IFwibWVkaWFcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1lZGlhXCIsXG4gICAgICAgICAgICAgICAgbW9kdWxlSWQ6IFwiLi9pbmZvL21lZGlhXCIsXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNZWRpYVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
