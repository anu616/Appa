import { createChannel } from "./channel.js"

function mute(args, receivedMessage) {
    if(receivedMessage.member.roles.cache.has("715503417845350483")) {
        let userID = args[0].substr(3, 18)
        let reason = ""
        for (let i = 1; i < args.length; i++) {
            reason += args[i] + " "
            
        }
        let muteCatID = "741158534623920168"
        let name = "🧊┆cooler-" + receivedMessage.guild.members.cache.get(userID).user.username
        
        receivedMessage.guild.members.cache.get(userID).roles.add("729667375804448818") //warden
        
        receivedMessage.guild.members.cache.get(userID).roles.remove("726653869102334034") //verified

        receivedMessage.channel.send("Muted " + receivedMessage.guild.members.cache.get(userID).user.tag)

        createChannel(receivedMessage, muteCatID, name, "mute", userID, reason)
    } else {
        receivedMessage.channel.send("You do not have permission to use this command.")
    }
}

function unmute(args, receivedMessage) {
    if(receivedMessage.member.roles.cache.has("715503417845350483")) {
        let userID = args[0].substr(3, 18)
        
        receivedMessage.guild.members.cache.get(userID).roles.remove("729667375804448818") //warden
        receivedMessage.guild.members.cache.get(userID).roles.add("726653869102334034") //verified

        receivedMessage.channel.send("Unmuted " + receivedMessage.guild.members.cache.get(userID).user.tag)

    } else {
        receivedMessage.channel.send("You do not have permission to use this command.")
    }
}


export { mute, unmute}