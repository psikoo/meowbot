const { SlashCommandBuilder, MessageFlags, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const { deleteRSN } = require('../../db/delete.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("delete")
		.setDescription("Delere entry based on RSN")
		.addStringOption(option => option
			.setName("rsn")
			.setDescription("RSN")
			.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		rsn = interaction.options.getString("rsn");
		await deleteRSN(rsn);
		await interaction.reply({ content: "Deleted "+rsn });
	},
};
