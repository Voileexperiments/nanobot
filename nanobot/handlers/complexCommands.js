

module.exports = function(app) {
    var module = {};
    module.getResponse = function(msg){

        if (msg.content.startsWith(".translate")) {
            _translateMessage(msg, app);
        }
        if (msg.content.startsWith(".flip")) {
            _flipCoin(msg, app);
        }
        if (msg.content.startsWith(".roll") && !msg.content.startsWith(".rollcake")) {
            _rollDice(msg, app);
        }

    };

    return module;
};

//Rolls a dice
function _rollDice(msg, app) {
    var num = msg.content.slice(6);
    if (app.isNumeric(num)) {
        app.message(msg,"roll","You rolled a " + Math.floor((Math.random() * parseInt(num)) + 1));
    } else {
        app.message(msg,"rollerror","Invalid Format! Please use '!roll [num]");
    }
}

//translates a given message from japanese to english
function _translateMessage(msg, app) {
    var toTranslate = msg.content.slice(10);
    if (toTranslate.length > 200) {
        app.message(msg,"limittranslate", "I'll only translate things 200 characters or less!");
    } else {
        //30 second limit
        for (var i = 0; i < app.translateTimers.length; i++) {
            if (app.translateTimers[i].author == msg.author) {
                if (Date.now() - app.tlist[i].timestamp < (1000 * 30)) {
                    app.message(msg, "timelimittranslate", "I'm sorry but you can only translate once every 30 seconds");
                } else {
                    app.translateTimers.splice(i, 1);
                }
            }
        }
        app.translateTimers[app.translateTimers.length] = {
            author: msg.author,
            time: Date.now()
        };
        app.googleTranslate.translate(toTranslate, 'ja', 'en', function(err, translation) {
            if (err) {
                console.log(err);
                app.message(msg,"errortranslate", "An Error occured during translation! Check the logs");
            } else {
                app.message(msg,"translate 30", "Translation: " + translation.translatedText);
            }
        });
    }
}

//flips a coin
function _flipCoin(msg, app) {
    if (Math.floor((Math.random() * 2) + 1) == 1) {
        app.message(msg, "roll","Heads!");
    } else {
        app.message(msg, "roll","Heads!");
    }
};
