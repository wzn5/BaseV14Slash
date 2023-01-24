const client = require("../../index");
const Discord = require("discord.js");
const bot = require('../../bot.json');

client.on(`interactionCreate`, async(interaction) =>{

  const Scomando = client.slashCommands.get(interaction.commandName);

  if (interaction.type === 4) {
    if(Scomando.autocomplete) {
      const choices = [];
      await Scomando.autocomplete(interaction, choices)
    }
  }

  if (!interaction.type === 2) return;

  if(interaction.channel.type === 1) return interaction.reply({ content: `Meus comandos só funcionam em servidores.`, ephemeral: true})

  if(!Scomando) return client.slashCommands.delete(interaction.commandName);

  try {
    
    interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);
    
      Scomando.run(client, interaction);

} catch(e) {

  const e1 = new Discord.EmbedBuilder()
    .setDescription(`Não foi possível realizar este comando.`)
    .setColor(bot.config.color)

    interaction.reply({ embeds: [e1] })

}

});