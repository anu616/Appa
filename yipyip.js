import { MessageEmbed } from 'discord.js'

function yipYip(receivedMessage) {
    let map = "715843510875717634"
    let roles = "750071527780778094"
    let faq = "804529091558375434"
    let abt = "750470702737391637" 
    let emoji = "<a:_Bisons:746082006248456283>"

    let msg = emoji + " Go to <#" + map + "> for the Channel Directory \n" + 
    emoji + " Go to <#" + roles + "> to choose Roles! \n" +
    emoji + " Go to <#" + faq + "> to konw about the Server! \n" +
    emoji + " Go to <#" + abt + "> to know about the Staff! \n" +

    embedMsg(msg, receivedMessage)
}

function embedMsg(msg, receivedMessage) {
    const embed = new MessageEmbed()
        .setTitle("Where would you like to fly to? ")
        .setColor(0xD9B595)
        .setDescription(msg)
        .setThumbnail('https://cdn.discordapp.com/attachments/760099744499367937/844371643815034880/image0.gif')

    receivedMessage.channel.send(embed)
}

export { yipYip as default }