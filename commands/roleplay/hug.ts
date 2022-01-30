const { MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  	name: 'hug',
  	execute(message, args) {

      let user = message.mentions.users.first();
      if(!user) user = message.author;
	
	  async function sendhug() {
		const images = await neko.sfw.hug();

      const hugEmbed = new MessageEmbed()
      	.setColor('#DB7DC3')
      	.setTitle(`${message.author.username} hugged ${user.username}`)
      	.setDescription('Such an wholesome interaction ^^')
      	.setThumbnail('https://cdn.discordapp.com/attachments/914218618781302874/924076025820872735/roleplay.png')
        .setImage(images.url)
      	.setTimestamp()
      	.setFooter(`Hugged by: ${message.author.tag}`, `${message.author.displayAvatarURL()}`);

    message.channel.send(hugEmbed)
				}
	sendhug();
  }
}