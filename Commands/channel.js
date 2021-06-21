import fs from 'fs'
import { unmuteReminder } from './mute.js'

function createChannel(receivedMessage, category, name, kind, userID, msg) {

    receivedMessage.guild.channels.create(name, {
        type: "text",
        parent: category,
        permissionOverwrites: [ 
            {
                id: userID,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE'],
                deny: ['MANAGE_CHANNELS', 'MANAGE_MESSAGES'], 
            },
            {
                id: receivedMessage.guild.id,
                deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE'],
            },
            {
                id: "715503417845350483",           
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE'],
            }
        ]
    }).then(madeChannel => {
        if(kind == "mute") {
            madeChannel.updateOverwrite("715503417845350483", {
                MANAGE_CHANNELS: true,
                MANAGE_MESSAGES: true,
            })

            madeChannel.send(msg)
            
			if(time.length > 0) {
				unmuteReminder(receivedMessage, madeChannel, time, userTag)
			} 

        } else if(kind == "Staff") {
            madeChannel.updateOverwrite("715503417845350483", {
                MANAGE_CHANNELS: true,
                MANAGE_MESSAGES: true,
            })

            madeChannel.send(msg)

        } else if(kind == "SW") {
            madeChannel.updateOverwrite("772880958902632488", {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true,
                READ_MESSAGE_HISTORY: true,
                MANAGE_CHANNELS: true,
                MANAGE_MESSAGES: true,
                MENTION_EVERYONE: true,
            })

            madeChannel.send(msg)
        }

        return madeChannel
    })
}

function closeChannel(receivedMessage) {
    if(receivedMessage.member.roles.cache.has("715503417845350483")) {
        let name = receivedMessage.channel.name
        const collector = receivedMessage.channel.createMessageCollector()
        let messages = collector.channel.messages.cache
            
        let msgData = ""
            
        messages.forEach(msg => {
            msgData += msg.author.tag + " \t\t" + msg.createdAt + " \n" + msg.content + "\n \n"
                
        })
            
        let filePath = "./Logs/" + name + ".txt"
        fs.writeFile(filePath, msgData, 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
        })

        if(name.startsWith("🧊・cooler-")) {
            let logChannel = receivedMessage.guild.channels.cache.get("845418715721760818")
            logChannel.send({
                files: [filePath]
            })

        } else if(name.startsWith("✦・staff・ticket-")) {
            let logChannel = receivedMessage.guild.channels.cache.get("845418928476782613")
            logChannel.send({
                files: [filePath]
            })

        } else if(name.startsWith("🐉・sw・ticket-")) {
            let logChannel = receivedMessage.guild.channels.cache.get("845418822395494490")
            logChannel.send({
                files: [filePath]
            })

        } else {
            receivedMessage.channel.send("This channel cannot be closed")
        }

        receivedMessage.channel.delete()

    } else {
        receivedMessage.channel.send("You do not have permission to use this command")
    }
}




export { createChannel, closeChannel as default }