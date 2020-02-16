---
description: >-
  This repo serves as a minimal component starter for those looking to get
  up-and-running with Angular and ES6, using Gulp and Webpack for the build
  process.
---

# Parabol AngularJS Sandbox



![angularjs-es6-component-boilerplate](./assets/logo.png)

> The de facto starter repo for building scalable apps with [Angular](https://angularjs.org), [ES6](https://git.io/es6features), and [Webpack](http://webpack.github.io/)

This repo serves as a minimal **component** starter for those looking to get up-and-running with Angular and ES6, using [Gulp](http://gulpjs.com/) and [Webpack](http://webpack.github.io/) for the build process. **This seed is not a Yeoman generator.** It's a minimal **component** starter with tasks for building the boilerplate. **These are its features**:

* The best practice in directory/file organization for Angular \(allowing for infinite horizontal app scaling\)
* A ready-to-go build system for working with [ES6](https://git.io/es6features)
* Tasks for generating additional boilerplate Angular components
* A full testing system in place
* [SASS](http://sass-lang.com/) support via node-sass

## Table of Contents

* Table of Contents
* Walkthrough
  * Build System
  * File Structure
  * Testing Setup
* Getting Started
  * Dependencies
  * Installing
    * OR
  * Running the App
    * Tasks
    * Testing
    * Generating Components
    * Step By Step Start Guide
* Starter Kit Support and Questions

## Walkthrough

### Build System

This boilerplate uses NPM scripts, Gulp, and Webpack together for its build system. Yes, you don't need Gulp if you're using Webpack. This is true if your build system is only responsible for file manipulation. However, ours is not.

`Webpack` handles all file-related concerns:

* Transpiling from ES6 to ES5 with `Babel`
* Loading HTML files as modules
* Transpiling stylesheets and appending them to the DOM
* Refreshing the browser and rebuilding on file changes
* Hot module replacement for transpiled stylesheets
* Bundling the app
* Loading all modules
* Doing all of the above for `*.spec.js` files as well

`Gulp` is the orchestrator:

* Starting and calling Webpack
* Starting a development server \(yes, Webpack can do this too\)
* Generating boilerplate for the Angular app

### File Structure

We use a componentized approach. This will be the eventual standard \(and particularly helpful, if using Angular's new router\) as well as a great way to ensure a tasteful transition to Angular 2, when the time is ripe. Everything--or mostly everything, as we'll explore \(below\)--is a component. A component is a self-contained concern--may it be a feature or strictly-defined, ever-present element of the UI \(such as a header, sidebar, or footer\). Also characteristic of a component is that it harnesses its own stylesheets, templates, controllers, routes, services, and specs. This encapsulation allows us the comfort of isolation and structural locality. Here's how it looks:

```text
lib
⋅⋅app/
⋅⋅⋅⋅app.js * app entry file
⋅⋅⋅⋅app.html * app template
⋅⋅⋅⋅ app.component.js * main app component file
⋅⋅⋅⋅ app.controller.js * generic app component controller file
⋅⋅⋅⋅ app.module.js * main module for the component (Important one!)
⋅⋅⋅⋅ app.scss * component's style file
```

### Testing Setup

All tests are also written in ES6. We use Webpack to take care of the logistics of getting those files to run in the various browsers, just like with our lib files. This is our testing stack:

* Karma
* Webpack + Babel
* Mocha
* Chai

To run tests, type `npm test` in the terminal. Read more about testing below.

## Getting Started

### Dependencies

Tools needed to run this app:

* `node` and `npm`

### Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install dependencies

**OR**

* Create a new repo
* \*\*\*\*[**Duplicate this repo**](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository)\*\*\*\*
* `clone` your new repo
* `npm install` to install dependencies

### Running the App

This boilerplate uses Gulp to build and launch the development environment. After you have installed all dependencies, you may run the app. Running `npm start` will bundle the app with `webpack`, launch a development server, and watch all files. The port will be displayed in the terminal.

#### Tasks

Here's a list of available tasks:

* `npm run build`
  * runs Webpack, which will transpile, concatenate, and compress \(collectively, "bundle"\) all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application.
* `npm run build-serve`
  * stars a http-server via `http-server`, serving the lib folder as static one.
* `npm run serve`
  * starts a dev server via `webpack-dev-server`, serving the lib folder.
* `npm run watch`
  * alias of `serve`
* `npm start` \(which is the default task that runs when typing `gulp` without providing an argument\)
  * runs `serve`.
* `npm run component`
  * scaffolds a new Angular component. Read below for usage details.

#### Testing

To run the tests, run `npm test`.

`Karma` combined with Webpack runs all files matching `*.spec.js` inside the `app` folder. This allows us to keep test files local to the component--which keeps us in good faith with continuing to build our app modularly. The file `spec.bundle.js` is the bundle file for **all** our spec files that Karma will run.

Be sure to define your `*.spec.js` files within their corresponding component directory. You must name the spec file like so, `[name].spec.js`. If you don't want to use the `.spec.js` suffix, you must change the `regex` in `spec.bundle.js` to look for whatever file\(s\) you want. `Mocha` is the testing suite and `Chai` is the assertion library. If you would like to change this, see `karma.conf.js`.

#### Generating Components

Following a consistent directory structure between components offers us the certainty of predictability. We can take advantage of this certainty by creating a gulp task to automate the "instantiation" of our components.

```text
$npm run component -- --name componentName
```

will generate component-name component to following path: lib/component-name

```text
⋅⋅⋅⋅⋅⋅lib/component-name/
⋅⋅⋅⋅⋅⋅⋅⋅lib/component-name.module.js // can be exported to publish on npm
⋅⋅⋅⋅⋅⋅⋅⋅lib/component-name.component.js
⋅⋅⋅⋅⋅⋅⋅⋅lib/component-name.controller.js
⋅⋅⋅⋅⋅⋅⋅⋅lib/component-name.html
⋅⋅⋅⋅⋅⋅⋅⋅lib/component-name.scss // scoped to affect only its own template
⋅⋅⋅⋅⋅⋅⋅⋅lib/component-name.spec.js // contains passing demonstration tests
```

To generate a component, run:

```text
$npm run component -- --name componentName
```

The parameter following the `--name` flag is the name of the component to be created. Ensure that it is unique or it will overwrite the preexisting identically-named component.

The component will be created, by default, inside `lib/`. To change this, apply the `--parent` flag, followed by a path relative to `lib/`.

For example, running

```text
 $npm run component -- --name signup --parent auth
```

will create a `signup` component at \`lib/auth/signup.

Running

```text
npm run component -- --name footer --parent ../common
```

creates a `footer` component at `./lib/../common/footer`.

Because the argument to `--name` applies to the folder name **and** the actual component name, make sure to **camelcase** the component names.

### Step By Step Start Guide

* Step 1: `$git clone https://github.com/Paraboly/angularjs-es6-component-boilerplate.git`
* Step 2: `$cd ./angularjs-es6-component-boilerplate`
* Step 3: `$npm i`
* Step 4: `$npm run component -- --name example`
* Step 5: Update index.html _\(uncomment line 42,52\)_ and index.js _\(uncomment line 4,5\)_
* Step 6: \(Development\): `$npm start` 
* Step 7: \(Build\): `$npm run build` which creates dist folder
* Step 8: \(Production\): `$npm run build-serve` will serve project from dist folder. Step 7 required for this step.
* Step 9: \(NPM Publish\): `$cd ./dist;npm init;npm publish;`

## Starter Kit Support and Questions

> Contact us, anytime, regarding anything about this project.

* [Email: Kuray aka FreakyCoder](kuray.ogun@paraboly.com)
* [Email: Haldun aka SchemeSonic](haldun.yildiz@paraboly.com)

