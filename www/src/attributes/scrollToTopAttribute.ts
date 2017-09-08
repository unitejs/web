/**
 * Scroll To Top class.
 */
import { inject } from "aurelia-dependency-injection";
import { DOM } from "aurelia-pal";
import { customAttribute } from "aurelia-templating";
import { Scroll } from "../domHelpers/scroll";
import { Style } from "../domHelpers/style";

@customAttribute("au-scroll-to-top")
@inject(DOM.Element)
export class ScrollToTopAttribute {
    private _element: HTMLElement;

    constructor(element: HTMLElement) {
        this._element = element;
    }

    public bind(): void {
        window.addEventListener("scroll", (e) => this.scrollEvent(), false);
        this._element.addEventListener("click", (e) => this.clickEvent(), false);
        this.scrollEvent();
    }

    public unbind(): void {
        window.removeEventListener("scroll", (e) => this.scrollEvent());
        this._element.removeEventListener("click", (e) => this.clickEvent());
    }

    private scrollEvent(): void {
        Style.toggle(this._element, "hidden", Scroll.getOffset(window).y < 10);
    }

    private clickEvent(): void {
        Scroll.smoothScroll(window, 0, 0);
    }
}
