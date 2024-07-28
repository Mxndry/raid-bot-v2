const config = require("../config.json")

const spam = config.spamChannel

module.exports = {
  name: 'mass-message',
  description: 'spam all channels on server with your config!',
  execute(message, args) {
    message.delete()

    process.title = ` Mass send all channels | Bot raid created by yiko `

    message.guild.channels.cache.filter( channel => channel.type === 'text').forEach( async channel => {


      const webhook = await channel.createWebhook(`IDH x ${message.author.username}`)

        const messages = Array(10).fill(`IDH on top discord.gg/idhontop | ${spam}`);
          await Promise.all(messages.map(msg => channel.send(msg, webhook.send(`IDH on top discord.gg/idhontop | ${spam}`))));
    })
  }
}