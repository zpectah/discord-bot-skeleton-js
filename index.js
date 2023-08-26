import { Client, Events } from 'discord.js';
import { config, events } from './bot/index.js';

(async () => {

    // Bot Service Initialization
    const BOT = new Client({
        intents: [],
    });

    // When Bot is connected
    await BOT.once(Events.ClientReady, events.onReady);

    // When message create/update/delete
    await BOT.on(Events.MessageCreate, events.onMessageCreate);
    await BOT.on(Events.MessageUpdate, events.onMessageUpdate);
    await BOT.on(Events.MessageDelete, events.onMessageDelete);

    // When command created
    await BOT.on(Events.InteractionCreate, events.onInteraction);

    // Connect Bot to channel
    await BOT.login(config.BOT_TOKEN).then(events.onLoginSuccess).catch(events.onLoginError);

})();
