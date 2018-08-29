const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
	console.log(`Nairie\'s first bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.user.setActivity(`>w<`);
});

client.on("message", async message => {
	if(message.author.bot) return;
	if(message.content.indexOf(config.prefix) !== 0) return;
	//this makes the bot ignore other bots and messages that don't begin with the assigned prefix

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	//this makes commands non-case sensitive

	if(command === "ping") {
	const m = await message.channel.send("Ping?");
	m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API latency is ${Math.round(client.ping)}ms`);
	}
	//checks the ping between you and the discord server

	if(command === "say") {
	const sayMessage = args.join(" ");
	message.delete().catch(o_o=>{});
	message.channel.send(sayMessage);
	}
	//makes the bot say something

	if(command === "repeat") {
	const sayMessage = args.join(" ");
	message.channel.send(sayMessage);
	}
	//bot repeats after you

	if(command === 'good morning') {
	message.channel.send("Good morning!! >w<");
	}

	if(command === 'good afternoon') {
	message.channel.send("Good afternoon!! >w<");
	}

	if(command === 'good evening') {
	message.channel.send("Good evening!! >w<");
	}

	if(command === 'good night') {
	message.channel.send("Good night, sweet dreams!! uwu");
	}

	if(command === 'hi') {
	message.channel.send("Hi there!! owo");
	}

	if(command === 'motivate') {
	message.channel.send("You can do it!! c:");
	}

});

client.login(config.token);