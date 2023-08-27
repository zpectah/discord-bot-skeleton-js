import { SlashCommandBuilder } from 'discord.js';
import { embedExample } from '../embed/index.js';
import { modalExample } from '../modals/index.js';

const commands = [
  {
    name: 'test',
    description: 'Bot Test Message command',
  },
  {
    name: 'test-embed',
    description: 'Bot Test Embed command',
  },
  {
    name: 'test-modal',
    description: 'Bot Test Modal command',
  },
];

const initializeCommands = () =>
  commands.map((command) => {
    new SlashCommandBuilder()
      .setName(command.name)
      .setDescription(command.description);
  });

const onInteraction = async (interaction) => {
  if (!interaction.isChatInputCommand() || !interaction.isCommand()) return;

  switch (interaction.commandName) {
    case 'test':
      await interaction.reply('Test response from Bot');
      break;

    case 'test-embed':
      await interaction.send({ embeds: [embedExample] });
      break;

    case 'test-modal':
      await interaction.showModal(modalExample);
      break;
  }
};

export { commands, initializeCommands, onInteraction };
