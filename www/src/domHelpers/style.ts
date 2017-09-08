/**
 * Style class.
 */
export class Style {
    public static toggle(element: Element, classStyle: string, add: boolean): void {
        if (add) {
            if (!element.classList.contains(classStyle)) {
                element.classList.add(classStyle);
            }
        } else {
            if (element.classList.contains(classStyle)) {
                element.classList.remove(classStyle);
            }
        }
    }

    public static has(element: Element, classStyle: string): boolean {
        return element.classList.contains(classStyle);
    }
}
