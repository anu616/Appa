import { MessageEmbed } from 'discord.js'

function dice(args, receivedMessage) {
    if(args.length == 2 )
    {
        let diceNo = args[0]
        let diceSide = args[1]

        if (diceNo > diceSide) {
            receivedMessage.channel.send("The number of die have to be lesser than or equal to the " +
             "number of sides on each dice. ")
        } else {
            console.log("no: " + diceNo)
            console.log("side: " + diceSide)
        
            let rolls = []
            let num = 0
            let i = 0
            while(i < diceNo) {
                num = Math.ceil(Math.random() * diceSide)
                if(rolls.includes(num)) {
                    i = i
                } else {
                    rolls.push(num)
                    i++;
                }
            }
            msgEmbed(rolls, receivedMessage)
        }
    } else {
        receivedMessage.channel.send("Please use the command in the following format: \n" +
         "a!dice `<number of die>` `<number of sides on each dice>`")
    }
    
}

function msgEmbed(rolls, receivedMessage) {
    const embed = new MessageEmbed()
        .setTitle("Your Rolls:")
        .setDescription(rolls)
        .setThumbnail('https://cdn.discordapp.com/emojis/823969977341444146.gif?v=1')
        .setColor(0x000000)

    receivedMessage.channel.send(embed)
}

export default dice