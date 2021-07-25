import { NewsChannel } from "discord.js"

function vcRole(oldState, newState) {
    
    if(oldState.member.user.bot) {
        return
    } else {
        if(oldState.channelID == null) {
            console.log(newState.member.user.tag + " joined VC")
            if(newState.channelID == "764289712596582400" || newState.channelID == "764289734947635241"){             
                newState.member.roles.add('776070939434680351')
            } else if(newState.channelID == "775666234179059728"){      
                newState.member.roles.add('776074008528420884')
            } else if(newState.channelID == "868798917943377990"){      
                newState.member.roles.add('868798969122263040')
            }
        } else if (newState.channelID == null) {
            console.log(newState.member.user.tag + " left VC")
            if(oldState.channelID == "764289712596582400" || oldState.channelID == "764289734947635241") {            
                oldState.member.roles.remove('776070939434680351')
            } else if(oldState.channelID == "775666234179059728") {     
                oldState.member.roles.remove('776074008528420884')
            } else if(oldState.channelID == "868798917943377990") {     
                oldState.member.roles.remove('868798969122263040')
            }
        } else {
            console.log(newState.member.user.tag + " moved VCs")
            if((oldState.channelID == "764289712596582400" || oldState.channelID == "764289734947635241")
             && newState.channelID == "775666234179059728") {
                newState.member.roles.remove('776070939434680351')
                newState.member.roles.add("776074008528420884")

            } else if(oldState.channelID == "764289734947635241"  && 
            (newState.channelID == "764289712596582400" || newState.channelID == "764289734947635241")) {
                newState.member.roles.remove("776074008528420884")
                newState.member.roles.add('776070939434680351')

            } else if((oldState.channelID == "764289712596582400" || oldState.channelID == "764289734947635241")
            && newState.channelID == "868798917943377990") {
               newState.member.roles.remove('776070939434680351')
               newState.member.roles.add("868798969122263040")

           } else if(oldState.channelID == "868798917943377990"  && 
           (newState.channelID == "764289712596582400" || newState.channelID == "764289734947635241")) {
               newState.member.roles.remove("868798969122263040")
               newState.member.roles.add('776070939434680351')

           } else if(oldState.channelID == "764289734947635241"  && 
           (newState.channelID == "868798917943377990")) {
               newState.member.roles.remove("776074008528420884")
               newState.member.roles.add('868798969122263040')

           } else if((oldState.channelID == "868798917943377990")
           && newState.channelID == "775666234179059728") {
              newState.member.roles.remove('868798969122263040')
              newState.member.roles.add("776074008528420884")

          } 
        }
    }
}


export { vcRole as default }