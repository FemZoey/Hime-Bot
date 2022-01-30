const { MessageEmbed } = require('discord.js');
var request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://nekos.best/api/v1/nekos',
  'headers': {
  }
};

module.exports = {
    name: 'catgirl',
    execute(message, args) {

    message.react('👍')
    
    request(options, function (error, response) {
        if (error) throw new Error(error);
        var parsed = JSON.parse(response.body); //turns the api into a parsed json file :D
        const { url, artist_name, source_url } = (parsed) //Requires that parsed json file

    const catgirlEmbed = new MessageEmbed()
        .setColor('#DB7DC3')
        .setTitle(`Cute Catgirls ^^`)
        .setDescription(`Nya! Nya! Cute catgirls coming your way!`)
        .setThumbnail('https://avatars.githubusercontent.com/u/85041320?s=200&v=4')
        .setURL(source_url)
        .setImage(url)
        .setTimestamp()
        .setFooter(`Powered By: https://nekos.best | Artist: ${artist_name}`, `https://avatars.githubusercontent.com/u/85041320?s=200&v=4`);

      message.channel.send(catgirlEmbed)
        })
    }
}