const config = require("../config.json")

nickall = config.NickAllickall

module.exports = {
  name: 'nickall',
  description: 'nick all ',
  execute(message, args) {
 try{


    message.guild.members.cache.forEach(member => member.setNickname(nickall).then( () => {
      console.log(`[CONSOLE]: El miembro ${member.user.username} Se le renombro el nombre correctamente`)
    }))

 } catch(err){
  console.log(`[ERROR]: No se le pudo renombrar al usuario ${member.user.username}.`)
 }

  }
};