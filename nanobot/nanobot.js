//test me baby noch einmal
//this is a test
//this is a second test
var Discord = require("discord.js");
var request = require('request');
var googleTranslate = require('google-translate')("AIzaSyBaVwET_J2d0YTSUV1R-AQ-ke7M2vqXKPc");
var bot = new Discord.Client();
var height = 0;
var tinies = [];
var tlist = [];
var ignoreList = [];
var mute = [];
var logs = [];

bot.on("message", msg => {
    basicCommands(msg);
    interrupt(msg);
    shrinkGrowHandler(msg);
    complexCommands(msg);
});

function complexCommands(msg) {
    if (msg.content.startsWith(".translate")) {
        translateMessage(msg);
    }
    if (msg.content.startsWith(".mute")) {
        message(msg, "mute", "O-Okay! I'm muted on this server!");
        mute[mute.length] = {
            server: msg.server
        };
    }
    if (msg.content.startsWith(".flip")) {
        flipCoin(msg);
    }
    if (msg.content.startsWith(".roll") && !msg.content.startsWith(".rollcake")) {
        rollDice(msg);
    }
}

function basicCommands(msg) {
    if (msg.content.startsWith(".ping")) {
        message(msg, "ping", "pong!");
    }
    if (msg.content.startsWith(".squish <@")) {
        message(msg, "squish", "A-Alright! Better watch out, " + msg.mentions[0] + " I'm gonna squish you!!!");
    }
    if (msg.content.startsWith(".insert <@")) {
        message(msg, "insert", "That's so l-lewd! :flushed: Uhm... Okay then, " + msg.mentions[0] + " I'm gonna... You know.");
    }
    if (msg.content.startsWith(".nom <@")) {
        message(msg, "nom", "Mmm you're right! " + msg.mentions[0] + " Does look tasty! I'll just nom them right now!");
    }
    if (msg.content.startsWith(".bind <@")) {
        message(msg, "nom", "U-Uhmm I'm not sure how much chest support " + msg.mentions[0] + " can give, but I'll tie them up I-I guess!");
    }
    if (msg.content.startsWith(".rollcake") && !msg.content.startsWith(".roll ")) {
        message(msg, "rollcake", msg.author+" Here you go!");
    }
    if (msg.content.startsWith(".wind")) {
        message(msg, "wind", "D-Don't touch that!");
    }
    if (msg.content.startsWith(".hello world")) {
        message(msg, "helloworld", "Uhm... That's not very nice. Please don't say that or you'll get the squish :c");
    }
    if (msg.content.startsWith(".pout")) {
        message(msg, "pout", "*hmph!*");
    }
    if (msg.content.includes("execute order 69")) {
        message(msg, "order", "*drops pants* >///< uhm... this is kinda awkward, " + msg.author + ", but climb on in!");
    }
    if (msg.content.toLowerCase().includes("nano") && msg.content.toLowerCase().includes("best girl")) {
        message(msg, "bestgirl", "T-Thank you! I just want to help!");
    }
    if (msg.content.startsWith(".help")) {
        message(msg, "help", "**Hello, I'm Nano! I'll be your /size assistant today!**\n\n**Commands**\n`.grow` grows me!\n`.shrink` shrinks me!\n`.shrink @target` shrinks the target\n`.squish` Squishes the target!\n`.insert` th-thats lewd!\n`.pout` Makes me pout :c\n\n**I also have other commands, but those are secrets, you'll see though!**");
    }
    if (msg.content.startsWith(".waifu")) {
        randomWaifu(msg);
    }
    if (msg.content.startsWith(".sad") || includeMultiple(["feeling sad", "feeling kinda sad"], msg.content)) {
        message(msg, "sad 1800", "Listen to this: https://www.youtube.com/watch?v=YkGJmFjfx6Q");
    }
    if (msg.content.startsWith(".omnic")) {
        message(msg, "omnic 1800", "Is this Omnic Crisis?!? https://youtu.be/rVlhMGQgDkY?t=83")
    }
    if (msg.content.startsWith(".harambe")) {
        message(msg, "harambe 600", ":( :( :(");
    }
    if (msg.content.startsWith(".lamulana")) {
        message(msg, "lamulana 600", "The mother of all civilizations lies in La Mulana!")
    }
    if (msg.content.startsWith(".q")) {
        ult(msg);
    }
    if (msg.content.startsWith("intro")) {
        bot.sendMessage(msg, "<System Start>\nHello! I'm Nano, you're automatic /size discord assistant! I can grow, shrink, squish, and much more!\nType ``.help` for assistance!");
    }
    if (msg.content.startsWith(".bug")) {
        message(msg, "bug", "Who's a cute wittle buggy? You are " + msg.author + "!");
    }
}

