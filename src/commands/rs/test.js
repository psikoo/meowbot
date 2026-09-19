const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Sends a member name change embed notification'),
        
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Member Name Changed')
            .setURL('https://wiseoldman.net/players/knives_girl')
            .setDescription('`caitmoe` → `test`')
            .setColor('#2979B6');

        await interaction.reply({ embeds: [embed] });
    },
};