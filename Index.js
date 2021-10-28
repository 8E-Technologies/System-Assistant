Discord = require('discord.js');
FileSync = require('fs');
Client = new Discord.Client();

Prefix = process.env['PREFIX'];
Token = process.env['TOKEN'];

Client.commands = new Discord.Collection();
Folder = FileSync.readdirSync('./Commands/');
Folder.filter(File => File.endsWith('.js'));

for (File of Folder) {
  Command = require(`./Commands/${File}`);
  Client.commands.set(Command.name, Command);
}

Client.once('ready', async () => {
  console.log(`${Client.user.username} Is Online!`);
});

Client.on('message', async (message) => {
  if (!message.content.startsWith(Prefix) || message.author.bot) {return}
  Arguments = message.content.slice(Prefix.length).split(/ +/);
  Command = Arguments.shift();
  
  if (Command === 'help') {Client.commands.get('Help').execute(message)}
  if (Command === 'information') {Client.commands.get('Information').execute(message)}
  if (Command === 'protection') {Client.commands.get('Protection').execute(message)}
  if (Command === 'settings') {Client.commands.get('Settings').execute(message)}
  if (Command === 'ban') {Client.commands.get('Ban').execute(message)}
  if (Command === 'kick') {Client.commands.get('Kick').execute(message)}
  if (Command === 'mute') {Client.commands.get('Mute').execute(message)}
  if (Command === 'respect') {Client.commands.get('Respect').execute(message)}
  if (Command === 'ping') {Client.commands.get('Ping').execute(message)}

});

Client.login(Token);
