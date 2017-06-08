const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const help = new Discord.RichEmbed()
  .setDescription('To view main commands, use ' + config.prefix + 'help.')
  .addField(config.prefix + 'ping', 'Pings the bot to make sure its up.', true)
  .addField(config.prefix + '1' + '(message)', 'Sends a message to the chat room the bot is linked to. so this would send a message to ' + config.firstname, true)
  .addField(config.prefix + '2' + '(message)', 'Sends a message to the chat room the bot is linked to. so this would send a message to ' + config.secname, true);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setGame(config.prefix + 'help')
});
var prefix = (config.prefix);
client.on('message', message => {
let args = message.content.split(' ').slice(1)
var argresult = args.join(' ');
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;

if (message.content.startsWith(prefix + 'ping')) {
message.channel.sendMessage('pong!');
} else
if (message.content.startsWith(prefix + 'help')) {
    message.channel.sendEmbed(help,{ disableEveryone: true }).catch(console.error);
  } else
  if (message.content.startsWith(prefix + '1')) {
    if (message.channel.id == config.a1)
 return  message.channel.sendMessage("You can't send a message to the same channel silly!")
    client.channels.get(config.a1).sendMessage("**" + `${message.author.username}: ` +"**" + argresult);
        message.channel.sendMessage("Sent.")
      console.log("sent " + argresult + " to " + config.firstname)
} else
    if (message.content.startsWith(prefix + '2')) {
if (message.channel.id == config.a2)
      return  message.channel.sendMessage("You can't send a message to the same channel silly!")
      client.channels.get(config.a2).sendMessage("**" + `${message.author.username}: ` +"**" + argresult);
      message.channel.sendMessage("Sent.")
      console.log("sent " + argresult + " to " + config.secname)
    }
    });
    client.login(config.token);
