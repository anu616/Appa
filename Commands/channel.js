let roles = ["726653869102334034", "782321346356314162", "785411730376622080", "824102091483512862", 
            "738749980579463248", "780461463563141120", "715828869063507988", "725052066308816937", 
            "725052062546788373", "725052064362922096", "725052068007641201"]

                    
function mute(args, receivedMessage) {
    if(receivedMessage.member.roles.cache.has("715503417845350483")) {
        let userID = args[0].substr(3, 18)
        let reason = ""
        for (let i = 1; i < args.length; i++) {
            reason += args[i] + " "
            
        }
        let muteCatID = "741158534623920168"
        let name = "🧊 ┆ cooler-" + receivedMessage.guild.members.cache.get(userID).user.username
        
        receivedMessage.guild.members.cache.get(userID).roles.add("729667375804448818")
        
        for (let r = 0; r < roles.length; r++) {
            if (receivedMessage.guild.members.cache.get(userID).roles.cache.has(roles[r])) {
                receivedMessage.guild.members.cache.get(userID).roles.remove(roles[r])
            }
            
        }
        createChannel(receivedMessage, muteCatID, name, "mute", userID, reason)
    } else {
        receivedMessage.channel.send("You do not have permission to use this command.")
    }
}

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

export { mute as default}