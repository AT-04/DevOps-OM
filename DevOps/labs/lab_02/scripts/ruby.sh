#!/usr/bin/env bash
echo "#### Installing Ruby 2.4 ####"
apt-get update
apt-add-repository -y ppa:brightbox/ruby-ng
apt-get update
apt-get install -y ruby2.4 ruby2.4-dev
echo "#### Version ####"
ruby -v
echo "#### Installing Gem Bundler ####"
sudo gem install bundler
    