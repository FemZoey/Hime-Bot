const { MessageEmbed } = require('discord.js');

module.exports = {
  	name: 'purge',
  	execute(message, args) {
      let member = message.mentions.members.first();

      if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.reply("You can't delete messages since you don't have the MANAGE_MESSAGES permission.")
        return;
      }

      var amount = parseInt(args[0])
      if (!amount) return message.channel.send("Please tell me the number of messages you want me to delete.")
      if (amount > 100 || amount < 1) return message.channel.send("Please select a number from 1 to 100.")

      const purgeEmbed = new MessageEmbed()
        .setColor('#DB7DC3')
        .setTitle('Purge Issued:')
        .setDescription(`UwU what are you hiding~`)
        .setThumbnail(`${message.guild.iconURL()}`)
        .addFields(
          { name: 'Purge:', value: `Purged a total of ${amount} messages.`, inline: true },
        )
        .setTimestamp()
        .setFooter(`Purge issued by: ${message.author.username}`, `${message.author.displayAvatarURL()}`);

      message.delete();
      message.channel.bulkDelete(amount);
      message.channel.send(purgeEmbed)
    }
  }