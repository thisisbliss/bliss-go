// import ./welcomeBanner
var welcomeBanner = require('./welcome-banner');

// Assign ./welcomeBanner to a Drupal behavoir
Drupal.behaviors = {
  welcomeBanner: welcomeBanner
}