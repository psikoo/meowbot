const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ccguide")
		.setDescription("A quick guide to help those unfamiliar with how to join via the cc or via meeting at the GE"),
	async execute(interaction) {
		const file1 = new AttachmentBuilder('./assets/file1.png');
		const file2 = new AttachmentBuilder('./assets/file2.png');
		await interaction.reply({ 
			content: "How to join the Clan Chat on osrs:\n- Click the chat channel panel in the bottom left of the interface then, select the tab with the two green faces.\n- Hit join and type in (case sensitive so capital Q): Queermunity\n- After you join the clan will be shown in the two blue faces button.\n- After youre in as a guest, go to the Request an Invite channel in the discord and ask a mod or admin for an invite.\n- Hit the settings button once they open applications and apply.", 
			files: [file1, file2]
		});
	},
};
