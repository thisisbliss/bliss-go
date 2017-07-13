// import welcomeBanner from 'show-me.js', notice the lack of curcly braces,
// meaning we're importing the default export.
import welcomeBanner from './show-me';

// import sanityCheck from 'show-me.js', notice the curly braces, meaning we're
// importing a non-default export.
import { sanityCheck } from './show-me';

// sanityCheck is just a function, we can use it like any other function
sanityCheck();

// welcomeBanner is a drupal behavior object, which means we can simply add it
// to the behaviors object and all is well
Drupal.behaviors = {
  welcomeBanner: welcomeBanner
}