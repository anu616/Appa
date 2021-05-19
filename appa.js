
import { default as Discord } from 'discord.js'
const client = new Discord.Client()

import verify from './verify.js'
import yipYip from './yipyip.js'
import dice from './dice.js'
import vcRole from './vcrole.js'
import logMsg from './rawShaw.js'

let prefix = ['a!', 'appa ']
let pLen = prefix.length

function checkPrefix(receivedMessage) {
    receivedMessage.content =  receivedMessage.content.toLowerCase()
    for (let i = 0; i < pLen; i++) {
        let len = prefix[i].length
        if(receivedMessage.content.substr(0, len) == prefix[i]) {
            receivedMessage.content = receivedMessage.content.substr(len)
            return true
        }
    }
    return false
}

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity("Flying High")

    client.on('message', (receivedMessage) => {
        if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
            return
        }
            
        if(receivedMessage.channel.id == "796243350025404436") {        //in crystal
            logMsg(receivedMessage, "796253582361886750")               //to cata logs
        }

        if (checkPrefix(receivedMessage)) {
            processCommand(receivedMessage)
        }
    })
    client.on('voiceStateUpdate', (oldState, newState) => {
        vcRole(oldState, newState)
    })
})

function processCommand(receivedMessage) {
    let commandSplit = receivedMessage.content.split(" ")   //splitting the command to separate command and args
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
    } else if (contains("Dice", command)) {
        dice(args, receivedMessage)
    } 
}

function helpCommand(args, receivedMessage) {
    let commandList = ['Help', 'Verify', 'Yip-Yip', 'Dice']

    if (args.length > 0) {
        let argCommand = args[0].toLowerCase()
        if (contains("Verify", argCommand)) {
            verify(args, receivedMessage, prefix)
        } else if (contains("Yip-Yip", argCommand)) {
            receivedMessage.channel.send("Takes you to some of the important channels of the server")
        } else if (contains("Dice", argCommand)) {
            dice(args, receivedMessage)
        } else {
            receivedMessage.channel.send("That is not a valid command")
        }
    } else {
        receivedMessage.channel.send("Here is a list of Commands: ")
        commandList.forEach(element => {
            receivedMessage.channel.send(element)            
        });
        receivedMessage.channel.send("Type a!help `<command>` to know more about a specific command")
    }
}

function contains(str, word) {
    str = str.toLowerCase()
    word = word.toLowerCase()

    return(str.includes(word))
}

client.login(process.env.token)