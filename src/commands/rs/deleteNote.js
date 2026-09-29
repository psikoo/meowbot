const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const { deleteNote } = require("../../db/delete.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("deletenote")
		.setDescription("Delete a note by ID")
		.addStringOption(option => option
			.setName("id")
			.setDescription("Note ID")
			.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		const id = interaction.options.getString("id");
    await interaction.deferReply({});
		await deleteNote(id);
		await interaction.editReply({ content: `Deleted note ${id}` });
	},
};
