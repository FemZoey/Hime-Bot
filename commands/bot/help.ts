const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    category: 'Bot',

    execute(message, args) {

        const helpAdmin = new MessageEmbed()
        .setColor('#DB7DC3')
        .setTitle('Help Embed:')
        .setDescription('Sends **all** available commands for Hime.')
        .setThumbnail('https://cdn.discordapp.com/attachments/921536108590932039/933460786704166972/hime.png')
        .addFields(
        //Command Categories & their respective commands
        { name: 'Admin', value: '``ban, kick, mute, purge, unmute.``', inline: true },
        { name: 'Bot', value: '``about, help, support.``', inline: true },
        { name: 'User', value: '``avatar, profile, roll, setdesc, setpronouns.``', inline: true },
        { name: 'Server', value: '``serveravatar, serverinfo, setsrvdesc.``', inline: true },
        { name: 'Roleplay', value: '``cuddle, hug, kiss, punch.``', inline: true },
        { name: 'Hime', value: '``doc.``', inline: true },
        { name: 'Anime', value: '``astolfo, catboy, catgirl, femboy, quote.``', inline: true }
        )
        .setTimestamp()
        .setFooter(`Requested By: ${message.author.tag}`, `${message.author.displayAvatarURL()}`);

        const helpUser = new MessageEmbed()
        .setColor('#DB7DC3')
        .setTitle('Help Embed:')
        .setDescription('Sends **all** available commands for Hime.')
        .setThumbnail('https://cdn.discordapp.com/attachments/921536108590932039/933460786704166972/hime.png')
        .addFields(
        //Command Categories & their respective commands
        { name: 'Bot', value: '``about, help, support.``', inline: true },
        { name: 'User', value: '``avatar, profile, roll, setdesc, setpronouns.``', inline: true },
        { name: 'Server', value: '``serveravatar, serverinfo, setsrvdesc.``', inline: true },
        { name: 'Roleplay', value: '``cuddle, hug, kiss, punch.``', inline: true },
        { name: 'Hime', value: '``doc.``', inline: true },
        { name: 'Anime', value: '``astolfo, catboy, catgirl, femboy, quote.``', inline: true }
        )
        .setTimestamp()
        .setFooter(`Requested By: ${message.author.tag}`, `${message.author.displayAvatarURL()}`);

        if (message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.send(helpAdmin);
        } else {
            message.channel.send(helpUser);
        }
    }
}   