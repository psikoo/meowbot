const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const { createUser } = require("../../db/create.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("save")
		.setDescription("Link a discord account to an RSN")
		.addUserOption(option => option
			.setName("user")
			.setDescription("User")
			.setRequired(true))
		.addStringOption(option => option
			.setName("rsn")
			.setDescription("RSN")
			.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		const user = interaction.options.getMember("user");
		const rsn = interaction.options.getString("rsn");
    await interaction.deferReply({});
		await createUser(user.id, rsn);
		await interaction.editReply({ content: `Saved <@${user.user.id}> as ${rsn}` });
	},
};
