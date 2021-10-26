const { Client, Intents, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILDS_MESSAGES] });

client.on('messageCreate', msg => {
    if (msg.content == '?spam') {
        msg.reply('SPAM')
        msg.reply('SPAM')
        msg.reply('SPAM')
        msg.reply('SPAM')
        msg.reply('SPAM')
        msg.reply('SPAM')
        msg.reply('SPAM')
        msg.reply('SPAM')
        msg.reply('SPAM')
        msg.reply('SPAM')
        msg.reply('SPAM')
        msg.reply('SPAM')
        msg.reply('SPAM')
        msg.reply('SPAM')
        //NOT RECOMMEND
    }
})