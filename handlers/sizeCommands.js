module.exports = function(app) {
    var module = {};
    module.getResponse = function(msg){
        //shrinks a user
        function shrink() {
            //console.log("shrinking " + msg.mentions[0].username);
            var t = "";

            var index = msg.content.indexOf(" ");
            var m = msg.content.substring(index+1, msg.content.length);
            var n = m.split(";");
            var s = true;

            if (index != -1) {
                for (var q = 0; q < n.length; q++) {                    
                    console.log(n[q], s);

                    if (app.tinies.length > 0) {
                        for (var i = 0; i < app.tinies.length; i++) {
                            if (app.tinies[i] == n[q]) {
                                t = t+"I-I'm sorry, but that person's already a tiny :c\n";
                                s = false;
                            }
                        }
                    }
                    if (s) {
                        app.tinies[app.tinies.length] = n[q];
                        t=t+"Shrink! " + n[q] + " is tiny now c:\n";
                    }

                    s = true;
                }
                app.message(msg, "shrink", t);
            }   
        }

        //specific function for handling growing, and the messages related to it
        function growManager() {
            var m = "";
            switch (app.height) {
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
                    m = "I'm as big as a skyscraper!";
                    break;
                default:
                    break;
            }
            app.message(msg, "grow", "G-Grow? Okay! I'm now " + app.height + " feet tall!\n" + m);
        }

        //kills all tinies
        function killEveryone() {
            app.request('https://raw.githubusercontent.com/panzertigervi/nanobot/master/kill.txt', function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("executing order 66 " + app.tinies.length);
                    m = "There's no tinies left to squish!";
                    if (app.tinies.length > 0) {
                        m = "O-Okay! I'll squish them all!\n";
                        for (var i = 0; i < app.tinies.length; i++) {
                            var t = app.tinies[i];
                            m = m + body.split("\n")[Math.floor(Math.random() * body.split("\n").length)].replace("<t>", t) + "\n";
                        }
                    }
                    app.message(msg, "kill", m);
                    app.tinies = [];
                }
            });
        }

        var multiplier;

        var messageSplit = msg.content.split(" ");

        if (messageSplit[0] == ".grow") {
            multiplier = 1;
            if (app.isNumeric(msg.content.split(" ")[1])) {
                multiplier = msg.content.split(" ")[1];
            }
            if (app.height == 5) {
                app.height = 0;
            }
             
            if (app.height == 105600) {
                app.message(msg, "grow", "I'm already twenty miles tall! I'm not going to grow anymore.");
            }
            else if (app.height + 10* multiplier <= 105600) {
                app.height += 10 * multiplier;
                growManager(msg);
            }
            else {
                app.height = 105600;
                app.message(msg, "grow", "Twenty miles is tall enough I think!")
            }
        }
        if (messageSplit[0] == ".shrinkme") {
                multiplier = 1;
                if (app.isNumeric(msg.content.split(" ")[1])) {
                    multiplier = msg.content.split(" ")[1];
                }
                app.height -= 10 * multiplier;
                if (app.height <= 0) {
                    app.height = 5;
                }
                app.message(msg, "shrink", "H-help! I'm shrinking! I'm now " + app.height + " feet tall!\n");
            }
        else if (messageSplit[0] == ".shrink")
            shrink(msg);

        if (msg.content.includes("execute order 66") || msg.content.startsWith(".kill")) {
            killEveryone(msg);
        }

    };

    return module;
};
