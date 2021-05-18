
let token = ""

//Accepting token from file and staring the bot
import { default as lineReader } from 'line-reader'
async function readToken() {
    lineReader.eachLine('.\\appaToken.txt', (line, last) => {
        token = line.substr(0)
        start(token)
    }) 
}

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

function processCommand(receivedMessage) {
    let commandFull = receivedMessage.content.substr(pLen) //command is what the user inputs after prefix
    let commandSplit = commandFull.split(" ")               //splitting the command to separate command and args
    let command = commandSplit[0]                           //the command
    let args = commandSplit.slice(1)                        //args

    console.log("Command received: " + command)
    console.log("Arguments received: " + args)

    if (contains("Help", command)) {
        helpCommand(args, receivedMessage)
    } else if (contains("Verify", command)) {
        verify(args, receivedMessage, prefix)
    }
}

function helpCommand(args, receivedMessage) {
    let commandList = ['Help', 'Verify']

    if (args.length > 0) {
        let argCommand = args[0].toLowerCase()
        if (contains("Verify", argCommand)) {
            verify(args, receivedMessage, prefix)
        }
        else {
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

//Starts the bot
function start(tok) {
    client.login(tok)
}

readToken()