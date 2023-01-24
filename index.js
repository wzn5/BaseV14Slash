const Discord = require("discord.js")
require('dotenv').config();

const client = new Discord.Client({ 
  intents: [ 
Discord.GatewayIntentBits.Guilds,
Discord.GatewayIntentBits.GuildMembers,
Discord.GatewayIntentBits.GuildBans,
       ]
    });

console.clear()

module.exports = client;

client.slashCommands = new Discord.Collection();
client.aliases = new  Discord.Collection();

require('./handler')(client);

const connectiondb = require("./database/connect")
connectiondb.start();

client.login(process.env.token)

//ANTICRASH
