#!/bin/bash
# Ready all our static assetts ready for produciton.

SASS_file="css/sass/main.scss"
CSS_file="css/main.css"

# Check is Sass is installed
if which sass >/dev/null; then
  echo "Reading "$SASS_file" and compiling to "$CSS_file"..."
  sass "$SASS_file":"$CSS_file" --style compressed
  echo "Sass built and compressed"
else
  echo "Sass is not installed. Installing now..."
  sudo gem install sass && sass -v && echo "Sass is now installed. Please run the script again."
fi

# Check if imageoptim is installed
if which imageoptim >/dev/null; then
  find ./images -name "*.png" -o -name "*.jpg" -o -name "*.jpeg"  | imageoptim --quit
else
  echo "ImageOptim is not installed, installing now..."
  npm install -g imageoptim-cli && echo "ImageOptim is now installed. Please run the script again."
fi

echo "Build complete, ready for production."
