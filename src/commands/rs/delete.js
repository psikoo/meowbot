const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const { deleteRSN } = require("../../db/delete.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("delete")
		.setDescription("Delere a saved RSN")
		.addStringOption(option => option
			.setName("rsn")
			.setDescription("RSN")
			.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		const rsn = interaction.options.getString("rsn");
    await interaction.deferReply({});
		await deleteRSN(rsn);
		await interaction.editReply({ content: `Deleted saved RSN: ${rsn}` });
	},
};
