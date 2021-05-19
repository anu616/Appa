
import { default as Discord } from 'discord.js'
const client = new Discord.Client()

let prefix = 'a!'
let pLen = prefix.length

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity("Flying High")

    client.on('message', (receivedMessage) => {
        if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
            return
        }
            
        if (receivedMessage.content.startsWith(prefix)) {
            processCommand(receivedMessage)
        }
    })
})

//importing code modules
import verify from './verify.js'
import yipYip from './yipyip.js'

function processCommand(receivedMessage) {
    let commandFull = receivedMessage.content.substr(pLen).toLowerCase() //command is what the user inputs after prefix
    let commandSplit = commandFull.split(" ")               //splitting the command to separate command and args
    let command = commandSplit[0]                           //the command
    let args = commandSplit.slice(1)                        //args

    console.log("Command received: " + command)
    console.log("Arguments received: " + args)

    if (contains("Help", command)) {
        helpCommand(args, receivedMessage)
    } else if (contains("Verify", command)) {
        verify(args, receivedMessage, prefix)
    } else if (contains("Yip-Yip", command)) {
        yipYip(receivedMessage)
    } 
}

function helpCommand(args, receivedMessage) {
    let commandList = ['Help', 'Verify', 'Yip-Yip']

    if (args.length > 0) {
        let argCommand = args[0].toLowerCase()
        if (contains("Verify", argCommand)) {
            verify(args, receivedMessage, prefix)
        } else if (contains("Yip-Yip", argCommand)) {
            receivedMessage.channel.send("Takes you to some of the important channels of the server")
        } else {
            receivedMessage.channel.send("That is not a valid command")
        }
    } else {
        receivedMessage.channel.send("Here is a list of Commands: ")
        commandList.forEach(element => {
            receivedMessage.channel.send(element)            
        });
    }
}

function contains(str, word) {
    str = str.toLowerCase()
    word = word.toLowerCase()

    return(str.includes(word))
}

client.login(process.env.token)