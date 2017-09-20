/**
 * Scroll class.
 */
export class Scroll {
    public static getOffset(element: HTMLElement | Window): { x: number; y: number } {
        if (element) {
            if (element instanceof Window) {
                return { x: element.scrollX | element.pageXOffset, y: element.scrollY | element.pageYOffset };
            } else {
                return { x: element.scrollLeft, y: element.scrollTop };
            }
        } else {
            return undefined;
        }
    }

    public static smoothScroll(element: HTMLElement | Window, x: number, y: number): void {
        if (element) {
            if (element instanceof Window) {
                Scroll.step(element, Scroll.now(),
                    element.scrollX | element.pageXOffset,
                    element.scrollY | element.pageYOffset, x, y);
            } else {
                Scroll.step(element, Scroll.now(), element.scrollLeft, element.scrollTop, x, y);
            }
        }
    }

    private static step(element: HTMLElement | Window,
                        startTime: number,
                        startX: number,
                        startY: number,
                        x: number,
                        y: number): void {
        const time = this.now();
        let elapsed = (time - startTime) / 468;

        elapsed = elapsed > 1 ? 1 : elapsed;

        const value = this.ease(elapsed);

        const currentX = startX + (x - startX) * value;
        const currentY = startY + (y - startY) * value;

        element.scroll(currentX, currentY);

        if (currentX !== x || currentY !== y) {
            window.requestAnimationFrame(() => Scroll.step(element, startTime, startX, startY, x, y));
        }
    }

    private static now(): number {
        return window.performance && window.performance.now
            ? window.performance.now() : Date.now();
    }

    private static ease(k: number): number {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }
}
