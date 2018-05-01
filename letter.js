// var input = process.argv[2];

var letter = function (char,guess){//letter constructor that takes two arguments: the character from the word passed by the word.js and a guess argument originally set to false
    this.char = char;
    this.guess = guess;
    this.Guessing = function(){//function that prints out the underlying character or the underscore when user is playing game
        if (this.guess == true){//if user guess is correct print out letter
            console.log("You guessed it! The letter is: "+char);
            // this.guess = false;
        }else{
            console.log("Wrong guess: _")
        }
    };
    this.Guesses = function(your_guess){
        if (your_guess == this.char){
            this.guess = true;
            // this.Guessing();
        }else{
            this.guess =false;
            // this.Guessing();
        }
    };
}
module.exports = letter;
// var Letter   = new letter("e",false);
// Letter.Guesses(input);