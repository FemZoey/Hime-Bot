const { MessageEmbed } = require('discord.js');

module.exports = {
  	name: 'avatar',
  	execute(message, args) {

      let user = message.mentions.users.first();
      if(!user) user = message.author;

      const avatarEmbed = new MessageEmbed()
      .setColor('#DB7DC3')
      .setTitle(`Showing the avatar for ${user.username}`)
      .setImage(`${user.displayAvatarURL()}`)
      .setTimestamp()
      .setFooter(`Requested By: ${message.author.tag}`, `${message.author.displayAvatarURL()}`);

      message.channel.send(avatarEmbed)
    }
  }