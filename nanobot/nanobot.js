//test me baby noch einmal
//this is a test

var Discord = require("discord.js");
var bot = new Discord.Client();
var height = 0;
var tinies = [];
var tlist = [];

bot.on("message", msg => {
  basicCommands(msg);
  interrupt(msg);
  shrinkGrowHandler(msg);
});

function basicCommands(msg){
  if (msg.content.startsWith(".ping")) {
      message(msg, "pong!");
  }
  if (msg.content.startsWith(".squish <@")) {
      message(msg, "A-Alright! Better watch out, "+msg.mentions[0]+" I'm gonna squish you!!!");
  }
  if (msg.content.startsWith(".insert <@")) {
      message(msg, "That's so l-lewd! :flushed: Uhm... Okay then, "+msg.mentions[0]+" I'm gonna... You know.");
  }
  if (msg.content.startsWith(".hello world")) {
      message(msg, "Uhm... That's not very nice. Please don't say that or you'll get the squish :c");
  }
  if(msg.content.startsWith(".pout")){
    message(msg, "*hmph!*");
  }
  if(msg.content.includes("execute order 69")){
    message(msg, "*drops pants* >///< uhm... this is kinda awkward, "+msg.author+", but climb on in!");
  }
  if(msg.content.toLowerCase().includes("nano") && !msg.content.includes("Hello, I'm Nano!")){
    message(msg, "That's me!");
  }
  if(msg.content.startsWith(".help")){
    message(msg, "**Hello, I'm Nano! I'll be your /size assistant today!**\n\n**Commands**\n`.grow` grows me!\n`.shrink` shrinks me!\n`.shrink @target` shrinks the target\n`.squish` Squishes the target!\n`.insert` th-thats lewd!\n`.pout` Makes me pout :c\n\n**I also have other commands, but those are secrets, you'll see though!**");
  }
}

function interrupt(msg){
  if (includeMultiple(["dick", "penis"], msg.content)) {
      message(msg, "l-lewd!");
  }
  if (includeMultiple(["nigga", "nigger"], msg.content)) {
      message(msg, "Th-thats not very nice!");
  }
  if(includeMultiple(["katelyn brooks", "media impact", "3dpd"], msg.content)){
    message(msg, "Y-You like that little man?");
  }
  if (msg.content.includes("navy seal")){
    message(msg, "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in Shrink High, and I’ve been involved in numerous secret raids on tinies, and I have over 300 squishes. I am trained in size warfare and I’m the top smusher in the entire Academy. You are nothing to me but just another bug. I will crush out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of big girls across the glove and your IP is being traced right now so you better prepare for the squish, buggy. The squish that wipes out the pathetic little thing you call your life. You’re fucking dead, bug. I can be anywhere, anytime, and I can smush you in over seven hundred ways, and that’s just with my bare feet. Not only am I extensively trained in foot smush, but I have access to the entire arsenal of size tags and I will use it to its full extent to wipe your miserable butt off the face of the floor, you tiny little speck. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have scurried back into your mouse hole. But you couldn’t, you didn’t, and now you’re paying the price, you baka. You’re fucking dead, buggy.")
  }
  if(msg.content.toLowerCase().includes("nichijou")){
    message(msg, "That's my show :D");
  }
}

function shrinkGrowHandler(msg){
  if (msg.content.startsWith(".grow")) {
      var multiplier = 1;
      if(isNumeric(msg.content.split(" ")[1])){
        multiplier = msg.content.split(" ")[1];
      }
      if(height==5){
        height=0;
      }
      height+=10*multiplier;
      growManager(msg);
  }
  if(msg.content.startsWith(".shrink <@")){
    shrink(msg);
  }else{
    if (msg.content.startsWith(".shrink")) {
      var multiplier = 1;
      if(isNumeric(msg.content.split(" ")[1])){
        multiplier = msg.content.split(" ")[1];
      }
      height-=10*multiplier;
      if(height<=0){
        height=5;
      }
      bot.sendMessage(msg, "H-help! I'm shrinking! I'm now "+height+" feet tall!\n");
    }
  }
  if(msg.content.includes("execute order 66")||msg.content.startsWith(".kill")){
    killEveryone(msg);
  }
}

