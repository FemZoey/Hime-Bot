const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'random',
    category: 'test',

    execute(message, args) {
        let robux = [
            'e',
            'ee',
            'eee'
    ];
        let result = Math.floor((Math.random() * robux.length));
        message.channel.send(robux[result])
    }
}   