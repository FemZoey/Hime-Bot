const { MessageEmbed } = require('discord.js');
const db = require("quick.db");

const moment = require('moment');

module.exports = {
  	name: 'serverinfo',
  	execute(message, args) {
	  var srvdesc = db.get(`_srvdesc${message.guild.id}`);
	
      const serverEmbed = new MessageEmbed()
      	.setColor('#DB7DC3')
      	.setTitle(`${message.guild.name}`)
      	.setDescription(srvdesc)
      	.setThumbnail(`${message.guild.iconURL()}`)
      	.addFields(
          { name: 'Owned By:' , value: '``' + `${message.guild.owner.user.tag}` + '``' , inline: true },
          { name: 'Guild ID:' , value: '``' + `${message.guild.id}` + '``' , inline: true },
          { name: 'Member Count:' , value: '``' + `${message.guild.memberCount}` + '``' , inline: true },
          { name: 'Created At:' , value: '``' + `${moment.utc(message.guild.createdAt).format('DD/MM/YY')}` + '``' , inline: true },
      	)
      	.setTimestamp()
      	.setFooter(`Requested By: ${message.author.tag}`, `${message.author.displayAvatarURL()}`);

        message.channel.send(serverEmbed)
      }
    }