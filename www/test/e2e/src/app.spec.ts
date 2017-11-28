/**
 * Tests for App.
 */
import { $, browser, by } from "protractor";

describe("App", () => {
    it("the title is set", (done) => {
        browser.uniteLoadAndWaitForPage("/")
            .then(() => {
                browser.getTitle()
                    .then((title) => {
                        expect(title).toEqual("Home | UniteJS");
                        done();
                    });
            });
    });

    it("the router text is set", (done) => {
        browser.uniteLoadAndWaitForPage("/")
            .then(() => {
                $("router-view").getText()
                    .then((routerContent) => {
                        expect(routerContent).toContain("How many times");
                        done();
                    });
            });
    });
});
