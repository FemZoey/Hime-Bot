const { MessageEmbed } = require('discord.js');

module.exports = {
  	name: 'punch',
  	execute(message, args) {

      let user = message.mentions.users.first();
      if(!user) user = message.author;

      const punchEmbed = new MessageEmbed()
      	.setColor('#DB7DC3')
      	.setTitle(`${message.author.username} punched ${user.username}`)
      	.setDescription('Such a violent interaction ^^')
      	.setThumbnail('https://cdn.discordapp.com/attachments/914218618781302874/924076025820872735/roleplay.png')
        .setImage('https://c.tenor.com/SwMgGqBirvcAAAAC/saki-saki-kanojo-mo-kanojo.gif')
      	.setTimestamp()
      	.setFooter(`Punched by: ${message.author.tag}`, `${message.author.displayAvatarURL()}`);

    message.channel.send(punchEmbed)
  }
}