import Drupal from 'drupal'
import jQuery from 'jquery'

Drupal.behaviors.greeting = {
  attach: function (context, settings) {
    console.log('Hello, Drupal!')
  }
}