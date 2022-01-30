const allowed = 'Zoey#8685'

module.exports = {
  	name: 'say',
  	execute(message, args) {
      if(message.author.tag === allowed) {

      if(!args[0]) {

        message.author.send('You need to say something!')
        message.delete()
        return;

      } else {

        message.delete()
        message.channel.startTyping();

        setTimeout(function(){
        const content = `${message.content.slice(4)}`
        message.channel.send(content)
        }, 500);
-
        message.channel.stopTyping(true)

      }
    }
  }
}