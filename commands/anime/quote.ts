const { MessageEmbed } = require('discord.js');
var request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://animechan.vercel.app/api/random',
  'headers': {
  }
};

module.exports = {
  	name: 'quote',
  	execute(message, args) {
      request(options, function (error, response) {
        if (error) throw new Error(error);
        var parsed = JSON.parse(response.body); //turns the api into a parsed json file :D
        const { anime, character, quote } = (parsed) //Requires that parsed json file

        const quoteEmbed = new MessageEmbed()
        .setColor('#DB7DC3')
        .setTitle(`${character}:`)
        .setDescription(`${quote}`)
        .setTimestamp()
        .setFooter(`Quoted from ${character}, from ${anime}. | Powered by animechan.vercel.app`)

        message.channel.send(quoteEmbed)
    })
  }
}