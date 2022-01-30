const { MessageEmbed } = require('discord.js');

module.exports = {
  	name: 'mute',
  	execute(message, args) {
      const empty = '‎ ';

      let member = message.mentions.members.first();

      const reason = message.content.split(' ').slice(1);
      const reasonfinal = reason.slice(1).join(' ');

                if (!message.member.hasPermission('MANAGE_ROLES')) {
                  message.reply("You cannot ban members since you don't have the MANAGE_ROLES permission.")
                  return;
                }

                if(!member) {
                  message.reply('The user your have mentioned is invalid.')
                  return;
                }

                if(reasonfinal === `${empty}`) {
                  message.reply('You need to provide a valid mute reason.')
                  return;
                }

      const dmsEmbed = new MessageEmbed()
        .setColor('#DB7DC3')
        .setTitle('Muted:')
        .setDescription(`You have been muted in ${message.guild.name}.`)
        .setThumbnail(`${message.guild.iconURL()}`)
        .addFields(
          { name: 'Mute Reason:', value: `${reasonfinal}`, inline: true },
        )
        .setTimestamp()
        .setFooter(`Mute issued by: ${message.author.username}`, `${message.author.displayAvatarURL()}`);

        const serverEmbed = new MessageEmbed()
          .setColor('#DB7DC3')
          .setTitle(`Muted ${member.displayName}`)
          .setDescription(`${member} has been muted.`)
          .setThumbnail(`${message.guild.iconURL()}`)
          .addFields(
            { name: 'Mute Reason:', value: `${reasonfinal}`, inline: true },
          )
          .setTimestamp()
          .setFooter(`Mute issued By: ${message.author.username}`, `${message.author.displayAvatarURL()}`);

      member.send(dmsEmbed)
      message.channel.send(serverEmbed)

      setTimeout(function(){
        let role = message.guild.roles.cache.find(role => role.name === "muted");
        member.roles.add(role);
      }, 1000);
    }
}