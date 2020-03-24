import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';

let locale = '';

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      //useValue: AppInitializerSync, // uncomment to see the same happening when the app initializer is synchronous
      useValue: AppInitializerAsync,
      multi: true,
    },
    {
      provide: LOCALE_ID,
      useFactory: () => {
        console.log('LOCALE_ID factory executed');
        return locale;
      }
    },
  ],
})
export class LocaleModule {

}

function AppInitializerSync() {
  setLocale('fr-FR');
}

async function AppInitializerAsync() {
  setLocale('fr-FR');
}

function setLocale(localeId: string) {
  console.log(`LOCALE_ID set to ${localeId}`);
  locale = localeId;
}
