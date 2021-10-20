const express = require('express');
const app = express();
const port = 8000;
const { Client, Intents, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

app.get('/' , (req,res) => res.send('${client.user.tag} Now online'))
app.listen( port , () => 
  console.log(`Your app is listening a http://localhost:${port}`)
);

client.once('ready', () => {
	console.log(`Loggin in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'test') {
		await interaction.reply({ content: 'Hello', ephemeral: true });
	}
});

client.login(token);

/*Note : you should download node.js VSCode and next step is chenge config.json then run 'run.bat'
note 2 : this is for discord.js v.13 And it don't woek on v.12 now
Note 3 : If you run on vscode just remove 'express app port' and remove 'app.get(parameter), app.lisen(parameter)'
Note 4 : more info at readme.md
If had any error please contact `Chaiyo us.exe#8737`*/
