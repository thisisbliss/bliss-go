import Drupal from 'drupal'
// import $ from 'jquery'

Drupal.behaviors.greeting = {
  attach: function (context, settings) {
    const greeting = 'Hello, Drupal!'
    console.log(greeting)
  }
}
