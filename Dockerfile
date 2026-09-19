FROM node:latest

RUN mkdir -p /usr/src/meowBot
WORKDIR /usr/src/meowBot

COPY package.json /usr/src/meowBot
RUN npm install

COPY . /usr/src/meowBot

# Start the bot.
RUN node ./src/deploy.js
CMD ["node", "./src/discordBot.js"]
