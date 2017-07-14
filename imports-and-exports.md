# ES6 imports and exports

Webpack allows us to import and export modules using ES6 syntax. Using the `import` and `export` statements we can modularize, re-use and test code when required, without being concerned with other code used on a project. A few benefits we gain by using webpack over simple concatination is as follows:

* Modularize code concerned with a single purpose, making it easy to maintain and understand.
* No globals, meaning no need to wrap our javascript in [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression).
* Dead asset elimination. Although we will only be using webpack for Javascript bundling (for now), we can make use of 'tree-shaking' which means we can only import the code we need.
* Code splitting. We can split vendor code out from custom code and cache it for a long period of time. This means when code changes, only new custom code needs to be loading by the browser, resulting in faster load time.
* Cache busting. Each bundle can be given a specific suffix based on it's content. This means that browser cache will automatically be invalidated when new code goes live.

You don't (or shouldn't) have to learn anything new to take advantage of bundling, other than the `import` and `export` statements. I will cover a few of the cases we will be likely to encounter in our development.

> The export statement is used to export functions, objects or primitives from a given file (or module).

```javascript
// export as the default, this is what will mostly be used for 'Drupal.beahvior'
export default someBehavior;

export default function (someArg) {
  doSomethingWithSomeArg(someArg)
};

export default function someFunction (someArg) {
  doSomethingWithSomeArg(someArg)
}

// export non-default things
export { name1, name2 }
```

For other export options, see [MDN](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export).

> The import statement is used to import functions, objects or primitives that have been exported from an external module, another script, etc.

```javascript
// import the default export
import someBehavior from './someBehavior.js'; // .js isn't required, but is used for demonstration. This is a relative file
Drupal.behaviors = {
  someBehaviors: someBehavior
}

import someDependency from 'a-node-module'; // non-relative imports seatch the node_modules directory for the dependency
someDependency();

// import the name1 and name2 non-default exports from './someBehavior.js';
import { name1, name2 } from './someBehavior';
name1.name1isAnObject();

// import all exports in a someBehavior object
import * as someBehavior from './someBehavior';
someBehavior.someExport();
```

For other import options, see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).