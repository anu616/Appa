function add(args, receivedMessage) {
	if(receivedMessage.member.roles.cache.has('792181856170278952')) {
        if(args.length < 2) {
			receivedMessage.channel.send("Please run the command in the following format: \n"
            + "Enter the role to be added, and the users you wish to add the role too. \n"
            + "`appa add [@Role] [@User1] [@User2]...`\n" +
            "Note: This command requires you to have the Capitol role.")
		} else {
			let roleID = args[0].substr(3, 18)
			let userID = "";
			for (let i = 1; i < args.length; i++) {
				if(args[i].startsWith("<@!")) {
					userID = args[i].substr(3, 18)
				}
				else {
					userID = args[i].substr(2, 18)
				}
				receivedMessage.guild.members.cache.get(userID).roles.add(roleID)				
			}
			receivedMessage.channel.send("Role added succesfully")
		}
	} else {
		receivedMessage.channel.send("You are not allowed to use this command\n")
	}
}

function remove(args, receivedMessage) {
	if(receivedMessage.member.roles.cache.has("792181856170278952")) {
        if(args.length < 2) {
			receivedMessage.channel.send("Please run the command in the following format: \n"
            + "Enter the role to be removed, and the users you wish to add the role too. \n"
            + "`appa remove [@Role] [@User1] [@User2]...`\n" +
            "Note: This command requires you to have the Capitol role.")
		} else {
			let roleID = args[0].substr(3, 18)
			console.log("Role: " + roleID + "\n")
			let userID = "";
			for (let i = 1; i < args.length; i++) {
				if(args[i].startsWith("<@!")) {
					userID = args[i].substr(3, 18)
				}
				else {
					userID = args[i].substr(2, 18)
				}
				console.log("User: " + userID + "\n")
				receivedMessage.guild.members.cache.get(userID).roles.remove(roleID)				
			}
			receivedMessage.channel.send("Role removed succesfully")
		}
	} else {
		receivedMessage.channel.send("You are not allowed to use this command\n")
	}
}

export { add, remove }