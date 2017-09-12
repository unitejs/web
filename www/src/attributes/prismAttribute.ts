/**
 * Prism Attibute class.
 */
import { inject } from "aurelia-dependency-injection";
import { DOM } from "aurelia-pal";
import { customAttribute } from "aurelia-templating";
import "prismjs";

declare var Prism: any;

@customAttribute("au-prism")
@inject(DOM.Element)
export class PrismAttribute {
    private _element: HTMLElement;

    constructor(element: HTMLElement) {
        this._element = element;
    }

    public valueChanged(newValue: string, oldValue: string): void {
        setTimeout(() => {
            this._element.className = "language-" + newValue;
            Prism.highlightElement(this._element, false);
        }, 0);
    }
}
