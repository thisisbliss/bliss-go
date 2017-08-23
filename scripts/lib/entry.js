// Import the default export, which happens to match Drupal behavior
// expectation, from './behavior-example.js'
import myBehavior from './behavior-example';

// Import non-default exports from './another-modules.ks'
import {PI, double} from './another-module';

/**
 * A regular old Drupal behavior imported from './behavior-example.js'. Although
 * there is no hard requirement to put behaviours in their own modules, in most
 * cases this will be the best option to keep related code modularized.
 */
Drupal.behaviors.myBehavior = myBehavior;

var doulblePi = double(PI);
