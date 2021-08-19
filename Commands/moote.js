function moote (args, receivedMessage) {

	console.log(args.length)
	
	if(args.length < 1) {
		receivedMessage.channel.send("Please rerun the command as `Appa moote <position>` based on your position as one of the following: \n"
		 + " Admin, Captain, Mod, Trainee")
	}
	userID = receivedMessage.author.id
	let roles = []

	if(receivedMessage.member.roles.cache.has('868861213684158485')) {
		if(contains("admin", args) && (receivedMessage.member.roles.cache.has('715503417845350483'))) {
			roles = ['715503417845350483', '839264531279904838', '873197679964983376', '868861213684158485']

		} else if(contains("captain", args) && (receivedMessage.member.roles.cache.has('869928441057771640'))) {
			roles = ['869928441057771640', '839264531279904838', '873197679964983376', '868861213684158485']

		} else if(contains("mod", args) && (receivedMessage.member.roles.cache.has('860026081892630539'))) {
			roles = ['860026081892630539', '873197679964983376', '868861213684158485']

		} else if(contains("trainee", args) && 	(receivedMessage.member.roles.cache.has('724823768165253171'))) {
			roles = ['724823768165253171', '873197679964983376', '868861213684158485']

		} else {
			receivedMessage.channel.send("Invalid. Please check the command or your permissions and try again")
		}

		roles.forEach(id => {
        	receivedMessage.guild.members.cache.get(userID).roles.remove(id)

			receivedMessage.guild.members.cache.get(userID).roles.add('877715983081553961')

			receivedMessage.channel.send("Mooted discord by yeeting your ping roles. Good luck with whatever youre doing! <:CabbageBlush3:869753338714005514>")
    	})
	} else {
		receivedMessage.channel.send("You are not authorized to use this command")
	}
} 

function unmoote (args, receivedMessage) {
	if(args.length < 1) {
		receivedMessage.channel.send("Please rerun the command as `Appa moote <position>` based on your position as one of the following: \n"
		 + " Admin, Captain, Mod, Trainee")
	}

	userID = receivedMessage.author.id
	let roles = []

	if(receivedMessage.member.roles.cache.has('868861213684158485')) {
		if(contains("admin", args) && (receivedMessage.member.roles.cache.has('715503417845350483'))) {
			roles = ['715503417845350483', '839264531279904838', '873197679964983376', '868861213684158485']

		} else if(contains("captain", args) && (receivedMessage.member.roles.cache.has('869928441057771640'))) {
			roles = ['869928441057771640', '839264531279904838', '873197679964983376', '868861213684158485']

		} else if(contains("mod", args) && (receivedMessage.member.roles.cache.has('860026081892630539'))) {
			roles = ['860026081892630539', '873197679964983376', '868861213684158485']

		} else if(contains("trainee", args) && 	(receivedMessage.member.roles.cache.has('724823768165253171'))) {
			roles = ['724823768165253171', '873197679964983376', '868861213684158485']

		} else {
			receivedMessage.channel.send("Invalid. Please check the command or your permissions and try again")
		}

		roles.forEach(id => {
        	receivedMessage.guild.members.cache.get(userID).roles.add(id)

			receivedMessage.guild.members.cache.get(userID).roles.remove('877715983081553961')

			receivedMessage.channel.send("Welcome back to the world of pings, your discord has been unmooted <:bihelllord:869749081558351933>")
    	})
	} else {
		receivedMessage.channel.send("You are not authorized to use this command")
	}
} 

function contains(str, word) {
    str = str.toLowerCase()
    word = word.toLowerCase()

    return(str.includes(word))
}

export { moote, unmoote }