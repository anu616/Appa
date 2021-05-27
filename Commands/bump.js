import { MessageEmbed } from 'discord.js'

function bump(args, receivedMessage) {
    let ms = 0
    let bumpType = args.splice(1)

    if(bumpType == "!d bump") {
        ms = 2*3600*1000
        receivedMessage.channel.send("I will remind you to do !d bump in 2 hrs")

    } else if(bumpType == "!bump") {
        ms = 4*3600*1000
        receivedMessage.channel.send("I will remind you to do !d bump in 4 hrs")

    } else if(bumpType == "dlm!bump") {
        ms = 8*3600*1000
        receivedMessage.channel.send("I will remind you to do !d bump in 8 hrs")

    }

    setTimeout(() => {
        bumpMsg(bumpType, receivedMessage)
    }, ms);
}

function bumpMsg(bumpType, receivedMessage) {
    let bumpChannelID = "724837035319492658"            //avatar bumping
    let bumpChannel = receivedMessage.guild.channels.cache.get(bumpChannelID)
    let msg = ""
    let embedMsg = new MessageEmbed()

    if(bumpType == "!d bump") {
        msg = "<@&726161843793428562> Its time to bump the server!"
        embedMsg.setTitle("Do !d bump")
        embedMsg.setColor("0xD7E7F4")
        embedMsg.setDescription("Do `!d bump` to bump! \n" + 
        "After bumping, set a reminder using `appa bump !d bump`")
        embedMsg.setThumbnail("https://cdn.discordapp.com/avatars/302050872383242240/67342a774a9f2d20d62bfc8553bb98e0.png?size=1024")

    } else if(bumpType == "!bump") {
        msg = "Its time to bump the server!"
        embedMsg.setTitle("Do !bump")
        embedMsg.setColor("0x25345C")
        embedMsg.setDescription("Do `!bump` to bump! \n" + 
        "After bumping, set a reminder using `appa bump !bump`")
        embedMsg.setThumbnail("https://cdn.discordapp.com/avatars/315926021457051650/f90b3947729c79fc37e9ab9d0befc37f.png?size=1024")

    } else if(bumpType == "dlm!bump") {
        msg = "Its time to bump the server!"
        embedMsg.setTitle("Do !bump")
        embedMsg.setColor("0x748BDA")
        embedMsg.setDescription("Do `dlm!bump` to bump! \n" + 
        "After bumping, set a reminder using `appa bump dlm!bump`")
        embedMsg.setThumbnail("https://cdn.discordapp.com/avatars/212681528730189824/8f501c0ea80824ce709f7adebfe11a94.png?size=1024")
    }

    bumpChannel.send(msg)
    bumpChannel.send(embedMsg)
}

export { bump as default }