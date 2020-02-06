const fs = require('fs-extra')
const {Client, RichEmbed} = require('discord.js');
module.exports.run = async (bot, message, args) => {
    message.delete()
    if (message.member.roles.find(r => r.id == 537657132917587968) // доступ Администратор
    || message.member.roles.find(r => r.id == 673611719653851176) // доступ Тех.Администратор
    || message.member.roles.find(r => r.id == 539090645919465493)
    ){ 
message.channel.send(`@everyone`)
const embed = new RichEmbed()
.setColor('#310062')
    .setTitle('Twitch канал')
    .setURL('https://www.twitch.tv/pnukh')
    .setAuthor('PNUKH', 'https://media.discordapp.net/attachments/642320052460453899/674941384263991299/Avatar_ex.jpg')
    .setDescription('**Начало стрима!!! \n подпишись и влепи лайкос**')
    .setImage('https://media.discordapp.net/attachments/642320052460453899/674953260804866059/-2.png?width=640&height=640')
    .setTimestamp()
    .setFooter('Администрация', 'https://media.discordapp.net/attachments/642320052460453899/674941384263991299/Avatar_ex.jpg');
message.channel.send(embed);
}

}
module.exports.help = {
    name: 'ad'
}
