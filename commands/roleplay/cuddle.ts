const { MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  	name: 'cuddle',
  	execute(message, args) {

      let user = message.mentions.users.first();
      if(!user) user = message.author;

	  async function sendcuddle() {
		const images = await neko.sfw.cuddle();

      const cuddleEmbed = new MessageEmbed()
      	.setColor('#DB7DC3')
      	.setTitle(`${message.author.username} cuddled ${user.username}`)
      	.setDescription('Such an wholesome interaction ^^')
      	.setThumbnail('https://cdn.discordapp.com/attachments/914218618781302874/924076025820872735/roleplay.png')
        .setImage(images.url)
      	.setTimestamp()
      	.setFooter(`Cuddles by: ${message.author.tag}`, `${message.author.displayAvatarURL()}`);

    message.channel.send(cuddleEmbed)
				}
	sendcuddle();
  }
}