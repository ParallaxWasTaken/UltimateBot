const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['Command_handler', 'Event_handler'].forEach(handler =>{
    require(`./Handlers/${handler}`)(client, Discord);
});

client.login('ODQ4OTY0ODE0NzEzMTI2OTky.YLUSGA.uUJQSag55TKk7AB8TTOSq-aIhcs');