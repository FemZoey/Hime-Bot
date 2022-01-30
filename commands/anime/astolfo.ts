var request = require('request');
const { MessageEmbed } = require('discord.js');

var options = {
  'method': 'GET',
  'url': 'https://astolfo.rocks/api/v1/images/random/safe',
  'headers': {
  }
};

module.exports = {
    name: 'astolfo',
    execute(message, args) {
            setTimeout(function(){
                message.react('👍')
                
                //This will request the api
                    request(options, function (error, response) {
                    if (error) throw new Error(error);
                    var parsed = JSON.parse(response.body); //turns the api into a parsed json file :D
                    const { id, file_extension, views, source} = (parsed) //Requires that parsed json file

                    const astolfoEmbed = new MessageEmbed()
                    .setColor('#DB7DC3')
                    .setTitle(`It's Astolfo!!`)
                    .setURL(source)
                    .setDescription(`So cute!`)
                    .setThumbnail('https://images-ext-2.discordapp.net/external/0JLb1hwg6-YD7nU47oXrI5WxXENTxKAnLVQE0U58b_M/https/astolfo.rocks/img/favicon/apple-icon-57x57.png')
                    .setImage(`https://astolfo.rocks/astolfo/thumbnails/${id}.${file_extension}`)
                    .setTimestamp()
                    .setFooter(`Powered By: https://astolfo.rocks | Views: ${views}`, `https://images-ext-2.discordapp.net/external/0JLb1hwg6-YD7nU47oXrI5WxXENTxKAnLVQE0U58b_M/https/astolfo.rocks/img/favicon/apple-icon-57x57.png`);

                  message.channel.send(astolfoEmbed)
        }, 1500);
    })
  }
}