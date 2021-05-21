function mute(args, receivedMessage) {
    let userID = args[0].substr(3, 18)
    let muteCatID = "741158534623920168"
    let name = "🧊・cooler-" + receivedMessage.guild.members.cache.get(userID).user.username
    
    receivedMessage.guild.members.cache.get(userID).roles.add("729667375804448818")

    createChannel(receivedMessage, muteCatID, name, "mute", userID)
}

function createChannel(message, category, name, kind, userID) {

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
            madeChannel.overwritePermissions([
                {
                    id: "736759673583173714",
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 
                         'MANAGE_CHANNELS', 'MANAGE_MESSAGES'],
                }
            ])

            madeChannel.send("<@" + userID + "> You have been muted. \n" + 
            "<@&715465955420930090> will now take necessary action")

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