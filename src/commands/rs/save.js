const { SlashCommandBuilder, MessageFlags, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const { createUser } = require('../../db/create.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("save")
		.setDescription("Link a discord account to an RSN")
		.addUserOption(option => option
			.setName("user")
			.setDescription("Discord user")
			.setRequired(true))
		.addStringOption(option => option
			.setName("rsn")
			.setDescription("RSN")
			.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		user = interaction.options.getMember("user");
		rsn = interaction.options.getString("rsn");
		createUser(user.id, rsn)
		await interaction.reply({ content: "Saved <@"+user.user.id+"> as "+rsn });
	},
};
