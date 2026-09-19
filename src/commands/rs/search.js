const { SlashCommandBuilder, MessageFlags, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const { getID, getRSN, getNotes } = require('../../db/read.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("search")
		.setDescription("Search by user or RSN")
		.addUserOption(option => option
			.setName("user")
			.setDescription("Discord user"))
		.addStringOption(option => option
			.setName("rsn")
			.setDescription("RSN"))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		user = interaction.options.getMember("user");
		rsn = interaction.options.getString("rsn");
		
		var rows;
		if(user === null) {
			if(rsn === null ) await interaction.reply({ content: "You need to give either a user or an RSN", flags: MessageFlags.Ephemeral });
			else rows = await getRSN(rsn);
		} else rows = await getID(user.id);

		if(rows.length === 0) return interaction.reply("No data found! :3");
		else {
			desc = "";

			const member = await interaction.guild.members.fetch(rows[0].user);
			if (!member) console.log('!!!!Member not found in this guild.');
			else if (member.roles.cache.has("1367972356093509755")) desc += ":white_check_mark: Verified member \n\n";
			else desc += ":x: Unverified member \n\n";

			notes = await getNotes(rows[0].user);
			if(notes.length != 0) {
				desc += "Notes: \n"
				notes.forEach((note) => {
					desc += "("+note.id+") "+note.note+"\n"
				});
				desc += "\n"
			}
			rows.forEach((row) => {
				if(row.old) desc += "<@"+row.user+"> - ~~"+row.rsn+"~~\n"
				else desc += "<@"+row.user+"> - "+row.rsn+"\n"
			});
			
			const embed = new EmbedBuilder()
				.setTitle("Search result:")
				.setTimestamp()
				.setDescription(desc);
			
			await interaction.reply({ embeds: [embed], allowedMentions: { parse: [] } });
		}
	},
};
