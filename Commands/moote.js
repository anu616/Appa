function moote (args, receivedMessage) {
	let userID = receivedMessage.author.id
	if(receivedMessage.member.roles.cache.has('868861213684158485')) {

		receivedMessage.guild.members.cache.get(userID).roles.remove('868861213684158485')
		receivedMessage.guild.members.cache.get(userID).roles.add('877715983081553961')

		receivedMessage.channel.send("Mooted discord by yeeting your ping roles. Good luck with whatever youre doing! <:CabbageBlush:745973485158924370>")

	} else {
		receivedMessage.channel.send("You are not authorized to use this command")
	}
} 

function unmoote (args, receivedMessage) {
	let userID = receivedMessage.author.id
	if(receivedMessage.member.roles.cache.has('877715983081553961')) {

		receivedMessage.guild.members.cache.get(userID).roles.remove('877715983081553961')
		receivedMessage.guild.members.cache.get(userID).roles.add('868861213684158485')

		receivedMessage.channel.send("Mooted discord by yeeting your ping roles. Good luck with whatever youre doing! <:CabbageBlush:745973485158924370>")

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