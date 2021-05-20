import { NewsChannel } from "discord.js"

function vcRole(oldState, newState) {
    
    if(oldState.member.user.bot) {
        return
    } else {
        if(oldState.channelID == null) {
            console.log(newState.member.user.tag + " joined VC")
            if(newState.channelID == "764289712596582400"){             //iroh
                newState.member.roles.add('776070939434680351')
            } else if(newState.channelID == "764289734947635241"){      //tsungi
                newState.member.roles.add('781161360419061760')
            }
        } else if (newState.channelID == null) {
            console.log(newState.member.user.tag + " left VC")
            if(oldState.channelID == "764289712596582400") {            //iroh
                oldState.member.roles.remove('776070939434680351')
            } else if(oldState.channelID == "764289734947635241") {     //tsungi
                oldState.member.roles.remove('781161360419061760')
            }
        } else {
            console.log(newState.member.user.tag + " moved VCs")
            if(oldState.channelID == "764289712596582400" && newState.channelID == "764289734947635241") {
                //iroh to tsungi
                newState.member.roles.remove('776070939434680351')
                newState.member.roles.add("781161360419061760")
            } else if(oldState.channelID == "764289734947635241"  && newState.channelID == "764289712596582400") {
                //tsungi to iroh
                newState.member.roles.remove("781161360419061760")
                newState.member.roles.add('776070939434680351')
            }
        }
    }
}

export { vcRole as default }