const fs = require('fs-extra')
const {Client, RichEmbed} = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete()
    if (message.member.roles.find(r => r.id == 667772960945340477) // доступ Администратор
    || message.member.roles.find(r => r.id == 671326162575818795) // доступ Тех.Администратор
    || message.member.roles.find(r => r.id == 667773453373276160)
    ){ 
message.author.send(`!!!`)
const embed = new RichEmbed()
.setColor('#310062')
    .setTitle('Twitch канал')
    .setURL('https://www.twitch.tv/pnukh')
    .setAuthor('Competitive Scrims|PUBG Lite', 'https://sun9-42.userapi.com/c857424/v857424458/15ac65/g4QX62IK4HI.jpg')
    .setDescription('**📣фоловься, друг**')
    .setImage('https://cdn.discordapp.com/attachments/667791906616639520/674554850549432320/3333mini.png')
    .setTimestamp()
    .setFooter('Администрация', 'https://media.discordapp.net/attachments/642320052460453899/674941384263991299/Avatar_ex.jpg');
message.author.send(embed);
};
  };
module.exports.help = {
    name: "twitch"
};