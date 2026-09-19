const { SlashCommandBuilder, MessageFlags, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const { createNote } = require('../../db/create.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("note")
		.setDescription("Set a users note")
		.addUserOption(option => option
			.setName("user")
			.setDescription("Discord user")
			.setRequired(true))
		.addStringOption(option => option
			.setName("note")
			.setDescription("Note")
			.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		user = interaction.options.getMember("user");
		note = interaction.options.getString("note");
		createNote(user.id, note)
		await interaction.reply({ content: "Saved note for <@"+user.user.id+">: "+note });
	},
};
