const onInteraction = async (interaction) => {
  if (!interaction.isChatInputCommand() || !interaction.isCommand()) return;

  switch (interaction.commandName) {
    case 'test':
      await interaction.reply('Test response from Bot');
      break;
  }
};

export { onInteraction };
