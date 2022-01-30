const db = require("quick.db");

module.exports = {
    name: 'setpronouns',
    execute(message, args) {

    var desc;
    pronouns = args.join(' ');
    let user = db.get(`_pronouns${message.author.id}`);
    
    if(args[50]) {
      message.reply('The character limit is 10!')
      return;
    }
    if (!user) {
      db.set(`_pronouns${message.author.id}`, pronouns);
    } else {
      db.delete(`_pronouns${message.author.id}`), db.set(`_pronouns${message.author.id}`, pronouns);
    }
    message.reply("I set your pronouns to ``" + pronouns + "`` ." )
  }
}