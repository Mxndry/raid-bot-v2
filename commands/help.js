const Discord = require("discord.js")
const config = require("../config.json")

const prefix = config.prefix

module.exports = {
  name: 'help',
  description: 'muestra todos los comandos lool',
  execute(message, args) {

    message.delete()

    process.title = `help executed | Bot raid created by yiko`

    const embed = new Discord.MessageEmbed()

    .setTitle("Lista de comandos para raidear")
    .setDescription("Bot creador por yiko")
    .addField(`**${prefix}destroy**`, 'Creacion de canales y spam en todos los canales')
    .addField(`**${prefix}mcc**`, 'Creacion masiva de canales, no hay spam')
    .addField(`**${prefix}info**`, 'Obtenga informacion del servidor')
    .addField(`**${prefix}spamdm**`, 'Spammea a todo el dm con tu configuracion')
    .addField(`**${prefix}nuke**`, 'Elimina todos los canales')
    .addField(`**${prefix}server**`, 'Cambiale el nombre del servidor y la foto')
    .addField(`**${prefix}nickall**`, 'Cambiale el nombre a todo el mundo')
    .addField(`**${prefix}banall**`, 'bannea a todos los usuarios posibles')
    .addField(`**${prefix}nickall**`, 'nickea a todos los usuarios posibles')
    .addField(`**${prefix}mass-message**`, 'Spammea en todos los canales posibles')
    .addField(`**${prefix}bypass**`, 'Bypassea el servidor & los bots de seguridad')
    .addField(`**${prefix}bpyass-category**`, 'Renombra todas las categorias posible')
    .setFooter('Bot creado por | **yiko_**');

    message.channel.send(embed)


// afk

  }
};