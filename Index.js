const { Prefix, Token } = process.env;

const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: new Intents(32767) });
FileSync = require('fs');

client.commands = new Collection();
Folder = FileSync.readdirSync('./Commands/');
Folder.filter(File => File.endsWith('.js'));

for (File of Folder) {
  Command = require(`./Commands/${File}`);
  client.commands.set(Command.name, Command);
}

client.once('ready', async () => {
  console.log(`${Client.user.username} Is Online!`);
});

client.on('message', async (message) => {
  if (!message.content.startsWith(Prefix) || message.author.bot) {return}
  Arguments = message.content.slice(Prefix.length).split(/ +/);
  Command = Arguments.shift();
  
  if (Command === 'help') {
    client.commands.get('Help').execute(message)
  }
  
  if (Command === 'information') {
    client.commands.get('Information').execute(message)
  }
  
  if (Command === 'protection') {
    client.commands.get('Protection').execute(message)
  }
  
  if (Command === 'settings') {
    client.commands.get('Settings').execute(message)
  }
  
  if (Command === 'ban') {
    client.commands.get('Ban').execute(message)
  }
  
  if (Command === 'kick') {
    client.commands.get('Kick').execute(message)
  }
  
  if (Command === 'mute') {
    client.commands.get('Mute').execute(message)
  }
  
  if (Command === 'respect') {
    client.commands.get('Respect').execute(message)
  }
  
  if (Command === 'ping') {
    client.commands.get('Ping').execute(message)
  }

});

client.login(Token);
