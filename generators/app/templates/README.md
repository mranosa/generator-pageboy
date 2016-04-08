# [APP-NAME-HERE]

Generated with [PageBoy Generator](https://github.com/mranosa/generator-pageboy). Have Fun!

## Usage

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