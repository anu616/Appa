import fs from 'fs'
import { MessageEmbed } from 'discord.js'

function createChannel(receivedMessage, category, name, kind, userID, msg, time, userTag) {

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

           madeChannel.updateOverwrite("860026081892630539", {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true,
                READ_MESSAGE_HISTORY: true,
                MANAGE_CHANNELS: true,
                MANAGE_MESSAGES: true,
                MENTION_EVERYONE: true,
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

            
            madeChannel.updateOverwrite("860026081892630539", {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true,
                READ_MESSAGE_HISTORY: true,
                MANAGE_CHANNELS: true,
                MANAGE_MESSAGES: true,
                MENTION_EVERYONE: true,
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

        } else if(name.startsWith("🎟️・ticket-")) {
            let logChannel = receivedMessage.guild.channels.cache.get("845418928476782613")
            logChannel.send({
                files: [filePath]
            })

        } else if(name.startsWith("🐉・ticket-")) {
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

function unmuteReminder (receivedMessage, channel, time, userTag) {
    let h = 0
    let hpos = 0
    let m = 0
    let mpos = 0
    let s = 0
    let spos = 0
    let l = 0
    for (let i = 0; i < time.length; i++) {
        if(time[i] == "h") {
            hpos = i
            h = time.substr(0, hpos)
        } 
        if (time[i] == "m") {
            mpos = i
            if(hpos == 0){
                m = time.substr(0, mpos)
            } else {
                l = mpos - (hpos+1)
                m = time.substr(hpos+1, l)
            }
        } 
        if (time[i] == "s") {
            spos = i
            if(hpos == 0 && mpos == 0) {
                s = time.substr(0, spos)
            } else if (mpos == 0) {
                l = spos - (hpos+1)
                s = time.substr(hpos+1, l)
            } else {
                l = spos - (mpos+1)
                s = time.substr(mpos+1, l)
            } 
        }
    }
    let ms = ((h*3600) + (m*60) + s) * 1000

    setTimeout(() => {
        let embedMsg = new MessageEmbed()
            .setTitle("Mute duration up")
            .setDescription("It is time to unmute " + userTag)
            .setColor(receivedMessage.guild.roles.cache.get("715503417845350483").hexColor)

        channel.send("<@&715503417845350483>")
        channel.send(embedMsg)
    }, ms);

}


export { createChannel, closeChannel as default }