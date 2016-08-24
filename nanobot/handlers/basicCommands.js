
module.exports = function(app) {
    var module = {};
    //Basic, simple commands
    module.getResponse = function (msg) {
        if (msg.content.startsWith(".ping")) {
            app.message(msg, "ping", "pong!");
        }
        if (msg.content.startsWith(".squish <@")) {
            app.message(msg, "squish", "A-Alright! Better watch out, " + msg.mentions[0] + " I'm gonna squish you!!!");
        }
        if (msg.content.startsWith(".insert <@")) {
            app.message(msg, "insert", "That's so l-lewd! :flushed: Uhm... Okay then, " + msg.mentions[0] + " I'm gonna... You know.");
        }
        if (msg.content.startsWith(".nom <@") || msg.content.startsWith(".eat <@") || msg.content.startsWith(".vore <@")) {
            app.message(msg, "nom", "Mmm you're right! " + msg.mentions[0] + " Does look tasty! I'll just nom them right now!");
        }
        if (msg.content.startsWith(".bind <@")) {
            app.message(msg, "nom", "U-Uhmm I'm not sure how much chest support " + msg.mentions[0] + " can give, but I'll tie them up I-I guess!");
        }
        if (msg.content.startsWith(".rollcake") && !msg.content.startsWith(".roll ")) {
            app.message(msg, "rollcake", msg.author + " Here you go!");
        }
        if (msg.content.startsWith(".wind")) {
            app.message(msg, "wind", "D-Don't touch that!");
        }
        if (msg.content.startsWith(".hello world")) {
            app.message(msg, "helloworld", "Uhm... That's not very nice. Please don't say that or you'll get the squish :c");
        }
        if (msg.content.startsWith(".pout")) {
            app.message(msg, "pout", "*hmph!*");
        }
        if (msg.content.includes("execute order 69")) {
            app.message(msg, "order", "*drops pants* >///< uhm... this is kinda awkward, " + msg.author + ", but climb on in!");
        }
        if (msg.content.toLowerCase().includes("nano") && msg.content.toLowerCase().includes("best girl") && !msg.content.toLowerCase().includes("not")) {
            app.message(msg, "bestgirl", "T-Thank you! I just want to help!");
        }
        if (msg.content.startsWith(".help")) {
            app.message(msg, "help", "**Hello, I'm Nano! I'll be your /size assistant today!**\n\n**Commands**\n`.grow` grows me!\n`.shrink` shrinks me!\n`.shrink @target` shrinks the target\n`.squish` Squishes the target!\n`.insert` th-thats lewd!\n`.pout` Makes me pout :c\n\n**I also have other commands, but those are secrets, you'll see though!**");
        }
        if (msg.content.startsWith(".waifu")) {
            _randomWaifu(msg, app);
        }
        if (msg.content.startsWith(".sad") || app.includeMultiple(["feeling sad", "feeling kinda sad"], msg.content)) {
            app.message(msg, "sad 1800", "Listen to this: https://www.youtube.com/watch?v=YkGJmFjfx6Q");
        }
        if (msg.content.startsWith(".omnic")) {
            app.message(msg, "omnic 1800", "Is this Omnic Crisis?!? https://youtu.be/rVlhMGQgDkY?t=83")
        }
        if (msg.content.startsWith(".harambe")) {
            app.message(msg, "harambe 600", ":( :( :(");
        }
        if (msg.content.startsWith(".lamulana")) {
            app.message(msg, "lamulana 600", "The mother of all civilizations lies in La Mulana!")
        }
        if (msg.content.startsWith(".q")) {
            _ult(msg, app);
        }
        if (msg.content.startsWith("intro")) {
            app.message(msg, "<System Start>\nHello! I'm Nano, you're automatic /size discord assistant! I can grow, shrink, squish, and much more!\nType ``.help` for assistance!");
        }
        if (msg.content.startsWith(".bug")) {
            app.message(msg, "bug", "Who's a cute wittle buggy? You are " + msg.author + "!");
        }
    };
    

    //More Complex Commands
    module.complexCommands = function (msg) {

    };
    
    return module;
};

//grabs a random waifu
function _randomWaifu(msg, app) {
    app.request('https://raw.githubusercontent.com/panzertigervi/nanobot/master/nanobot/waifus.txt', function(error, response, body) {
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

function _shrinkGrowHandler(msg, app){

}