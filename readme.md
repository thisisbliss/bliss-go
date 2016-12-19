![Bliss Go](screenshot.png "Bliss Go")

#Bliss Go 8

The leanest, sassiest and quickest Drupal quickstart framework.

## Getting started

To get started **copy** the cloned folder to your projects `/themes` folder. It's important to use the copy command to make sure that any hidden dot files (such as `.gitignore`) are not left behind.

## Sass

This will break down the Bliss Go partial structure and explain the purpose of each file.

- **abstracts**: Contains utility code such as variables, mixins and placeholders.
- **base**: Contains general, base styles for elements, such as typography and tables.
- **components**: Contains styles for self contained, reusable and small components or widgets, such as a search form.
- **layout**: Contains styles for laying out the site and large components such as header, footer and grid.
- **pages**: Contains styles for specific pages, such as homepage or single blog post.
- **themes**: Contains styles for different themes. Probably not needed in most projects.
- **vendors**: Contains vendor code such a normalize, reset or a grid library.

## Installation

Prerequisites
- Node (https://nodejs.org/en/) **Please use LTS version of Node. Currently 6.9.2.**

Use of npm may require use of sudo.

Bliss Go uses Gulp to manage the compiling of Sass into CSS as well as other tasks such as linting and autoprefixing. Gulp should be installed globally on your system.

Install Gulp globally:
```
npm install -g gulp
```
Install dependencies from the root of the bliss-go theme:
```
npm install
```
The default task to compile & watch Sass with Autoprefixr and Sass Lint.
From the root of the bliss go theme use the command:
```
gulp
```

## Sass Lint

Bliss Go uses Sass Lint to help maintain certain rules in our code.

### Strict rules

Rules which when broken will cause Sass to stop compiling or produce an error.

- Indentation of 2 spaces **Indentation of less/more than 2 spaces will error**
- No extends **Do not use extends. Instead utilise Sass Mixins**
- Trailing Semi-colon **Each property declaration should end in a semi-colon**

### General rules

#### Mixins
- Mixins should become before all properties of a selector.

#### Line Spacing
- One declaration per line
- Empty line should be added between selector blocks
- Single line per selector

#### Disallows
- No duplicate properties
- No empty rulesets
- No IDs
- No important
- No misspelled properties
- No qualifying elements
- No url protocols
- No vendor prefixes where possible (prefixes handled by Autoprefixr)

#### Name Formats
- Variable name format should use dashes
- Classname format - use BEM name format

#### Style Guide
- Brace style split accross two lines
- Nesting depth should be less than 3
- Double quotes for strings
- URLs should be wrapped in quotes
- Zero values should not end in unit (px, rem, em etc)

#### Inner Spacing
- Space after colon
- Space before brace
