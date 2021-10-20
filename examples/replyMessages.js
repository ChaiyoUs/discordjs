const { Client, Intents, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once(ready, () => {
    console.log('Bot now online')
});

client.on('messageCreate', msg => {
    if (msg.content == '?test') {
        msg.reply('You ran a test command')
    }
}); 

client.login(token)