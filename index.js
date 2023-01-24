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
process.on('unhandRejection', (reason, promise) => {
    console.log(`❗ | [Erro]\n\n` + reason, promise);
  });
  process.on('uncaughtException', (error, origin) => {
    console.log(`❗ | [Erro]\n\n` + error, origin);
  });
  process.on('uncaughtExceptionMonitor', (error, origin) => {
    console.log(`❗ | [Erro]\n\n` + error, origin);
  });
