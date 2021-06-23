function colors(guild) { 
    let colHex = "0x"
    for (let i = 0; i < 6; i++) {
        colHex += getHexBit() 
    }

    guild.roles.cache.get("843748676530864159").setColor(colHex, "making avatar gay again")
    console.log("changed color to: " + colHex )
    
}

function getHexBit() {
    let hexBits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    return Math.floor(Math.random() * hexBits.length) + ""
}
export { colors as default }