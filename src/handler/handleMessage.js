const { updateRSN } = require('../db/update.js');

async function handleMessage(message) {
	if (message.author.bot && message.embeds.length != 0) {
		if (message.embeds[0].title.includes("Member Name Changed")) {
			const [rsn, newRSN] = message.embeds[0].description
				.split(" → ")
				.map(name => name.replace(/`/g, "")
				.trim());
			await updateRSN(rsn, newRSN)
		} else if (message.embeds[0].title.includes("New group member")) {
			const rsns = message.embeds[0].description
				.replace(/<[^>]*>/g, '')
				.split('\n')
				.map(line => line.trim());
			rsns.forEach((rsn) => {
				//setJoined(rsn, Math.floor(new Date().getTime() / 1000))
			});
		} else if (message.embeds[0].title.includes("Group member left")) {
			const rsn = message.embeds[0].title.split(":")[1].trim();
			//setLeft(rsn, Math.floor(new Date().getTime() / 1000))
		}
	} else if (message.author.bot) return;
	console.log("> Message log: " + message.content);
}

module.exports = {
  handleMessage
};