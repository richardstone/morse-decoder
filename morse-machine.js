'use strict';

var morseTable = require("./code-tables/morse-code-table");
var serviceTable = require("./code-tables/service-codes-table");

var MorseMachine = function() {  
};

MorseMachine.prototype = {

    deCode: function(input) {
        if (this._isServiceCode(input)){
            return serviceTable[input];
        } else {
            return this._morseToString(input)
        }
    },

    _morseToChar: function(morseCode) {
        return morseTable[morseCode];
    },

    _morseToString: function(morseString) {
        var splittedMorse = morseString.split(" ");
        return this._convertMorseString(splittedMorse);
    },

    _isServiceCode: function(morseCode) {
        return (serviceTable[morseCode] != undefined);
    },

    _convertMorseString: function(morseString) {
        var convertedString = "";
        for (var i = 0; i < morseString.length; i++){
            if (morseString[i] === ""){
                i++;
                convertedString += '\n';
            }
            convertedString += this._morseToChar(morseString[i]);
        }
        return convertedString;
    }
}

module.exports = MorseMachine;