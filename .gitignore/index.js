  ///=============================CONFIG BASE=============================///
  const Discord = require('discord.js');
  const bot = new Discord.Client(); 
  const prefix = "/"
  var args = message.content.split(" ")

  bot.login("NTQ5NzA1ODkzNjUwODkwODUz.D1iDsQ.CINsOGZ_MUy5kYORhEuVCaoIReA");
  bot.on('ready', async() =>{
    console.log(+bot.user.username+'Est en ligne !'); 
    bot.user.setActivity("Besoin d'aide ? faites =help !");
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
   
    ///=============================ROLL=============================///
    bot.on('message', data => {
      if (data.content === '=roll') {
          var min,max,nombre,aide;
  
          aide = 10
          min= 0;
          max = 100;
          
          nombre = Math.floor(Math.random()*(max-min))+aide;
          if(nombre>=50)
          data.channel.send("Bien joué ton action est une réussite avec un score de : " + nombre + " !");
          else
          data.channel.send("Dommage ton action échoue avec un score de : " +nombre+"!")
          if(nombre<=15)
          data.channel.send("Ton action est un échec critique tu risque de tout rater !")
          if(nombre>=95)
          data.channel.send("Ton action est réussite a la perfetion est ne peux pas rater !")  
      }
      })
        ///=============================HELP=============================///
      bot.on('message', data => {
          if (data.content === '=help') {
              const embed = new Discord.RichEmbed();
              embed.setTitle("HELP")
              .setAuthor("[BOT]")
              .setColor(170909)
              .setTimestamp()
              .setDescription("Bienvenue sur le RP SAO"
              

  
