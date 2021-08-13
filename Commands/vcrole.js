import { NewsChannel } from "discord.js"

function vcRole(oldState, newState) {
    
    if(oldState.member.user.bot) {
        return
    } else {
        if(oldState.channelID == null) {
			console.log(newState.member.user.tag + " joined VC")

            if(newState.channelID == "764289712596582400" || newState.channelID == "874893694879289374"){             
                newState.member.roles.add('776070939434680351')
				console.log("Joined Jasmine")

            } else if(newState.channelID == "764289734947635241"){      
                newState.member.roles.add('875092642537562112')
				console.log("Joined Iroh")

            } else if(newState.channelID == "775666234179059728"){      
                newState.member.roles.add('776074008528420884')
				console.log("Joined Pai Sho")

            } else if(newState.channelID == "868798917943377990"){      
                newState.member.roles.add('868798969122263040')
				console.log("Joined Roundtable")
            }
        } else if (newState.channelID == null) {
            console.log(newState.member.user.tag + " left VC")
            if(oldState.channelID == "764289712596582400" || oldState.channelID == "874893694879289374") {            
                oldState.member.roles.remove('776070939434680351')
				console.log("Left Jasmine")

            } else if(oldState.channelID == "764289734947635241") {     
                oldState.member.roles.remove('875092642537562112')
				console.log("Left Iroh")

            } else if(oldState.channelID == "775666234179059728") {     
                oldState.member.roles.remove('776074008528420884')
				console.log("Left Pai Sho")

            } else if(oldState.channelID == "868798917943377990") {     
                oldState.member.roles.remove('868798969122263040')
				console.log("Left Roundtable")

            }
        } else {
            console.log(newState.member.user.tag + " moved VCs")

            if((oldState.channelID == "764289712596582400" || oldState.channelID == "874893694879289374")
             && newState.channelID == "764289734947635241") {
                newState.member.roles.remove('776070939434680351')
                newState.member.roles.add("875092642537562112")

				console.log("Jasmine to Iroh")

            } else if(oldState.channelID == "764289734947635241"  && 
            (newState.channelID == "764289712596582400" || newState.channelID == "874893694879289374")) {
                newState.member.roles.remove("875092642537562112")
                newState.member.roles.add('776070939434680351')

				console.log("Iroh to Jasmine")

            } else if((oldState.channelID == "764289712596582400" || oldState.channelID == "874893694879289374")
            && newState.channelID == "775666234179059728") {
               newState.member.roles.remove('776070939434680351')
               newState.member.roles.add("776074008528420884")

			   console.log("Jasmine to Pai Sho")

           } else if(oldState.channelID == "775666234179059728"  && 
           (newState.channelID == "764289712596582400" || newState.channelID == "874893694879289374")) {
               newState.member.roles.remove("776074008528420884")
               newState.member.roles.add('776070939434680351')

			   console.log("Pai Sho to Jasmine")

           } else if((oldState.channelID == "764289712596582400" || oldState.channelID == "874893694879289374")
            && newState.channelID == "868798917943377990") {
               newState.member.roles.remove("776070939434680351")
               newState.member.roles.add('868798969122263040')

			   console.log("Jasmine to Rouundtable")

           } else if(oldState.channelID == "868798917943377990"  && 
           (newState.channelID == "764289712596582400" || newState.channelID == "874893694879289374")) {
              newState.member.roles.remove('868798969122263040')
              newState.member.roles.add("776070939434680351")

			  console.log("Roundtable to Jasmine")

          } else if(oldState.channelID == "764289734947635241"
            && newState.channelID == "775666234179059728") {
               newState.member.roles.remove("875092642537562112")
               newState.member.roles.add('776074008528420884')

			   console.log("Iroh to Pai Sho")

           } else if(oldState.channelID == "775666234179059728"
            && newState.channelID == "764289734947635241") {
               newState.member.roles.remove("776074008528420884")
               newState.member.roles.add('875092642537562112')

			   console.log("Pai Sho to Iroh")

           } else if(oldState.channelID == "764289734947635241"
            && newState.channelID == "868798917943377990") {
               newState.member.roles.remove("875092642537562112")
               newState.member.roles.add('868798969122263040')

			   console.log("Iroh to Rouundtable")

           } else if(oldState.channelID == "868798917943377990"
            && newState.channelID == "764289734947635241") {
               newState.member.roles.remove("868798969122263040")
               newState.member.roles.add('875092642537562112')

			   console.log("Rouundtable to Iroh")

           } else if(oldState.channelID == "775666234179059728"
            && newState.channelID == "868798917943377990") {
               newState.member.roles.remove("776074008528420884")
               newState.member.roles.add('868798969122263040')

			   console.log("Pai Sho to Rouundtable")

           } else if(oldState.channelID == "868798917943377990"
            && newState.channelID == "775666234179059728") {
               newState.member.roles.remove("868798969122263040")
               newState.member.roles.add('776074008528420884')

			   console.log("Rouundtable to Pai Sho")

           }


        }
    }
}


export { vcRole as default }