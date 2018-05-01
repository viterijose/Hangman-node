var Letter = require("./letter.js");
// var word = "office";
// word = word.split("");
// console.log(word);
// var char = process.argv[3];
// var words = process.argv[2];
var letter;
var Word = function (word) {
    this.words = [];//empty array to be filled with the letter objects created
    this.genlet = function (word) {//function to create the letter objects of the word passed by the arra from main.js
        word = word.split("");//create an array of letters from the word
        for (var i = 0; i < word.length; i++) {//loop through that array
            letter = new Letter(word[i], false);//create a letter object for each letter within the word array prviously created
            this.words.push(letter);//push the letter object created into the words array of the Word constructor

        }
        // console.log("----------After print loop: "+JSON.stringify(this.words));
    };
    this.stringFun = function () {
        for (var j = 0; j < this.words.length; j++) {//loops through all the letter objects printing out an underscore or the underlying word if it is guessed
            this.words[j].Guessing();//calls the function that prints the appropriate characters, found within the letter constructor in letter.js
            // this.words[j].guess;
        }
        console.log(this.words)
        // letter.Guessing();//calls function from letter.js
    };
    this.guessFun = function (char) {//function to check the user guess
        for (var j = 0; j < this.words.length; j++) {//loops through all the letter objects
            if (this.words[j].guess) {//skips the letter object is it finds that the guess is already true
                this.words[j].Guessing();//if the guess is already true it will print out the underlying word
            } else {
                this.words[j].Guesses(char);//if the guess is not true it will check and see if the user guess is in any of the letter objects reamaining
            }
        }
        // console.log("---------After guess loop: "+JSON.stringify(this.words));
        this.stringFun();//calls the function to print out the appropriate characters
    };
}

// for (var i = 0 ; i < word.length; i++){
//     var letter = new Letter(words[i],false);
// }
// var wordguess = new Word(words);
// wordguess.guessFun(char);
// wordguess.genlet();
module.exports = Word;