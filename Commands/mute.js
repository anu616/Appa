import { createChannel } from "./channel.js"
import { MessageEmbed } from 'discord.js'

function mute(args, receivedMessage) {
    if((receivedMessage.member.roles.cache.has("715503417845350483")) || (receivedMessage.member.roles.cache.has("845966248671445003"))) {
        if(args.length < 3) {
            receivedMessage.channel.send("Please re run the command specifying the user you want to mute " +
            "and the reason for the mute. \n" +
            "Example: `appa mute <@User> r|<Reason> s|<Strike#> d|<Duration>` \n" +
            "You do not have to give a duration if the user is being muted for an indefinite amount of time. \n" +
            "Note: This command requires you to have a moderator role.")
        } else {
            let userID = ""
            if(args[0].startsWith("<@!")) {
                userID = args[0].substr(3, 18)
            }
            else {
                userID = args[0].substr(2, 18)
            }
            let userPing = args[0]
            let userTag = receivedMessage.guild.members.cache.get(userID).user.tag

            let argCheck = ""
            let reason = "None Given"
            let strikes = "None Given"
            let time = ""
            let duration = ""
            args.forEach(arg => {
                if (arg.startsWith("r|")) {
                    argCheck = "reason"
                    reason = arg.substr(2) + " "

                } else if (arg.startsWith("s|")) {
                    argCheck = "strikes"
                    strikes = arg.substr(2)

                } else if (arg.startsWith("d|")) {
                    time = arg.substr(2)
                    for (const d of time) {
                        if(d == "h") {
                            duration += "hours "
                        } else if(d == "m") {
                            duration += "minutes "
                        } else if(d == "s") {
                            duration += "seconds  "
                        } else {
                            duration += d + " "
                        } 
                    }

                } else if ( argCheck == "reason") {
                    reason += arg + " "                     
                }
            })

			if(time.length == 0) {
				duration = "Indefinite"
				console.log("duration is indef")
			}
			
            let muteMsg = userPing + " | " + userTag + " | " + userID + " \n" + 
            "You have been muted. \n\n" +
            
            "**Reason:** " + reason + "\n" + 
            "**Strike:** " + strikes + "\n" + 
            "**Duration:** " + duration + "\n\n" + 
            
            ":warning: **This channel may be used if:** \n" +  
            ":white_small_square: You want clarity on the situation. \n" + 
            ":white_small_square: You want a warning appeal. \n" +
            ":white_small_square: You want to explain yourself. \n\n" +
            
            ":no_entry: **Do not:** \n" + 
            ":white_small_square: Spam this channel. \n" + 
            ":white_small_square: Ping Staff more than once. \n" +
            ":white_small_square: Send off-topic messages/media. \n" + 
            ":white_small_square: Continue breaking server rules. \n\n" + 
            
            "We offer you this channel as a chance to tell us your side. " + 
            "We will keep an open mind for grey areas, but we will not change your consequence for clear rule-breaks. " + 
            "Staff may ping you here with questions if necessary. " + 
            "You need to stay respectful and patient with us and you will have to accept our final decision. \n\n" + 
            
            "**If any of these guidelines are broken during the mute, further disciplinary actions will be taken.** \n\n" +
            
            "<@&715503417845350483>" 
            

            let muteCatID = "741158534623920168"
            let name = "🧊・cooler-" + receivedMessage.guild.members.cache.get(userID).user.username
            
            receivedMessage.guild.members.cache.get(userID).roles.add("729667375804448818") //war prisoner
            
            receivedMessage.guild.members.cache.get(userID).roles.remove("726653869102334034") //verified

            receivedMessage.channel.send("Muted " + userTag)

            let madeChan = createChannel(receivedMessage, muteCatID, name, "mute", userID, muteMsg)
            if(time.length > 0) {
				unmuteReminder(receivedMessage, madeChan, time, userTag)
			} 
            
        }
    } else {
        receivedMessage.channel.send("You do not have permission to use this command.")
    }
}

function unmute(args, receivedMessage) {
    if(receivedMessage.member.roles.cache.has("715503417845350483")) {
        if(args.length == 0) {
            receivedMessage.channel.send("Please re run the command specifying the user you want to unmute \n" +
            "Example: `appa unmute <@User>` \n" +
            "Note: This command requires you to have a staff role.")
        } else {
            let userID = args[0].substr(3, 18)
        
            receivedMessage.guild.members.cache.get(userID).roles.remove("729667375804448818") //warden
            receivedMessage.guild.members.cache.get(userID).roles.add("726653869102334034") //verified

            receivedMessage.channel.send("Unmuted " + receivedMessage.guild.members.cache.get(userID).user.tag)
        }
    } else {
        receivedMessage.channel.send("You do not have permission to use this command.")
    }
}

function unmuteReminder (receivedMessage, channel, time, userTag) {
    let h = 0
    let hpos = 0
    let m = 0
    let mpos = 0
    let s = 0
    let spos = 0
    let l = 0
    for (let i = 0; i < time.length; i++) {
        if(time[i] == "h") {
            hpos = i
            h = time.substr(0, hpos)
        } 
        if (time[i] == "m") {
            mpos = i
            if(hpos == 0){
                m = time.substr(0, mpos)
            } else {
                l = mpos - (hpos+1)
                m = time.substr(hpos+1, l)
            }
        } 
        if (time[i] == "s") {
            spos = i
            if(hpos == 0 && mpos == 0) {
                s = time.substr(0, spos)
            } else if (mpos == 0) {
                l = spos - (hpos+1)
                s = time.substr(hpos+1, l)
            } else {
                l = spos - (mpos+1)
                s = time.substr(mpos+1, l)
            } 
        }
    }
    let ms = ((h*3600) + (m*60) + s) * 1000

    setTimeout(() => {
        let embedMsg = new MessageEmbed()
            .setTitle("Mute duration up")
            .setDescription("It is time to unmute " + userTag)
            .setColor(receivedMessage.guild.roles.cache.get("715503417845350483").hexColor)

        channel.send("<@&715503417845350483>")
        channel.send(embedMsg)
    }, ms);

}

export { mute, unmute, unmuteReminder }