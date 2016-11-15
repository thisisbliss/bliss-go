#BLISS Go

The leanest, sassiest and quickest Drupal quickstart framework.

## Getting started

To get started **copy** the cloned folder to your projects `sites/all/themes` folder. It's important to use the copy command to make sure that any hidden dot files (such as `.gitignore`) are not left behind.


### Branches

BLISS Go ships with a stable Drupal 7 branch (7.x) and a development Drupal 8 branch (8.x). `master` is currently mapped to the 7.0 branch.

## Sass

This will break down the BLISS Go partial structure and explain the purpose of each file.

- **abstracts**: Contains utility code such as variables, mixins, functions and placeholders.
- **base**: Contains general, base styles for elements, such as typography and tables.
- **components**: Contains styles for self contained, reusable and small components or widgets, such as a search form.
- **layout**: Contains styles for laying out the site and large components such as header, footer and grid.
- **pages**: Contains styles for specific pages, such as homepage or single blog post.
- **themes**: Contains styles for different themes. Probably not needed in most projects.
- **vendors**: Contains vendor code such a normalize or a grid library.

## Dependencies and Build

BLISS Go comes with two shell scripts that automate certain front-end workflows.

#### Install

`$ ./install.sh` gathers all the dependencies defined in package.json and installs them via npm (node package manager). The watch file will run on completion.

#### Watch

`$ ./watch.sh` runs a gulp watch task which lints and compiles Sass.

#### Manual install and build

Prerequisites
- Node (https://nodejs.org/en/)

Use of npm may require use of sudo.

Install Gulp globally:
```
npm install -g gulp
```
Install dependencies from the root of the bliss-go theme:
```
npm install
```
Default: Compile & Watch Sass with Autoprefixr and Sass Lint.
From the root of the bliss go theme:
```
gulp
```
