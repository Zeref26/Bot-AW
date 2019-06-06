const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
    bot.user.setActivity("Accel World");
    bot.user.setAvatar("img.png");
    /**var interval = setInterval (function () {
        let date = new Date();
        let m = date.getMinutes()
        let s = date.getSeconds();
        if (m == 0 && s == 0) {
            let zone_n = Math.floor((Math.random() * 5) + 1);
            switch (zone_n) {
                case 1 :
                    bot.channels.find('name',"centre-de-la-zone").send("**[Une mutation de zone ! \n L'endroit se transforme en une grande ville inhabitée avec des bâtiments sombres faits en métal dur]**")
                    break;
                case 2 :
                    bot.channels.find('name',"centre-de-la-zone").send("**[Une mutation de zone ! \n La zone se transforme en une jungle dense et humide, l'ensemble de l'endroit est recouvert de plantes et de rochers]**")
                    break;
                case 3 :
                    bot.channels.find('name',"centre-de-la-zone").send("**[Une mutation de zone ! \n Un vent glacial se lève et la zone se transforme en peine enneigée, la température ambiante est de -5 degrés et les mouvements dans la neige sont difficiles]**")
                    break;
                case 4 :
                    bot.channels.find('name',"centre-de-la-zone").send("**[Une mutation de zone ! \n Une chaleur intense se lève dans la zone, le sol se fragmente par endroit laissant s'échapper des lacs de lave]**")
                    break;
                case 5 :
                    bot.channels.find('name',"centre-de-la-zone").send("**[Une mutation de zone ! \n L'endroit se vide complètement et devient une simple plaine sans aucun arbre, juste de l'herbe à perte de vue, cependant la gravité ici est extrêmement élevée, les mouvements sont difficiles et les avatars lents perdent 50 Pv par minutes]**")
                    break;
            }
            bot.guilds.find('name',"Accel World [RP] ~ New Generation").members.forEach(member => {
                if (member.roles.exists('name',"Burst Linker") && !member.roles.exists('color',11342935)) {
                    bot.guilds.find('name',"Accel World [RP] ~ New Generation").channels.find('name',"plaintes-problèmes").send(bot.guilds.find('name',"Accel World [RP] ~ New Generation").roles.find('name',"Admin")+"\n"+member+" n'a pas de rôle de monde.");
                }
            });
        }
    }, 1 * 1000); */
});

bot.on("guildMemberAdd", member => {
    bot.guilds.find('name',"Accel World [RP] ~ New Generation").channels.find('name',"général").send("Bienvenue à "+member+" dans le Brain Burst.");
});

bot.on("guildMemberRemove", member => {
    bot.guilds.find('name',"Accel World [RP] ~ New Generation").channels.find('name',"général").send(member+" a perdu tous ses Points Burst. Adieu "+member);
});

bot.on("guildMemberAvailable", member => {
    let mess = bot.guilds.find('name',"Accel World [RP] ~ New Generation").channels.find('name',"dernières-connections").send("L");
    bot.guilds.find('name',"Accel World [RP] ~ New Generation").channels.find('name',"général").send(member.displayName+" : "+mess.createdAt);
    mess.delete();
});

