#BLISS Go

The leanest, sassiest and quickest Drupal quickstart framework.

## Getting started

To get started **copy** the cloned folder to your projects `sites/all/themes` folder. It's important to use the copy command to make sure that any hidden dot files (such as `.gitignore`) are not left behind.


### Branches

BLISS Go ships with a stable Drupal 7 branch (7.x) and a development Drupal 8 branch (8.x). `master` is currently mapped to the 7.0 branch.

## Sass

This will break down the BLISS Go partial structure and explain the purpose of each file.

### Var

The **var** folder contains the projects variables and reusable Sass components such as mixins.

`_vars.scss` defines all the variables for a project. For example colors, font sizes, font families and other reusable declarations.

`_mixins.scss` defines all Sass mixins you might want to add to a project. Mixins can be used to do the heavy lifting of complex CSS declarations like gradients, shadows or functions for adding fallbacks for font sizes.

### Base

The **base** folder defines the basic setup of your CSS styles.

`_reset.css` Imports the popular CSS reset into the document to remove all browser added styles. This file is unlikely to ever change. If you feel like the project does not require such a heavy handed approach consider replaceing this with a Normalise.

`_styleset.scss` This file defines styles for low level HTML elements sich as headings, paragraphs, links, blockquotes etc.

### Modules

In this context modules are small and reusable parts of CSS that can be applied to any element in the HTML document with dictating it's position or size (width/height). Only 2 basic partials are included but add more if the project requires.

`_buttons.scss` Defines general button styles and any button modifiers.

`_lists.scss` Defines general list styles. For example simple lists or block style lists.

### Sections

Sections defines the basic layout structure of the site. Sections are imported in their heirarchy so to maintain the cascade. Add more if needed, for instance if a file is becoming unmaintainable, but rememeber maintain the cascade. Section partials purpose should be clear.

### Components

Components pertain to Drupal specific elements.

`_messages.scss` Defines styles for Drupal rendered messages such as success or error messages.

`_pager.scss` Defines styles for Drupal generated paging styles such as what the views module outputs.

`_tabs.scss` Defines styles for Drupals tab system which contains links to edit pages etc inline on the page.

## Dependencies and Build

BLISS Go comes with two shell scripts that automate certain front-end workflows.

#### Install

`$ ./install.sh` gathers all the dependencies defined in package.json and installs them via npm (node package manager). The watch file will run on completion.

#### Watch

`$ ./watch.sh` runs a gulp watch task which lints and compiles Sass.
