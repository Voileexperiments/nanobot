module.exports = function(app) {
    var module = {};
    //Basic, simple commands
    module.getResponse = function (msg) {
        app.request('https://raw.githubusercontent.com/panzertigervi/nanobot/master/commands.txt', function(error, response, body) {

            if (!error && response.statusCode == 200) {
                var string = body;
                var commands = body.split("\n");
                var i = 0;
                var m  = "";

                while (i < commands.length) {
                    //commands in the file are formated as so
                    //.command;[req. inputs];[text split up by said inputs]
                    //bracketed are split up by : for multiple inputs
                    //~ indicates no contents.
                    var command = commands[i].split(";");
                    
                    if ((msg.content.startsWith(".") && msg.content.includes(command[0])) || (msg.content.includes(command[0]) && command[0].indexOf(".") == -1)) {
                        if (command[1] == "@") {
                            m = command[2];
                            var n = msg.content.split(" ");

                            if (msg.mentions.length > 0) {
                                if (app.pingon)
                                    m = m.replace("@", msg.mentions[0]);
                                else
                                    m = m.replace("@", msg.mentions[0].username);
                            }
                            else {
                                nick = "";

                                for (var i = 1; i < n.length; i++)
                                    nick += n[i] + " ";

                                m = m.replace("@", nick);
                            }
                                
                                
                                

                                //var split = command[2].toString().split("@"); 
                               // var s = split[0] + msg.mentions[0] + split[1];
                            app.message(msg, command[0], m);
                            return;        
                        }
                        else if (command[1] == "@@") {
                            if (app.pingon)
                                m = command[2].replace("@", msg.author.username);
                            else
                                m = command[2].replace("@", msg.author.username);

                            app.message(msg, command[0], m);
                        }

                        else if (command[1] == "~") {
                            app.message(msg, command[0], command[2]);
                            return;
                        }
                        else if (command[1] == "*") {
                            var words = command[2].split(":");
                            var properMessage = 1;

                            for (var j = 0; j < words.length; j++) {
                                var yN = words[j].substring(0,1);
                                var word = words[j].substring(1,words[j].length);

                                console.log(yN);

                                if (yN == "=") {
                                    if (!msg.content.includes(word))
                                        properMessage = 0;
                                }
                                else {
                                    if (msg.content.includes(word))
                                        properMessage = 0;
                                 }

                            }

                            if (properMessage)
                                app.message(msg, command[0],command[3]);

                        }
                    }

                    i++;
                    }
            }
        });
    
        //message(msg, "error", "S-sorry, that's not a valid requst.:c");

       // if (msg.content.toLowerCase().includes("nano") && msg.content.toLowerCase().includes("best girl") && !msg.content.toLowerCase().includes("not")) {
    //        app.message(msg, "bestgirl", "T-Thank you! I just want to help!");
    //    }
        if (msg.content.startsWith(".help")) {
            _help(msg, app);
        }
        if (msg.content.startsWith(".waifu")) {
            _randomWaifu(msg, app);
        }
  
        if (msg.content.startsWith(".q")) {
            _ult(msg, app);
        }

    };


    //More Complex Commands
    module.complexCommands = function (msg) {

    };

    return module;
};

//grabs a random waifu
function _randomWaifu(msg, app) {
    app.request('https://raw.githubusercontent.com/panzertigervi/nanobot/master/waifus.txt', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var string = body;
            var waifu = body.split("\n")[Math.floor(Math.random() * body.split("\n").length)];
            var blush = "";

            if (waifu.toLowerCase() =="nano") {
                blush = "\n Hey that's me! *blushes*";
            }

            app.message(msg, "waifu", "Your waifu is " + waifu + "!" + blush);
        }
    });
}

//Handles quote requests
function _ult(msg, app) {
    var q = "error";
    switch (Math.floor(Math.random() * 12) + 1) {
        case 1:
            q = "**SQUISH! SQUISH! SQUISH!!!**";
            break;
        case 2:
            q = "**SAN-DAL DOWN!**";
            break;
        case 3:
            q = "**TINIES NEVER DIE!**";
            break;
        case 4:
            q = "**TINIES IN THE HOLE!**";
            break;
        case 5:
            q = "**SQUISHES RAIN FROM ABOVE!**";
            break;
        case 6:
            q = "**N-NERF THIS!!!**";
            break;
        case 7:
            q = "**OH LET'S DROP THE SQUISH!**";
            break;
        case 8:
            q = "*points to mouth* **GET IN THERE!**";
            break;
        case 9:
            q = "**PASS INTO THE ANUS**";
            break;
        case 10:
            q = "**TIMES UP**";
            break;
        case 11:
            q = "**BEEP BEEP BA-BEEP!!!**";
            break;
        case 12:
            q = "**IT'S HIGH NOOOOOOOOOOOOOON >:c**";
            break;
        default:
    }
    app.message(msg,"ultquote", q);
}

function _help(msg, app){
     app.request('https://raw.githubusercontent.com/panzertigervi/nanobot/master/help.txt', function(error, response, body) {
         if (!error && response.statusCode == 200) {
             app.message(msg, "help", body);
         }
     });
}

function _shrinkGrowHandler(msg, app){

}
