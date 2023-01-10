module.exports.run = (client, message, args) => {
  if(message.member.roles.cache.some(role => role.name === 'Mod')){
    const member = message.mentions.users.first();
    
  if(member){
    const memberTarget = message.guild.members.cache.get(member.id)
    memberTarget.kick();
    message.channel.send("User was kicked.");
  }else{
    message.channel.send("User does not exisist or no user specified.")
  }
  }else{
    message.channel.send("You do not have the necessary permisions to use this command.")
  }
  
}

module.exports.name = "kick"
