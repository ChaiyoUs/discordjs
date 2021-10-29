const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const { crearDB } = require('megadb');
const money = new crearDB('money');
const client = require("../index");

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;
    if (message.channel.type === 'dm') return;
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const number = client.random(100000, 999999)
    const filter = (m) => m.author.id === message.author.id;if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;
    function msgEmbed(content) {
        var embed = new MessageEmbed()
            .setColor('#FF0000')
            .setDescription(content)
            .setTimestamp()

        var m = message.channel.send({ embeds : [embed] })
        return m
    }

    if (command === 'money') {
        if (!args.join(" ")) return await msgEmbed(`**[+]** \`Your money is ${client.format(await client.get(message.author.id))}\``)
        if (['add', 'set', 'remove'].includes(args[0])) {
            if (!message.member.permissions.has('ADMINISTRATOR')) return await msgEmbed(
                '**[!]** You don\'t have permission to use this command!'
            )

            if (!args[1] || !Number(args[2])) return await msgEmbed(
                    `**[!]** Please type \`${client.config.prefix}point [add, set, remove] [User] [Amount]\``
            )

            let mentioned = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
            let target = message.guild.members.cache.get(mentioned.id)

            switch (args[0]) {
                case 'add':
                    msgEmbed(
                        `**[+]** Suffully added money to \`${target.user.username}\` Amount : \`${args[2]}\` Dollar`
                    )
                    client.add(target.user.id, parseInt(args[2]))
                break;
                case 'set':
                    msgEmbed(
                        `**[+]** Suffully set money to \`${target.user.username}\``
                    )
                    client.set(target.user.id, parseInt(args[2]))
                break;
                case 'remove':
                    msgEmbed(
                        `**[+]** Suffully remove money to \`${target.user.username}\``
                    )
                    client.remove(target.user.id, parseInt(args[2]))
                break;
            }
        }
    }
});