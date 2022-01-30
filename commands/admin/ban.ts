const { MessageEmbed } = require('discord.js');

module.exports = {
  	name: 'ban',
  	execute(message, args) {
      const empty = '‎ ';

      let member = message.mentions.members.first();

      const reason = message.content.split(' ').slice(1);
      const reasonfinal = reason.slice(1).join(' ');

                if (!message.member.hasPermission('BAN_MEMBERS')) {
                  message.reply("You cannot ban members since you don't have the BAN_MEMBERS permission.")
                  return;
                }

                if(!member) {
                  message.reply('The user your have mentioned is invalid.')
                  return;
                }

                if(!member.bannable) {
                  message.reply('This member cannot be banned.')
                  return;
                }

                if(reasonfinal === `${empty}`) {
                  message.reply('You need to provide a valid ban reason.')
                  return;
                }

      const dmsEmbed = new MessageEmbed()
        .setColor('#DB7DC3')
        .setTitle('Banned:')
        .setDescription(`You have been banned from ${message.guild.name}.`)
        .setThumbnail(`${message.guild.iconURL()}`)
        .addFields(
          { name: 'Ban Reason:', value: `${reasonfinal}`, inline: true },
        )
        .setTimestamp()
        .setFooter(`Ban issued by: ${message.author.username}`, `${message.author.displayAvatarURL()}`);

        const serverEmbed = new MessageEmbed()
          .setColor('#DB7DC3')
          .setTitle(`Banned ${member.displayName}`)
          .setDescription(`${member} has been banned.`)
          .setThumbnail(`${message.guild.iconURL()}`)
          .addFields(
            { name: 'Ban Reason:', value: `${reasonfinal}`, inline: true },
          )
          .setTimestamp()
          .setFooter(`Ban issued By: ${message.author.username}`, `${message.author.displayAvatarURL()}`);

      member.send(dmsEmbed)
      message.channel.send(serverEmbed)

      setTimeout(function(){
      member.ban();
      }, 1000);
    }
}