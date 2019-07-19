export interface Ii18nTranslate {
    translate(lang: string, key: string, args?: Array<{
        [k: string]: any;
    } | string> | {
        [k: string]: any;
    }): any;
}
