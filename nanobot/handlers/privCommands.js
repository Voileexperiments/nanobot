module.exports = function(app) {
    var module = {};
    module.getResponse = function(msg){
        if(msg.content.startsWith(".setclear")){
            if (app.isNumeric(msg.content.split(" ")[1])) {
                app.cleartime = msg.content.split(" ")[1];
                app.message(msg, "setclear", "Clear time has been set to " + app.cleartime + " seconds");
            }
        }
    };
    
    return module;
};
