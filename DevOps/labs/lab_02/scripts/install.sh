#!/usr/bin/env bash

echo "----------- Installing Node.js 6 ----------- "
# Install Node.js 6.x repository
curl -sL https://deb.nodesource.com/setup_6.x | bash -

# Install Node.js and npm
apt-get install -y nodejs
