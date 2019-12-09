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
1. Make sure you have the correct version of Node. This can be installed for you using NVM by cd-ing in to the theme directory and running `nvm install` followed by `nvm use`.
2. Run the `npm install` command in the theme directory.

If you have previously installed the dependencies using a different version of Node, be sure to delete the `node_modules` directory prior to installation. This will help avoid any incompatibility issues between different versions of nodes, particularly in the case of native extensions.

## Usage

Bliss go makes use of [Gulp](https://gulpjs.com/), [Webpack](https://webpack.js.org/) and [NPM scripts](https://docs.npmjs.com/misc/scripts) to handle building, and other utility tasks.

Bliss go makes use of various NPM scripts to make it easy to get up and running.

* `npm start` - compile styles and scripts and watch for any changes.
* `npm run watch` - compile styles and scripts and watch for any changes.
* `npm run build` - compile styles, scripts and images for distribution.
* `npm run css` - lint and compile styles only.
* `npm run js` - lint and compile javascript only.

## Linting

Bliss go makes use of various quality control tools, including linters which are responsible for checking code follows a standard style and format. You can view the rules enforced for styles in `.sass-lint.yml`. Javascript linting is handled by Standard, which has no configuration. 

For more information, refer to the [sass-lint](https://github.com/sasstools/sass-lint) and [Standard](https://standardjs.com/) documentation.

## Help

Use of npm may require use of sudo, in which case, permission issues may need [resolving](https://docs.npmjs.com/getting-started/fixing-npm-permissions). 