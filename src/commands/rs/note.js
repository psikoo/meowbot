const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const { createNote } = require("../../db/create.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("note")
		.setDescription("Save a note for a user")
		.addUserOption(option => option
			.setName("user")
			.setDescription("User")
			.setRequired(true))
		.addStringOption(option => option
			.setName("note")
			.setDescription("Note")
			.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		const user = interaction.options.getMember("user");
		const note = interaction.options.getString("note");
    await interaction.deferReply({});
		await createNote(user.id, note)
		await interaction.editReply({ content: `Saved note for <@${user.user.id}>: ${note}` });
	},
};