function growManager(msg){
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
  message(msg, "G-Grow? Okay! I'm now "+height+" feet tall!\n"+m);
}

bot.on("ready", () => {
    console.log(`Ready to begin! Serving in ${bot.channels.length} channels`);
});

bot.on("disconnected", () => {
    console.log("Disconnected! Seeya!");
    process.exit(1); //exit node.js with an error
});

function includeMultiple(a, msg){
  for (var i = 0; i < a.length; i++) {
    if(msg.toLowerCase().includes(a[i])){
      return true;
    }
  }
  return false;
}

function shrink(msg){
  console.log("shrinking "+msg.mentions[0]);
  if(tinies.length>0){
    for(var i = 0; i < tinies.length; i++){
      if(tinies[i]==msg.mentions[0]){
        bot.sendMessage(msg, "I-I'm sorry, but that person's already a tiny :c");
        return;
      }
    }
  }
  tinies[tinies.length]=msg.mentions[0];
  bot.sendMessage(msg, "Shrink! "+msg.mentions[0] + " is tiny now c:");
  return;
}

function killEveryone(msg){
  console.log("executing order 66 "+tinies.length);
  m="There's no tinies left to squish!";
  if(tinies.length>0){
    m = "O-Okay! I'll squish them all!\n";
    for(var i = 0; i<tinies.length; i++){
      var q = "";
      var t = tinies[i];
      var r = Math.floor(Math.random()*12)+1;
      console.log("crush "+t+" "+r)
      switch (r) {
        case 1:
          q = "I crushed "+t+" under my bare foot! They were really crunchy c:";
          break;
        case 2:
          q = t + " was really slippery! I tried to grab them but they ran away, so I just sent Sakamoto to get them :/";
          break;
        case 3:
          q = t + " tried to escape through the mouse hole, so I put my foot in front of it to stop them! Then it was just easy squishing c:";
          break;
        case 4:
          q = "Woah! "+t+" was tough! I had to put on my boots to crush them!";
          break;
        case 5:
          q = t + " barely put up a fight, they kept begging so I just squished them quickly to get it over with *shrug*";
          break;
        case 6:
          q = t + " was really tasty! I should have them with a glass of milk next time, though :/";
          break;
        case 7:
          q = "I don't think I even saw " + t + ", hmm, where could they be? *crunch* Oh, whoops!";
          break;
        case 8:
          q = "Yuuko told me her feet were tired after school so I let her have "+t+", I wonder what she did with them?"
          break;
        case 9:
          q = t + " was really fun to chase! But I finally pinned them under my sock, sorry :c";
          break;
        case 10:
          q = "I put "+t+" under a cup for later! Don't worry, though, I promise to squish you soon!";
          break;
        case 11:
          q = "I think Mio said she ran into "+t+" during field day, at least she thought she did, it was kind of hard to tell from their remains :c";
          break;
        case 12:
          q = "Mai said she had something 'unique' planned for "+t+", so I let her have them.";
          break;
      }
      m = m+q+"\n";
    }
  }
  bot.sendMessage(msg, m);
  tinies = [];
}

function message(msg, s){
  for(var i = 0; i<tlist.length; i++){
    console.log("time: "+ Date.now() + "user: "+msg.author);
    if(msg.author==tlist[i].author){
      if(Date.now()-tlist[i].timestamp>2000){
        bot.sendMessage(msg, s);
        tlist[i].timestamp = Date.now();
        return;
      }else{
        return;
      }
    }
  }
  tlist[tlist.length] = {author:msg.author, timestamp:Date.now()};
  bot.sendMessage(msg,s);
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

bot.loginWithToken("MjE3MzM1NjEzMzAzNTU0MDQ4.Cp0O9g.XX-hhBdtAldIrD31OUwStIMwbko");
