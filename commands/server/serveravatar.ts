const { MessageEmbed } = require('discord.js');

module.exports = {
  	name: 'serveravatar',
  	execute(message, args) {

      const savatarEmbed = new MessageEmbed()
      .setColor('#DB7DC3')
      .setTitle(`Showing the avatar for ${message.guild.name}`)
      .setImage(`${message.guild.iconURL()}}`)
      .setTimestamp()
      .setFooter(`Requested By: ${message.author.tag}`, `${message.author.displayAvatarURL()}`);

      message.channel.send(savatarEmbed)
    }
  }