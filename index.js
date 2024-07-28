const Discord = require('discord.js');
const client = new Discord.Client()
const config = require('./config.json');
const axios = require("axios")
const fs = require("fs");
const process = require("process")

process.on('unhandledRejection', (error) => {
  console.error('Error no controlado:', error);
});

process.on('uncaughtException', (error) => {
  console.error('Excepción no capturada:', error);
});


client.on('ready', () => {
    console.log('Bot raid ready');
    process.title = `Username: ${client.user.username} | esta en: ${client.guilds.cache.size} Server(s) | Bot raid created by yiko`

    console.log(`
    
                                                        uuuuuuu
                                                     uu$$$$$$$$$$$uu
                                                  uu$$$$$$$$$$$$$$$$$uu
                                                 u$$$$$$$$$$$$$$$$$$$$$u
                                                u$$$$$$$$$$$$$$$$$$$$$$$u
                                               u$$$$$$$$$$$$$$$$$$$$$$$$$u
                                               u$$$$$$$$$$$$$$$$$$$$$$$$$u
                                               u$$$$$$"   "$$$"   "$$$$$$u
                                               "$$$$"      u$u       $$$$"
                                                $$$u       u$u       u$$$
                                                $$$u      u$$$u      u$$$
                                                 "$$$$uu$$$   $$$uu$$$$"
                                                  "$$$$$$$"   "$$$$$$$"
                                                    u$$$$$$$u$$$$$$$u
                                                     u$"$"$"$"$"$"$u
                                          uuu        $$u$ $ $ $ $u$$       uuu
                                         u$$$$        $$$$$u$u$u$$$       u$$$$
                                          $$$$$uu      "$$$$$$$$$"     uu$$$$$$
                                        u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$
                                        $$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"
                                         """      ""$$$$$$$$$$$uu ""$"""
                                                   uuuu ""$$$$$$$$$$uuu
                                          u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$
                                          $$$$$$$$$$""""           ""$$$$$$$$$$$"
                                           "$$$$$"                      ""$$$$""
                                             $$$"                         $$$$"
                                        
                                Ejecuta ${config.prefix}help para obtener ayuda de los comandos
     `)
});

const token = config.token
const prefix = config.prefix

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('Hay algun error en leer los comandos');
  }
});



client.login(token)