bot.on("message", (message) => {
    let mess = message.content.toLowerCase();
    if (!(message.author.id == "503345108578729985" || message.channel.name == "historique")) {
        message.guild.channels.find('name',"historique").send(message.createdAt+" "+message.channel+" "+message.author.username+" : "+message);
    }
    if (mess == "burst link") {
        if (message.guild.members.find('id',message.author.id).roles.exists('name',"Admin") || message.guild.members.find('id',message.author.id).roles.exists('name',"Burst Linker")) {
            if (message.guild.members.find('id',message.author.id).roles.exists('name',"Zone neutre")) {
                message.delete();
            } else {
                let member = message.guild.members.find('id',message.author.id);
                bot.channels.get("586223545881985064").fetchMessages({limit:99}).then(messages => {
                    messages.forEach((msg)=> {
                        if (msg.content.includes("```\n"+message.guild.members.find('id',message.author.id).roles.find('color',6524045).name)) {
                            let mes = "";
                            let m = ""+msg.content;
                            let l = m.length-4;
                            for (let i = 4; i<l; i++) {
                                if (m.charAt(i)==':') {
                                    for (let j = i+2; j<l-7; j++) {
                                        mes += m.charAt(j);
                                    }
                                }
                            }
                            if ((parseInt(mes)-1)>0) {
                                let new_m = "```\n"+message.guild.members.find('id',message.author.id).roles.find('color',6524045).name+" : "+(parseInt(mes)-1).toString()+" points\n```";
                                msg.edit(new_m);
                                if (parseInt(mes)-1<=10 && parseInt(mes)-1>5) {
                                    message.guild.channels.find('id',"531211899803533335").send("Attention, "+member+" a moins de 10 Points Burst.");
                                } else if (parseInt(mes)-1<=5) {
                                    let admin = message.guild.roles.find('name','Admin');
                                    message.guild.channels.find('id',"531211899803533335").send(admin+"\nAttention, "+member+" a moins de 5 Points Burst.");
                                }
                                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde accéléré"));
                                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',7492178).name); */
                                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde accéléré"));
                                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',7492178).name); */
                                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde accéléré"));
                                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',7492178).name); */
                                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde accéléré"));
                                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',7492178).name); */
                            } else {
                                message.author.send("Vous n'avez pas assez de Points Bursts.\n\nVos Points : "+mes);
                                message.delete();
                            }
                            
                        }
                    });
                });
            }
        } else {
            message.delete();
        }
    }
    if (mess == "burst out") {
        if (message.guild.members.find('id',message.author.id).roles.exists('name',"Admin") || message.guild.members.find('id',message.author.id).roles.exists('name',"Burst Linker")) {
            if (message.guild.members.find('id',message.author.id).roles.exists('name',"Monde accéléré")) {
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde accéléré"));
                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde accéléré"));
                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde accéléré"));
                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde accéléré"));
                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
            } else  if (message.guild.members.find('id',message.author.id).roles.exists('name',"Zone neutre") && message.channel.name == "point-de-sortie") {
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Zone neutre"));
                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Zone neutre"));
                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde accéléré"));
                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde accéléré"));
                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
            } else {
                message.delete();
            }
        } else {
            message.delete();
        }
    }
    if (mess == "unlimited burst link") {
        if (message.guild.members.find('id',message.author.id).roles.exists('name',"Admin") || (message.guild.members.find('id',message.author.id).roles.exists('name',"Burst Linker") && message.guild.members.find('id',message.author.id).roles.exists('name',"Niveau 3"))) {
            if (message.guild.members.find('id',message.author.id).roles.exists('name',"Monde accéléré")) {
                message.delete();
            } else {
                let member = message.guild.members.find('id',message.author.id);
                bot.channels.get("586223545881985064").fetchMessages({limit:99}).then(messages => {
                    messages.forEach((msg)=> {
                        let mes = "";
                        if (msg.content.includes("```\n"+message.guild.members.find('id',message.author.id).roles.find('color',6524045).name)) {
                            let m = ""+msg.content;
                            let l = m.length-4;
                            for (let i = 4; i<l; i++) {
                                if (m.charAt(i)==':') {
                                    for (let j = i+2; j<l-7; j++) {
                                        mes += m.charAt(j);
                                    }
                                }
                            }
                            if ((parseInt(mes)-10)>0) {
                                let new_m = "```\n"+message.guild.members.find('id',message.author.id).roles.find('color',6524045).name+" : "+(parseInt(mes)-10).toString()+" points\n```";
                                msg.edit(new_m);
                                if (parseInt(mes)-10<=10 && parseInt(mes)-10>5) {
                                    message.guild.channels.find('id',"531211899803533335").send("Attention, "+member+" a moins de 10 Points Burst.");
                                } else if (parseInt(mes)-10<=5) {
                                    let admin = message.guild.roles.find('name','Admin');
                                    message.guild.channels.find('id',"531211899803533335").send(admin+"\nAttention, "+member+" a moins de 5 Points Burst.");
                                }
                                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Zone neutre"));
                                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',7492178).name); */
                                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Zone neutre"));
                                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',7492178).name); */
                                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Zone neutre"));
                                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',7492178).name); */
                                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Zone neutre"));
                                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',7492178).name); */
                            } else {
                                message.author.send("Vous n'avez pas assez de Points Bursts.\n\nVos Points : "+mes);
                                message.delete();
                            }
                        }
                    });
                });
            }
        } else {
            message.delete();
        }
    }
    if (mess == "direct link") {
        if (message.guild.members.find('id',message.author.id).roles.exists('name',"Admin") || message.guild.members.find('id',message.author.id).roles.exists('name',"Burst Linker")) {
            if (message.guild.members.find('id',message.author.id).roles.exists('name',"Zone neutre")) {
                message.delete();
            } else {
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"VrChat++"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('hexColor',"#4c6876").name);
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"VrChat++"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('hexColor',"#4c6876").name);
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"VrChat++"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('hexColor',"#4c6876").name);
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"VrChat++"));
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Monde réel"));
                message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('hexColor',"#4c6876").name);
            }
        } else {
            message.delete();
        }
    }
    if (mess == "link out") {
        if (message.guild.members.find('id',message.author.id).roles.exists('name',"Admin") || message.guild.members.find('id',message.author.id).roles.exists('name',"VrChat++")) {
            message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
            message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"VrChat++"));
            /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
            message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
            message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"VrChat++"));
            /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
            message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
            message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"VrChat++"));
            /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
            message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Monde réel"));
            message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"VrChat++"));
            /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
        } else {
            message.delete();
        }
    }
    if(message.content.startsWith("-valide")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            let member = message.mentions.members.first();
            if (args.length==3) {
                if (member.roles.exists('color',6524045)) {
                    if (message.guild.roles.exists('name',args[2])) {
                        /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
                        member.addRole(message.guild.roles.find('name',"---------[HORS-RP]----------"));
                        member.addRole(message.guild.roles.find('name',"--------------[IDENTITE]--------------"));
                        member.addRole(message.guild.roles.find('name',"Burst Linker"));
                        member.addRole(message.guild.roles.find('name',"Niveau 1"));
                        member.addRole(message.guild.roles.find('name',"-------[COMPETENCES]-------"));
                        member.addRole(message.guild.roles.find('name',"-----------[GAMER TAG /NOM]----------"));
                        member.addRole(message.guild.roles.find('name',"------------------------------"));
                        member.addRole(message.guild.roles.find('name',"Monde réel"));
                        member.addRole(message.guild.roles.find('name',args[2]));
                        let mem = "";
                        for (let i = 0; i<member.displayName.length; i++) {
                            if (member.displayName.charAt(i) == " ") {
                                for (let j=i+1; j<member.displayName.length; j++) {
                                    mem += member.displayName.charAt(j);
                                }
                                message.guild.createChannel("appartement-"+mem.toLowerCase(),'text').then(
                                    chan => {
                                        let par = message.guild.channels.find('name',"R- Ville");
                                        chan.setParent(par);
                                    }
                                );
                            }
                        }
                        message.guild.channels.find('name','général').send("Bienvenue à "+member+" dans le monde accéléré !");
                        message.guild.channels.find('id','586223545881985064').send("```\n"+/** member.roles.find('color',6524045).name */member.displayName+" : 20 points\n```");
                        message.guild.channels.find("name","ratio").send("```\n"+/** member.roles.find('color',6524045).name */member.displayName+"\n0-0-0\n```");
                    } else {
                        message.channel.send("Couleur inexistante. Vérifiez la majuscule.");
                    }
                } else {
                    message.channel.send("Vous avez oublié de mettre le rôle Prénom Nom.");
                }
            } else if (args.length==2){
                message.channel.send("Il faut dire une couleur.");
            } else {
                message.channel.send("Il faut mentionner une personne et dire une couleur.\nExemple : -valide "+message.guild.members.find('id',message.author.id)+" Rouge")
            }
        }
    }
    if (message.content.startsWith("-pb")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            let member = message.mentions.members.first();
            if (args.length==2) {
                bot.channels.get("586223545881985064").fetchMessages({limit:99}).then(messages => {
                    messages.forEach((msg)=> { 
                        let pts = "";
                        let mes = "";
                        if (msg.content.includes("```\n"+/** member.roles.find('color',6524045).name */member.displayName)) {
                            let m = ""+msg.content;
                            for (let i = 4; i<m.length-4; i++) {
                                mes += m.charAt(i);
                            }
                            message.channel.send(mes);
                        }
                    });
                });
            } else {
                message.channel.send("Aucune personne mentionnée.");
            }
        }
    }
    if (message.content.startsWith("-padd")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            let member = message.mentions.members.first();
            if (args.length==3) {
                bot.channels.get("586223545881985064").fetchMessages({limit:99}).then(messages => {
                    messages.forEach((msg)=> {
                        let mes = "";
                        if (msg.content.includes("```\n"+/** member.roles.find('color',6524045).name */member.displayName)) {
                            let m = ""+msg.content;
                            let l = m.length-4;
                            for (let i = 4; i<l; i++) {
                                if (m.charAt(i)==':') {
                                    for (let j = i+2; j<l-7; j++) {
                                        mes += m.charAt(j);
                                    }
                                }
                            }
                            let new_m = "```\n"+/** member.roles.find('color',6524045).name */member.displayName+" : "+(parseInt(mes)+parseInt(args[2])).toString()+" points\n```";
                            msg.edit(new_m);
                            if (parseInt(mes)+parseInt(args[2])<=10 && parseInt(mes)+parseInt(args[2])>5) {
                                message.guild.channels.find('id',"531211899803533335").send("Attention, "+member+" a moins de 10 Points Burst.");
                            } else if (parseInt(mes)+parseInt(args[2])<=5) {
                                let admin = message.guild.roles.find('name','Admin');
                                message.guild.channels.find('id',"531211899803533335").send(admin+"\nAttention, "+member+" a moins de 5 Points Burst.");
                            }
                        }
                    });
                });
            } else if (args.length==2) {
                message.channel.send("Il faut rentrer une quantité.");
            } else {
                message.channel.send("Il faut mentionnée une personne et entrer une quantité.\nExemple : -padd "+message.guild.members.find('id',message.author.id)+" 5");
            }
        }
    }
    if (message.content.startsWith("-prem")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            let member = message.mentions.members.first();
            if (args.length==3) {
                bot.channels.get("586223545881985064").fetchMessages({limit:99}).then(messages => {
                    messages.forEach((msg)=> {
                        let mes = "";
                        if (msg.content.includes("```\n"+/** member.roles.find('color',6524045).name */member.displayName)) {
                            let m = ""+msg.content;
                            let l = m.length-4;
                            for (let i = 4; i<l; i++) {
                                if (m.charAt(i)==':') {
                                    for (let j = i+2; j<l-7; j++) {
                                        mes += m.charAt(j);
                                    }
                                }
                            }
                            let new_m = "```\n"+/** member.roles.find('color',6524045).name */member.displayName+" : "+(parseInt(mes)-parseInt(args[2])).toString()+" points\n```";
                            msg.edit(new_m);
                            if (parseInt(mes)-parseInt(args[2])<=10 && parseInt(mes)-parseInt(args[2])>5) {
                                message.guild.channels.find('id',"531211899803533335").send("Attention, "+member+" a moins de 10 Points Burst.");
                                member.send("Attention, tu as moins de 10 Points Burst.");
                            } else if (parseInt(mes)-parseInt(args[2])<=5 && parseInt(mes)-parseInt(args[2])>0) {
                                let admin = message.guild.roles.find('name','Admin');
                                message.guild.channels.find('id',"531211899803533335").send(admin+"\nAttention, "+member+" a moins de 5 Points Burst.");
                                member.send("\nAttention, tu as moins de 5 Points Burst.");
                            } else if(parseInt(mes)-parseInt(args[2])<=0) {
                                let admin = message.guild.roles.find('name','Admin');
                                message.guild.channels.find('id',"531211899803533335").send(admin+"\nC'est fini pour "+member+", il a perdu tous ses Points Burst ...");
                                message.guild.channels.find('name',"général").send("C'est fini pour "+member+", il a perdu tous ses Points Burst ...");
                                /** message.guild.members.find('id',message.author.id).setNickname(message.guild.members.find('id',message.author.id).roles.find('color',6524045).name); */
                                member.removeRole(message.guild.roles.find('name',"--------------[IDENTITE]--------------"));
                                member.removeRole(message.guild.roles.find('name',"Burst Linker"));
                                member.removeRole(message.guild.roles.find('name',"Niveau 1"));
                                member.removeRole(message.guild.roles.find('name',"-------[COMPETENCES]-------"));
                                member.removeRole(message.guild.roles.find('name',"-----------[GAMER TAG /NOM]----------"));
                                member.removeRole(message.guild.roles.find('name',"------------------------------"));
                                member.removeRole(message.guild.roles.find('name',"Monde réel"));
                                member.removeRole(message.guild.roles.find('name',args[2]));
                            }
                        }
                    });
                });
            } else if (args.length==2) {
                message.channel.send("Il faut rentrer une quantité.");
            } else {
                message.channel.send("Il faut mentionnée une personne et entrer une quantité.\nExemple : -prem "+message.guild.members.find('id',message.author.id)+" 5");
            }
            
        }
    }
    if (message.content.startsWith("-point start")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            let member = message.mentions.members.first();
            const args = message.content.slice(1).trim().split(/ +/g);
            if (args.length==3)  {
                message.guild.channels.find('id','586223545881985064').send("```\n"+/** member.roles.find('color',6524045).name */member.displayName+" : 20 points\n```");
            } else {
                message.channel.send("Aucune personne mentionnée.");
            }
        }
    }
    if (message.content.startsWith("-info")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            var bl = 0;
            var sf = 0;
            var rouge = 0;
            var bleu = 0;
            var jaune = 0;
            var vert = 0;
            var violet = 0;
            var noir = 0;
            var blanc = 0;
            var metal = 0;
            var transparent = 0;
            var bic = 0;
            var valide = 0;
            var enc = 0;
            var membres = message.guild.members.array();
            for (var i = 0; i<membres.length; i++) {
                if(membres[i].roles.exists('name',"Burst Linker")) {
                    bl += 1;
                    if (membres[i].roles.exists('name',"Bicolore")) {
                        bic += 1;
                    } else {
                        if (membres[i].roles.exists('name',"Rouge")) {
                            rouge += 1;
                        } else if (membres[i].roles.exists('name',"Bleu")) {
                            bleu += 1;
                        } else if (membres[i].roles.exists('name',"Jaune")) {
                            jaune += 1;
                        } else if (membres[i].roles.exists('name',"Vert")) {
                            vert += 1;
                        } else if (membres[i].roles.exists('name',"Violet")) {
                            violet += 1;
                        } else if (membres[i].roles.exists('name',"Noir")) {
                            noir += 1;
                        } else if (membres[i].roles.exists('name',"Blanc")) {
                            blanc += 1;
                        } else if (membres[i].roles.exists('name',"Transparent")) {
                            transparent += 1;
                        } else {
                            metal += 1;
                        }
                    }
                } else {
                    if (membres[i].roles.exists('name',"En attente")) {
                        valide += 1;
                    } else if (membres[i].roles.exists('name',"En cours de validation")) {
                        enc += 1;
                    } else {
                        sf += 1;
                    }
                }
            }
            message.channel.send("Voici les informations du serveur : \n\nNombre de salons : "+message.guild.channels.size+"\nNombre de rôles : "+message.guild.roles.size+"\n\n- Nombre de Burst Linker : "+bl+"\n - Nombre d'avatars rouges : "+rouge+"\n - Nombre d'avatars bleus : "+bleu+"\n - Nombre d'avatars jaunes : "+jaune+"\n - Nombre d'avatars verts : "+vert+"\n - Nombre d'avatars violets : "+violet+"\n - Nombre d'avatars noirs : "+noir+"\n - Nombre d'avatars blancs : "+blanc+"\n - Nombre d'avatars métalliques : "+metal+"\n - Nombre d'avatars transparents : "+transparent+"\n - Nombre d'avatars bicolores : "+bic+"\n\n En attente de validation : "+valide+"\n En création d'avatar : "+enc+"\n En attente d'une fiche : "+(sf-3));
        }
    }
    if(message.content.startsWith("-nick")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            let member = message.mentions.members.first();
            if (args.length>=4) {
                member.setNickname(args[2]+" "+args[3]);
            } else if (args.length==3) {
                message.channel.send("Vous n'avez pas mis le nom.");
            } else if (args.length==2) {
                message.channel.send("Vous n'avez pas mis le prénom et le nom.");
            } else {
                message.channel.send("Il faut mentionnée une personne et entrer Prénom Nom.\nExemple : -nick "+message.guild.members.find('id',message.author.id)+" Jean-Luc Patrikac"); 
            }
        }
    }
    if(message.content.startsWith("-clear")){
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            if (args.length>=2) {
                message.channel.bulkDelete(parseInt(args[1])+1);
            } else if (args.length<2) {
                message.author.send("Vous n'avez pas entré le nombre de message à effacer.");
            }
        }
    }
    if(message.content.startsWith("-mp")){
        message.delete();
        const args = message.content.slice(1).trim().split(/ +/g);
        let member = message.mentions.members.first();
        if ((message.guild.members.find('id',message.author.id).roles.exists('name',"Monde accéléré") && member.roles.exists('name',"Monde accéléré"))
        || (message.guild.members.find('id',message.author.id).roles.exists('name',"Monde réel") && member.roles.exists('name',"Monde réel"))
        || (message.guild.members.find('id',message.author.id).roles.exists('name',"Zone neutre") && member.roles.exists('name',"Zone neutre"))) {
            let m = args.slice(2).join(" ");
            let rol2 = message.guild.members.find('id',message.author.id).roles.find('color',7492178).name;
            member.send("**__Brain Burst :__**\nMessage en provenance de "+rol2+" :\n```"+m+"```");
        } else {
            message.author.send("Vous n'êtes pas dans le même monde.");
        }
    }
    if (message.content.startsWith("-f")) {
        message.delete();
        let member = message.mentions.members.first();
        let mem = "";
        if (message.guild.members.find('id',message.author.id).roles.exists('name',"Monde réel") && member.roles.exists('name',"Monde réel")) {
            let rol = message.guild.members.find('id',message.author.id).roles.find('color',7492178).name;
            for (let i = 0; i<member.displayName.length; i++) {
                if (member.displayName.charAt(i) == " ") {
                    for (let j=i+1; j<member.displayName.length; j++) {
                        mem += member.displayName.charAt(j);
                    }
                    let enn = member.roles.find('color',7492178).name;
                    message.guild.channels.find('name',"appartement-"+mem.toLowerCase()).send("**__Brain Burst__**\n"+enn+" est défié(e) par "+rol+" !");
                    member.send("**__Brain Burst__**\nVous avez été défiez par "+rol);
                }
            }
        } else {
            message.author.send("L'un de vous est déjà occupé.")
        }
    }
    if(message.content.startsWith("-spec")){
        message.delete();
        if (message.guild.members.find('id',message.author.id).roles.exists('name',"Burst Linker")) {
            message.author.send("Vous n'avez pas accès à cette commande.");
        } else {
            if (message.guild.members.find('id',message.author.id).roles.exists('name',"Spectateur HRP")) {
                message.guild.members.find('id',message.author.id).removeRole(message.guild.roles.find('name',"Spectateur HRP"));
                message.author.send("Vous n'êtes plus spectateur.");
            } else {
                message.guild.members.find('id',message.author.id).addRole(message.guild.roles.find('name',"Spectateur HRP"));
                message.author.send("Vous êtes passé spectateur.");
            }
        }
    }
    if (message.content.startsWith("-report")) {
        message.delete();
        const args = message.content.slice(1).trim().split(/ +/g);
        if (args.length>=2) {
            message.guild.channels.find('name',"plaintes-problèmes").send(message.guild.members.find('id',message.author.id)+" rapporte : "+args.slice(1).join(" "));
        } else {
            message.channel.send("Vous n'avez pas mis votre problème/plainte.");
        }
    }
    if (message.content.startsWith("-say")) {
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            if (args.length>=2) {
                message.channel.send(args.slice(1).join(" "));
            } else {
                message.channel.send("Vous n'avez pas mis le texte à dire.");
            }
        }
    }
    if (message.content.startsWith("-stat start")) {
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            let mem = message.mentions.members.first();
            if (args.length==3)  {
                message.guild.channels.find("name","ratio").send("```\n"+mem.roles.find('color',6524045).name+"\n0-0-0\n```");
            } else {
                message.channel.send("Aucune personne mentionnée.");
            }
        }
    }
    if (message.content.startsWith("-win")) {
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            let member = message.mentions.members.first();
            const args = message.content.slice(1).trim().split(/ +/g);
            if (args.length==2) {
                message.guild.channels.find('id',"532120912401530891").fetchMessages({limit:99}).then(messages => {
                    messages.forEach((msg) => {
                        let mes = "";
                        if (msg.content.includes("```\n"+/** member.roles.find('color',6524045).name */member.displayName)) {
                            let m = ""+msg.content;
                            let l = m.length-4;
                            let v = "";
                            let e = "";
                            let d = "";
                            for (let i = 4; i<l; i++) {
                                if (m.charAt(i)=='\n') {
                                    let j = 0;
                                    for (j = i+1; m.charAt(j)!="-" && j<l; j++) {
                                        v += m.charAt(j);
                                    }
                                    let k = 0;
                                    for (k = j+1; m.charAt(k)!="-" && k<l; k++) {
                                        e += m.charAt(k);
                                    }
                                    for (let n = k+1; m.charAt(n)!='\n'; n++) {
                                        d += m.charAt(n);
                                    }
                                    
                                }
                            }
                            let new_m = "```\n"+/** member.roles.find('color',6524045).name */member.displayName+"\n"+(parseInt(v)+1)+"-"+e+"-"+d+"\n```";
                            msg.edit(new_m);
                            if ((parseInt(v)+1)==5) {
                                message.guild.channels.find('id',"531211899803533335").send("Félicitations à "+member+" qui atteint le niveau 2 !");
                                message.guild.channels.find('name',"général").send("Félicitations à "+member+" qui atteint le niveau 2 !");
                                member.addRole(message.guild.roles.find('name','Niveau 2'));
                                member.removeRole(message.guild.roles.find('name','Niveau 1'));
                            } else if ((parseInt(v)+1)==10) {
                                message.guild.channels.find('id',"531211899803533335").send("Félicitations à "+member+" qui atteint le niveau 3 !");
                                message.guild.channels.find('name',"général").send("Félicitations à "+member+" qui atteint le niveau 3 !");
                                member.addRole(message.guild.roles.find('name','Niveau 3'));
                                member.removeRole(message.guild.roles.find('name','Niveau 2'));
                            } else if ((parseInt(v)+1)==40) {
                                message.guild.channels.find('id',"531211899803533335").send("Félicitations à "+member+" qui atteint le niveau 4 !");
                                message.guild.channels.find('name',"général").send("Félicitations à "+member+" qui atteint le niveau 4 !");
                                member.addRole(message.guild.roles.find('name','Niveau 4'));
                                member.removeRole(message.guild.roles.find('name','Niveau 3'));
                            } else if ((parseInt(v)+1)==100) {
                                message.guild.channels.find('id',"531211899803533335").send("Félicitations à "+member+" qui atteint le niveau 5 !");
                                message.guild.channels.find('name',"général").send("Félicitations à "+member+" qui atteint le niveau 5 !");
                                member.addRole(message.guild.roles.find('name','Niveau 5'));
                                member.removeRole(message.guild.roles.find('name','Niveau 4'));
                            }
                            message.channel.send("-padd "+member+" 5");
                        }
                    });
                });
            } else {
                message.channel.send("Aucune personne mentionnée.");
            }
        }
    }
    if (message.content.startsWith("-lose")) {
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            let member = message.mentions.members.first();
            const args = message.content.slice(1).trim().split(/ +/g);
            if (args.length==2) {
                message.guild.channels.find('id',"532120912401530891").fetchMessages({limit:99}).then(messages => {
                    messages.forEach((msg) => {
                        let mes = "";
                        if (msg.content.includes("```\n"+/** member.roles.find('color',6524045).name */member.displayName)) {
                            let m = ""+msg.content;
                            let l = m.length-4;
                            let v = "";
                            let e = "";
                            let d = "";
                            for (let i = 4; i<l; i++) {
                                if (m.charAt(i)=='\n') {
                                    let j = 0;
                                    for (j = i+1; m.charAt(j)!="-" && j<l; j++) {
                                        v += m.charAt(j);
                                    }
                                    let k = 0;
                                    for (k = j+1; m.charAt(k)!="-" && k<l; k++) {
                                        e += m.charAt(k);
                                    }
                                    for (let n = k+1; m.charAt(n)!='\n'; n++) {
                                        d += m.charAt(n);
                                    }
                                    
                                }
                            }
                            let new_m = "```\n"+/** member.roles.find('color',6524045).name */member.displayName+"\n"+v+"-"+e+"-"+(parseInt(d)+1)+"\n```";
                            msg.edit(new_m);
                            message.channel.send("-prem "+member+" 5");
                        }
                    });
                });
            } else {
                message.channel.send("Aucune personne mentionnée.");
            }
        }
    }
    if (message.content.startsWith("-equal")) {
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"Admin")) {
            message.delete();
            let member = message.mentions.members.first();
            const args = message.content.slice(1).trim().split(/ +/g);
            if (args.length==2) {
                message.guild.channels.find('id',"532120912401530891").fetchMessages({limit:99}).then(messages => {
                    messages.forEach((msg) => {
                        let mes = "";
                        if (msg.content.includes("```\n"+/** member.roles.find('color',6524045).name */member.displayName)) {
                            let m = ""+msg.content;
                            let l = m.length-4;
                            let v = "";
                            let e = "";
                            let d = "";
                            for (let i = 4; i<l; i++) {
                                if (m.charAt(i)=='\n') {
                                    let j = 0;
                                    for (j = i+1; m.charAt(j)!="-" && j<l; j++) {
                                        v += m.charAt(j);
                                    }
                                    let k = 0;
                                    for (k = j+1; m.charAt(k)!="-" && k<l; k++) {
                                        e += m.charAt(k);
                                    }
                                    for (let n = k+1; m.charAt(n)!='\n'; n++) {
                                        d += m.charAt(n);
                                    }
                                    
                                }
                            }
                            let new_m = "```\n"+/** member.roles.find('color',6524045).name */member.displayName+"\n"+v+"-"+(parseInt(e)+1)+"-"+d+"\n```";
                            msg.edit(new_m);
                        }
                    });
                });
            } else {
                message.channel.send("Aucune personne mentionnée.");
            }
        }
    }
    if (message.content.startsWith("-don")) {
        message.delete();
        let member1 = message.mentions.members.first();
        let member2 = message.guild.members.find('id',message.author.id);
        const args = message.content.slice(1).trim().split(/ +/g);
        let message1;
        let message2;
        let mes1 = "";
        let mes2 = "";
        if (parseInt(args[2])>0) {
            if (args.length==3) {
                bot.channels.get("586223545881985064").fetchMessages({limit:99}).then(messages => {
                    messages.forEach((msg)=> {
                        if (msg.content.includes("```\n"+member1.roles.find('color',6524045).name)) {
                            message1 = msg;
                            let m1 = ""+msg.content;
                            let l1 = m1.length-4;
                            for (let i = 4; i<l1; i++) {
                                if (m1.charAt(i)==':') {
                                    for (let j = i+2; j<l1-7; j++) {
                                        mes1 += m1.charAt(j);
                                    }
                                }
                            }
                        } else if (msg.content.includes("```\n"+member2.roles.find('color',6524045).name)) {
                            message2 = msg;
                            let m2 = ""+msg.content;
                            let l2 = m2.length-4;
                            for (let i = 4; i<l2; i++) {
                                if (m2.charAt(i)==':') {
                                    for (let j = i+2; j<l2-7; j++) {
                                        mes2 += m2.charAt(j);
                                    }
                                }
                            }
                        }
                    });
                    if (parseInt(mes2)-parseInt(args[2])>0) {
                        let new_m2 = "```\n"+member2.roles.find('color',6524045).name+" : "+(parseInt(mes2)-parseInt(args[2])).toString()+" points\n```";
                        message2.edit(new_m2);
                        let new_m1 = "```\n"+member1.roles.find('color',6524045).name+" : "+(parseInt(mes1)+parseInt(args[2])).toString()+" points\n```";
                        message1.edit(new_m1);
                    } else {
                        message.channel.send("Vous n'avez pas suffisamment de Points Burst.");
                    }
                });
            } else if (args.length==2) {
                message.channel.send("Veuillez entrer un montant à donner.");
            } else {
                message.channel.send("Il faut mentionner une personne et entrer un montant.\nExemple : -don "+message.guild.members.find('id',message.author.id)+" 10");
            }
        } else {
            message.channel.send("Veuillez entrer un montant positif.");
        }
    }
    if (message.content.startsWith("-color")) {
        message.delete();
        if (message.mentions.roles.size>0) {
            message.channel.send(message.mentions.roles.first().color);
        } else {
            message.author.send("Veuillez mentionner un rôle.");
        }
    }
});

bot.login(process.env.TOKEN);