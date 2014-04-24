<?php

function blissgo_preprocess_page(&$vars, $hook) {

  /**
   * Add typekit asynchronously
   */ 

  // drupal_add_html_head(array(
  //   "#type" => "markup",
  //   "#markup" => "<script>
  //       TypekitConfig = {
  //         kitId: 'kitidhere',
  //         scriptTimeout: 4000
  //       };
  //       (function() {
  //         var h = document.getElementsByTagName('html')[0];
  //         h.className += ' wf-loading';
  //         var t = setTimeout(function() {
  //           h.className = h.className.replace(/(\s|^)wf-loading(\s|$)/g, '');
  //           h.className += ' wf-inactive';
  //         }, TypekitConfig.scriptTimeout);
  //         var tk = document.createElement('script');
  //         tk.src = '//use.typekit.com/' + TypekitConfig.kitId + '.js';
  //         tk.type = 'text/javascript';
  //         tk.async = 'true';
  //         tk.onload = tk.onreadystatechange = function() {
  //           var rs = this.readyState;
  //           if (rs && rs != 'complete' && rs != 'loaded') return;
  //           clearTimeout(t);
  //           try { Typekit.load(TypekitConfig); } catch (e) {}
  //         };
  //         var s = document.getElementsByTagName('script')[0];
  //         s.parentNode.insertBefore(tk, s);
  //       })();
  //     </script>"
  // ), "typekit");

  /**
   * Add Viewport meta tag to HTML
   */ 

  // drupal_add_html_head(array(
  //   '#type' => 'markup',
  //   '#markup' => '
  //     <meta name="viewport" content="width=device-width, initial-scale=1" />
  //   '),
  //   'viewport',
  // );

}

/**
 * Turn off styles from system/contrib modules
 */

function blissgo_css_alter(&$css) {
  unset($css[drupal_get_path('module', 'system') . '/system.theme.css']);
  unset($css[drupal_get_path('module', 'system') . '/system.menus.css']);
}

