const onMessageCreate = async (message) => {
  if (message.content === 'test') {
    await message.reply('Test response from Bot');
  }

  // Do some stuff
};

const onMessageUpdate = async (oldMessage, newMessage) => {
  console.log('onMessageCreate', oldMessage, newMessage);
};

const onMessageDelete = async (message) => {
  console.log('onMessageCreate', message);
};

export { onMessageCreate, onMessageUpdate, onMessageDelete };
