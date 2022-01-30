const { MessageEmbed } = require('discord.js');

module.exports = {
  	name: 'support',
    
  	execute(message, args) {

      const supportEmbed = new MessageEmbed()
        .setColor('#DB7DC3')
        .setTitle('Support:')
        .setDescription('Sent all available support links for Hime.')
        .setThumbnail('https://cdn.discordapp.com/attachments/921536108590932039/933460786704166972/hime.png')
        .addFields(
          { name: 'Discord:', value: '``Zoey#8685``', inline: true },
          { name: 'Discord Server:', value: '``https://zoeyhub.tk/Hime/main``', inline: true },
        )
        .setTimestamp()
        .setFooter(`Requested By: ${message.author.tag}`, `${message.author.avatarURL()}`);

      message.channel.send(supportEmbed);
    }
}