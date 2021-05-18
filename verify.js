import { MessageEmbed } from 'discord.js'

function verify(args, receivedMessage, prefix) {
    let verification = "839264531279904838"
    if(receivedMessage.member.roles.cache.has(verification)) {
        if(args.length < 3) {
            receivedMessage.channel.send("Please run the command in the following format: \n"
            + "Enter the user, their age and nation in the following format: \n"
            + "`" + prefix + "verify [@User] [Age] [Nation]`")
        } else {
            let userID = args[0].substr(3, 18)
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
    let roleIDs = ["715798061909278840", "715439512146149388", "726653869102334034", //Bending, Non bender, Verified
                "785411730376622080", "724829599560630292", "715811336382316636", //Flameo, Shenanigans, Hawky
                "724860524260491285", "824094377579380746", "724917872157130772"] //Lei Tai, Avatar, Gems

    roleIDs.forEach(id => {
        receivedMessage.guild.members.cache.get(userID).roles.add(id)
    })
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

function contains(str, word) {
    str = str.toLowerCase()
    word = word.toLowerCase()

    return(str.includes(word))
}

function verifiedMessage(userID, nation, receivedMessage) {
    let gates = "725687980874006548" 
    //let bottest = "760099744499367937"
    let map = "717761736052310097"
    let roles = "717761736052310097"
    let basingse = "717761736052310097"
    let camp = "717761736052310097"
    let jooDee = "730147351133683853"
    let cabName = "CabbageBlush"
    let cabID = "745973485158924370"

    let welcomePing = ""
    let verificationMsg = ""

    if(contains("Fire Nation", nation)) {
        let fire = "725073009295097917"
        let nationName = "The_FireNation"
        let nationID = "715448678659391568"
        let elementName = "ElementFire"
        let elementID = "746048754221711460"

        welcomePing = "Hey <@&" + jooDee + "> please welcome <@" + userID +"> of the " + "<:" + nationName +":" 
        + nationID +  "> " + "Fire Nation" + "<:" + nationName +":" + nationID +  ">"

        verificationMsg = "<:" + elementName +":" + elementID +  "> " + "<#" + roles + "> is where you can grab some roles! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + map + "> is where you can find what each channel is for! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + basingse + "> is our general chat! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + camp + "> is our new member chat! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + fire + "> is your nation chat! \n" +
        "Let us know if you guys have any questions, we hope you enjoy the server! <:" + cabName +":" + cabID +  ">"

    } else if(contains("Water Tribe", nation)) {
        let water = "725072827530739732"
        let nationName = "The_WaterTribe"
        let nationID = "715448596019019846"
        let elementName = "ElementWater"
        let elementID = "746048690531074129"

        welcomePing = "Hey <@&" + jooDee + "> please welcome <@" + userID +"> of the " + "<:" + nationName +":" 
        + nationID +  "> " + "Water Tribe" + "<:" + nationName +":" + nationID +  ">"

        verificationMsg = "<:" + elementName +":" + elementID +  "> " + "<#" + roles + "> is where you can grab some roles! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + map + "> is where you can find what each channel is for! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + basingse + "> is our general chat! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + camp + "> is our new member chat! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + water + "> is your nation chat! \n" +
        "Let us know if you guys have any questions, we hope you enjoy the server! <:" + cabName +":" + cabID +  ">"
        
    } else if(contains("Earth Kingdom", nation)) {
        let earth = "725072929242742924"
        let nationName = "The_EarthKingdom"
        let nationID = "715448636850307102"
        let elementName = "ElementEarth"
        let elementID = "746048737247232089"

        welcomePing = "Hey <@&" + jooDee + "> please welcome <@" + userID +"> of the " + "<:" + nationName +":" 
        + nationID +  "> " + "Earth Kingdom" + "<:" + nationName +":" + nationID +  ">"
        
        verificationMsg = "<:" + elementName +":" + elementID +  "> " + "<#" + roles + "> is where you can grab some roles! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + map + "> is where you can find what each channel is for! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + basingse + "> is our general chat! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + camp + "> is our new member chat! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + earth + "> is your nation chat! \n" +
        "Let us know if you guys have any questions, we hope you enjoy the server! <:" + cabName +":" + cabID +  ">"
        
    } else if(contains("Air Nomads", nation)) {
        let air = "725072709465276416"
        let nationName = "The_AirNomads"
        let nationID = "715447547447083028"
        let elementName = "ElementAir"
        let elementID = "746048720302505984"

        welcomePing = "Hey <@&" + jooDee + "> please welcome <@" + userID +"> of the " + "<:" + nationName +":" 
        + nationID +  "> " + "Air Nomads" + "<:" + nationName +":" + nationID +  ">"

        verificationMsg = "<:" + elementName +":" + elementID +  "> " + "<#" + roles + "> is where you can grab some roles! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + map + "> is where you can find what each channel is for! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + basingse + "> is our general chat! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + camp + "> is our new member chat! \n" +
        "<:" + elementName +":" + elementID +  "> " + "<#" + air + "> is your nation chat! \n" +
        "Let us know if you guys have any questions, we hope you enjoy the server! <:" + cabName +":" + cabID +  ">"
        
    }

    let channelTo = receivedMessage.guild.channels.cache.get(gates)
    
    channelTo.send(welcomePing)
    embedMsg(nation, receivedMessage, verificationMsg, channelTo)
}

function embedMsg(nation, receivedMessage, verifiedMessage, channelTo) {
    let col = ""
    let thumb = ""
    if(contains("Fire Nation", nation)) {
        col = receivedMessage.guild.roles.cache.get("725052068007641201").hexColor
        thumb = "https://media1.tenor.com/images/64853184ba2177f476dbc54cd9089fea/tenor.gif"

    } else if(contains("Water Tribe", nation)) {
        col = receivedMessage.guild.roles.cache.get("725052064362922096").hexColor
        thumb = "https://media1.tenor.com/images/7cbc8c22b7b8d52f844f78ef4060a977/tenor.gif"

    } else if(contains("Earth Kingdom", nation)) {
        col = receivedMessage.guild.roles.cache.get("725052066308816937").hexColor
        thumb = "https://media1.tenor.com/images/1ce36828df309020651e7057323cd09d/tenor.gif"

    } else if(contains("Air Nomads", nation)) {
       col = receivedMessage.guild.roles.cache.get("725052062546788373").hexColor
       thumb = "https://media.tenor.com/images/e415cd6618b808c89193f7a3f833ce49/tenor.gif"
    }

    const embed = new MessageEmbed()
        .setTitle("Here are some channels you should check out!")
        .setColor(col)
        .setDescription(verifiedMessage)
        .setThumbnail(thumb)
    channelTo.send(embed)
}

export { verify as default }
