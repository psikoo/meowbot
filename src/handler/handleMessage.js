const { updateRSN } = require('../db/update.js');

async function handleMessage(message) {
	if (message.author.bot && message.embeds.length != 0) {
		if (message.embeds[0].title.includes("Member Name Changed")) {
			const [rsn, newRSN] = message.embeds[0].description.split(" → ")
				.map(name => name.replace(/`/g, "").trim());
			await updateRSN(rsn, newRSN)
		}
	} else if (message.author.bot) return;
	console.log("> Message log: " + message.content);
}

module.exports = {
  handleMessage
};