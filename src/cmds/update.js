/**
 * ! Update command
 * 
 * ? Kinda obvious, too lazy to write anything smart anyway
 * ? We also have command description for a reason. So I actually don't know why I added this here. Welp...
 */
const Discord = require('discord.js');
var shell = require("shelljs");

module.exports = {
     title: "Update",
     details: [
        {
            perms      : "Developer",
            command    : "!Update",
            description: "Updates the bot"
        }
    ],

    run: ({ client, serverInfo, message, args, sql, config, sendEmbed }) => {

        if (message.author.id === "136607366408962048" || message.author.id === "149223090134450177") {
            // <---   If you would like to change role perms. Change [BontControl] to your role name
            message.reply("Begining update");
            // client.guilds.get(serverInfo.guildId).channels.get(serverInfo.setTitleChannel).overwritePermissions(message.guild.id, {
            //     SEND_MESSAGES: false
            // });
            // client.guilds.get(serverInfo.guildId).channels.get(serverInfo.showcaseChannel).overwritePermissions(message.guild.id, {
            //     SEND_MESSAGES: false
            // });
            // client.guilds.get(serverInfo.guildId).channels.get(serverInfo.suggestionsChannel).overwritePermissions(message.guild.id, {
            //     SEND_MESSAGES: false
            // });
            // client.guilds.get(serverInfo.guildId).channels.get(serverInfo.setSpecialTitle).overwritePermissions(message.guild.id, {
            //     SEND_MESSAGES: false
            // });
            //message.channel.send('Channels locked. Executing shell commands...')
    
            //Shell commands
            shell.exec("git checkout .");
            shell.exec("git pull origin master");
            shell.exec("pm2 restart AlphaConsole");
        }
    }
};