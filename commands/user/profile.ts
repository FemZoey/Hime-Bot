const { MessageEmbed } = require('discord.js');
const db = require("quick.db");

const moment = require('moment');

module.exports = {
  	name: 'profile',
  	execute(message, args) {

      let user = message.mentions.users.first();
      if(!user) user = message.author;

	  var desc = db.get(`_desc${user.id}`);
	  var pronouns = db.get(`_pronouns${user.id}`);

      const profileEmbed = new MessageEmbed()
      	.setColor('#DB7DC3')
      	.setTitle(`${user.username}`)
      	.setDescription(desc)
      	.setThumbnail(`${user.displayAvatarURL()}`)
      	.addFields(
          { name: 'User TAG:' , value: '``' + `${user.tag}` + '``' , inline: true },
      	  { name: 'User ID:' , value: '``' + `${user.id}` + '``' , inline: true },
		  { name: 'Pronouns:' , value: '``' + pronouns + '``' , inline: true },
          { name: 'Created At:' , value: '``' + `${moment(user.createdAt).format('DD/MM/YY')}` + '``' , inline: true },
          { name: 'Joined At:' , value: '``' + `${moment(message.guild.member(user).joinedAt).format('DD/MM/YY')}` + '``' , inline: true },
          { name: 'Member Of:' , value: '``' + `${message.guild.name}` + '``' , inline: true },
      	)
      	.setTimestamp()
      	.setFooter(`Requested By: ${message.author.tag}`, `${message.author.displayAvatarURL()}`);

        message.channel.send(profileEmbed)
      }
    }
