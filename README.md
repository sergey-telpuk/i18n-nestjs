This solution allows to grab the language of the current user (i.e., the client that is interacting with the API).

The  `main.ts` could look like the following:
```javascript
import * as LP from 'fastify-language-parser';
...
fastifyAdapter.register(LP, {
    order: ['header', 'query'],
    supportedLngs: ['en', 'ru'],
});
```
Using 
```javascript
    constructor(
        @Inject('Ii18nResolver')
        private readonly i18nResolver: Ii18nResolver,
    ) {}
  
  ...
    method(){
        this.i18nResolver.translate('KEY');
    }
```
