const Discord = require('discord.js');
const client = new Discord.Client();
const reducer = require("./commands/reducer");

const prefix = "-";

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift();
    if (typeof reducer[command] === "function") {
        reducer[command]({ message });
    }
});

client.login('ODYzODA4NzMyNTA4NDU0OTUy.YOsSkg.1S4f9NVBvte9JXRBebkervoYjp8');