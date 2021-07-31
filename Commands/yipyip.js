import { MessageEmbed } from 'discord.js'

function yipYip(receivedMessage) {
    let emoji = "<a:_Bisons:746082006248456283>"

    let msg = emoji + " Go to <#715480633463275597> for the Server Laws! \n" +
    emoji + " Go to <#715843510875717634> for the Channel Directory! \n" + 
    emoji + " Go to <#750071527780778094> to choose Roles! \n" +
    emoji + " Go to <#723016761712050186> for the Main Text Channel! \n" +
    emoji + " Go to <#738743723692654642> for the Avatar Text Channel! \n" +
    emoji + " Go to <#725059189340242010> for the Event Text Channel! \n" +
    emoji + " Go to <#715495520730349578> to play with our Bots! "

    embedMsg(msg, receivedMessage)
}

function embedMsg(msg, receivedMessage) {
    const embed = new MessageEmbed()
        .setTitle("Where would you like to fly to? ")
        .setColor(0xD9B595)
        .setDescription(msg)
        .setThumbnail('https://media1.tenor.com/images/874e58551f1d342b770b093360ccfa67/tenor.gif')

    receivedMessage.channel.send(embed)
}

export { yipYip as default }