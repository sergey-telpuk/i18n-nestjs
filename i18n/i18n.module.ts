import {Global, Module, Scope} from '@nestjs/common';
import {I18nResolverService} from './services/i18n.resolver.service';
import {I18nModule as I18nModuleBase, I18nService} from 'nestjs-i18n';
import * as path from 'path';
import {FactoryProvider} from '@nestjs/common/interfaces';
import {REQUEST} from '@nestjs/core';
import {IRequestWithDetectedLng} from './services/interfaces/request.with.detected.lng.interface';
import {Ii18nResolver} from './services/interfaces/i18n.resolver.interface';

export const DetectedLngProvider: FactoryProvider = {
    provide: 'IDetectedLng',
    useFactory: (request): IRequestWithDetectedLng => {
        return request;
    },
    inject: [REQUEST],
};

export const ResolverProvider = {
    provide: 'Ii18nResolver',
    useExisting: I18nResolverService,
    scope: Scope.REQUEST,
};

export const I18nServiceProvider = {
    provide: 'Ii18nTranslate',
    useExisting: I18nService,
};

@Global()
@Module({
    imports: [
        I18nModuleBase.forRoot({
            path: path.join(__dirname, './i18n/'),//change onto hosted directory
            fallbackLanguage: 'en',
        }),
    ],
    providers: [
        I18nResolverService,
        DetectedLngProvider,
        ResolverProvider,
        I18nServiceProvider,
    ],
    exports: [I18nResolverService],
})
export class I18nModule {
}
