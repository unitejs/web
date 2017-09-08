/**
 * Bootstrap 4 form renderer for Aurelia form validation.
 */
import { RenderInstruction, ValidateResult } from "aurelia-validation";
import { Style } from "../domHelpers/style";

export class BootstrapFormRenderer {
    public render(instruction: RenderInstruction): void {
        for (const { result, elements } of instruction.unrender) {
            for (const element of elements) {
                this.remove(element, result);
            }
        }

        for (const { result, elements } of instruction.render) {
            for (const element of elements) {
                this.add(element, result);
            }
        }
    }

    public add(element: Element, result: ValidateResult): void {
        const formGroup = element.closest(".form-group");
        if (!formGroup) {
            return;
        }

        if (result.valid) {
            if (!Style.has(element, "is-invalid")) {
                Style.toggle(element, "is-valid", true);
            }
        } else {
            Style.toggle(element, "is-valid", false);
            Style.toggle(element, "is-invalid", true);
            const message = document.createElement("span");
            message.className = "invalid-feedback";
            message.textContent = result.message;
            message.id = `validation-message-${result.id}`;
            formGroup.appendChild(message);
        }
    }

    public remove(element: Element, result: ValidateResult): void {
        Style.toggle(element, "is-invalid", false);
        Style.toggle(element, "is-valid", false);

        const formGroup = element.closest(".form-group");
        if (!formGroup) {
            return;
        }

        const message = formGroup.querySelector(`#validation-message-${result.id}`);
        if (message) {
            formGroup.removeChild(message);
        }
    }
}
