const { Client, Intents, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once(ready, () => {
    console.log('Bot now online')
});

client.on('messageCreate', msg => {
    if (msg.content == '?test') {
        msg.reply('You ran a test command')
    } else if (msg.content == '?hi') {
        msg.reply(`Hi! ${client.user.tag}`)
    } //Use the else if under if because it will error and use ; when you scripted all what do want
}); 

client.login(token)