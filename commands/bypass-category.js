const config = require("../config.json")

const bypassCategory = config.bypass_Category

module.exports = {
  name: 'bypass-category',
  description: 'bypass anti raid server with your config!',
  execute(message, args) {
    message.delete()
    
    process.title = `Bypass category executed | Bot raid created by yiko`


 message.guild.channels.cache.map( cateogry => {
    
    try {
    if(cateogry.type === 'category'){
         cateogry.setName(bypassCategory).then( () => {
        console.log(`[CONSOLE]: Cateogry bypassed Name: ${cateogry.name} | ID: ${cateogry.id}`)
         })
    }

} catch(error){
    console.log(error)
}})


  }
};