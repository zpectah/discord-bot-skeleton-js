import { EmbedBuilder } from 'discord.js';

const embedExample = new EmbedBuilder()
  .setColor(0x009009)
  .setTitle('Embed Example Title')
  .setDescription('Embed Message description')
  .setURL('https://discord.js.org/')
  .setAuthor({
    name: 'Some name',
    iconURL: 'https://i.imgur.com/AfFp7pu.png',
    url: 'https://discord.js.org',
  })
  .setThumbnail('https://i.imgur.com/AfFp7pu.png')
  .setImage('https://i.imgur.com/AfFp7pu.png')
  .addFields(
    { name: 'Regular field title', value: 'Some value here' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Inline field title', value: 'Some value here', inline: true },
    { name: 'Inline field title', value: 'Some value here', inline: true }
  )
  .addFields({
    name: 'Inline field title',
    value: 'Some value here',
    inline: true,
  })
  .setTimestamp()
  .setFooter({
    text: 'Some footer text here',
    iconURL: 'https://i.imgur.com/AfFp7pu.png',
  });

export default embedExample;
