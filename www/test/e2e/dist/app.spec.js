"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests for App.
 */
var protractor_1 = require("protractor");
describe("App", function () {
    it("the title is set", function (done) {
        protractor_1.browser.loadAndWaitForAureliaPage("/")
            .then(function () {
            protractor_1.browser.getTitle()
                .then(function (title) {
                expect(title).toEqual("Home | UniteJS");
                done();
            });
        });
    });
    it("the router text is set", function (done) {
        protractor_1.browser.loadAndWaitForAureliaPage("/")
            .then(function () {
            protractor_1.$("router-view").getText()
                .then(function (routerContent) {
                expect(routerContent).toContain("How many times");
                done();
            });
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCx5Q0FBNEM7QUFFNUMsUUFBUSxDQUFDLEtBQUssRUFBRTtJQUNaLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLElBQUk7UUFDeEIsb0JBQU8sQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUM7YUFDakMsSUFBSSxDQUFDO1lBQ0Ysb0JBQU8sQ0FBQyxRQUFRLEVBQUU7aUJBQ2IsSUFBSSxDQUFDLFVBQUMsS0FBSztnQkFDUixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3hDLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBSTtRQUM5QixvQkFBTyxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQzthQUNqQyxJQUFJLENBQUM7WUFDRixjQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFO2lCQUNyQixJQUFJLENBQUMsVUFBQyxhQUFhO2dCQUNoQixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ2xELElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlc3RzIGZvciBBcHAuXG4gKi9cbmltcG9ydCB7ICQsIGJyb3dzZXIsIGJ5IH0gZnJvbSBcInByb3RyYWN0b3JcIjtcblxuZGVzY3JpYmUoXCJBcHBcIiwgKCkgPT4ge1xuICAgIGl0KFwidGhlIHRpdGxlIGlzIHNldFwiLCAoZG9uZSkgPT4ge1xuICAgICAgICBicm93c2VyLmxvYWRBbmRXYWl0Rm9yQXVyZWxpYVBhZ2UoXCIvXCIpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnJvd3Nlci5nZXRUaXRsZSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh0aXRsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHRpdGxlKS50b0VxdWFsKFwiSG9tZSB8IFVuaXRlSlNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpdChcInRoZSByb3V0ZXIgdGV4dCBpcyBzZXRcIiwgKGRvbmUpID0+IHtcbiAgICAgICAgYnJvd3Nlci5sb2FkQW5kV2FpdEZvckF1cmVsaWFQYWdlKFwiL1wiKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoXCJyb3V0ZXItdmlld1wiKS5nZXRUZXh0KClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJvdXRlckNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChyb3V0ZXJDb250ZW50KS50b0NvbnRhaW4oXCJIb3cgbWFueSB0aW1lc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl19