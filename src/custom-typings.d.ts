/*
 * Type Defintions
 * Remove these imports with TypeScript 2.0
 * If your type defintion is missing open an issue https://github.com/DefinitelyTyped/DefinitelyTyped/issues
 * And create your own read below
 */
import "@types/angular-protractor"
import "@types/core-js"
import "@types/hammerjs"
import "@types/jasmine"
import "@types/node"
import "@types/selenium-webdriver"
import "@types/source-map"
import "@types/uglify-js"
import "@types/webpack"

/*
 * Custom Type Definitions
 * When including 3rd party modules you also need to include the type definition for the module
 * if they don't provide one within the module. You can try to install it with @types

npm install @types/node // where node is your module name
npm install @types/lodash

 * If you can't find the type definition in the registry we can make an ambient/global definition in
 * this file for now. For example

declare module "my-module" {
 export function doesSomething(value: string): string;
}

 * If you are using a CommonJS module that is using module.exports then you will have to write your
 * types using export = yourObjectOrFunction with a namespace above it
 * notice how we have to create a namespace that is equal to the function we're assigning the export to

declare module "jwt-decode" {
  function jwtDecode(token: string): any;
  namespace jwtDecode {}
  export = jwtDecode;
}

 *
 * If you're prototying and you will fix the types later you can also declare it as type any
 *

declare var assert: any;
declare var _: any;
declare var $: any;

 *
 * If you're importing a module that uses Node.js modules which are CommonJS you need to import as
 *

import * as _ from 'lodash'

 * If you can not find your type definition in @types then create an issue
 * https://github.com/DefinitelyTyped/DefinitelyTyped/issues
 *
 */


// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var ENV: string;
declare var HMR: boolean;

interface GlobalEnvironment {
  ENV;
  HMR;
}

interface Es6PromiseLoader {
  (id: string): (exportName?: string) => Promise<any>;
}

type FactoryEs6PromiseLoader = () => Es6PromiseLoader;
type FactoryPromise = () => Promise<any>;

type AsyncRoutes = {
  [component: string]: Es6PromiseLoader |
                               Function |
                FactoryEs6PromiseLoader |
                         FactoryPromise
};


type IdleCallbacks = Es6PromiseLoader |
                             Function |
              FactoryEs6PromiseLoader |
                       FactoryPromise ;

interface WebpackModule {
  hot: {
    data?: any,
    idle: any,
    accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
    decline(dependencies?: string | string[]): void;
    dispose(callback?: (data?: any) => void): void;
    addDisposeHandler(callback?: (data?: any) => void): void;
    removeDisposeHandler(callback?: (data?: any) => void): void;
    check(autoApply?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    apply(options?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    status(callback?: (status?: string) => void): void | string;
    removeStatusHandler(callback?: (status?: string) => void): void;
  };
}


interface WebpackRequire {
    (id: string): any;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure(ids: string[], callback: (req: WebpackRequire) => void, chunkName?: string): void;
    context(directory: string, useSubDirectories?: boolean, regExp?: RegExp): WebpackContext;
}

interface WebpackContext extends WebpackRequire {
    keys(): string[];
}

interface ErrorStackTraceLimit {
  stackTraceLimit: number;
}


// Extend typings
interface NodeRequire extends WebpackRequire {}
interface ErrorConstructor extends ErrorStackTraceLimit {}
interface NodeRequireFunction extends Es6PromiseLoader  {}
interface NodeModule extends WebpackModule {}
interface Global extends GlobalEnvironment  {}
