//require the necessary discord.js classes
const {Client, Intents } = require('discord.js');
require('dotenv').config();

const token = process.env.DISCORDJS_BOT_TOKEN;

//create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

//when the client is ready, run this code (only once)
client.once('ready', ()=> {
    console.log('Ready!');
});

//login to discord with your client's token
client.login(token);

