  ///=============================CONFIG BASE=============================///
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "/" 
const embed = new Discord.RichEmbed();
var Args = message.content.split(" / ")

bot.login("NTQ5Mjk3NjAyMTIzMDA1OTk0.D1k0xA.A2EJ7MQ6zVvt5JJ9Oo_UhNrc1EY");
bot.on('ready', async() =>{
  console.log(+bot.user.username+'Est en ligne !'); 
  bot.user.setActivity("En codage");
})
  ///=============================UTILISATEUR=============================///
bot.on('guildMemberAdd', member =>{
    member.guild.channels.get('547426716952559627').send('**Bienvenue a toi** ' + member.user + ' **Sur le Discord de Arkenfal...Nous sommes actuellement :**  ' + member.guild.memberCount);
    console.log('+1')
})

bot.on('guildMemberRemove', member =>{
    member.guild.channels.get('547426716952559627').send('**Malheureusement**  '  + member.user + ' **Nous a quittÃ©(e) nous nous retrouvons seulement a :**  ' + member.guild.memberCount);
    console.log('-1')
})
 
 
      ///=============================HELP=============================///
    bot.on('message', data => {
        if (Args[0] === prefix + "up") { embed
		            embed.setTitle("UP")
            .setAuthor("[BOT]")
            .setColor(170909)
            .setTimestamp()
            .setDescription(" Si tu vois ce message c'est que tout va bien !")
            .addField(Args[1])
            .addField(Args[2])
            .addField(Args[3])
            .setFooter("Tout le staff d'Arkenfal vous souhaite une excellente game :P ")
            data.channel.send({embed: embed});
		else {
			data.author.createDM().then(channel => {
				channel.send("La commande up s'execute ainsi : /up <Message 1> / <Message 2> / <Message 3>")
			}
			}
		


              

  
