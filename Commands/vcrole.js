function vcRole(oldState, newState) {
    
    if(oldState.member.user.bot) {
        return
    } else {
        if(oldState.channelID == null) {
			console.log(newState.member.user.tag + " joined VC")

            if(newState.channelID == "764289712596582400"){             
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
            } else if(newState.channelID == "893308581431099462"){      
                newState.member.roles.add('776070939434680351')
				console.log("Joined Ginseng")

            } else if(newState.channelID == "893327741439578162"){      
                newState.member.roles.add('776070939434680351')
				console.log("Joined Leaf")
            }
        } else if (newState.channelID == null) {
            console.log(newState.member.user.tag + " left VC")
            if(oldState.channelID == "764289712596582400") {            
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

            } else if(oldState.channelID == "893308581431099462"){      
                oldState.member.roles.remove('776070939434680351')
				console.log("Left Ginseng")

            } else if(oldState.channelID == "893327741439578162"){      
                oldState.member.roles.remove('776070939434680351')
				console.log("Left Leaf")
            }
        } else {
            console.log(newState.member.user.tag + " moved VCs")

            if(oldState.channelID == "764289712596582400" && newState.channelID == "764289734947635241") {
                newState.member.roles.remove('776070939434680351')
                newState.member.roles.add("875092642537562112")

				console.log("Jasmine to Iroh")

            } else if(oldState.channelID == "764289734947635241"  && newState.channelID == "764289712596582400") {
                newState.member.roles.remove("875092642537562112")
                newState.member.roles.add('776070939434680351')

				console.log("Iroh to Jasmine")

            } else if(oldState.channelID == "764289712596582400" && newState.channelID == "775666234179059728") {
               newState.member.roles.remove('776070939434680351')
               newState.member.roles.add("776074008528420884")

			   console.log("Jasmine to Pai Sho")

           } else if(oldState.channelID == "775666234179059728"  && newState.channelID == "764289712596582400") {
               newState.member.roles.remove("776074008528420884")
               newState.member.roles.add('776070939434680351')

			   console.log("Pai Sho to Jasmine")

           } else if(oldState.channelID == "764289712596582400" && newState.channelID == "868798917943377990") {
               newState.member.roles.remove("776070939434680351")
               newState.member.roles.add('868798969122263040')

			   console.log("Jasmine to Roundtable")

           } else if(oldState.channelID == "868798917943377990"  && newState.channelID == "764289712596582400") {
              newState.member.roles.remove('868798969122263040')
              newState.member.roles.add("776070939434680351")

			  console.log("Roundtable to Jasmine")

          } else if(oldState.channelID == "764289734947635241" && newState.channelID == "775666234179059728") {
               newState.member.roles.remove("875092642537562112")
               newState.member.roles.add('776074008528420884')

			   console.log("Iroh to Pai Sho")

           } else if(oldState.channelID == "775666234179059728" && newState.channelID == "764289734947635241") {
               newState.member.roles.remove("776074008528420884")
               newState.member.roles.add('875092642537562112')

			   console.log("Pai Sho to Iroh")

           } else if(oldState.channelID == "764289734947635241" && newState.channelID == "868798917943377990") {
               newState.member.roles.remove("875092642537562112")
               newState.member.roles.add('868798969122263040')

			   console.log("Iroh to Roundtable")

           } else if(oldState.channelID == "868798917943377990" && newState.channelID == "764289734947635241") {
               newState.member.roles.remove("868798969122263040")
               newState.member.roles.add('875092642537562112')

			   console.log("Roundtable to Iroh")

           } else if(oldState.channelID == "775666234179059728" && newState.channelID == "868798917943377990") {
               newState.member.roles.remove("776074008528420884")
               newState.member.roles.add('868798969122263040')

			   console.log("Pai Sho to Roundtable")

           } else if(oldState.channelID == "868798917943377990" && newState.channelID == "775666234179059728") {
               newState.member.roles.remove("868798969122263040")
               newState.member.roles.add('776074008528420884')

			   console.log("Rouudtable to Pai Sho")

           } else if(oldState.channelID == "764289712596582400" && newState.channelID == "893308581431099462") {
               //same role
			   console.log("Jasmine to Ginseng")

           } else if(oldState.channelID == "893308581431099462" && newState.channelID == "764289712596582400") {
               //same role
			   console.log("Ginseng to Jasmie")

           } else if(oldState.channelID == "764289734947635241" && newState.channelID == "893308581431099462") {
               newState.member.roles.remove("875092642537562112")
               newState.member.roles.add('776070939434680351')

			   console.log("Iroh to Ginseng")

           } else if(oldState.channelID == "893308581431099462" && newState.channelID == "764289734947635241") {
               newState.member.roles.remove("776070939434680351")
               newState.member.roles.add('875092642537562112')

			   console.log("Ginseng to Iroh")

           } else if(oldState.channelID == "868798917943377990" && newState.channelID == "893308581431099462") {
               newState.member.roles.remove("868798969122263040")
               newState.member.roles.add('776070939434680351')

			   console.log("Pai Sho to Ginseng")

           } else if(oldState.channelID == "893308581431099462" && newState.channelID == "775666234179059728") {
               newState.member.roles.remove("776070939434680351")
               newState.member.roles.add('776074008528420884')

			   console.log("Ginseng to Pai Sho")

           } else if(oldState.channelID == "868798917943377990" && newState.channelID == "893308581431099462") {
               newState.member.roles.remove("868798969122263040")
               newState.member.roles.add('776070939434680351')

			   console.log("Roundtable to Ginseng")

           } else if(oldState.channelID == "893308581431099462" && newState.channelID == "775666234179059728") {
               newState.member.roles.remove("776070939434680351")
               newState.member.roles.add('776074008528420884')

			   console.log("Ginseng to Roundatble")

           } else if(oldState.channelID == "893327741439578162" && newState.channelID == "893308581431099462") {
               //same role
			   console.log("Leaf to Ginseng")

           } else if(oldState.channelID == "893308581431099462" && newState.channelID == "893327741439578162") {
               //same role
			   console.log("Ginseng to Leaf")

           } else if(oldState.channelID == "868798917943377990" && newState.channelID == "893327741439578162") {
               newState.member.roles.remove("868798969122263040")
               newState.member.roles.add('776070939434680351')

			   console.log("Jasmine to Leaf")

           } else if(oldState.channelID == "893327741439578162" && newState.channelID == "775666234179059728") {
               newState.member.roles.remove("776070939434680351")
               newState.member.roles.add('776074008528420884')

			   console.log("Leaf to Jasmie")

           } else if(oldState.channelID == "868798917943377990" && newState.channelID == "893327741439578162") {
               newState.member.roles.remove("868798969122263040")
               newState.member.roles.add('776070939434680351')

			   console.log("Iroh to Leaf")

           } else if(oldState.channelID == "893327741439578162" && newState.channelID == "775666234179059728") {
               newState.member.roles.remove("776070939434680351")
               newState.member.roles.add('776074008528420884')

			   console.log("Leaf to Iroh")

           } else if(oldState.channelID == "868798917943377990" && newState.channelID == "893327741439578162") {
               newState.member.roles.remove("868798969122263040")
               newState.member.roles.add('776070939434680351')

			   console.log("Pai Sho to Leaf")

           } else if(oldState.channelID == "893327741439578162" && newState.channelID == "775666234179059728") {
               newState.member.roles.remove("776070939434680351")
               newState.member.roles.add('776074008528420884')

			   console.log("Leaf to Pai Sho")

           } else if(oldState.channelID == "868798917943377990" && newState.channelID == "893327741439578162") {
               newState.member.roles.remove("868798969122263040")
               newState.member.roles.add('776070939434680351')

			   console.log("Roundtable to Leaf")

           } else if(oldState.channelID == "893327741439578162" && newState.channelID == "775666234179059728") {
               newState.member.roles.remove("776070939434680351")
               newState.member.roles.add('776074008528420884')

			   console.log("Leaf to Roundatble")

           } 


        }
    }
}


export { vcRole as default }