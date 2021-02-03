const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const Discord = require('discord.js');
const { createSingleCanvas } = require('./canvas');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    const embed = new Discord.MessageEmbed();
    const canvas = createSingleCanvas();
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "img.jpg");
    embed.attachFiles(attachment)
      .setImage("attachment://img.jpg");
    msg.channel.send(embed);
  }
});

client.login(process.env.DISCORD_TOKEN);