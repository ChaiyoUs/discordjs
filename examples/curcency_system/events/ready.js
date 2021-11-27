const client = require('../index.js');

client.on('ready', () => {
    client.user.setActivity(`Hi!`), { type: 'PLAYING' } //The status have very much
    console.log(`${client.user.tag} is Ready.`)
}); //yea if bot hav online it will reading this