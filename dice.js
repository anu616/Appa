function dice(args, receivedMessage) {
    if(args.length == 2 )
    {
        let diceNo = args[0]
    let diceSide = args[1]

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
    receivedMessage.channel.send(rolls)
    } else {
        receivedMessage.channel.send("Please use the command in the following format: \n" +
        "a!dice `<number of die>` `<number of sides on each dice>`")
    }
    
}

export { dice as default }