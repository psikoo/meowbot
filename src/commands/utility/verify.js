const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('Verify a discord member and send them a dm :3')
        .addUserOption(option => option
                .setName('user')
                .setDescription('User to veify')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

    async execute(interaction) {
        const targetMember = interaction.options.getMember('target');
        await interaction.deferReply({});
        try {
            await targetMember.roles.add(1367972356093509755);
            try {
                await targetMember.send("HiHi o/, you've been verified in the clan discord, which means you get access to a couple new channels. You can also pick a new clan chat icon if you'd like!  Over here you can find the available options. Once you find one that you like please let one of the mods/admins know so we can change it :3 https://discord.com/channels/1367869106673553460/1367886254590525440");
                return interaction.reply({ content: 'DM sent :)' });
            } catch (err) {
                return interaction.reply({ content: 'Failed to DM user' });
            }
        } catch (error) {
            console.error('Error assigning role:', error);
        }
    },
};