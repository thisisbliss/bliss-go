#!/bin/bash
# Run a simple set of Sass commands.

if which node >/dev/null; then
  echo "Starting gulp watch task..."
  gulp watch
else
  echo "Node is not installed. Install from https://nodejs.org/en/ and run again."
fi
