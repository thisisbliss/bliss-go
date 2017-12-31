import Drupal from 'drupal'

Drupal.behaviors.greeting = {
  attach: function (context, settings) {
    console.log('Hello, Drupal!')
  }
}
