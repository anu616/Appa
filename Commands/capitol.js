function add(recievedMessage, args) {
	if(receivedMessage.member.roles.cache.has("868861213684158485")) {
        if(args.length < 2) {
			recievedMessage.channel.send("Please run the command in the following format: \n"
            + "Enter the role to be added, and the users you wish to add the role too. \n"
            + "`appa add [@Role] [@User1] [@User2]...`\n" +
            "Note: This command requires you to have the Capitol role.")
		} else {
			let roleID = args[0].substr(3, 18)
			for(int i = 1, i < args.length, i++) {
				
			}
		}
	}
}