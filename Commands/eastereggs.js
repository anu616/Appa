
function easterEggs(command, args, receivedMessage) {
    if(contains("Best", command)) {
        bestBot(args, receivedMessage)
    } else if(contains("Party", command)) {
        hellmo(receivedMessage)
    } else {
        appaFlop(receivedMessage)
    }

}

function contains(str, word) {
    str = str.toLowerCase()
    word = word.toLowerCase()

    return(str.includes(word))
}

function bestBot(args, receivedMessage) {
    if(contains(args[0], "bot")) {
        receivedMessage.channel.send("https://tenor.com/view/pog-frog-frog-pog-frog-dance-gif-20735320")
    } else {
        return 
    }
}

function hellmo(receivedMessage) {
    receivedMessage.channel.send("https://tenor.com/view/party-hellmo-elmo-fire-lit-gif-19133752")
}

function appaFlop(receivedMessage) {
    receivedMessage.channel.send("https://64.media.tumblr.com/07af19af6ebbe5732601843a06b0ce25/b125cc6e0d920dcf-90/s400x600/9ee645617f32941483742f4b4fc217ff54c51e37.gif")
}
export { easterEggs as default }