const Discord = require('discord.js');

module.exports.run = async(client, serverInfo, sql, message, args) => {
    
    if (hasRole(message.member, "Staff"))                                                                                                  // <---   If you would like to change role perms. Change [BontControl] to your role name
    {
        if (args.length > 2)
        {
            var TheCommand = args[1].toLowerCase();
            if(args[1].toLowerCase().startsWith('!'))
            {
                TheCommand = args[1].substring(1).toLowerCase()
            }

            var ResponseText = "";
            for (i = 2; i < args.length; i++) {
                ResponseText += args[i] + " ";
            }
            
            sql.run(`Update Commands set Response = '${mysql_real_escape_string(ResponseText)}' where Command = '${mysql_real_escape_string(TheCommand)}'`).then(() => {
                const embed = new Discord.MessageEmbed()
                .setColor([255,255,0])
                .setTitle("Command succesfully edited :wink:") 
                message.channel.send(embed)
            })

        } else {
            const embed = new Discord.MessageEmbed()
            .setColor([255,255,0])
            .setTitle("Please provide me what the command should answer.\nUsage: `!EditCom [Command] [Text]`") 
            message.channel.send(embed)
        }
    }

}

//Functions used to check if a player has the desired role
function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}
function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    } else {
        return false;
    }

}

function mysql_real_escape_string (str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return char+char; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
        }
    });
}