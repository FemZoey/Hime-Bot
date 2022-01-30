const { MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  	name: 'kiss',
  	execute(message, args) {

      let user = message.mentions.users.first();
      if(!user) user = message.author;
	
	  async function sendkiss() {
		const images = await neko.sfw.kiss();

      const kissEmbed = new MessageEmbed()
      	.setColor('#DB7DC3')
      	.setTitle(`${message.author.username} kissed ${user.username}`)
      	.setDescription('Such an wholesome interaction ^^')
      	.setThumbnail('https://cdn.discordapp.com/attachments/914218618781302874/924076025820872735/roleplay.png')
        .setImage(images.url)
      	.setTimestamp()
      	.setFooter(`Kissed by: ${message.author.tag}`, `${message.author.displayAvatarURL()}`);

    message.channel.send(kissEmbed)
				}
	sendkiss();
  }
}