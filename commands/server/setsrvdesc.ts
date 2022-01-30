const db = require("quick.db");

module.exports = {
    name: 'setsrvdesc',
    execute(message, args) {

    var srvdesc;
    srvdesc = args.join(' ');

    if(!message.member.hasPermission('MANAGE_SERVER')) {
        message.reply('You cannot change this servers description.')
        return;
    }
    if(args[50]) {
      message.reply('The character limit is 50!')
      return;
    }
    if (message.member.hasPermission('MANAGE_SERVER')) {
      db.set(`_srvdesc${message.guild.id}`, srvdesc);
    } else {
      db.delete(`_srvdesc${message.guild.id}`), db.set(`_srvdesc${message.guild.id}`, srvdesc);
    }
    message.reply("I set your server description to ``" + srvdesc + "`` ." )
  }
}