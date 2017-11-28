"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests for App.
 */
var protractor_1 = require("protractor");
describe("App", function () {
    it("the title is set", function (done) {
        protractor_1.browser.uniteLoadAndWaitForPage("/")
            .then(function () {
            protractor_1.browser.getTitle()
                .then(function (title) {
                expect(title).toEqual("Home | UniteJS");
                done();
            });
        });
    });
    it("the router text is set", function (done) {
        protractor_1.browser.uniteLoadAndWaitForPage("/")
            .then(function () {
            protractor_1.$("router-view").getText()
                .then(function (routerContent) {
                expect(routerContent).toContain("How many times");
                done();
            });
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCx5Q0FBNEM7QUFFNUMsUUFBUSxDQUFDLEtBQUssRUFBRTtJQUNaLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLElBQUk7UUFDeEIsb0JBQU8sQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUM7YUFDL0IsSUFBSSxDQUFDO1lBQ0Ysb0JBQU8sQ0FBQyxRQUFRLEVBQUU7aUJBQ2IsSUFBSSxDQUFDLFVBQUMsS0FBSztnQkFDUixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3hDLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBSTtRQUM5QixvQkFBTyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQzthQUMvQixJQUFJLENBQUM7WUFDRixjQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFO2lCQUNyQixJQUFJLENBQUMsVUFBQyxhQUFhO2dCQUNoQixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ2xELElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlc3RzIGZvciBBcHAuXG4gKi9cbmltcG9ydCB7ICQsIGJyb3dzZXIsIGJ5IH0gZnJvbSBcInByb3RyYWN0b3JcIjtcblxuZGVzY3JpYmUoXCJBcHBcIiwgKCkgPT4ge1xuICAgIGl0KFwidGhlIHRpdGxlIGlzIHNldFwiLCAoZG9uZSkgPT4ge1xuICAgICAgICBicm93c2VyLnVuaXRlTG9hZEFuZFdhaXRGb3JQYWdlKFwiL1wiKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJyb3dzZXIuZ2V0VGl0bGUoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigodGl0bGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdCh0aXRsZSkudG9FcXVhbChcIkhvbWUgfCBVbml0ZUpTXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaXQoXCJ0aGUgcm91dGVyIHRleHQgaXMgc2V0XCIsIChkb25lKSA9PiB7XG4gICAgICAgIGJyb3dzZXIudW5pdGVMb2FkQW5kV2FpdEZvclBhZ2UoXCIvXCIpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgJChcInJvdXRlci12aWV3XCIpLmdldFRleHQoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocm91dGVyQ29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJvdXRlckNvbnRlbnQpLnRvQ29udGFpbihcIkhvdyBtYW55IHRpbWVzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=
