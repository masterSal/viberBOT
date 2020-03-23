/**
 * 
 * 
 * Hear.js
 * 
 * 
 */

 
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const PictureMessage = require('viber-bot').Message.Picture;



const { Keyboard } = require("./Keyboard");
const { StatHandler } = require("./StatHandler");
const Strings = require("./Strings");

 class VMethods {
     
     constructor() {
         this.Keyboard = new Keyboard();
     }


     rawIntroMethod(res) {
         let name = res.userProfile.name;

         res.send(new TextMessage(`Hello, ${name}`, this.Keyboard.mainKeyboard()));;
     }


     introMethod(res) {
        let name = res.userProfile.name;
        
        // send intro
        res.send(new TextMessage(`Hello, ${name}`, this.Keyboard.mainKeyboard()));
        
        // send stat
        new StatHandler().fetchData((msg) => {
            res.send(new TextMessage(msg, this.Keyboard.mainKeyboard()));
        });

        // eth
        new StatHandler().fetchETDate((msg) => {
            res.send(new TextMessage(msg, this.Keyboard.mainKeyboard()));
        });
     }


     symptomMethod(res) {


        // send the first text
        res.send(new TextMessage(Strings.symptom_string_a, this.Keyboard.mainKeyboard()));


        // sym 1
        res.send(new PictureMessage(
            "https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-shortness-breath.jpg",
            Strings.symptom_string_breath,
            null,
            this.Keyboard.mainKeyboard()
        ));


        // sym 2
        res.send(new PictureMessage(
            "https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-fever.jpg",
            Strings.symptom_string_fever,
            null,
            this.Keyboard.mainKeyboard()
        ));

        //sym 3
        res.send(new PictureMessage(
            "https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-cough.jpg",
            Strings.symptom_string_cough,
            null,
            this.Keyboard.mainKeyboard()
        ));


     }


     statMethod(res) {
         // send stat
        new StatHandler().fetchData((msg) => {
            res.send(new TextMessage(msg, this.Keyboard.mainKeyboard()));
        });

        // eth
        new StatHandler().fetchETDate((msg) => {
            res.send(new TextMessage(msg, this.Keyboard.mainKeyboard()));
        });
     }

     tipsMethod(res) {


        // tip a
        res.send(new PictureMessage(
            "https://www.cdc.gov/coronavirus/2019-ncov/images/protect-wash-hands.png",
            Strings.tip_a,
            null,
            this.Keyboard.mainKeyboard()
        ));


        // tip b
        res.send(new PictureMessage(
            "https://www.cdc.gov/coronavirus/2019-ncov/images/protect-quarantine.png",
            Strings.tip_b,
            null,
            this.Keyboard.mainKeyboard()
        ));

        // tip c
        res.send(new PictureMessage(
            "https://www.cdc.gov/coronavirus/2019-ncov/images/COVIDweb_06_coverCough.pn",
            Strings.tip_c,
            null,
            this.Keyboard.mainKeyboard()
        ));

     }


     aboutMethod(res) {
         res.send(new TextMessage(
             Strings.about_string,
             this.Keyboard.mainKeyboard()
         ));
     }


     reportMethod(res) {
         res.send(new TextMessage(
             "Under Construction...",
             this.Keyboard.mainKeyboard()
         ));
     }

     
 }


 module.exports.VMethods = VMethods;