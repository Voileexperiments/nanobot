module.exports = function(app) {
    var module = {};
    module.getResponse = function(msg){
        if (msg.content.toLowerCase().startsWith(".ignoreme")) {
            console.log("IGNORE COMMAND");
            app.ignoreUser(msg);
        }
        if (app.ignoreList.indexOf(msg.author) != -1) {
            return
        }
        if (msg.content.startsWith("ur mom")) {
            app.message(msg, "urmom 30", "oooooooooooooooooooooooooooooooo\n#gotem");
        }
        if (msg.content.startsWith(".joy")) {
            app.message(msg, "joy", "Brad Neely's Harg Nallin Sclopio Peepio!")
        }
        //if (app.includeMultiple(["penis", "vagina"], msg.content)) {
         //   app.message(msg, "lewd 15", "l-lewd!");
       // }
       // if (app.includeMultiple(["nigger"], msg.content)) {
      //      app.message(msg, "nigga 30", "Th-thats not very nice!");
      //  }
        //if (app.includeMultiple(["katelyn brooks", "media impact", "3dpd"], msg.content)) {
      //      app.message(msg, "littleman 30", "Y-You like that little man?");
      //  }
        if (msg.content.toLowerCase().includes("navy seal")) {
            app.message(msg, "navyseal 600", "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in Shrink High, and I’ve been involved in numerous secret raids on tinies, and I have over 300 squishes. I am trained in size warfare and I’m the top smusher in the entire Academy. You are nothing to me but just another bug. I will crush out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of big girls across the glove and your IP is being traced right now so you better prepare for the squish, buggy. The squish that wipes out the pathetic little thing you call your life. You’re fucking dead, bug. I can be anywhere, anytime, and I can smush you in over seven hundred ways, and that’s just with my bare feet. Not only am I extensively trained in foot smush, but I have access to the entire arsenal of size tags and I will use it to its full extent to wipe your miserable butt off the face of the floor, you tiny little speck. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have scurried back into your mouse hole. But you couldn’t, you didn’t, and now you’re paying the price, you baka. You’re fucking dead, buggy.")
        }
        if (msg.content.toLowerCase().includes("nichijou")) {
            app.message(msg, "nichijou 30", "That's my show :D");
        }
        if (msg.content.toLowerCase().includes("goodnight") || msg.content.toLowerCase().includes("good night")) {
            app.message(msg, "goodnight 60", "Nighty night " + msg.author + "!");
        }
        if (msg.content.includes("doggo")) {
            app.message(msg, "doggo", "Woof! Woof!")
        }
        if (msg.content.toLowerCase().includes("its alright its okay")) {
            app.message(msg, "alright", "I don't need you anyways\nYou don't have to tell the truth,\nCause if you do I'll tell it too.\nOh, I'll tell it too.https://www.youtube.com/watch?v=Tposx9_DNgo");
        }
        if (app.includeMultiple(["jew", "israel"], msg.content)) {
            app.message(msg, "jew 30", "Oy Vey!");
        }
        if (app.includeMultiple(["can poland into space?"], msg.content)) {
            app.message(msg, "poland 600", "Poland can into space :D");
        }
        if (app.includeMultiple(["to be continued"], msg.content)) {
            app.message(msg, "tobecontinued 600", "??? https://www.youtube.com/watch?v=-Tdu4uKSZ3M");
        }
        if (msg.content.toLowerCase().startsWith(".skycode")) {
            app.message(msg, "skycode", "¿Quién es Sombra?");
        }
        if (msg.content.toLowerCase().includes("nano") && !msg.content.includes("best girl") && !msg.content.includes("Hello, I'm Nano!")) {
            if (msg.author == "@Nano") {
                app.message(msg, "nano", "That's me!");
            }
        }
    };

    return module;
};
