const { GuildMember } = require("discord.js")

module.exports= (client, message, args, Discord) =>{
    client.on('guildMemberAdd', guildMember =>{
        let WelcomeRole = guildMember.guild.role.cache.get('837001697842561054')
        guildMember.roles.add(WelcomeRole);
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#483D8B')
        .setTitle('¡Bienvenido!')
        .setDescription(`¡Bienvenido <@${guildMember}> a nuestro servidor!`)
        .setThumbnail(guildMember.avatar_url);
        guildMember.guild.channels.cache.get('836997546433577041').send(newEmbed)
    })
}