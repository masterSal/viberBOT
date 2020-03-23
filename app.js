/**
 * 
 * 
 * app.js
 * 
 * 
 */

const ViberBot  = require('viber-bot').Bot;

require("custom-env").env("secrets");

const { Listener } = require("./src/Listener");



console.log("==> Viber bot started!");

// Creating the bot with access token, name and avatar
const bot = new ViberBot({
    authToken: process.env.AUTH_TOKEN, // <--- Paste your token here
    name: process.env.NAME,  // <--- Your bot name here
    avatar: process.env.AVATAR // It is recommended to be 720x720, and no more than 100kb.
});





// listener

new Listener(bot).listen();



















// start webHook
if (process.env.HEROKU_URL) {
    const http = require('http');
    const port = process.env.PORT || 8080;

    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(process.env.HEROKU_URL));
} else {
    console.log('Could not find the Heroku webhook.');
}