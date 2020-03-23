/**
 * 
 * 
 * Keyboard.js
 * 
 * 
 */

 const Strings = require("./Strings");



 class Keyboard {
     constructor() {
     }


     mainKeyboard() {
         return {
            "Type": "keyboard",
            "Revision": 1,
            "Buttons": [
                {
                    "Columns": 3,
                    "Rows": 1,
                    "BgColor": "#5d9722",
                    "Text": Strings.Report,
                    "ActionType": "reply",
                    "ActionBody": Strings.Report
                },
                {
                    "Columns": 3,
                    "Rows": 1,
                    "BgColor": "#5d9722",
                    "Text": Strings.Symptoms,
                    "ActionType": "reply",
                    "ActionBody": Strings.Symptoms
                },
                {
                    "Columns": 3,
                    "Rows": 1,
                    "BgColor": "#5d9722",
                    "Text": Strings.Stat,
                    "ActionType": "reply",
                    "ActionBody": Strings.Stat
                },  
                {
                    "Columns": 3,
                    "Rows": 1,
                    "BgColor": "#5d9722",
                    "Text": Strings.Tips,
                    "ActionType": "reply",
                    "ActionBody": Strings.Tips
                },
                {
                    "Columns": 6,
                    "Rows": 1,
                    "BgColor": "#5d9722",
                    "Text": Strings.About,
                    "ActionType": "reply",
                    "ActionBody": Strings.About
                },
              
              
            ]
        };
     }


 }



 module.exports.Keyboard = Keyboard;