import { MessageEmbed } from 'discord.js'

function yipYip(receivedMessage) {
    let laws = "715480633463275597"
    let map = "715843510875717634"
    let roles = "750071527780778094"
    let baSingSe = "723016761712050186"
    let aangFanClub = "738743723692654642"
    let paiSho = "725059189340242010" 
    let emoji = "<a:_Bisons:746082006248456283>"

    let msg = emoji + " Go to <#" + laws + "> for the Server Laws! \n" +
    emoji + " Go to <#" + map + "> for the Channel Directory \n" + 
    emoji + " Go to <#" + roles + "> to choose Roles! \n" +
    emoji + " Go to <#" + baSingSe + "> for the Main Text Channel! \n" +
    emoji + " Go to <#" + aangFanClub + "> for the Avatar Text Channel! \n" +
    emoji + " Go to <#" + paiSho + "> for the Event Text Channel"

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