# PageBoy Generator

> Yeoman generator for creating end to end tests, using [Protractor] and [Jasmine].

## Prerequisites
Download and Install [Node] and [Yeoman]

## Usage
- Install Generator: `npm install -g generator-pageboy`
- Create and Go to Project Directory: `mkdir my-new-e2e-project && cd $_`
- Run Generator: `yo pageboy`
- Start Sample App: `npm start`
- Run Test: `npm test`

## Generators

Available generators:

* E2E
    - [pageboy](#app) (aka [pageboy:app](#app))
    - [pageboy:route](#route)
    - [pageboy:spec](#spec)
    - [pageboy:po](#pageobject)

### App
Sets up a new Protractor + Jasmine e2e app, generating all the boilerplate you need to get started.

Example:
```bash
yo pageboy
```

### Route
Generates a new route.

Example:
```bash
yo pageboy:route myRoute
[?] What is the url of your route? www/app/myRoute
[?] What is the spec name? mySpec
```

Produces:

    www/app/myRoute/myRoute.po.js
    www/app/myRoute/myRoute.mySpec.spec.js

### Spec
Generates a jasmine spec.

Example:
```bash
yo pageboy:spec mySpec
[?] Where would you like to create this spec? www/app
```

Produces:

    www/app/app.mySpec.spec.js

### PageObject
Generates a page object.

Example:
```bash
yo pageboy:po myPo
[?] Where would you like to create this pageobject? www/app
```

Produces:

    www/app/myPo.po.js


## License

[MIT license](http://opensource.org/licenses/MIT)

## TODO

- [x] ~~Initial Artifacts~~
- [x] ~~Initial README~~
- [x] ~~App Generator~~
- [x] ~~Route Subgenerator~~
- [x] ~~PO Subgenerator~~
- [x] ~~Spec Subgenerator~~
- [x] ~~Publish to npm~~

[Protractor]:https://github.com/angular/protractor
[Jasmine]:http://jasmine.github.io/2.0/introduction.html
[Yeoman]:http://yeoman.io/
[npm]:https://github.com/npm/npm
[Node]:http://nodejs.org/download/