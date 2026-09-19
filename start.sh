#!/bin/bash
sudo git stash
sudo git pull
sudo chmod +x ./start.sh
sudo docker build -t meow-bot:1 .
sudo docker compose down
sudo docker compose up -d