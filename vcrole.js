import { NewsChannel } from "discord.js"

function vcRole(oldState, newState) {
    
    if(oldState.member.user.bot) {
        return
    } else {
        if(oldState.channelID == null) {
            console.log(newState.member.user.tag + " joined VC")
            if(newState.channelID == "764289712596582400"){             //talk
                newState.member.roles.add('776070939434680351')
            } else if(newState.channelID == "764289734947635241"){      //music
                newState.member.roles.add('875092642537562112')
            }
        } else if (newState.channelID == null) {
            console.log(newState.member.user.tag + " left VC")
            if(oldState.channelID == "764289712596582400") {            //talk
                oldState.member.roles.remove('776070939434680351')
            } else if(oldState.channelID == "764289734947635241") {     //music
                oldState.member.roles.remove('875092642537562112')
            }
        } else {
            console.log(newState.member.user.tag + " moved VCs")
            if(oldState.channelID == "764289712596582400" && newState.channelID == "764289734947635241") {
                //talk to music
                newState.member.roles.remove('776070939434680351')
                newState.member.roles.add("875092642537562112")
            } else if(oldState.channelID == "764289734947635241"  && newState.channelID == "764289712596582400") {
                //music to talk
                newState.member.roles.remove("875092642537562112")
                newState.member.roles.add('776070939434680351')
            }
        }
    }
}

export { vcRole as default }