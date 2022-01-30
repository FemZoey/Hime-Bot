const { MessageEmbed } = require('discord.js');

module.exports = {
  	name: 'unmute',
  	execute(message, args) {

      let role = message.guild.roles.cache.find(role => role.name === "muted");
      let member = message.mentions.members.first();

                if (!message.member.hasPermission('MANAGE_ROLES')) {
                  message.reply("You cannot ban members since you don't have the MANAGE_ROLES permission.")
                  return;
                }

                if(!member) {
                  message.reply('The user your have mentioned is invalid.')
                  return;
                }

      const dmsEmbed = new MessageEmbed()
        .setColor('#DB7DC3')
        .setTitle('Unmuted:')
        .setDescription(`You have been unmuted in ${message.guild.name}.`)
        .setThumbnail(`${message.guild.iconURL()}`)
        .addFields(
          { name: 'YAY', value: `YOU HAVE BEEN UNMUTED`, inline: true },
        )
        .setTimestamp()
        .setFooter(`Unmute issued by: ${message.author.username}`, `${message.author.displayAvatarURL()}`);

        const serverEmbed = new MessageEmbed()
          .setColor('#DB7DC3')
          .setTitle(`Unmuted ${member.displayName}`)
          .setDescription(`${member} has been unmuted.`)
          .setThumbnail(`${message.guild.iconURL()}`)
          .addFields(
            { name: 'YAY', value: `THEY WERE UNMUTED`, inline: true },
          )
          .setTimestamp()
          .setFooter(`Unmute issued By: ${message.author.username}`, `${message.author.displayAvatarURL()}`);

      member.send(dmsEmbed)
      message.channel.send(serverEmbed)

      setTimeout(function(){
        member.roles.remove(role);
      }, 1000);
    }
}