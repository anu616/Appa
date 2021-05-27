import { MessageEmbed } from 'discord.js'

function bump(args, receivedMessage) {
    if(args.length == 0){
        receivedMessage.channel.send("Please re run the command specifying the type of bump. \n" +
        "Example: `appa bump !d bump`")
    }
    else {
        let ms = 0
        args.join(' ')
        console.log(bumpType)

        if(args == "!d bump") {
            ms = 2*3600*1000
            receivedMessage.channel.send("I will remind you to do !d bump in 2 hrs")

        } else if(args == "!bump") {
            ms = 4*3600*1000
            receivedMessage.channel.send("I will remind you to do !d bump in 4 hrs")

        } else if(args == "dlm!bump") {
            ms = 8*3600*1000
            receivedMessage.channel.send("I will remind you to do !d bump in 8 hrs")

        }

        setTimeout(() => {
            bumpMsg(args, receivedMessage)
        }, ms);
    }
}

function bumpMsg(bumpType, receivedMessage) {
    let bumpChannelID = "724837035319492658"            //avatar bumping
    let bumpChannel = receivedMessage.guild.channels.cache.get(bumpChannelID)
    let msg = ""

    let title = ""
    let desc = ""
    let col = ""
    let thumb = ""

    if(bumpType == "!d bump") {
        msg = "<@&726161843793428562> Its time to bump the server!"
        title = "Do !d bump"
        col = "0xD7E7F4"
        desc = "Do `!d bump` to bump! \n" + 
        "After bumping, set a reminder using `appa bump !d bump`"
        thumb = "https://cdn.discordapp.com/avatars/302050872383242240/67342a774a9f2d20d62bfc8553bb98e0.png?size=1024"

    } else if(bumpType == "!bump") {
        msg = "Its time to bump the server!"
        title = "Do !bump"
        col ="0x25345C"
        desc ="Do `!bump` to bump! \n" + 
        "After bumping, set a reminder using `appa bump !bump`"
        thumb ="https://cdn.discordapp.com/avatars/315926021457051650/f90b3947729c79fc37e9ab9d0befc37f.png?size=1024"

    } else if(bumpType == "dlm!bump") {
        msg = "Its time to bump the server!"
        title = "Do !bump"
        col ="0x748BDA"
        desc ="Do `dlm!bump` to bump! \n" + 
        "After bumping, set a reminder using `appa bump dlm!bump`"
        thumb ="https://cdn.discordapp.com/avatars/212681528730189824/8f501c0ea80824ce709f7adebfe11a94.png?size=1024"
    }

    const embedMsg = new MessageEmbed()
        .setTitle(title)
        .setColor(col)
        .setDescription(desc)
        .setThumbnail(thumb)

    console.log(embedMsg)

    bumpChannel.send(msg)
    bumpChannel.send(embedMsg)
}

export { bump as default }