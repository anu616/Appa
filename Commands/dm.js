import { Client } from "discord.js"


function dm (args, receivedMessage) {
    if (receivedMessage.member.roles.cache.has("715503417845350483")) {
        let userID = ""
            if(args[0].startsWith("<@!")) {
                userID = args[0].substr(3, 18)
            }
            else {
                userID = args[0].substr(2, 18)
            }
        let user = receivedMessage.guild.members.cache.get(userID)

        let msg = args.splice(1)

        user.send(msg)

        receivedMessage.delete()
    } else {
        receivedMessage.channel.send("You are not authorized to use this command")
    }
    
}

export { dm as default }