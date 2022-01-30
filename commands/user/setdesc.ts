const db = require("quick.db");

module.exports = {
    name: 'setdesc',
    execute(message, args) {

    var desc;
    desc = args.join(' ');
    let user = db.get(`_desc${message.author.id}`);
    const amount = parseInt(args[50]);

    if(args[50]) {
      message.reply('The character limit is 50!')
      return;
    }
    if (!user) {
      db.set(`_desc${message.author.id}`, desc);
    } else {
      db.delete(`_desc${message.author.id}`), db.set(`_desc${message.author.id}`, desc);
    }
    message.reply("I set your profile description to ``" + desc + "`` ." )
  }
}
