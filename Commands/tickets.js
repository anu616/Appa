import { createChannel } from "./channel.js";

function ticket(args, receivedMessage) {
    if (args.length == 0 ) {
        receivedMessage.channel.send("Please specify the type of ticket you would like to open. \n" 
        + "To open ticket with our Staff team, rerun the command as `appa ticket staff` \n" 
        + "To open a ticket with our Dragon team, rerun the command as `appa ticket dragon`")

    } else {
        let ticketType = args[0]
        let userID = ""
        let userName = ""
        let userTag = ""

        if ((args.length > 1) && receivedMessage.member.roles.cache.has("715503417845350483")) {
            if(args[1].startsWith("<@!")) {
                userID = args[1].substr(3, 18)
            }
            else {
                userID = args[1].substr(2, 18)
            }
            
            userName = receivedMessage.guild.members.cache.get(userID).user.username
            userTag = receivedMessage.guild.members.cache.get(userID).user.tag
        } else {
            userID = receivedMessage.author.id 
            userName = receivedMessage.author.username 
            userTag = receivedMessage.author.tag 
        }

        let msg = "<@" + userID + "> | " + userTag + " | " + userID + "\n"

        if(contains("Staff", ticketType)) {
            let chanName = "💎・ticket-" + userName

            if (args.length > 1) {
                if (receivedMessage.member.roles.cache.has("715503417845350483")) {
                    msg += "A Staff member has opened a ticket with you. \n\n" 
                    + "Please be patient while they come to address the matter. \n\n"
					+ "<@&715503417845350483>"

					createChannel(receivedMessage, "825329709558398986", chanName, "Staff", userID, msg)

                } else {
                    receivedMessage.channel.send("You are not authorized to create Staff tickets with members")
                }
            } else {
                msg += "You have opened a Staff ticket. \n\n" 
                + "Please state what concerns you had and be patient while a Staff member comes to help you. \n\n"
				+ "<@&715503417845350483>"

				createChannel(receivedMessage, "825329709558398986", chanName, "Staff", userID, msg)
            }
            
            

        } else if (contains("Dragon", ticketType)) {
            let chanName = "🐉・ticket-" + userName

            if (args.length > 1) {
                if (receivedMessage.member.roles.cache.has("772880958902632488")) {
                    msg += "A Dragon member has opened a ticket with you. \n\n" 
                    + "Please be patient while they come to address the matter. \n\n"
					+ "<@&772880958902632488>"

					createChannel(receivedMessage, "825329709558398986", chanName, "SW", userID, msg)

                } else {
                    receivedMessage.channel.send("You are not authorized to create Dragon tickets with members")
                }
            } else {
                msg += "You have opened a Dragon ticket. \n\n" 
                + "Please state what concerns you had and be patient while a Dragon member comes to help you. \n\n"
				+ "<@&772880958902632488>"

				createChannel(receivedMessage, "825329709558398986", chanName, "SW", userID, msg)

            }

        } else {
            receivedMessage.channel.send("That is not a valid ticket.")
        }

		receivedMessage.delete()
    }
}

function contains(str, word) {
    str = str.toLowerCase()
    word = word.toLowerCase()

    return(str.includes(word))
}

export { ticket as default }