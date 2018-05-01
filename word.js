var Letter = require ("./letter.js");
// var word = "office";
// word = word.split("");
// console.log(word);
// var char = process.argv[3];
// var words = process.argv[2];
var letter = [];
var Word = function(word){
    // this.word = word;
    this.genlet = function(word){
        word = word.split("");
        for (var i = 0 ; i < word.length; i++){
             letter = new Letter(word[i],false);
            
        }
        console.log(letter);
    };
    this.stringFun = function(){
        letter.Guessing();//calls function from letter.js
    };
    this.guessFun =  function(char){
    
        letter.Guesses(char);
        
    };
}

// for (var i = 0 ; i < word.length; i++){
//     var letter = new Letter(words[i],false);
// }
// var wordguess = new Word(words);
// wordguess.guessFun(char);
// wordguess.genlet();
module.exports= Word;