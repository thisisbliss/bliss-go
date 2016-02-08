#!/bin/bash
# Install all nessecary node and gulp dependencies

if which node >/dev/null; then
  echo "Installing dependencies... password required for sudo"
  sudo npm install
  echo "Starting watch file..."
  ./watch.sh
else
  echo "Node is not installed. Install from https://nodejs.org/en/ and run again."
fi
