import { MessageEmbed } from 'discord.js'

function logMsg(receivedMessage, channelToID) {
    const embedChannel = new MessageEmbed()
        .setDescription("`" + receivedMessage.content + "`")
        .setColor(0x000000)
        .setFooter("Confessions")
        
    const embedLog = new MessageEmbed()
        .setTitle(receivedMessage.author.tag)
        .setThumbnail(receivedMessage.author.avatarURL())
        .setDescription("<@" + receivedMessage.author.id + "> \n" +
        receivedMessage.content)
        .setFooter(receivedMessage.author.id + " ● " + receivedMessage.createdAt)

    receivedMessage.channel.send(embedChannel)
    let channelTo = receivedMessage.guild.channels.cache.get(channelToID)
    receivedMessage.delete()
    channelTo.send(embedLog)
}

export { logMsg as default } 