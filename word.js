
var Letter = require("./letter.js");
var colors = require('colors');
var letter;

var Word = function (word) {
    this.printword = "";//made a variable to access the printed word
    this.word = [];//empty array to be filled with the letter objects created
    this.checkletters = false;//variable to handle a true or false statement to check if the letter guessed by the user is in any of the letter objects, every time we run the function to check letter objects it should return a true or false, if its true then remaining guesses++, if false remaining guesses --
    word = word.split("");//create an array of letters from the word
    for (var i = 0; i < word.length; i++) {//loop through that array
        letter = new Letter(word[i], false);//create a letter object for each letter within the word array prviously created
        this.word.push(letter);//push the letter object created into the words array of the Word constructor
    };
    this.printWord = function () {
        this.printword = "";
        for (var j = 0; j < this.word.length; j++) {//loops through all the letter objects printing out an underscore or the underlying word if it is guessed
            this.word[j].printLetter();//calls the function that prints the appropriate characters, found within the letter constructor in letter.js
            this.printword += " " + this.word[j].printLetter();
        }
        // return this.printword;
        console.log(colors.green("\n \t" + this.printword));

    };
    this.isGuessInWord = function (char) {//function to check the user guess
        for (var j = 0; j < this.word.length; j++) {//loops through all the letter objects
            if (!this.word[j].guess) {//runs the guess loop on letter.js if the guess is false, if its already true it will due nothing
                this.word[j].checkGuess(char);
                if (this.word[j].guess == true) {
                    this.checkletters = true;
                };
            };
        };
    };

}
module.exports = Word;