const { SlashCommandBuilder, AttachmentBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rolecheck")
        .setDescription("Checks all members for a specific role")
        .addRoleOption(option => option
            .setName("role")
            .setDescription("role")
            .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

    async execute(interaction) {
        await interaction.deferReply({});
        const targetRole = interaction.options.getRole("role");

        try {
            const members = await interaction.guild.members.fetch();
            const memberArray = Array.from(members.values());
            const memberProccessingSize = 100; 
            const withRole = [];
            const withoutRole = [];
            
            for (let i = 0; i < memberArray.length; i += memberProccessingSize) {
                const batch = memberArray.slice(i, i + memberProccessingSize);
                for (const member of batch) {
                    if (member.roles.cache.has(targetRole.id)) withRole.push(member);
                    else withoutRole.push(member);
                }

                // Yield control back to the event loop every batch
                if (i + memberProccessingSize < memberArray.length) {
                    await new Promise(resolve => setTimeout(resolve, 50));
                }
            }

            const embed = new EmbedBuilder()
                .setTitle(`Role check: ${targetRole.name}`)
                .addFields(
                    { name: "Total Server Members", value: `${members.size}`, inline: false },
                    { name: "Members without Role", value: `${withoutRole.length}`, inline: false },
                    { name: "Members with Role", value: `${withRole.length}`, inline: false },
                )
                .setTimestamp();

            const fileData = withoutRole.map(user => `${user.user.tag} (${user.id})`).join("\n");
            const attachment = new AttachmentBuilder(Buffer.from(fileData || "None"), { name: "membersWithoutRole.txt" });

            await interaction.editReply({
                embeds: [embed],
                files: [attachment]
            });

        } catch (error) {
            console.error("Error fetching members:", error);
        }
    },
};