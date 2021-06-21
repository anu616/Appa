import { createChannel } from "./channel.js";

function ticket(args, receivedMessage) {
    if (args.length == 0 ) {
        receivedMessage.channel.send("Please specify the type of ticket you would like to open. \n" 
        + "To open a Staff Ticket, rerun the command as `appa ticket staff` \n" 
        + "To open a Sun Warrior ticket, rerun the command as `appa ticket hsw`")

    } else {
        let ticketType = args[0]
        let userID = receivedMessage.author.id 
        let userName = receivedMessage.author.username 
        let userTag = receivedMessage.author.tag 
        let msg = "<@" + userID + "> | " + userTag + " | " + userID + "\n"

        if(contains("Staff", ticketType)) {
            let chanName = "✦・staff・ticket-" + userName
            msg += "You have opened a staff ticket. \n\n" 
            + "Please state what concerns you had and be patient while a Staff member comes to help you. \n\n"
            + "<@&715503417845350483>"
            
            createChannel(receivedMessage, "825329709558398986", chanName, "Staff", userID, "msg")

        } else if (contains("Hsw", ticketType)) {
            let chanName = "🐉・sw・ticket-" + userName
            msg += "You have opened a Sun Warrior ticket. \n\n" 
            + "Please state what concerns you had and be patient while a Sun Warrior member comes to help you. \n\n"
            + "<@&772880958902632488>"

            createChannel(receivedMessage, "825329801879093248", chanName, "SW", userID, "msg")

        } else {
            receivedMessage.channel.send("That is not a valid ticket.")
        }
    }
}

function contains(str, word) {
    str = str.toLowerCase()
    word = word.toLowerCase()

    return(str.includes(word))
}

export { ticket as default }