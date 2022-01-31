#!/bin/bash
echo "install docker"
sudo apt update &&
sudo apt install apt-transport-https ca-certificates curl software-properties-common &&
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - &&
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable" &&
sudo apt update &&
sudo apt install docker-ce &&
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)"  -o /usr/local/bin/docker-compose &&
sudo mv /usr/local/bin/docker-compose /usr/bin/docker-compose &&
sudo chmod +x /usr/bin/docker-compose &&
echo "End docker"
echo "install git"
sudo apt update &&
sudo apt install git
git --version
it config --global user.name "oburakergen"
git config --global user.email "burak.ergen@outlook.com.tr"
echo "end git"

echo "chmod u+r+x server.sh

     ./server.sh"