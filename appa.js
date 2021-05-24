
import { default as Discord } from 'discord.js'
const client = new Discord.Client()

import verify from './Commands/verify.js'
import yipYip from './Commands/yipyip.js'
import dice from './Commands/dice.js'
import vcRole from './Commands/vcrole.js'
import logMsg from './Commands/ranShaw.js'
import easterEggs from './Commands/eastereggs.js'
import { mute, unmute } from './Commands/mute.js'

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

    } else if (contains("Yip", command)) {
        if(contains(args[0], "yip")) {
            yipYip(receivedMessage)
        } else {
            return
        }

    } else if (contains("Dice", command)) {
        dice(args, receivedMessage)

    } else if (contains("Mute", command)) {
        mute(args, receivedMessage)

    } else if (contains("Unmute", command)) {
        unmute(args, receivedMessage)

    } else {
        easterEggs(command, args, receivedMessage)
    } 
}

function helpCommand(args, receivedMessage) {
    let commandList = ['Help', 'Verify', 'Yip Yip', 'Dice', 'Mute', 'Baby Bisons']

    if (args.length > 0) {
        let argCommand = args[0].toLowerCase()
        if (contains("Verify", argCommand)) {
            verify(args, receivedMessage, prefix)

        } else if (contains("Yip-Yip", argCommand)) {
            receivedMessage.channel.send("Takes you to some of the important channels of the server")

        } else if (contains("Dice", argCommand)) {
            dice(args, receivedMessage)

        } else if (contains("Baby", argCommand)) {
            if(contains(args[1], "bisons")) {
                receivedMessage.channel.send("Appa Babie Bisons! \n" +
                "There are some hidden easter eggs commands that reply with gifs. \n" + 
                "Have fun finding them!")
                receivedMessage.channel.send("https://i.pinimg.com/originals/c3/45/b3/c345b38ebb09443dcf9dbb79b08e27f9.gif")
            } else {
                return 
            }
        }else {
            receivedMessage.channel.send("That is not a valid command")
        }
    } else {
        receivedMessage.channel.send("Here is a list of Commands: ")
        commandList.forEach(element => {
            receivedMessage.channel.send(element)            
        });
        receivedMessage.channel.send("Type  help `<command>` to know more about a specific command")
    }
}

function contains(str, word) {
    str = str.toLowerCase()
    word = word.toLowerCase()

    return(str.includes(word))
}

function bestBot(args, receivedMessage) {
    if(contains(args[0], "bot")) {
        receivedMessage.channel.send("https://tenor.com/view/pog-frog-frog-pog-frog-dance-gif-20735320")
    } else {
        return 
    }
}

client.login(process.env.token)