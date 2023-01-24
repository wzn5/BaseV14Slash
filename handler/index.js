const fs = require("fs");
const bot = require('../bot.json');
const chalk = require('chalk');

module.exports = async (client) => {

//Puxando os comandos em slash!
const ArgsScommands = [];

fs.readdir(`././SlashCommands/`, (err, fol) => {

fol.forEach(subfol => {

fs.readdir(`././SlashCommands/${subfol}/`, (er, files) => {

files.forEach(command => {  

if(!command?.endsWith('.js')) return;

command = require(`../SlashCommands/${subfol}/${command}`);

if(!command?.name) return;

client.slashCommands.set(command?.name, command);

  ArgsScommands.push(command)

})

})

})

});

//Carregando os slash.
client.on("ready", async() => {

  //Carregando em 1 servidor.
  if(bot.slash.guild_id) {

    var server = client.guilds.cache.get(bot.slash.guild_id);

    if(!server) {console.log(chalk.hex(`FF0000`).bold(`[SlashCommands] > Servidor de carregamento inválido.`));
    process.exit();}

    try {

    server.commands.set(ArgsScommands);

    console.log(chalk.hex(`4169E1`).bold(`[SlashCommands] > Os comandos foram carregados em ${server.name}.`))
    } catch(e) {
      console.log(chalk.hex(`FF0000`).bold(`[SlashCommands] > Não foi possível carregar os comandos em ${server.name}.`));
      process.exit();
    }
  
  } else {
  //Carregando no global.

    try {

    client.application.commands.set(ArgsScommands);

    console.log(chalk.hex(`4169E1`).bold(`[SlashCommands] > Os comandos foram carregados globalmente.`))
    } catch(e) {
      console.log(chalk.hex(`FF0000`).bold(`[SlashCommands] > Não foi possível carregar os comandos globalmente.`));
      process.exit();
    }

  }

});

//Carregando os eventos.
fs.readdir(`././Eventos/`, (err, fol) => {

fol.forEach(subfol => {

fs.readdir(`././Eventos/${subfol}/`, (er, files) => {

  files.forEach(evnt =>{

  if(!evnt.endsWith('.js')) return;
  
  const e = require(`../Eventos/${subfol}/${evnt}`);

  if (e.once) {
    client.once(e.name, (...args) => 
    e.execute(client, ...args))
  } else {
    client.on(e.name, (...args) =>
      e.execute(client, ...args))
  }

})

})

})

  console.log(chalk.hex(`32CD32`).bold(`[Eventos] > Eventos carregados com sucesso.`))
  
});

}
