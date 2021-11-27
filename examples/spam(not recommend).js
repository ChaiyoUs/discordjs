const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILDS_MESSAGES] });

client.on('messageCreate', msg => {
    if (msg.content == '?spam') {
        let i = 0;
        const loop = setInterval(() => { // use interval for loop
            if (i !== 100) { // 100 is the amount of messages you want to spam
                i++;
                msg.reply(`SPAM`);
            } else if (i == 100) {
                clearInterval(loop).then(() => {
                    msg.reply('SPAM FINISHED');
                }) // clear interval
            }
        }, 1000).ref(); //loop every 1 second
    }
    if (msg.content == '?stopspam') {
        clearInterval(loop);
        msg.ryply(`Stopped spamming`);
    }
});
    //NOT RECOMMEN