module.exports = function(app) {
    var module = {};
    module.getResponse = function(msg){
        if(msg.content.startsWith(".setclear") && _securityCheck(app, msg)){
            if(!_securityCheck(app, msg)) return;
            if (app.isNumeric(msg.content.split(" ")[1])) {
                app.cleartime = parseInt(msg.content.split(" ")[1]);
                app.message(msg, "setclear", "Clear time has been set to " + app.cleartime + " seconds");
            }
        }
        if (msg.content.startsWith(".mute")) {
            if(!_securityCheck(app, msg)) return;
            app.message(msg, "mute", "O-Okay! I'm muted on this server!");
            app.mute[app.mute.length] = {
                server: msg.server
            };
        }
    };
    return module;
};
