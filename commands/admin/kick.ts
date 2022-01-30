const { MessageEmbed } = require('discord.js');

module.exports = {
  	name: 'kick',
  	execute(message, args) {
      let member = message.mentions.members.first();

      const reason = message.content.split(' ').slice(1);
      const reasonfinal = reason.slice(1).join(' ');

                if (!message.member.hasPermission('KICK_MEMBERS')) {
                  message.reply("You cannot ban members since you don't have the KICK_MEMBERS permission.")
                  return;
                }

                if(reasonfinal === `${empty}`) {
                  message.reply('You need to provide a valid ban reason.')
                  return;
                }

                if(!member) {
                  message.reply('The user your have mentioned is invalid.')
                  return;
                }

                if(!member.kickable) {
                  message.reply('This member cannot be kicked.')
                  return;
                }

      const dmsEmbed = new MessageEmbed()
        .setColor('#DB7DC3')
        .setTitle('Kicked:')
        .setDescription(`You have been kicked from ${message.guild.name}.`)
        .setThumbnail(`${message.guild.iconURL()}`)
        .addFields(
          { name: 'Kick Reason:', value: `${reasonfinal}`, inline: true },
        )
        .setTimestamp()
        .setFooter(`Kick issued by: ${message.author.username}`, `${message.author.displayAvatarURL()}`);

        const serverEmbed = new MessageEmbed()
          .setColor('#DB7DC3')
          .setTitle(`Kicked ${member.displayName}`)
          .setDescription(`${member} has been kicked.`)
          .setThumbnail(`${message.guild.iconURL()}`)
          .addFields(
            { name: 'Kick Reason:', value: `${reasonfinal}`, inline: true },
          )
          .setTimestamp()
          .setFooter(`Kick issued By: ${message.author.username}`, `${message.author.displayAvatarURL()}`);

      member.send(dmsEmbed)
      message.channel.send(serverEmbed)

      setTimeout(function(){
      member.kick();
      }, 1000);
    }
}