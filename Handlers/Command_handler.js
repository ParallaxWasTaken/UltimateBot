const fs = require('fs');

module.exports = (client, Discord) =>{
    const command_files = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

    for(const file of command_files){
        const command = require(`../Commands/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}