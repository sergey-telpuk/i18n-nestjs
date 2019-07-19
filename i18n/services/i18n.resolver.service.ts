import {Inject, Injectable} from '@nestjs/common';
import {Ii18nResolver} from './interfaces/i18n.resolver.interface';
import {IDetectedLng} from './interfaces/detected.lng.interface';
import {Ii18nTranslate} from './interfaces/i18n.translate.interface';

@Injectable()
export class I18nResolverService implements Ii18nResolver {

    /**
     *
     * @param i18nTranslate
     * @param detectedLng
     */
    constructor(
        @Inject('Ii18nTranslate')
        private readonly i18nTranslate: Ii18nTranslate,
        @Inject('IDetectedLng')
        private readonly detectedLng: IDetectedLng,
    ) {

    }

    /**
     *
     * @param key
     * @param args
     */
    translate(key: string, args?: Array<{
        [k: string]: any;
    } | string> | {
        [k: string]: any;
    }): any {
        const {detectedLng = 'en'} = this.detectedLng;
        let translated: string;

        try {
            translated = this.i18nTranslate.translate(detectedLng, key);
        } catch (e) {
            translated = key;
        }

        return translated;
    }

}
