module.exports = function(app) {
    var module = {};
    module.getResponse = function(msg){
        if(msg.content.startsWith(".setclear") && securitycheck(app, msg)){
            if(!securitycheck(app, msg)) return;
            if (app.isNumeric(msg.content.split(" ")[1])) {
                app.cleartime = parseInt(msg.content.split(" ")[1]);
                app.message(msg, "setclear", "Clear time has been set to " + app.cleartime + " seconds");
            }
        }
        if (msg.content.startsWith(".mute")) {
            if(!securitycheck(app, msg)) return;
            app.message(msg, "mute", "O-Okay! I'm muted on this server!");
            app.mute[app.mute.length] = {
                server: msg.server
            };
        }
    };

    return module;
};

//security checks
function securitycheck(app, msg){
     var botmasters=[];
     for(var i = 0; i < app.bot.servers.length; i++){
         for(var r = 0; r < app.bot.servers[i].roles.length; r++){
              var s = app.bot.servers[i].roles[r].name;
              if(s=="Bot_Mechanic"||s=="Moderator"||s=="Bot Master"){
                  botmasters[botmasters.length]=app.bot.servers[i].roles[r].id;
                  console.log(botmasters.length);
              }
         }
     }
     var priv=false;
     for(var i = 0; i < botmasters.length; i++){
         if(app.bot.memberHasRole(msg.author, botmasters[i])){
              priv=true;
         }
     }
     if(!priv){
         console.log("priveledge failed!");
         return false;
    }
    console.log("priveledge passed!");
    return true;
}
