

exports.commandSaver = function(prefix, commandName, channelID, commandMessageID, TOKEN){
  const Discord = require('discord.js');
  const client = new Discord.Client();
  const clean = text => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
    console.log("Comando cargado: ", commandName)
    client.on("message", msg => { 

        if (msg.author.bot) return; 
        if (msg.content.startsWith(prefix+commandName)) { 
          const checkerChannel = client.channels.cache.get(channelID)
          checkerChannel.messages.fetch(commandMessageID).then(ScriptValor => {
            const ScriptValue = ScriptValor
            console.log(ScriptValue.content)
            try {
              
              const code = ScriptValue.content
              let evaled = eval(code);
        
              if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
                var Evaluado = evaled.replace("Promise { <pending> }", " ");
                
              return;
            } catch (err) {
              msg.channel.send(`\`Error :(\` \`\`\`xl\n${clean(err)}\n\`\`\``);
              return;
            }

          }).catch(Error => {
            console.error(Error)
          })
    


        }
      
      }); 
      
      client.login(TOKEN);

}

