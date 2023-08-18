// @ts-check

const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const config = require('./config.json');

const bot = new Client({
  intents: [GatewayIntentBits.Guilds],
});

bot.on('ready', (client) => {
  console.log('Bot başarıyla Discord\'a giriş yaptı.');

  client.user.setPresence({ activities: [{ name: 'raven', state: config.discord.state, type: ActivityType.Custom }] });
});

bot.login(config.discord.token);