// var input = process.argv[2];

var letter = function (char){//letter constructor that takes two arguments: the character from the word passed by the word.js and a guess argument originally set to false
    this.char = char;
    this.guessed = false;
    this.printLetter = function(){//function that prints out the underlying character or the underscore when user is playing game
        if (this.guessed === true){//if user guess is correct print out letter
            return this.char;
            //console.log(this.char)
            //console.log("You guessed it! The letter is: "+char);
            // this.guess = false;
        }else{
            return "_"
            //console.log("_")
            //console.log("Wrong guess: _")
        }
    };
    this.checkGuess = function(your_guess){
        if (your_guess == this.char){
            this.guessed = true;
            // this.Guessing();
        }
    };
}
module.exports = letter;
// var Letter   = new letter("e",false);
// Letter.Guesses(input);