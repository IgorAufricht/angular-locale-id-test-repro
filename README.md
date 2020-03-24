# Problem reproduction

This is a reproduction repo for an Angular issue "LOCALE_ID accessed in tests before APP_INITIALIZER runs (with Ivy)".

Angular github issue: [#36230](https://github.com/angular/angular/issues/36230)

## Steps to reproduce

* checkout the repo
* `npm install`
* `ng serve` (application loads correctly, console confirms that `LOCALE_ID = fr-FR`)
* `ng test` (fails, `Error: Expected '' to equal 'fr-FR'`)
