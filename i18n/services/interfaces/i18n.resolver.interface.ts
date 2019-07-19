export interface Ii18nResolver {
    translate(key: string, args?: Array<{
        [k: string]: any;
    } | string> | {
        [k: string]: any;
    }): any;
}
