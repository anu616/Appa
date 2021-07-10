import { MessageEmbed } from "discord.js"


function dm(args, receivedMessage) {
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

        let msgID = user.dmChannel.lastMessageID

        dmReceive(user, msgID)
       
        receivedMessage.delete()
    } else {
        receivedMessage.channel.send("You are not authorized to use this command")
    }
    
}

function dmReceive(user, msgID) {
    let msgs =  user.dmChannel.messages.get(after, msgID) 

    let msgDesc = "" 

    msgs.array.forEach(msg => {
        msgDesc += msg.createdAt + "\n"
        + msg.content + "\n\n"
    });

    const embedMsg = new MessageEmbed()
        .setTitle(user.tag)
        .setThumbnail(user.defaultAvatarURL)
        .setDescription(msgDesc)

    receivedMessage.guild.members.cache.get("661015948249268272").send(embedMsg)
}

export { dm as default }