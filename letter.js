// var input = process.argv[2];

var letter = function (char,guess){
    this.char = char;
    this.guess = guess;
    this.Guessing = function(){
        if (this.guess == true){
            console.log("You guessed it! The letter is: "+char);
            this.guess = false;
        }else{
            console.log("Wrong guess: _")
        }
    };
    this.Guesses = function(your_guess){
        if (your_guess == this.char){
            this.guess = true;
            this.Guessing();
        }else{
            this.guess =false;
            this.Guessing();
        }
    };
}
module.exports = letter;
// var Letter   = new letter("e",false);
// Letter.Guesses(input);