const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'femboy',
    category: 'test',

    execute(message, args) {
        message.react('👍')

        var number = Math.floor(Math.random() * 3) + 1;
        const {image, artist, link } = require(`../../lib/fr/${number}.json`)

        const femboyEmbed = new MessageEmbed()
        .setColor('#DB7DC3')
        .setTitle(`Cute Boys ^^`)
        .setDescription(`awa they are so cute`)
        .setThumbnail('https://cdn.discordapp.com/attachments/921536108590932039/933460786704166972/hime.png')
        .setImage(image)
        .setTimestamp()
        .setURL(link)
        .setFooter(`Powered by: Zoey#8685 | Artist: ${artist}`, `https://cdn.discordapp.com/attachments/921536108590932039/933460786704166972/hime.png`);

        message.channel.send(femboyEmbed)
    }
}   