import {Component, Inject} from '@angular/core';
import {LOCALE_ID} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'locale-test-app';

  constructor(@Inject(LOCALE_ID) localeId: string) {
    console.log(`LOCALE_ID = ${localeId}`);
  }
}
