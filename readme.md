<!-- ![Bliss Go](screenshot.png "Bliss Go") -->

# Bliss Go

The leanest, sassiest and quickest Drupal quickstart framework.

<span class="badge-daviddm"><a href="https://david-dm.org/thisisbliss/bliss-go" title="View the status of this project's dependencies on DavidDM"><img src="https://david-dm.org/thisisbliss/bliss-go/status.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/thisisbliss/bliss-go?type=dev" title="View the status of this project's development dependencies on DavidDM"><img src="https://david-dm.org/thisisbliss/bliss-go/dev-status.svg" alt="Dependency Status" /></a></span>

## Getting started

To get started **copy** the cloned folder to your projects `/themes` folder. It's important to use the copy command to make sure that any hidden dot files (such as `.gitignore`) are not left behind.

## Installation

### Prerequisites
- NVM

### Install dependencies
1. Ensure you are using the latest LTS version of Node. You can verify this by checking the latest [LTS release](https://nodejs.org/en/) and comparing to the output of the `node -v` command.
2. Run the `npm install` command in the root directory of the theme.

If you have previously installed the dependencies using a different version of Node, be sure to delete the `node_modules` directory prior to installation. This will help avoid any incompatibility issues between different versions of nodes, particularly in the case of native extensions.

## Usage

Bliss go makes use of [Gulp](https://gulpjs.com/), [Webpack](https://webpack.js.org/) and [NPM scripts](https://docs.npmjs.com/misc/scripts) to handle building, and other utility tasks.

Bliss go makes use of various NPM scripts to make it easy to get up and running.

* `npm start` - compile styles and scripts and watch for any changes.
* `npm run watch` - compile styles and scripts and watch for any changes.
* `npm run build` - compile styles and script for distribution.
* `npm test` - run any tests present in the project.

## Linting

Bliss go makes use of various quality control tools, including linters which are responsible for checking code follows a standard style and format. You can view the rules enforced for styles in `.sass-lint.yml` and rules enforced for scripts in `.eslintrc`. 

For more information, refer to the [sass-lint](https://github.com/sasstools/sass-lint) and [eslint](https://eslint.org/) documentation.

## Help

Use of npm may require use of sudo, in which case, permission issues may need [resolving](https://docs.npmjs.com/getting-started/fixing-npm-permissions). 