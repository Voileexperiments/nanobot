

module.exports = function(app) {
    var module = {};
    module.getResponse = function(msg){

        if (msg.content.startsWith(".flip")) {
            _flipCoin(msg, app);
        }
        if (msg.content.startsWith(".roll") && !msg.content.startsWith(".rollcake")) {
            _rollDice(msg, app);
        }
        if(msg.content.startsWith(".lsd")){
             _lsd(msg,app);
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

//flips a coin
function _flipCoin(msg, app) {
    if (Math.floor((Math.random() * 2) + 1) == 1) {
        app.message(msg, "roll","Heads!");
    } else {
        app.message(msg, "roll","Heads!");
    }
};

function _lsd(msg, app){
     var ascii = '';
     var chars = msg.content.slice(5);
     for(var i=0, l=chars.length; i<l; i++) {
          var c = chars[i].charCodeAt(0);
          c = c+0xFEE0;
          ascii += String.fromCharCode(c);
     }
     app.message(msg, "lsd", ascii);
}
