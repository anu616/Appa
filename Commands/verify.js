import { MessageEmbed } from 'discord.js'

function verify(args, receivedMessage) {
    let verification = "839264531279904838"
    if(receivedMessage.member.roles.cache.has(verification)) {
        if(args.length < 3) {
            receivedMessage.channel.send("Please run the command in the following format: \n"
            + "Enter the user, their age and nation in the following format: \n"
            + "`appa verify [@User] [Age] [Nation]`\n" +
            "Note: This command requires you to have a staff role.")
        } else {
            let userID = ""
            if(args[0].startsWith("<@!")) {
                userID = args[0].substr(3, 18)
            }
            else {
                userID = args[0].substr(2, 18)
            }
            let age = args[1]
            let nation = args[2]
            
            addRoles(userID, receivedMessage)
            addNation(userID, nation, receivedMessage)
            addAge(userID, age, receivedMessage)   
    
            verifiedMessage(userID, nation, receivedMessage)

            receivedMessage.delete()
        }
    } else {
        receivedMessage.channel.send("Sorry, you do not have the permission to use this command")
    }
}

function addRoles(userID, receivedMessage) {
    let roleIDs = ["715439512146149388", "726653869102334034", //Non bender, Verified
                "785411730376622080", "724829599560630292", "715811336382316636", //Flameo, Shenanigans, Hawky
                "724860524260491285", "824094377579380746", "846389834188587019",] //Lei Tai, Avatar, Passport

    roleIDs.forEach(id => {
        receivedMessage.guild.members.cache.get(userID).roles.add(id)
    })

	receivedMessage.guild.members.cache.get(userID).roles.remove('869928465657376819')				//open chakras
}

function addNation(userID, nation, receivedMessage) {
    let fireIDs = ["725052068007641201", "724922210791194685"]      //Fire, Agni Kai
    let waterIDs = ["725052064362922096", "724922212766711818"]     //Water, Water Duel
    let earthIDs = ["725052066308816937", "724922214625050644"]     //Warth, Earth Rumble
    let airIDs = ["725052062546788373", "724922216772534293"]       //Air, Airball


    if(contains("Fire Nation", nation)) {
        fireIDs.forEach( id => {
            receivedMessage.guild.members.cache.get(userID).roles.add(id)
        })
    } else if(contains("Water Tribe", nation)) {
        waterIDs.forEach( id => {
            receivedMessage.guild.members.cache.get(userID).roles.add(id)
        })
    } else if(contains("Earth Kingdom", nation)) {
        earthIDs.forEach( id => {
            receivedMessage.guild.members.cache.get(userID).roles.add(id)
        })
    } else if(contains("Air Nomads", nation)) {
        airIDs.forEach( id => {
            receivedMessage.guild.members.cache.get(userID).roles.add(id)
        }) 
    } else if(contains("Alt", nation)) {
        airIDs.forEach( id => {
            receivedMessage.guild.members.cache.get(userID).roles.add("770732488829173801")
        }) 
    }
}

function addAge(userID, age, receivedMessage) {
    age = parseInt(age, 10)

    if((age >= 13) && (age <= 17)) {
        receivedMessage.guild.members.cache.get(userID).roles.add("715800507406483476")
    } else if((age >= 18) && (age <= 21)) {
        receivedMessage.guild.members.cache.get(userID).roles.add("715800506743652392")
    } else if((age >= 22) && (age <= 25)) {
        receivedMessage.guild.members.cache.get(userID).roles.add("715800506177421372")
    } else if(age >= 26) {
        receivedMessage.guild.members.cache.get(userID).roles.add("715800508060926023")
    }
}

function verifiedMessage(userID, nation, receivedMessage) {
    let gates = "725687980874006548" 

    let nationChat = ""
    let nationEmoji = ""
    let elementEmoji = ""

    if(contains("Fire Nation", nation)) {
        nation = " Fire Nation "
        nationChat = "725073009295097917"
        nationEmoji = "<:The_FireNation:715448678659391568>"
        elementEmoji = "<:ElementFire:746048754221711460>"

    } else if(contains("Water Tribe", nation)) {
        nation = " Water Tribe "
        nationChat = "725072827530739732"
        nationEmoji = "<:The_WaterTribe:715448596019019846>"
        elementEmoji = "<:ElementWater:746048690531074129>"
        
    } else if(contains("Earth Kingdom", nation)) {
        nation = " Earth Kingdom "
        nationChat = "725072929242742924"
        nationEmoji = "<:The_EarthKingdom:715448636850307102>"
        elementEmoji = "<:ElementEarth:746048737247232089>"
    
    } else if(contains("Air Nomads", nation)) {
        nation = " Air Nomads "
        nationChat = "725072709465276416"
        nationEmoji = "<:The_AirNomads:715447547447083028>"
        elementEmoji = "<:ElementAir:746048720302505984>"        
    }

    let welcomePing = "Hey <@&730147351133683853> <@&856891893253668904> please welcome <@" + userID +"> of the " 
    + nationEmoji + nation + nationEmoji

    let verificationMsg = elementEmoji + " <#750071527780778094> is where you can grab some roles! \n" +
        elementEmoji + " <#715843510875717634> is the channel directory! \n" +
        elementEmoji + " <#723016761712050186> is our general chat! \n" +
        elementEmoji + " <#" + nationChat + "> is your nation chat! \n" +
        "Let us know if you have any questions, we hope you enjoy the server! <:CabbageBlush:745973485158924370>"

    let channelTo = receivedMessage.guild.channels.cache.get(gates)

	if(contains("Alt", nation)) {
        nation = ""
        nationChat = ""
        nationEmoji = ""
        elementEmoji = ""
		welcomePing = ""
		verificationMsg = " "

    }
    
    channelTo.send(welcomePing)
    embedMsg(nation, receivedMessage, verificationMsg, channelTo)
}

function embedMsg(nation, receivedMessage, verifiedMessage, channelTo) {
    let col = ""
    let thumb = ""

    if(contains(nation, "fire")) {
        console.log('in fire')
        col = receivedMessage.guild.roles.cache.get("725052068007641201").hexColor
        thumb = "https://media1.tenor.com/images/64853184ba2177f476dbc54cd9089fea/tenor.gif"

    } else if(contains(nation, "water")) {
        col = receivedMessage.guild.roles.cache.get("725052064362922096").hexColor
        thumb = "https://media1.tenor.com/images/7cbc8c22b7b8d52f844f78ef4060a977/tenor.gif"

    } else if(contains(nation, "earth")) {
        col = receivedMessage.guild.roles.cache.get("725052066308816937").hexColor
        thumb = "https://media1.tenor.com/images/1ce36828df309020651e7057323cd09d/tenor.gif"

    } else if(contains(nation, "air")) {
       col = receivedMessage.guild.roles.cache.get("725052062546788373").hexColor
       thumb = "https://media.tenor.com/images/e415cd6618b808c89193f7a3f833ce49/tenor.gif"
    }

    let embed = new MessageEmbed()
        .setTitle("Here are some channels you should check out!")
        .setColor(col)
        .setDescription(verifiedMessage)
        .setThumbnail(thumb)

	if(contains("Alt", nation)) {
        col = ""
		thumb = ""
		embed = " " 
    }

    channelTo.send(embed)
}

function contains(str, word) {
    str = str.toLowerCase()
    word = word.toLowerCase()

    return(str.includes(word))
}

export { verify as default }
