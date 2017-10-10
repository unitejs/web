/**
 * Cookie class.
 */
export class LocalStorage {
    public static set(name: string, obj: any): void {
        if (window.localStorage) {
            if (obj === null || obj === undefined) {
                window.localStorage.removeItem(name);
            } else {
                window.localStorage.setItem(name, JSON.stringify(obj));
            }
        }
    }

    public static get<T>(name: string): T {
        if (window.localStorage) {
            const obj = window.localStorage.getItem(name);
            if (obj) {
                try {
                    return JSON.parse(obj) as T;
                } catch (e) {
                    return undefined;
                }
            } else {
                return undefined;
            }
        } else {
            return undefined;
        }
    }

    public static remove(name: string): void {
        if (window.localStorage) {
            window.localStorage.removeItem(name);
        }
    }
}
