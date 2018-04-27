const Discord = require('Discord.js');

const bot = new Discord.Client();

var prefix = "!";

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: "!aide pour plus d'info"}});
    console.log("Bot ready !");
});

bot.login("NDM5MTcyODM5MTkxMzQ3MjEx.DcT5xg.Y88RYlGoOFaNhQUyeYEFy_72qJw");

bot.on('message', message => {
    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FFFF00")
        .setTitle("Commande:")
        .addField("!aide", "Affiche les commandes")
        .addField("!clear", "Clear tout les messages (seulement les admins)")
        .addField("!trade", "Avertie un vendeur")
        message.channel.sendMessage(help_embed);
        console.log("aide, effectuer")
    };

    if(message.content === prefix + "clear"){
        (message.member.hasPermission("MANAGE_MESSAGES"));{
         message.channel.fetchMessages()
            .then(function(list){
                message.channel.bulkDelete(list);
            }, function(err){message.channel.send("Erreur")})}
            console.log("clear, effectuer")
    };

    if(message.content === prefix + "trade"){
        message.guild.channels.find("name", "information-du-bot").send(`quelqu'un veut acheter`);
        message.guild.channels.find("name", "demandes-armes").send(`Va dans le vocal "Attente de trade" quelqu'un viendra dès que possible`);
        console.log(`quelqu'un veut acheter`)
    };
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "demandes-armes").send(`Bienvenue ${member}, si tu veux plus d'infos fait un [!aide]`)
    console.log(`quelqu'un a rejoin le serveur`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "demandes-armes").send(`${member} vien de quitter`)
    console.log(`quelqu'un a quitter le serveur`)
});

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Client');
    member.addRole(role)
    console.log(`la personne est bien client`)
});

