# Discommand-Save
Designed for Discord.js, for all developers.

¡Crea tus comandos desde un canal en un servidor de discord, modificalos, usalos!

Create your commands from a channel on a discord server, modify them, use them!
# How to Use Video.

# Description **::** Descripción

  - Discommand es fácil de usar, no ocupa espacio y hará que tus comandos sean fáciles, podrás inventarte miles de formas de hacer comandos ¡Sin entrar a tu espacio de trabajo! o ahorrandote espacio.
  
  - Discommand is easy, open your mind imagine everything you can do.


This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.


### Installation **::** Instalación

Install the npm with 
```sh
npm i discommand-save
```

### Primer Paso // First Step
```js
const discommand  = require('discommand-save');
```
# Spanish Setup
![Spain](https://cdn.discordapp.com/attachments/767000931745005618/767044432658694174/spanish.png) Una vez terminado el primer paso, usaremos el siguiente ejemplo para crear un comando.

```js
const Token = "TOKEN DE TU BOT";
discommand.commandSaver(prefix, nombreComando, idCanal, idMensajeScript, Token);
```
> En **token** introduciremos el token de tu bot, puedes ponerlo en forma de __String__ o mediante una __Variable__
> En **prefix** introduciremos el prefijo del comando, ejemplo **!**
> En **nombreComando** introduciremos el nombre del comando, ejemplo **test**
> En **idCanal** introduciremos la id del Canal donde este el mensaje del Script del comando **767000931745005618**
> En **idMensajeScript** introduciremos la id del Mensaje del Script del comando **767041413002297374**

Debería quedar algo así.
```js
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I";
discommand.commandSaver('!', 'test', '767000931745005618', '767041413002297374', Token);
```
Para ejecutar tu comando útiliza el **prefijo** + **Nombre del comando**, `!test`
`No soporta EVENTOS, solo comandos, no hace falta poner <client>.on, con esto ya funcionaria: msg.channel.send("¡Descargalo!")`

# English Setup
![English USA](https://cdn.discordapp.com/attachments/767000931745005618/767044431370649600/english.png) After the first step is finished, we will use the following example to create a command.

```js
const Token = "TOKEN OF YOUR BOT";
discommand.commandSaver(prefix, commandName, idChannel, idMessageScript, Token);
```
> In **token** enter the token of your bot, you can use __String__ or __Variable__
> In **prefix** enter the command prefix, example **!**
> In **commandName** enter the name of the comand, example **test**
> In **idChannel** introduce the id of the Channel where the command Script message is **767000931745005618**
> In **idMensajeScript** introduce the id of the Script Message of the command**767041413002297374**
It should look something like this.
```js
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I";
discommand.commandSaver('!', 'test', '767000931745005618', '767041413002297374', Token);
```
`DONT SUPPOR EVENTS, only commands, DONT use <client>.on, USE this example to make, code:              
msg.channel.send("Download!")`

# Possible Errors
Por limitaciones de Discord, **puede** que dentro de 14 días tu comando de error, esto no es culpa tuya ni del NPM, si esto pasa, simplemente reselecciona la ID del comando, algunas cosas para que no pasen esto es usar una base de datos.

Due to Discord limitations, **may** that within 14 days your command error, this is not your fault or the NPM, if this happens, simply reselect the ID of the command, some things so that this does not happen is to use a database.

# Support
 Support Server **::** https://discord.gg/CjZWhve
 Discord **::** https://discord.bio/p/nayra
 GitHub **::** https://github.com/xNayra