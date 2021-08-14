Discord = require('discord.js');
Bot = new Discord.Client();
Prefix = ("PREFIX 1");
Prefix2 = ('PREFIX 2');
Token = ('TOKEN');
Operations = ("Yes");
Admin1 = ("Troy D. Moon");
Admin2 = ("xxSShadow");
Device = ("Troy's 8E Laptop (Visual Studio)");
Status = ("Online");
Version = ("5.0.0");

Bot.once('ready', () => {
    console.info(`Loading Visual...`);
    console.info(`Loading Audio...`);
    console.info(`Loading Smart Aware...`);
    console.info(`Loading AntiVirus...`);
    console.info(`Loading CPU Management...`);
    console.info(`Loading Server Tools...`);
    console.info(`Loading Smart Safe...`);
    console.info(`Loading Commands...`);
    console.info(`Loading Activity Status...`);
    console.info(`Loading Spotify...`);
    console.info(`Loading Update Servers...`);
    console.info(`Loading 8E System 12...`);
    console.info(`Loading System Assistant...`);
    console.info(`===Info===`)
    console.info(`Name: ${Bot.user.username}`);
    console.info(`Bot Status: Online`);
    console.info(`Admin1: Troy D. Moon`);
    console.info(`Admin2: xxSShadow`);
    console.info(`Bot is now Operational.`);
    console.info(`Licenced 8E Product`);
    Bot.user.setActivity(null)
    console.info(`===Log===`);
});

