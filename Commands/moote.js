function moote (args, receivedMessage) {
	if(args.length < 1) {
		receivedMessage.channel.send("Please rerun the command as `Appa moote <position>` based on your position as one of the following: \n"
		 + "Senior, Staff")
	} else {
		if(receivedMessage.member.roles.cache.has('868861213684158485')) {

			if (contains("senior", args[0]) || contains("staff", args[0])) {
				let userID = receivedMessage.author.id
				let roles = ['839264531279904838', '868861213684158485']

				if(contains("senior", args[0]) && (receivedMessage.member.roles.cache.has('873197679964983376'))) {
					roles.push('873197679964983376')

				} 
				roles.forEach(id => {
        			receivedMessage.guild.members.cache.get(userID).roles.remove(id)
    			})

				receivedMessage.guild.members.cache.get(userID).roles.add('877715983081553961')

				receivedMessage.channel.send("Mooted discord by yeeting your ping roles. Good luck with whatever youre doing! <:CabbageBlush3:869753338714005514>")

			} else {
				receivedMessage.channel.send("Appa doesnt understand your funny words, magic dumbass")
			}
			
		} else {
			receivedMessage.channel.send("You are not authorized to use this command")
		}
	}
} 

function unmoote (args, receivedMessage) {
	if(args.length < 1) {
		receivedMessage.channel.send("Please rerun the command as `Appa unmoote <position>` based on your position as one of the following: \n"
		 + "Senior, Staff")
	} else {
		if(receivedMessage.member.roles.cache.has('875697458791993384')) {

			if (contains("senior", args[0]) || contains("staff", args[0])) {
				let userID = receivedMessage.author.id
				let roles = ['839264531279904838', '868861213684158485']

				if(contains("senior", args[0]) && (receivedMessage.member.roles.cache.has('873109513820078090'))) {
				roles.push('873197679964983376')

				} 
				roles.forEach(id => {
        		receivedMessage.guild.members.cache.get(userID).roles.add(id)
    			})

				receivedMessage.guild.members.cache.get(userID).roles.remove('877715983081553961')

				receivedMessage.channel.send("Welcome back to the world of pings, your discord has been unmooted <:Ung:746656481755136070>")
			
			} else {
				receivedMessage.channel.send("Appa doesnt understand your funny words, magic dumbass")
			}
		} else {
			receivedMessage.channel.send("You are not authorized to use this command")
		}
	}

} 

function contains(str, word) {
    str = str.toLowerCase()
    word = word.toLowerCase()

    return(str.includes(word))
}

export { moote, unmoote }