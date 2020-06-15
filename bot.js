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
    var command = "";
    do {
        command = args.shift().toLowerCase();
    } while (command.length == 0);

    var joueurs = ['ixion', 'julien', 'tatas'];
    if (command === 'player' || command === 'p') {

        var voiceChannel = message.member.voice.channel;

        if (!args.length) {
            return message.channel.send(`Aucun joueur spécifié, ${message.author}!`);
        }
        else if (args[0] === 'ixion') {
            voiceChannel.join().then(connection => {

                var filePath = '/home/discordmemesSf/public/uploads/mp3/' + args[0] + '.mp3';
                if (!fs.existsSync(filePath)) {
                    return message.channel.send(`Le fichier, ${filePath} n'existe pas`);
                }
                const dispatcher = connection.play(filePath);
                dispatcher.on("end", end => {
                    voiceChannel.leave()
                });
            }).catch(err => console.log(err));

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
                response = response.concat(' ', item);
            });
            return message.channel.send(response);
        }
    }
    else if (command === 'meme' || command === 'm') {

        var voiceChannel = message.member.voice.channel;
        if (!args.length) {
            return message.channel.send(`Aucun meme spécifié, ${message.author}!`);
        }
        voiceChannel.join().then(connection => {
            var filePath = '/home/discordmemesSf/public/uploads/mp3/' + args[0] + '.mp3';
            if (!fs.existsSync(filePath)) {
                return message.channel.send(`Le fichier, ${filePath} n'existe pas`);
            }
            const dispatcher = connection.play(filePath);
            dispatcher.on("end", end => {
                voiceChannel.leave()
            });
        }).catch(err => console.log(err));
    }
    else if (command === 'listmeme' || command === 'l') {
        fs.readdir('/home/discordmemesSf/public/uploads/mp3/', function (err, files) {
            if (err) {
                return message.channel.send('Unable to scan directory: ' + err);
            }
            files.forEach(function (file) {
                message.channel.send(file);
            });
        });
    }

});

client.login(config.token);
