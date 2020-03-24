import {async, TestBed} from '@angular/core/testing';
import {LOCALE_ID} from '@angular/core';
import {LocaleModule} from './locale.module';

describe('LocaleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LocaleModule]
    });
  }));

  it('should work', () => {
    expect(TestBed.inject(LOCALE_ID)).toEqual('fr-FR');
  });
});
