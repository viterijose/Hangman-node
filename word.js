var Letter = require ("./letter.js");
var word = "office";
word = word.split("");
console.log(word);
var Word = function(word){
    this.word = word;
    this.stringFun = function(){
        Letter.Guessing();//calls function from letter.js
    }

}