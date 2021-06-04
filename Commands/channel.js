function createChannel(message, category, name, kind, userID, reason) {

    message.guild.channels.create(name, {
        type: "text",
        parent: category,
        permissionOverwrites: [ 
            {
                id: userID,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                deny: ['MANAGE_CHANNELS', 'MANAGE_MESSAGES'], 
            },
            {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
            },
        ]
    }).then(madeChannel => {
        if(kind == "mute") {
            madeChannel.updateOverwrite("736759673583173714", [
                {
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 
                         'MANAGE_CHANNELS', 'MANAGE_MESSAGES'],
                }
            ])
            madeChannel.updateOverwrite("715503417845350483", {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true,
                READ_MESSAGE_HISTORY: true,
                MANAGE_CHANNELS: true,
                MANAGE_MESSAGES: true
            })

            madeChannel.send("<@" + userID + "> You have been muted for " + reason + " \n" + 
            "Please stay patient while a <@&715503417845350483> member comes to discuss the situation with you")

        } /* else if(kind == "A") {
            madeChannel.overwritePermissions([
                {
                    id: "844748826476412928",       //Room A
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 
                             'MANAGE_CHANNELS', 'MANAGE_MESSAGES'],
                }
            ])

            madeChannel.send("<@" + userID + "> You have opened a ticket with <@&844748826476412928>. \n" + 
            "How can we help you?")

        } else if(kind == "B") {
            madeChannel.overwritePermissions([
                {
                    id: "844748872290009138",       //Room B
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 
                             'MANAGE_CHANNELS', 'MANAGE_MESSAGES'],
                }
            ])

            madeChannel.send("<@" + userID + "> You have opened a ticket with <@&844748872290009138>. \n" + 
           "How can we help you?")
        } */

    })
}

function closeChannel(receivedMessage) {
    if(receivedMessage.channel.name.startsWith("🧊・cooler-")) {
        if(receivedMessage.member.roles.cache.has("715503417845350483")) {
            let name = receivedMessage.channel.name
            const collector = receivedMessage.channel.createMessageCollector()
            let messages = collector.channel.messages.cache
            
            let msgData = "<html> \n" + 
                        "<head> \n" + "<title>" + name + "</title> \n" + "</head> \n" +
                        "<body> \n"
            
            messages.forEach(msg => {
                msgData += msg.author.tag + " \t" + msg.createdAt + " \n" + msg.content + "\n"
                
            })
            msgData += "</body> \n" +
                    "</html>"
            
            let filePath = "./Logs/" + name + ".html"
            fs.writeFile(filePath, msgData, 'utf8', (err) => {
                if (err) {
                    console.log(err)
                }
            })

            let logChannel = receivedMessage.guild.channels.cache.get("845418715721760818")
            logChannel.send({
                files: [filePath]
            })

            receivedMessage.channel.delete()

        } else {
            receivedMessage.channel.send("You do not have permission to use this command")
        }
    } else {
        receivedMessage.channel.send("This channel cannot be closed")
    }
}
export { createChannel, closeChannel as default }