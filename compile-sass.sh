#!/bin/bash
# Run a simple set of Sass commands.
 
SASS_file="css/sass/main.scss"
CSS_file="css/main.css"

# Check is Sass is installed
if which sass >/dev/null; then
  echo "Reading "$SASS_file" and compiling to "$CSS_file"..."
  sass "$SASS_file":"$CSS_file"
  echo "Now watching changes in "$SASS_file" and compiling to "$CSS_file"..."
  sass --watch "$SASS_file":"$CSS_file"
  wait
else
  echo "Sass is not installed. Installing now..."
  sudo gem install sass && sass -v && echo "Sass is now installed. Please run the script again."
fi
 
