/**
 * Scroll To Element class.
 */
import { bindingMode } from "aurelia-binding";
import { inject } from "aurelia-dependency-injection";
import { DOM } from "aurelia-pal";
import { bindable, customAttribute } from "aurelia-templating";
import { Scroll } from "../domHelpers/scroll";
import { Style } from "../domHelpers/style";

@customAttribute("au-scroll-to-element")
@inject(DOM.Element)
export class ScrollToElementAttribute {
    @bindable
    public id: string;

    @bindable({defaultBindingMode: bindingMode.twoWay})
    public yOffset: number;

    private _element: HTMLLinkElement;

    constructor(element: HTMLLinkElement) {
        this._element = element;
        this._element.href = "javascript:;";

        this.yOffset = 0;
    }

    public bind(): void {
        this._element.addEventListener("click", (e) => this.clickEvent(), false);
    }

    public unbind(): void {
        this._element.removeEventListener("click", (e) => this.clickEvent());
    }

    private clickEvent(): void {
        if (this.id) {
            const elem = document.getElementById(this.id);

            if (elem) {
                const offset = elem.getBoundingClientRect();
                Scroll.smoothScroll(window, 0, elem.offsetTop - this.yOffset);
            }
        }
    }
}
