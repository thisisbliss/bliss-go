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

  // only do this for page-type nodes and only if Path module exists

  // Page template suggestions off alias
  if (module_exists('path') && isset($vars['node']) && $vars['node']->type == 'page') {
    // look up the alias from the url_alias table
    $source = 'node/' .$vars['node']->nid;
    $alias = db_query("SELECT alias FROM {url_alias} WHERE source = '$source'")->fetchField();

    if ($alias != '')  {
      // build a suggestion for every possibility
      $parts = explode('/', $alias);
      $suggestion = '';
      foreach ($parts as $part) {
        if ($suggestion == '') {
          // first suggestion gets prefaced with 'page--'
          $suggestion .= "page--$part";
        } else {
          // subsequent suggestions get appended
          $suggestion .= "__$part";
        }
        // add the suggestion to the array
        $vars['theme_hook_suggestions'][] = $suggestion;
      }
    }
  }

}

/**
 * Implements hook_preprocess_node().
 */

function blissgo_preprocess_node(&$vars) {

  // Adds a node template suggestion for teasers e.g. node--article--teaser.tpl.php
  if($vars['view_mode'] == 'teaser') {
    $vars['theme_hook_suggestions'][] = 'node__' . $vars['type'] . '__teaser';
    $vars['theme_hook_suggestions'][] = 'node__teaser';
  }
  
}

/**
 * Turn off styles from system/contrib modules
 */
function blissgo_css_alter(&$css) {
  unset($css[drupal_get_path('module', 'system') . '/system.theme.css']);
  unset($css[drupal_get_path('module', 'system') . '/system.menus.css']);
  unset($css[drupal_get_path('module', 'system') . '/system.messages.css']);
}

/**
 * Allows use of theme snippets - Example
 */
// function blissgo_theme() {
//   return array(
//     'header' => array(
//       'arguments' => array(),
//       'template' => 'templates/header',
//     ),
//     'footer' => array(
//       'arguments' => array(),
//       'template' => 'templates/footer',
//     ),
//   );
// }

