async function handleCommand(interaction) {
	const command = interaction.client.commands.get(interaction.commandName);
	if (!command) { console.error(`🟥 ${interaction.commandName} doesn"t exist`); return; }

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: "🟥 Error executing command (please message Cait about this)", ephemeral: true });
	}
}

module.exports = {
  handleCommand
};