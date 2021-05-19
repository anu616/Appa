
function vcRole(oldState, newState) {
    if(oldState.member.user.bot) {
        return
    } else {
        if(oldState.channelID == null) {
            console.log(newState.member.user.tag + ' joined VC')
            newState.member.roles.add('844597451927453696')
        } else if (newState.channelID == null) {
            console.log(oldState.member.user.tag + ' left VC')
            oldState.member.roles.remove('844597451927453696')
        }
    }
}

export { vcRole as default }