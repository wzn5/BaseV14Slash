const Discord = require("discord.js")
const bot = require("../../bot.json")

module.exports = {
  name: "ping",
  description: "Veja o ping do bot.",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let Embed1 = new Discord.EmbedBuilder()
    .setDescription(`**👋 Olá ${interaction.user},** Estou calculando o meu \`ping...\``)
    .setColor(bot.config.color);

    let Embed2 = new Discord.EmbedBuilder()
    .setDescription(`**👋 Olá ${interaction.user},** meu ping está em \`${client.ws.ping}ms\``)
    .setColor(bot.config.color);

    interaction.reply({ embeds: [Embed1] }).then( () => {
        setTimeout( () => {
            interaction.editReply({ embeds: [Embed2] })
        }, 2000)
    })
  }
}