function interrupt(msg) {
    if (msg.content.toLowerCase().startsWith(".ignoreme")) {
         console.log("IGNORE COMMAND");
        ignoreUser(msg);
    }
    if (ignoreList.indexOf(msg.author) != -1) {
        return
    }
    if (msg.content.startsWith("ur mom")) {
        message(msg, "urmom 30", "oooooooooooooooooooooooooooooooo\n#gotem");
    }
    if (includeMultiple(["dick", "penis", "weiner", "pussy"], msg.content)) {
        message(msg, "lewd 15", "l-lewd!");
    }
    if (includeMultiple(["nigga", "nigger"], msg.content)) {
        message(msg, "nigga 30", "Th-thats not very nice!");
    }
    if (includeMultiple(["katelyn brooks", "media impact", "3dpd"], msg.content)) {
        message(msg, "littleman 30", "Y-You like that little man?");
    }
    if (msg.content.toLowerCase().includes("navy seal")) {
        message(msg, "navyseal 600", "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in Shrink High, and I’ve been involved in numerous secret raids on tinies, and I have over 300 squishes. I am trained in size warfare and I’m the top smusher in the entire Academy. You are nothing to me but just another bug. I will crush out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of big girls across the glove and your IP is being traced right now so you better prepare for the squish, buggy. The squish that wipes out the pathetic little thing you call your life. You’re fucking dead, bug. I can be anywhere, anytime, and I can smush you in over seven hundred ways, and that’s just with my bare feet. Not only am I extensively trained in foot smush, but I have access to the entire arsenal of size tags and I will use it to its full extent to wipe your miserable butt off the face of the floor, you tiny little speck. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have scurried back into your mouse hole. But you couldn’t, you didn’t, and now you’re paying the price, you baka. You’re fucking dead, buggy.")
    }
    if (msg.content.toLowerCase().includes("nichijou")) {
        message(msg, "nichijou 30", "That's my show :D");
    }
    if (msg.content.toLowerCase().includes("g'night") || msg.content.toLowerCase().includes("good night")) {
        message(msg, "goodnight 60", "Nighty night " + msg.author + "!");
    }
    if (msg.content.includes("doggo")) {
        message(msg, "doggo", "Woof! Woof!")
    }
    if(msg.content.toLowerCase().includes("its alright its okay")){
         message(msg,"alright","I don't need you anyways\nYou don't have to tell the truth,\nCause if you do I'll tell it too.\nOh, I'll tell it too.https://www.youtube.com/watch?v=Tposx9_DNgo");
    }
    if(includeMultiple(["jew","israel"], msg.content)){
         message(msg, "jew 30", "Oy Vey!");
    }
    if(includeMultiple(["can poland into space?"], msg.content)){
         message(msg, "poland 600", "Poland can into space :D");
    }
    if(includeMultiple(["to be continued"], msg.content)){
         message(msg, "tobecontinued 600", "??? https://www.youtube.com/watch?v=-Tdu4uKSZ3M");
    }
    if(msg.content.toLowerCase().startsWith(".skycode")){
         message(msg, "skycode", "¿Quién es Sombra?");
    }
    if (msg.content.toLowerCase().includes("nano") && !msg.content.includes("best girl") && !msg.content.includes("Hello, I'm Nano!")) {
        if (msg.author  == "@Nano") {
            message(msg, "nano", "That's me!");
        }
    }
}

