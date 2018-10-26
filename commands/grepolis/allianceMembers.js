const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const https = require('https');

class AllianceInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name : 'alliance',
            group : 'grepolis',
            memberName : 'alliance',
            description : 'Renvoie les informations de l\'alliance (paramètre n°1).'
        });
    }

    async run(message, args) {
        message.delete();
        var str = '';
        var req = https.request('https://fr111.grepolis.com/data/alliances.txt', function(response) {
            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                const arg = message.content.slice(1).trim().split(/ +/g);
                var data = str;
                var mot = "";
                var donnees = [];
                for(var i = 0; i<data.length; i++) {
                    if (data.charAt(i)!=','&&data.charAt(i)!='\n') {
                        mot = mot.concat(data.charAt(i));
                    } else {
                        donnees.push(mot);
                        mot = "";
                    }
                }
                var i;
                var param = (String)(arg.slice(1).join(" "));
                var par = "";
                for(i = 0; i<param.length; i++){
                    if (param.charAt(i)==" "){
                        par = par.concat("+");
                    } else if (param.charAt(i)=='é'){
                        par = par.concat("%C3%A9");
                    } else if (param.charAt(i)=='É') {
                        par = par.concat("%C3%89");
                    } else if (param.charAt(i)=='È') {
                        par = par.concat("%C3%88");
                    } else if (param.charAt(i)=='è'){
                        par = par.concat("%C3%A8");
                    } else if (param.charAt(i)=='ô'){
                        par = par.concat("%C3%B4");
                    } else if (param.charAt(i)=='à'){
                        par = par.concat("%C3%A0");
                    } else if (param.charAt(i)=='î'){
                        par = par.concat("%C3%AE");
                    } else if (param.charAt(i)=='ï'){
                        par = par.concat("%C3%AF");
                    } else if (param.charAt(i)=='\''){
                        par = par.concat("%27");
                    } else if (param.charAt(i)=='*'){
                        par = par.concat("%2A");
                    } else {
                        par = par.concat(param.charAt(i));
                    }
                }
                for(i = 0; i<donnees.length&&par!=donnees[i]; i++) {
                }
                let id_alliance;
                let points_alliance;
                let rang;
                let membres_info = "";
                if (i>=donnees.length) {
                    id_alliance = "Non défini";
                    points_alliance = "Non défini";
                    rang = "Non défini";
                    membres_info = "Non défini";
                } else {
                    id_alliance = donnees[i-1];
                    points_alliance = donnees[i+1];
                    rang = donnees[i+4];
                    membres_info = "Non défini";
                }
                message.channel.send({embed:{
                    color: 0xFFBF00,
                    author: {
                        name: "Informations de "+param,
                        icon_url: message.channel.client.user.avatarURL
                    },
                    fields: [{
                        name: "ID de l'alliance",
                        value: id_alliance
                    },
                    {
                        name: "Nom de l'alliance",
                        value: param
                    },
                    {
                        name: "Points",
                        value: points_alliance
                    },
                    {
                        name: "Rang",
                        value: rang
                    },],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.channel.client.user.avatarURL,
                        text: "© JS Bot"
                    }
                }});
            });
        }).end();
    }
}

module.exports = AllianceInfoCommand;