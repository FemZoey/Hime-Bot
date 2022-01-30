module.exports = {
    name: 'roll',
    execute(message, args) {
      message.react('✅')
      var roll = Math.floor(Math.random() * 1000) + 1;
      message.channel.send('Rolled **' + roll + '** out of **1000**.')
  }
}
