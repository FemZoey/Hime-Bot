const { MessageEmbed } = require('discord.js');
const { version, prefix } = require('../../lib/bot.json')

module.exports = {
    name: 'about',

    execute(message, args) {

        const aboutEmbed = new MessageEmbed()
      	.setColor('#DB7DC3')
      	.setTitle('About:')
      	.setDescription('Shows the about information for Hime.')
      	.setThumbnail('https://cdn.discordapp.com/attachments/921536108590932039/933460786704166972/hime.png')
      	.addFields(
      		{ name: 'Developed By:', value: '``' + `Zoey#8685` + '``', inline: true },
      		{ name: 'Version:', value: '``' + `${version}` + '``' , inline: true },
            { name: 'Discord:', value: '``' + `https://zoeyhub.tk/Hime/main` + '``', inline: true },
      	)
      	.setTimestamp()
      	.setFooter(`Requested By: ${message.author.tag}`, `${message.author.displayAvatarURL()}`);
        
        message.channel.send(aboutEmbed)
    }
}