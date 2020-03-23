/**
 * 
 * 
 * Listener.js
 * 
 * 
 */

const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;


const Strings = require("./Strings");
const { Keyboard } = require("./Keyboard");
const { VMethods } = require("./VMethods");


 class Listener {

     constructor(bot) {
         this.bot = bot;
         this.vmethods = new VMethods();
     }


     firstRun() {
         this.bot.onSubscribe(response => this.vmethods.introMethod(response));
     }



     listen() {


        this.bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
            
            console.log("Message: ", message);
            console.log("Response: ", response);

            switch (message.text) {
                case "Hi":
                    this.vmethods.introMethod(response);
                    break;
                case Strings.Report:
                    this.vmethods.reportMethod(response);
                    break;
                case Strings.Symptoms:
                    this.vmethods.symptomMethod(response);
                    break;
                case Strings.Stat:
                    this.vmethods.statMethod(response);
                    break;
                case Strings.Tips:
                    this.vmethods.tipsMethod(response);
                    break;
                case Strings.About:
                    this.vmethods.aboutMethod(response);
                    break;
                default:
                    this.vmethods.rawIntroMethod(response);
                    break;
            }


        });

     }



 }



 module.exports.Listener = Listener;