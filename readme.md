#BLISS Go

##The leanest, sassiest and quickest Drupal quickstart framework.

###Getting started

To get started **copy** the cloned folder to your projects `sites/all/themes` folder. It's important to use the copy command to make sure that any hidden dot files (such as `.gitignore`) are not left behind.

###Compile Sass
BLISS Go ships with a built in bash file that will perform all the nessecary Sass compilation for you including making sure the CSS is output to the correct path. It will also make checks to make sure you have Ruby installed and if not will install it for you.

Run this commend from the root of the theme to compile the Sass. `$ ./compile-sass.sh`

Obviously feel free to use your own preprocessor tools but make sure Sass is compiled to `css/main.css`.