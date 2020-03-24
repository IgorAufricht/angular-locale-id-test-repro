import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LocaleModule} from './locale.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LocaleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
