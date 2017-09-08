/**
 * Aurelia SVG class.
 */
import { inject } from "aurelia-dependency-injection";
import { HttpClient } from "aurelia-http-client";
import { DOM } from "aurelia-pal";
import { bindable, customElement } from "aurelia-templating";

@customElement("au-svg")
@inject(DOM.Element)
export class AureliaSvg {
    @bindable
    public width: string;
    @bindable
    public height: string;
    @bindable
    public src: string;

    private _element: HTMLElement;

    constructor(element: HTMLElement) {
        this._element = element;
    }

    public srcChanged(): void {
        if (this.src && this.src.length > 0) {
            const httpClient = new HttpClient();
            httpClient.get(this.src)
                .then((response) => {
                    if (response.statusCode === 200) {
                        let svg = response.content;
                        if (this.width) {
                            svg = svg.replace(/width=\"(.*?)\"/, `width=\"${this.width}\"`);
                        }
                        if (this.height) {
                            svg = svg.replace(/height=\"(.*?)\"/, `height=\"${this.height}\"`);
                        }
                        this._element.innerHTML = response.content;
                    }
                })
                .catch((err) => {
                    // Just don't display the version its not critical
                });
        }
    }
}
