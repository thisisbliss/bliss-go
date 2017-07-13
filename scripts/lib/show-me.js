/**
 * This would have been declared as a behavior previously. Notice the
 * passing of `context` and `settings` which are coming from global scope.
 * Drupal makes it easy for us to split things out into modules because it
 * already has a concept of behaviors, and for the most part, each behavior
 * should be it's own module. 
 * 
 * welcomeBanner is the default export, meaning this is what you will get if you
 * import the file without curly braces (see entry.js)
 */
export default {
  attach: function (context, settings) {
    var greeting = 'Welcome to BLISS Go!';
    console.log(greeting);
  }
}

// We can also export single functions, object, variables etc
export function sanityCheck() {
  console.log('Everything is good...');
}