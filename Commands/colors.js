function lgbtqColors(guild) { 
    let colorHex = ['0xEC222A', '0xF79522', '0xF7EE23', '0x3B9A46', '0x2364B0', '0x6D2B7C',         //Pride 
                    '0xFFFFFF', '0xF7AEC5', '0x77D0E7', '0x603919', '0x000000',
                    '0x5BCEFA', '0xF5A9B8', '0xFFFFFF',                                             //Trans
                    '0xFFD800', '0x7902AA',                                                         //Intersex
                    '0xD60270', '0x9B4F96', '0x0038A8',                                             //Bi
                    '0xFF218C', '0xFFD800', '0x21B1FF',                                             //Pan
                    '0xFCF434', '0xFCFCFC', '0x9C59D1', '0x2C2C2C',                                 //Non Binary
                    '0x000000', '0xA3A3A3', '0xFFFFFF', '0x800080',                                 //Ace
                    '0xFF75A2', '0xFFFFFF', '0xBE18D6', '0x000000', '0x333EBD',                     //Genderfluid
                    '0x000000', '0xB9B9B9', '0xFFFFFF', '0xB8F483',                                 //Agender
                    '0xB57EDC', '0xFFFFFF', '0x4A8123',                                             //Genderqueer
            '0xD52D00', '0xEF7627', '0xFF9A56', '0xFFFFFF', '0xD162A4', '0xB55690', '0xA30262',     //Lesbian        
                    '0xE40303', '0xFF8C00', '0xFFED00', '0x008026', '0x004DFF', '0x750787']     
                    
    let col = Math.floor(Math.random() * colorHex.length)

    guild.roles.cache.get("843748676530864159").setColor(colorHex[col], "making avatar gay again")
    console.log("changed color!")
    
}

export { lgbtqColors as default }