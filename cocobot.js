const discord = require ('discord.js')
var client = new discord.Client();
const token = "NTQ4NjgzMTM5MDM2NDc5NTIw.D1I9mg.aYYtSr74QFwYl-rIHI9kLbv6q1Q";
client.on("ready", () => {
    console.log("ready!");
    client.user.setActivity ("c!help");
});
const prefix = "c!";
client.on ("message", (message) => {
    if (message.author.bot) return;
    msg = message.content.toLowerCase();
    if (msg.startsWith (prefix + "help")) {
        message.channel.send ("Command List:");
        message.channel.send ("c!hello : Greet Coco");
        message.channel.send ("c!hug : Give Coco a Hug");
        message.channel.send ("c!kiss : Give Smooches");
        message.channel.send ("c!pat : Pat Coco's Head");
        message.channel.send ("c!sleep : Watch Coco Sleep");
        message.channel.send ("c!rub : Rub Coco's Belly");
        message.channel.send ("c!slut : Watch Coco be A ***SLUT***");
    }
    if (msg.startsWith (prefix + "hello")) {
        message.reply ("Coco Says Hi!", {files: ["./images/hello.jpg"]});
    }
    if (msg.startsWith (prefix + "pat") ){
        message.channel.send ("*Lowers head for pat*", {files: ["./images/pat.jpg"]});
    }
    if (msg.startsWith (prefix + "hug")) {
        message.reply ("Coco Snuggles", {files: ["./images/hug.jpg"]});
    }
    if (msg.startsWith (prefix + "kiss")) {
        message.reply ("Coco licks you", {files: ["./images/tongueout.jpg"]});
    }
    if (msg.startsWith (prefix + "sleep")) {
        message.reply ("Coco ***SHLEEP***", {files: ["./images/sleep.jpg"]});
    }
    if (msg.startsWith (prefix + "rub")) {
        message.reply ("***RUB ME***", {files: ["./images/rub.jpg"]});
    }
    if (msg.startsWith (prefix + "slut")) {
        message.reply ("Coco ***STRUTS***", {files: ["./images/slut.jpg"]});
    }


    if (msg.includes ("coco")) {
        var r15 = "./images/15.jpg"; var r14 = "./images/14.jpg"; var r13 = "./images/13.jpg"; var r11 = "./images/11.jpg"; var r1 = "./images/1.jpg"; var r2 = "./images/2.jpg"; var r3 = "./images/3.jpg"; var r4 = "./images/4.jpg"; var r5 = "./images/5.jpg"; var r6 = "./images/6.jpg"; var r7 = "./images/7.jpg"; var r8 = "./images/8.jpg"; var r9 = "./images/9.jpg"; var r10 = "./images/10.jpg"; var r12 = "./images/12.jpg";
        number = 15;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [r1]}); break;
        case 2: message.channel.send ({ files: [r2]}); break;
        case 3: message.channel.send ({ files: [r3]}); break;
        case 4: message.channel.send ({ files: [r4]}); break;
        case 5: message.channel.send ({ files: [r5]}); break;
        case 6: message.channel.send ({ files: [r6]}); break;
        case 7: message.channel.send ({ files: [r7]}); break;
        case 8: message.channel.send ({ files: [r8]}); break;
        case 9: message.channel.send ({ files: [r9]}); break;
        case 10: message.channel.send ({ files: [r10]}); break;
        case 11: message.channel.send ({ files: [r11]}); break; 
        case 12: message.channel.send ({ files: [r12]}); break;
        case 13: message.channel.send ({ files: [r13]}); break;
        case 14: message.channel.send ({ files: [r14]}); break;
        case 15: message.channel.send ({ files: [r15]}); break;
    }
    }
});

client.login (token);