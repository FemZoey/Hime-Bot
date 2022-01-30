const { MessageEmbed } = require('discord.js');
var request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://api.catboys.com/img/catboy',
  'headers': {
  }
};

//Catboys.com is awesome
//https://catboys.com/about

module.exports = {
    name: 'catboy',
    execute(message, args) {

    message.react('👍')
    
    request(options, function (error, response) {
      if (error) throw new Error(error);
      var parsed = JSON.parse(response.body); //turns the api into a parsed json file :D
      const { url, artist, artist_url } = (parsed) //Requires that parsed json file

    setTimeout(function(){
    const catboyEmbed = new MessageEmbed()
        .setColor('#DB7DC3')
        .setTitle(`Cute Catboys ^^`)
        .setURL(artist_url)
        .setDescription(`Nya! Nya! Cute catboys coming your way!`)
        .setThumbnail('https://raw.githubusercontent.com/Catboys-Dev/catbot.dev/master/assets/images/catbot.png')
        .setImage(url)
        .setTimestamp()
        .setFooter(`Powered by: https://catboys.com | Artist: ${artist}`, `https://raw.githubusercontent.com/Catboys-Dev/catbot.dev/master/assets/images/catbot.png`);

      message.channel.send(catboyEmbed)
      }, 1000);
    })
  }
}