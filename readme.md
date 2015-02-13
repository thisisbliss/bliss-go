#BLISS Go

##The leanest, sassiest and quickest Drupal quickstart framework.

###Getting started

To get started **copy** the cloned folder to your projects `sites/all/themes` folder. It's important to use the copy command to make sure that any hidden dot files (such as `.gitignore`) are not left behind.

###Watch and Build

BLISS Go comes with two shell scripts that automate certain front-end wordflows. 

####Watch

`./watch` will compile Sass and then watch for future changes. It produces an uncompressed CSS file.

####Build

`./build` will compile Sass to compressed CSS ready for production. It will also run imageoptim on the images directory.

### Branches
BLISS Go ships with a stable Drupal 7 branch (7.x) and a development Drupal 8 branch (8.x). `master` is currently mapped to the 7.0 branch.