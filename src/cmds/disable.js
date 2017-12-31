const Discord = require('discord.js');

module.exports = {
    title: "disable",
    perms: "Everyone",
    commands: ["!disable"],
    description: ["Disables your custom title"],

    run: async(client, serverInfo, message, args) => {
        const keys = require("../keys.js");
        var request = require('request');
        var url = keys.SetTitleURL;
        const user = message.author;
        url += '?DiscordID=' + user.id + '&key=' + keys.Password + "&title=X" + "&color=X";
        request({
            method: 'GET',
            url: url
        }, function (err, response, body) {
            if (err) user.send('Their was an error updating your title. Please' +
                ' pm an admin this error: \n' + err);
            if (body.toLowerCase().includes('done')) {
                user.send('Your title has been disable.');
            } else if (body.toLowerCase().includes('the user does not exist')) {
                user.send('Hi, in order to use our custom title service you must authorize your discord account. \n'
                    + "Please click this link: http://alphaconsole.net/auth/index.php and login with your discord account.")
            }
        });
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