const simplydjs = require('simply-djs')

const Discord = require("discord.js")

module.exports = {

  name: "help",

  aliases: [""],

  usage: "unban",

  description: "unbans member",

  run: async (client, message, args) => {

    let embed1 = new Discord.MessageEmbed()

      .setTitle('** <:713400011748016190:860915932808347698> Help Panel <:713400011748016190:860915932808347698>**')

      .setDescription('<:713400011748016190:860915932808347698> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')

      .addField(

        "<:713400011748016190:860915932808347698> COMMAND CATEGORIES",

        "**<:713400011748016190:860915932808347698>> ADMIN\n<:713400011748016190:860915932808347698> GENERAL\n<:713400011748016190:860915932808347698> GIVEAWAY\n<:713400011748016190:860915932808347698>INFO\n<:713400011748016190:860915932808347698> IMAGE\n<:713400011748016190:860915932808347698> MODERATION\n<:713400011748016190:860915932808347698>OWNER\n<:redheart:876628633144414258> FUN\n<:713400011748016190:860915932808347698> UPTIMER**")

      .setThumbnail("https://cdn.discordapp.com/avatars/876690046487498752/50c204817cd9fc42b1581dcf43042259.webp")

      .setImage('https://cdn.discordapp.com/attachments/860775916728352800/882914868838170634/standard.gif')

      .setFooter('Bot Made By ZeroNaruto#9000 | Prefix: *')

    let embed2 = new Discord.MessageEmbed()

      .setTitle('** <:713400011748016190:860915932808347698> Help Panel <:713400011748016190:860915932808347698>**')

      .setDescription('<:713400011748016190:860915932808347698> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')

      .addField(

        "<a:uptimer:876630668044533820> MODERATION",

        "`ban` `unban` `kick` `addemoji` `addrole` `removerole` `announce` `setnick` `resetnick` `ticket` `lockchannel` `purge` `slowmode` `mute` `unmute` `nuke` `resetwarns` `warn` `warnings`")

      .setThumbnail("https://cdn.discordapp.com/avatars/876690046487498752/50c204817cd9fc42b1581dcf43042259.webp")

      .setImage('https://cdn.discordapp.com/attachments/860775916728352800/882914868838170634/standard.gif')

      .setFooter('Bot Made By ZeroNaruto#9000 | Prefix: *')

    let embed3 = new Discord.MessageEmbed()

      .setTitle('** <:713400011748016190:860915932808347698> Help Panel <:713400011748016190:860915932808347698>**')

      .setDescription('<:redbullet:876629791648907274> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')

      .addField(

        "<a:uptimer:876630668044533820> GENERAL",

        "`servericon` `calculator` `invite` `membercount` `help` `serverinfo` `leaderboard`")

      .setThumbnail("https://cdn.discordapp.com/avatars/876690046487498752/50c204817cd9fc42b1581dcf43042259.webp")

      .setImage('https://cdn.discordapp.com/attachments/860775916728352800/882914868838170634/standard.gif')

      .setFooter('Bot Made By ZeroNaruto#9000 | Prefix: *')

    let embed4 = new Discord.MessageEmbed()

      .setTitle('** <:redheart:876628633144414258> Help Panel <:redheart:876628633144414258>**')

      .setDescription('<:redbullet:876629791648907274> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')

      .addField(

        "<a:uptimer:876630668044533820> GIVEAWAY",

        "`gstart` `gend` `greroll`")

      .setThumbnail("https://cdn.discordapp.com/avatars/876690046487498752/50c204817cd9fc42b1581dcf43042259.webp")

      .setImage('https://cdn.discordapp.com/attachments/860775916728352800/882914868838170634/standard.gif')

      .setFooter('Bot Made By ZeroNaruto#9000 | Prefix: *')

    let embed5 = new Discord.MessageEmbed()

      .setTitle('** <:redheart:876628633144414258> Help Panel <:redheart:876628633144414258>**')

      .setDescription('<:redbullet:876629791648907274> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')

      .addField(

        "<a:uptimer:876630668044533820> INFO",

        "`avatar` `bug-report` `feedback` `developer` `help` `howtouse` `info` `serverinfo` `position` `urban` `weather` `status` `channelinfo` `rolememberinfo`")

      .setThumbnail("https://cdn.discordapp.com/avatars/876690046487498752/50c204817cd9fc42b1581dcf43042259.webp")

      .setImage('https://cdn.discordapp.com/attachments/860775916728352800/882914868838170634/standard.gif')

      .setFooter('Bot Made By ZeroNaruto#9000 | Prefix: *')

    let embed6 = new Discord.MessageEmbed()

      .setTitle('** <:redheart:876628633144414258> Help Panel <:redheart:876628633144414258>**')

      .setDescription('<:redbullet:876629791648907274> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')

      .addField(

        "<a:uptimer:876630668044533820> IMAGE",

        "`tweet` `deepfry` `eject` `meme` `kangaroo` `dog` `cat` `changemymind` `fire` `respect` `scary`")

      .setThumbnail("https://cdn.discordapp.com/avatars/876690046487498752/50c204817cd9fc42b1581dcf43042259.webp")

      .setImage('https://cdn.discordapp.com/attachments/860775916728352800/882914868838170634/standard.gif')

      .setFooter('Bot Made By ZeroNaruto#9000 | Prefix: *')

    let embed7 = new Discord.MessageEmbed()

      .setTitle('** <:redheart:876628633144414258> Help Panel <:redheart:876628633144414258>**')

      .setDescription('<:redbullet:876629791648907274> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')

      .addField(

        "<a:uptimer:876630668044533820> FUN",

        "`rps` `coinflip` `meme` `reverse` `hangman` `tictactoe` `trivia` `fact` `Shuffle-guess`")

      .setThumbnail("https://cdn.discordapp.com/avatars/876690046487498752/50c204817cd9fc42b1581dcf43042259.webp")

      .setImage('https://cdn.discordapp.com/attachments/860775916728352800/882914868838170634/standard.gif')

      .setFooter('Bot Made By ZeroNaruto#9000 | Prefix: *')

    let embed8 = new Discord.MessageEmbed()

      .setTitle('** <:blueheart:878156514018332703> Help Panel <:redheart:876628633144414258>**')

      .setDescription('<:redbullet:876629791648907274> ** *Pequin*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')

      .addField(

        "<a:uptimer:876630668044533820> UPTIME",

        "`add` `calc` `ping` `projects` `remove` `stats` `total`")

      .setThumbnail("https://cdn.discordapp.com/avatars/876690046487498752/50c204817cd9fc42b1581dcf43042259.webp")

      .setImage('https://cdn.discordapp.com/attachments/860775916728352800/882914868838170634/standard.gif')

      .setFooter('Bot Made By ZeroNaruto#9000 | Prefix: *')

    

    let pages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8] // REQUIRED

    // its still possible without embed

    // let pages = ['page1', 'page2', 'page3']

    simplydjs.embedPages(client, message, pages, {

      firstEmoji: '876616705164595280', // default: ⏪

      backEmoji: '876605402291265576', // default: ◀️

      delEmoji: '876627238903246889', // default: 🗑️

      forwardEmoji: '876616590563614781', // default: ▶️

      lastEmoji: '876616351572168765', // default: ⏩

      btncolor: 'grey', // default: green 

      delcolor: 'red', // default: red

      skipcolor: 'grey', // default: blurple

      // Colors that discord-buttons support. like red, blurple, grey, green

      skipBtn: true,

    })

  }

}
