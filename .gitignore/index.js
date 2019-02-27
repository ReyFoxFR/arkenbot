  ///=============================CONFIG BASE=============================///
  const Discord = require('discord.js');
  const bot = new Discord.Client(); 
  const prefix = "/"
  var args = message.content.split(" ")

  bot.login("NTQ5NzA1ODkzNjUwODkwODUz.D1iDsQ.CINsOGZ_MUy5kYORhEuVCaoIReA");
  bot.on('ready', async() =>{
    console.log(+bot.user.username+'Est en ligne !'); 
    bot.user.setActivity("Besoin d'aide ? faites /a help !");
  })
    ///=============================UTILISATEUR=============================///
  bot.on('guildMemberAdd', member =>{
      member.guild.channels.get('548273429728722944').send('**Bienvenue a toi** ' + member.user + ' **Sur Arkenfal...Nous sommes actuellement :**  ' + member.guild.memberCount);
      console.log('+1')
  })
  
  bot.on('guildMemberRemove', member =>{
      member.guild.channels.get('548273429728722944').send('**Malheureusement**  '  + member.user + ' **Nous a quitté(e) nous nous retrouvons seulement a :**  ' + member.guild.memberCount);
      console.log('-1')
  })
   ///================================/UP===================================///
bot.on("message"




              

  
