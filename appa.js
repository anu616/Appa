
import { default as Discord } from 'discord.js'
const client = new Discord.Client()

import alive from "./server.js"

import verify from './Commands/verify.js'
import yipYip from './Commands/yipyip.js'
import dice from './Commands/dice.js'
import vcRole from './Commands/vcrole.js'
import logMsg from './Commands/ranShaw.js'
import easterEggs from './Commands/eastereggs.js'
import { mute, unmute } from './Commands/mute.js'
import { moote, unmoote } from './Commands/moote.js'
import closeChannel from './Commands/channel.js'
import bump from './Commands/bump.js'
import colors from './Commands/colors.js'
import ticket from './Commands/tickets.js'
import {add, remove} from './Commands/capitol.js'

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

let activity = "Flying High"

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity("Flying High")

    let guild = client.guilds.cache.get('715279938424668230')
    
    setInterval(() => {
        colors(guild)
    }, (5*60*1000))

    client.on('message', (receivedMessage) => {

        if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
            return
        }
            
        if(receivedMessage.channel.id == "796243350025404436") {        //in crystal
            logMsg(receivedMessage, "796253582361886750")               //to cata logs
        } 

		if(contains(receivedMessage.content, "honor") || contains(receivedMessage.content, "honour")) {
			receivedMessage.react('726997619225919568')
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

    } else if (contains("Moote", command)) {
        moote(args, receivedMessage)

    } else if (contains("Unmoote", command)) {
        unmoote(args, receivedMessage)

    } else if (contains("close", command)) {
        closeChannel(receivedMessage)

    } else if (contains("Bump", command)) {
        bump(args, receivedMessage)

    } else if (contains("Ticket", command)) {
        ticket(args, receivedMessage)

    } else if (contains("add", command)) {
        add(args, receivedMessage)

    } else if (contains("remove", command)) {
        remove(args, receivedMessage)

    } else if (contains("Status", command)) {
        status(args, receivedMessage)

    } else if (contains("Kill", command)) {
        kill(receivedMessage)

    } else {
        easterEggs(command, args, receivedMessage)
    } 
}

function helpCommand(args, receivedMessage) {
    let commandList = ['Help', 'Verify', 'Yip Yip', 'Dice', 'Tickets', 'Bump', 'Baby Bisons']

    if (args.length > 0) {
        let argCommand = args[0].toLowerCase()
        if (contains("Verify", argCommand)) {
            verify(args, receivedMessage)

        } else if (contains("Yip-Yip", argCommand)) {
            receivedMessage.channel.send("Takes you to some of the important channels of the server")

        } else if (contains("Dice", argCommand)) {
            dice(args, receivedMessage)

        } else if (contains("Mute", argCommand)) {
            mute(args, receivedMessage)

        } else if (contains("Unmute", argCommand)) {
            unmute(args, receivedMessage)

        } else if (contains("Tickets", argCommand)) {
            ticket(args, receivedMessage)

        } else if (contains("Bump", argCommand)) {
            bump(args, receivedMessage)

        } else if (contains("Moote", argCommand)) {
            moote(args, receivedMessage)

        } else if (contains("add", argCommand)) {
            add(args, receivedMessage)

        } else if (contains("remove", argCommand)) {
            remove(args, receivedMessage)

        } else if (contains("Unmoote", argCommand)) {
            unmoote(args, receivedMessage)

        } else if (contains("Baby", argCommand)) {
            if(contains(args[1], "bisons")) {
                easterEggs(argCommand, args, receivedMessage)
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
        receivedMessage.channel.send("Type  `appa help <command>` to know more about a specific command")
    }
}

function contains(str, word) {
    str = str.toLowerCase()
    word = word.toLowerCase()

    return(str.includes(word))
}

function status(args, receivedMessage) {
    if(receivedMessage.member.roles.cache.has("715503417845350483")) {
		activity = ""
        args.forEach(arg => {
            activity += arg + " "
        });
        client.user.setActivity(activity)
    } else {
        receivedMessage.channel.send("You do not have the permission to use this command")
    }
}

function kill(receivedMessage) {
	const filter = u => (u.author.id == receivedMessage.author.id) 
	receivedMessage.channel.send("Do you really want to kill me? <:CabbageCry:745973484638961725>").then(() => {
		receivedMessage.channel.awaitMessages(filter, {
		max: 1,
		time: 3000,
		errors: ['time']
		})
		.then(message => {
			let msg = message.first().content
			if(contains(msg, "Yes")) {
				if(receivedMessage.author.id == "661015948249268272") {
					 receivedMessage.channel.send("Logging off..")
					 .then(() => client.destroy())
				} else {
					receivedMessage.channel.send("You are not authorized to use this command")
				}
			} else if (contains(msg, "No")) {
				receivedMessage.channel.send("Okie <:CabbageBlush:745973485158924370>")
			} else {
				receivedMessage.channel.send("Invalid, command terminated")
			}
		})
	})
}

alive()
client.login(process.env.token)