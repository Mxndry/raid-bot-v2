
module.exports = {
  name: 'channels',
  description: 'Create mass channels',
  execute(message, args) {

    message.delete()

        process.title = `Information command executed | Bot raid created by yiko`


   const channel =  message.guild.channels.cache.size
    const roles = message.guild.roles.cache.size
   const membersCount =  message.guild.members.cache.size
   const boosters = message.guild.premiumSubscriptionCount
   const categoris = message.guild.channels.cache.filter(c => c.type === "category").size
   const owner = message.guild.owner.user.username
   const ownerID = message.guild.owner.user.id

   const embed = new Discord.MessageEmbed()

   .setTitle(`IDH X ${message.author.username}`)
   .setDescription("Server information")
   .addField('`[✨]: Channel Count`', channel)
   .addField('`[🖌]: Roles Count`', roles)
   .addField('`[👥]: Member Count`', membersCount)
   .addField('`[🚀]: Boosters count`', boosters)
   .addField('`[👽]: Category count`', categoris)
   .addField('`[👑]: Onwer username`', owner)
   .addField('`[👑]: Onwer ID`', ownerID)
   .setFooter('Made by yiko')
   .setImage("https://images-ext-1.discordapp.net/external/29FkIy1Sk6NC4Cx50DQAFH9rqlI8GYJxSYHyu7zHkGo/https/media.tenor.com/7hd53a2Fg30AAAPo/monkey-dancing.mp4")

   message.channel.send(embed)

  


  }
};