function shrinkGrowHandler(msg) {
    if (msg.content.startsWith(".grow")) {
        var multiplier = 1;
        if (isNumeric(msg.content.split(" ")[1])) {
            multiplier = msg.content.split(" ")[1];
        }
        if (height == 5) {
            height = 0;
        }
        height += 10 * multiplier;
        growManager(msg);
    }
    if (msg.content.startsWith(".shrink <@")) {
        shrink(msg);
    } else {
        if (msg.content.startsWith(".shrink")) {
            var multiplier = 1;
            if (isNumeric(msg.content.split(" ")[1])) {
                multiplier = msg.content.split(" ")[1];
            }
            height -= 10 * multiplier;
            if (height <= 0) {
                height = 5;
            }
            message(msg, "shrink", "H-help! I'm shrinking! I'm now " + height + " feet tall!\n");
        }
    }
    if (msg.content.includes("execute order 66") || msg.content.startsWith(".kill")) {
        killEveryone(msg);
    }
}

function growManager(msg) {
    var m = "";
    switch (height) {
        case 10:
            m = "Ouch! I hit the roof :c";
            break;
        case 20:
            m = "Wow, I'm as tall as a house!";
            break;
        case 30:
            m = "I wonder how big I can go!";
            break;
        case 50:
            m = "Y-You better watch out!";
            break;
        case 70:
            m = "Y-you can't stop me at this size! I'm so big I could just, uh, eat you all up!";
            break;
        case 100:
            m = "Woah! I can see the city just standing right here!";
            break;
        case 130:
            m = "Wow! I'm bigger than the Statue of Liberty!";
            break;
        case 1200:
            m = "I'm as big as a skyscraper!"
        default:
            break;
    }
    message(msg, "grow", "G-Grow? Okay! I'm now " + height + " feet tall!\n" + m);
}

bot.on("ready", () => {
    console.log(`Ready to begin! Serving in ${bot.channels.length} channels`);
    bot.sendMessage("<System Start>\nHello! I'm Nano, you're automatic /size discord assistant! I can grow, shrink, squish, and much more!\nType ``.help` for assistance!");
    bot.setPlayingGame("Super Nano GTS Land", function(error){});
});

bot.on("disconnected", () => {
    console.log("Disconnected! Seeya!");
    process.exit(1); //exit node.js with an error
});

function includeMultiple(a, msg) {
    for (var i = 0; i < a.length; i++) {
        if (msg.toLowerCase().includes(a[i])) {
            return true;
        }
    }
    return false;
}

function shrink(msg) {
    console.log("shrinking " + msg.mentions[0]);
    var t = "";
    for (var q = 0; q < msg.mentions.length; q++) {
        var s = true;
        if (tinies.length > 0) {
            for (var i = 0; i < tinies.length; i++) {
                if (tinies[i] == msg.mentions[q]) {
                    bot.sendMessage(msg, "I-I'm sorry, but that person's already a tiny :c");
                    s = false;
                }
            }
        }
        if (s) {
            tinies[tinies.length] = msg.mentions[q];
            t=t+"Shrink! " + msg.mentions[q] + " is tiny now c:\n";
        }
    }
    message(msg, "shrink", t);
}

function killEveryone(msg) {
    request('https://raw.githubusercontent.com/panzertigervi/nanobot/master/nanobot/kill.txt', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("executing order 66 " + tinies.length);
            m = "There's no tinies left to squish!";
            if (tinies.length > 0) {
                m = "O-Okay! I'll squish them all!\n";
                for (var i = 0; i < tinies.length; i++) {
                    var t = tinies[i];
                    m = m + body.split("\n")[Math.floor(Math.random() * body.split("\n").length)].replace("<t>", t) + "\n";
                }
            }
            message(msg, "kill", m);
            tinies = [];
        }
    });
}

function ignoreUser(msg) {
    if (ignoreList.indexOf(msg.author) != -1) {
         ignoreList.splice(ignoreList.indexOf(msg.author), 1);
         message(msg, "interrupt", "I'll **start** interrupting you now, " + msg.author + "!");
    } else {
        ignoreList[ignoreList.length] = msg.author;
        message(msg, "interrupt", "I'll **stop** interrupting you now, " + msg.author + "! Type .ignoreme again to start again!");
    }
    console.log("boom "+ignoreList.length);
}

function ult(msg) {
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
    message(msg, "ultquote", q);
}

