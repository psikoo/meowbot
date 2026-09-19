const { SlashCommandBuilder, MessageFlags, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const { deleteNote } = require('../../db/delete.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("deletenote")
		.setDescription("Delete a note")
		.addStringOption(option => option
			.setName("id")
			.setDescription("Note ID")
			.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		id = interaction.options.getString("id");
		await deleteNote(id);
		await interaction.reply({ content: "Deleted note "+id });
	},
};
