var Discord = require("discord.js");
var _googleTranslate = require('google-translate')("AIzaSyBaVwET_J2d0YTSUV1R-AQ-ke7M2vqXKPc");
var _request = require('request');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var logs = []; //cached messages for clean up
var userIgnore = [];

var app = {
    googleTranslate: _googleTranslate,
    request: _request,
    bot: new Discord.Client(),
    mute: [], //list of servers Nano's muted on
    tlist: [],
    tinies: [],  //list of tinies
    translateTimers: [], //timers showing the last time someone has used the translate commands
    ignoreList: [],
    height: 0,
    cleartime: 3600,
    includeMultiple: _includeMultiple,
    message: _message,
    isNumeric: _isNumeric,
    ignoreUser: _ignoreUser
};

//app variable is ready, include our commands
var basicCommands = require("./handlers/basicCommands.js")(app);
var complexCommands = require("./handlers/complexCommands.js")(app);
var interruptCommands = require("./handlers/interruptCommands.js")(app);
var privCommands = require("./handlers/privCommands.js")(app);
var sizeCommands = require("./handlers/sizeCommands.js")(app);

//message recieved handler
app.bot.on("message", msg => {

    var test = _checkping(msg);
    console.log(test);


    //if (!test) {
        basicCommands.getResponse(msg); //basic commands
        complexCommands.getResponse(msg); //memes
        interruptCommands.getResponse(msg); //more invovled commands
        privCommands.getResponse(msg); //commands that require a special role to activate
        sizeCommands.getResponse(msg); //commands related to growing and shrinking
    //}
    //else
      //  app.bot.sendMessage("That user wishes to not be pinged.");

    if (msg.content.startsWith(".gelbooru")) {
         _gelbooru(msg,app);
    }
});


//ready handler
app.bot.on("ready", () => {
    console.log(`Ready to begin! Serving in ${app.bot.channels.length} channels`);
    app.bot.sendMessage(app.bot.channels[0], "Hello! I'm Nano, you're automatic /size discord assistant! I can grow, shrink, squish, and much more!\nType `.help` for assistance!");
    app.bot.setPlayingGame("Super Nano GTS Land", function(error){});

    app.request("https://raw.githubusercontent.com/panzertigervi/nanobot/master/pinglist.txt", function (error, response, body) {
        var text = body;
        userIgnore = text.split("\n");
    })
});

//disconnected handler
app.bot.on("disconnected", () => {
    console.log("Disconnected! Seeya!");
    process.exit(1); //exit node.js with an error
});



//message is a custom message handler
//msg - the msg object
//command - a command, used for distinguishing between timeouts, is in the format command or command #, # being the seconds for timeout
//s - the message text
//pm - whether to make this a pm (not implemented yet)
function _message(msg, command, s, pm) {
    _cleanuppre(msg);
    for (var i = 0; i < app.mute.length; i++) {
        if (app.mute[i].server == msg.server) {
            console.log("muted");
            return;
        }
    }
    if (!pm) {
        pm = false;
    }
    var multiplier = 2;
    if (_isNumeric(command.split(" ")[1])) {
        multiplier = command.split(" ")[1];
    }
    console.log("time: " + Date.now() + " user: " + msg.author + " command: " + command + " pm: " + pm);
    for (var i = 0; i < app.tlist.length; i++) {
        if (msg.author == app.tlist[i].author && command == app.tlist[i].command) {
            if (Date.now() - app.tlist[i].timestamp > (1000 * multiplier)) {
                app.bot.sendMessage(msg, s);
                app.tlist[i].timestamp = Date.now();
                return;
            } else {
                return;
            }
        }
    }
    app.tlist[app.tlist.length] = {
        author: msg.author,
        timestamp: Date.now(),
        command: command
    };
    app.bot.sendMessage(msg, s);
}

//messages that should not be cleaned up - those of which their time isn't expired or an approved message to stay forever
function _okaymessages(log){
    var s = log.content;
    if(Date.now()-log.timestamp<= app.cleartime*1000){
        return true;
    }
    if(s.includes("squish them all!")){
        return true;
    }
    if (s.includes("gelbooru")) {
        return true;
    }

    return false;
}

//start or stop responding to the selected user
function _ignoreUser(msg) {
    if (app.ignoreList.indexOf(msg.author) != -1) {
        app.ignoreList.splice(app.ignoreList.indexOf(msg.author), 1);
        _message(msg, "interrupt", "I'll **start** interrupting you now, " + msg.author + "!");
    } else {
        app.ignoreList[app.ignoreList.length] = msg.author;
        _message(msg, "interrupt", "I'll **stop** interrupting you now, " + msg.author + "! Type .ignoreme again to start again!");
    }
    console.log("boom " + app.ignoreList.length);
}

//for easy multiple triggers, this is an include so it will be if these words are ANYWHERE in the message, also not case sensitive
function _includeMultiple(a, msg) {
    for (var i = 0; i < a.length; i++) {
        if (msg.toLowerCase().includes(a[i])) {
            return true;
        }
    }
    return false;
}

//checks whether the given number is numeric
function _isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}


//clean up commands - do not touch
//pre function to fill the log
function _cleanuppre(msg){
     app.bot.getChannelLogs(msg.channel, 20, {around:msg}, function(error, messages){
          for(var l = 0; l<messages.length;l++){
               logs[logs.length]=messages[l];
          }
     });
}

//main cleanup loop
function _cleanup(msg){
     for(var l = 0; l<logs.length; l++){
          if(!_okaymessages(logs[l])){
               if(logs[l].author.id == app.bot.user.id){
                    app.bot.deleteMessage(logs[l]);
                    logs.splice(logs.indexOf(logs[l]),1);
               }else{
                    logs.splice(logs.indexOf(logs[l]),1);
               }
          }
     }
}

function _gelbooru (msg, a) {
    var tags = msg.content.split(" ");
    var baseGelbooru = 'http://gelbooru.com/index.php?page=dapi&s=post&q=index&limit=100&tags=insert1'
    var newLink = baseGelbooru.replace("insert1" , tags[1]);
    var limit = 100;
    var error = "Sorry, I couldn't find what you asked for. :<"

   app.request(newLink, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body) // Show the HTML for the Google homepage.

            var response = body;
            var htmls = [];
            var index = response.indexOf("file_url");
            var i = 0;

            //if (index == -1) {
           //     _message(msg, "gelbooru", error);
           // }


            while (index != -1) {
                index = index + 10;

                var index2 = index;
                
                while (response[index2] != '"')
                    index2++;

                htmls[i] = response.substring(index,index2);
                response = response.substring(index2, response.length -1);
                //console.log(response.length);
                //console.log(htmls[i]);
                index = response.indexOf("file_url");
                i++;
            }

            var r = Math.floor(Math.random() * htmls.length);
            _message(msg, "gelbooru", htmls[r]);   

        } 

    })
}


function _checkping (msg) {
    var found = false;

    for (var i = 0; i < userIgnore.length; i++) {
        console.log(userIgnore[i]);


        if (msg.content.includes(userIgnore[i]) == true) {
            found = true;
        }

    }

    console.log(found);
    return found;
}





setInterval(_cleanup, 1 * 1000);

app.bot.loginWithToken("MjIyNzA3NDkzMDk1MDc5OTM3.CrBZHA.9Rti8fecHLL2Jk6JGXcC7irfT0Y");