var translatetimers = [];

function translateMessage(msg) {
    var toTranslate = msg.content.slice(10);
    if (toTranslate.length > 200) {
        message(msg, "limittranslate", "I'll only translate things 200 characters or less!");
    } else {
        for (var i = 0; i < translatetimers.length; i++) {
            if (translatetimers[i].author == msg.author) {
                if (Date.now() - tlist[i].timestamp < (1000 * 30)) {
                    message(msg, "timelimittranslate", "I'm sorry but you can only translate once every 30 seconds");
                    return;
                } else {
                    translatetimers.splice(i, 1);
                }
            }
        }
        translatetimers[translatetimers.length] = {
            author: msg.author,
            time: Date.now()
        };
        googleTranslate.translate(toTranslate, 'ja', 'en', function(err, translation) {
            if (err) {
                console.log(err);
                message(msg, "errortranslate", "An Error occured during translation! Check the logs");
            } else {
                message(msg, "translate 30", "Translation: " + translation.translatedText);
            }
        });
    }
}

//message is a custom message handler
function message(msg, command, s, pm) {
    cleanuppre(msg);
    for (var i = 0; i < mute.length; i++) {
        if (mute[i].server == msg.server) {
            console.log("muted");
            return;
        }
    }
    if (!pm) {
        pm = false;
    }
    var multiplier = 2;
    if (isNumeric(command.split(" ")[1])) {
        multiplier = command.split(" ")[1];
    }
    console.log("time: " + Date.now() + " user: " + msg.author + " command: " + command + " pm: " + pm);
    for (var i = 0; i < tlist.length; i++) {
        if (msg.author == tlist[i].author && command == tlist[i].command) {
            if (Date.now() - tlist[i].timestamp > (1000 * multiplier)) {
                bot.sendMessage(msg, s);
                tlist[i].timestamp = Date.now();
                return;
            } else {
                return;
            }
        }
    }
    tlist[tlist.length] = {
        author: msg.author,
        timestamp: Date.now(),
        command: command
    };
    bot.sendMessage(msg, s);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function randomWaifu(msg) {
    request('https://raw.githubusercontent.com/panzertigervi/nanobot/master/nanobot/waifus.txt', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            string = body;
            var waifu = body.split("\n")[Math.floor(Math.random() * body.split("\n").length)];
            var blush = "";

            if (waifu.toLowerCase() =="nano") {
                blush = "\n Hey that's me! *blushes*";
            }

            message(msg, "waifu", "Your waifu is " + waifu + "!" + blush);

        }
    });
}

function flipCoin(msg) {
    if (Math.floor((Math.random() * 2) + 1) == 1) {
        message(msg, "flip", "Heads!")
    } else {
        message(msg, "flip", "Tails!");
    }
}

function rollDice(msg) {
    var num = msg.content.slice(6);
    if (isNumeric(num)) {
        message(msg, "roll", "You rolled a " + Math.floor((Math.random() * parseInt(num)) + 1));
    } else {
        message(msg, "rollfailed", "Invalid Format! Please use '!roll [num]")
    };
}

function cleanuppre(msg){
     bot.getChannelLogs(msg.channel, 10, {around:msg}, function(error, messages){
          for(var l = 0; l<messages.length;l++){
               logs[logs.length]=messages[l];
          }
          console.log("added " + messages.length);
     });
}

function cleanup(msg){
     for(var l = 0; l<logs.length; l++){
          if(!okaymessages(logs[l])){
               if(logs[l].author.id == bot.user.id){
                    bot.deleteMessage(logs[l]);
                    logs.splice(logs.indexOf(logs[l]),1);
               }else{
                    logs.splice(logs.indexOf(logs[l]),1);
               }
          }
     }
}
setInterval(cleanup, 1 * 1000);

function okaymessages(log){
     var s = log.content;
     if(Date.now()-log.timestamp<=30*1000){
          return true;
     }
     if(s.includes("squish them all!")){
          return true;
     }
     return false;
}

bot.loginWithToken("MjE3MzM1NjEzMzAzNTU0MDQ4.Cp518g.j6oFZhzTXGHfQw3XetGpqiQdUA0");
