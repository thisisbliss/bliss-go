"use strict";

(function (Drupal, WebFont) {
  'use strict';

  Drupal.behaviors.webfonts = {
    attach: function attach(context, settings) {
      WebFont.load({
        google: {
          families: ['Source Sans Pro:300,400,600,700,900:latin']
        }
      });
    }
  };
})(window.Drupal, window.WebFont);
//# sourceMappingURL=webfonts.js.map