Bot.on('message', msg => {
    //Normal Commands
    //These Commands are Logged.
    if (msg.content == `${Prefix}What is this?`) {
        msg.channel.send(`This is hell, thanks for asking.`)
        console.info(`What is this?`);
    }

    if (msg.content == `${Prefix}Help.`) {
        msg.channel.send(`:question: **Help**\nAvailable Commands:\n*Utility*\n'${Prefix}What is this?': Shows you what this is from its POV.\n'${Prefix}Info.': Shows this bots info.\n'${Prefix}Help.': Shows this screen.\n'${Prefix}Ping.': Does a ping test of the bot.\n*Other*\n'${Prefix}Links.': Shows our links.\n*Fun*\n'${Prefix}Pay respects.': Pays Respects.`)
        console.info(`Help.`);
    }

    if (msg.content == `${Prefix}Info.`) {
        msg.channel.send(`:information_source: **Info**\nOS: 8E System 12\nCreators: <@493924131017064480> (xxSShadow) and <@707008755195314237> (Troy D. Moon)\nAntivirus: 8E Security Essentials V.12.8\nThis is an officially Licenced 8E Product.`)
        console.info(`Info.`);
    }

    if (msg.content == `*#06#`) {
        msg.channel.send(`:x: **Modem Info**\n\nThis O.S. Doesn't support this feature.`)
        console.info(`*#06#`);
    }

    if (msg.content == `Hey System,`) {
        msg.channel.send(`:x:**Invalid Formatting**\nSay "${Prefix}" **and** the command. \n https://piskel-imgstore-b.appspot.com/img/e9e38757-64ce-11eb-96e7-83925e923fe7.gif `)
        console.info(`Hey System,`);
    }

    if (msg.content == `${Prefix}Ban.`) {
        msg.channel.send(`:x: **Ban**\nSorry, until this feature is implemented, this command will be useless.`)
        console.info(`Ban.`);
    }

    if (msg.content == `${Prefix}Kick.`) {
        msg.channel.send(`:x: **Kick**\nSorry, until this feature is implemented, this command will be useless.`)
        console.info(`Kick.`);
    }

    if (msg.content == `${Prefix}Mute.`) {
        msg.channel.send(`:x: **Mute**\nSorry, until this feature is implemented, this command will be useless.`)
        console.info(`Mute.`);
    }

    if (msg.content == `${Prefix}Links.`) {
        msg.channel.send(`:chains: **Links**\nOur Site: <https://sites.google.com/view/8eofficial/home> \nOur Patreon: <https://www.patreon.com/8E_Development> \nOur Twitter: <https://www.twitter.com/8eTech> \nOur YouTube: <https://www.youtube.com/channel/UCL16y1SumpQHoKYvio55tIA> \nThe Server: <https://discord.gg/NmCJs3d8r3> \n8E Central Telegram: <https://t.me/joinchat/RTbVxcBIMmSSpdH8>`)
        console.info(`Links.`);
    }

    if (msg.content == `${Prefix}Pay respects.`) {
        msg.channel.send(`<@${msg.author.id}> *paid their respects*`)
        console.info(`Pay respects.`);
    }

    if (msg.content == `${Prefix}Hello screen.`) {
        msg.channel.send(`:wave: **Hello Screen**\nHello, I'm the System Assistant. If you need me, just say "${Prefix}" then your command. And thats it! Hopefully, You have a great time. If you need help, say "${Prefix}Help." Thank you.`)
        console.info(`Hello screen.`);
    }

    if (msg.content === `${Prefix}Ping.`) {
        msg.author.send(`:ping_pong: **Ping**\nThis Device is: Troy's Laptop.\nLatency: ${Date.now() - msg.createdTimestamp}\nAPI Delay: ${Math.round(Bot.ws.ping)}\nJitter: N/A \nHeartbeat Ping: N/A`)
        console.info(`Ping.`);
    }

    //Development Commands
    //These Commands are logged.

    if (msg.content == `${Prefix2}Info.`) {
        msg.author.send(`**DEV INFO FOR SYSTEM ASSISTANT BOT**\nToken:'NzkxMDc3NzkwNDIxMzUyNDY4.X-J6mg.QVZEE8easKV-gIZiKagrFlaRd6Y'\nBuild: 9753 (19612.736)\nID: 791077790421352468`)
        console.info(`Info. +Dev`);
    }

    if (msg.content == `${Prefix2}Play Among Us`) {
        Bot.user.setActivity("Among Us");
        msg.authot.send(`Set.`)
        console.info(`Play Among Us +Dev`);
    }

    if (msg.content == `${Prefix2}Activity Help.`) {
        msg.author.send(`**Available Activity Command**\n${Prefix2}Play Among Us\n${Prefix2}Play my laptop\n${Prefix2}Play my phone\n${Prefix2}Play with friends\n${Prefix2}Play clear\n${Prefix2}Stream among us 1\n${Prefix2}Stream among us 2\n${Prefix2}Stream among us 3\n${Prefix2}Watch Linus Tech Tips\n${Prefix2}Listen to Emergency Alerts`)
        console.info(`Activity Help. +Dev`);
    }

    if (msg.content == `${Prefix2}Help.`) {
        msg.author.send(`**8E DEVELOPER HELP**\n${Prefix2}Activity Help.: Shows the available Bot Status commands.\n${Prefix2}Crash.: Kills the bot.\n${Prefix2}Backup Crash.: Crashes the bot in case normal crash doesn't work.\n${Prefix2}Info.: Grabs Development Info.`)
        console.info(`Help. +Dev`);
    }

    if (msg.content == `${Prefix2}Crash.`) {
        die();
    }

    if (msg.content == `${Prefix2}Backup Crash.`) {
        msg.author.send(`Crashing...`)
        msg.channel.send(crash)
    }

    if (msg.content == `${Prefix2}Play my laptop`) {
        Bot.user.setActivity("on Troy's 8E Laptop");
        msg.author.send(`Set.`)
        console.info(`Play my laptop +Dev`);
    }

    if (msg.content == `${Prefix2}Play my phone`) {
        Bot.user.setActivity("on Troy's 8E Phone");
        msg.author.send(`Set.`)
        console.info(`Play my phone +Dev`);
    }

    if (msg.content == `${Prefix2}Play with friends`) {
        Bot.user.setActivity("with friends");
        msg.author.send(`Set.`)
        console.info(`Play with friends +Dev`);
    }

    if (msg.content == `${Prefix2}Play clear`) { Bot.user.setActivity(null);
        msg.author.send(`Cleared`)
        console.info(`Play clear +Dev`);
    }

    if (msg.content == `${Prefix2}Stream among us 1`) {
        Bot.user.setActivity("Among Us", { type: "STREAMING", url: "https://twitch.tv/xxSSShadow" });
        msg.author.send(`Set.`)
        console.info(`Stream among us 1 +Dev`);
    }

    if (msg.content == `${Prefix2}Stream among us 2`) {
        Bot.user.setActivity("Among Us", { type: "STREAMING", url: "https://twitch.tv/troymoondiscord" });
        msg.author.send(`Set.`)
        console.info(`Stream among us 2 +Dev`);
    }

    if (msg.content == `${Prefix2}Stream among us 3`) {
        Bot.user.setActivity("Among Us", { type: "STREAMING", url: "https://twitch.tv/manny_da_fast21" });
        msg.author.send(`Set.`)
        console.info(`Stream among us 3 +Dev`);
    }

    if (msg.content == `${Prefix2}Watch Linus Tech Tips`) {
        Bot.user.setActivity("Linus Tech Tips", { type: "WATCHING" });
        msg.author.send(`Set.`)
        console.info(`Watch Linus Tech Tips +Dev`);
    }

    if (msg.content == `${Prefix2}Listen to Emergency Alerts`) {
        Bot.user.setActivity("Emergency Alerts", { type: "LISTENING" });
        msg.author.send(`Set.`)
        console.info(`Listen to Emergency Alerts +Dev`);
    }

});

Bot.login(Token);
// Copyright Belongs to xxSShadow, Troy D. Moon, and the 8E Development Team
// this is a Licenced 8E Product.
