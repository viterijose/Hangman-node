import { print } from "util";

var Letter = require("./letter.js");
// var word = "office";
// word = word.split("");
// console.log(word);
// var char = process.argv[3];
// var words = process.argv[2];
var letter;
var Word = function (word) {
    this.word = [];//empty array to be filled with the letter objects created
    this.inword = inword;//variable to handle a true or false statement to check if the letter guessed by the user is in any of the letter objects, every time we run the function to check letter objects it should returna true or false, if its true then remaining guesses++, if false remaining guesses --
    //this.genlet = function (word) {//function to create the letter objects of the word passed by the arra from main.js
    word = word.split("");//create an array of letters from the word
    for (var i = 0; i < word.length; i++) {//loop through that array
        letter = new Letter(word[i]);//create a letter object for each letter within the word array prviously created
        this.word.push(letter);//push the letter object created into the words array of the Word constructor
    }
        // console.log("----------After print loop: "+JSON.stringify(this.words));
    //};
    this.checkGuess = function (guess) {
        for (var j = 0; j < this.word.length; j++) {//loops through all the letter objects printing out an underscore or the underlying word if it is guessed
            this.word[j].checkGuess(guess);//calls the function that prints the appropriate characters, found within the letter constructor in letter.js
            // this.words[j].guess;
        }
        // console.log(this.words)
        // letter.Guessing();//calls function from letter.js
    };
    this.printWord = function () {//function to check the user guess
        var print_word = ""
        for (var j = 0; j < this.word.length; j++) {//loops through all the letter objects
            print_word += this.word[j].printLetter();
        };
        console.log(print_word);
        // console.log("---------After guess loop: "+JSON.stringify(this.words));
        // this.stringFun();//calls the function to print out the appropriate characters
    };
}

// for (var i = 0 ; i < word.length; i++){
//     var letter = new Letter(words[i],false);
// }
// var wordguess = new Word(words);
// wordguess.guessFun(char);
// wordguess.genlet();
module.exports = Word;