const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
var isReady = true;
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {

    var prefix = config.prefix;

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    var joueurs = ['ixion', 'julien', 'tatas'];
    if (command === 'player') {
        if (!args.length) {
            return message.channel.send(`Aucun joueur spécifié, ${message.author}!`);
        }
        else if (args[0] === 'ixion') {
            return message.channel.send('UN PUTAIN D\'IRON 4');
        }
        else if (args[0] === 'julien') {
            return message.channel.send('L\'example de la communautée');
        }
        else if (args[0] === 'tatas') {
            return message.channel.send('TYPICAL OTP VLAD QUI RAGE BIEN SA MERE');
        }
        else {
            var response = "Joueur inconnu ... Liste des joueurs connus : ";
            joueurs.forEach(function (item, index, array) {
                console.log(item);
                response = response.concat(' ', item);
            });
            return message.channel.send(response);
        }
    }
    else if (command === 'meme') {

        var voiceChannel = message.member.voiceChannel;
        if (!args.length) {
            return message.channel.send(`Aucun meme spécifié, ${message.author}!`);
        }
        else if (args[0] === 'pussy') {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.playFile('./memes/pussy.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave()
                });
            }).catch(err => console.log(err));
        }
        else if (args[0] === 'run') {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.playFile('./memes/run.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave()
                });
            }).catch(err => console.log(err));
        }
        else if (args[0] === 'ps1') {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.playFile('./memes/ps1.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave()
                });
            }).catch(err => console.log(err));
        }
        else if (args[0] === 'akbar') {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.playFile('./memes/akbar.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave()
                });
            }).catch(err => console.log(err));
        }
        else if (args[0] === 'wtf') {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.playFile('./memes/wtf.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave()
                });
            }).catch(err => console.log(err));
        }
        else if (args[0] === 'cena') {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.playFile('./memes/cena.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave()
                });
            }).catch(err => console.log(err));
        }
        else if (args[0] === 'issou') {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.playFile('./memes/issou.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave()
                });
            }).catch(err => console.log(err));
        }
        else if (args[0] === 'surprise') {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.playFile('./memes/surpise.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave()
                });
            }).catch(err => console.log(err));
        }
        else if (args[0] === 'ha') {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.playFile('./memes/ha.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave()
                });
            }).catch(err => console.log(err));
        }
        else if (args[0] === 'nein') {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.playFile(fs.createReadStream('./memes/pussy.ogg'), { type: 'ogg/opus', volume: false });
               // connection.playFile('./memes/nein.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave()
                });
            }).catch(err => console.log(err));
        }
        else if (args[0] === 'haaa') {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.playFile('./memes/haaa.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave()
                });
            }).catch(err => console.log(err));
        }


    }
});

client.login(config.token);
