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
  
  if (Command === 'help') {Client.commands.get('Help').execute(message)} // Help.js
  if (Command === 'information') {Client.commands.get('Information').execute(message)} // Information.js
  if (Command === 'protection') {Client.commands.get('Protection').execute(message)} // Protection.js
  if (Command === 'settings') {Client.commands.get('Settings').execute(message)} // Settings.js
  if (Command === 'ban') {Client.commands.get('Ban').execute(message)} // Ban.js
  if (Command === 'kick') {Client.commands.get('Kick').execute(message)} // Kick.js
  if (Command === 'mute') {Client.commands.get('Mute').execute(message)} // Mute.js
  if (Command === 'respect') {Client.commands.get('Respect').execute(message)} // Respect.js
  if (Command === 'ping') {Client.commands.get('Ping').execute(message)} // Ping.js

});

Client.login(Token);
