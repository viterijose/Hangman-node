var inquirer = require("inquirer");
var Words = require("./word.js");
var colors = require('colors');
var selected_word = ["bulbasaur", "charmander", "squirtle", "chikorita", "cyndaquil", "totodile", "treecko", "torchic", "mudkip", "turtwig", "chimchar", "piplup"];
var letter_true = [];//array of letters that were guessed and correct
var remaining_guesses = 6;//user guesses to be used in game logic
var chosenword;//variable to store the letter in the words array
var letterguess = [];//array for storing the letters that were already guessed by the user
var selected;//original number chosen by user 
var username = "";
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        {
            type: "input",
            message: "Choose a number between 1 and 10: ",
            name: "number"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
    ])
    .then(function (inquirerResponse) {

        if (inquirerResponse.confirm) {
            selected = parseFloat(inquirerResponse.number);//changing string from inquirer input into number
            // console.log("\nWelcome " + inquirerResponse.username);
            // console.log("Your " + selected_word[selected] + " is ready for battle!\n");
            username = inquirerResponse.username
            console.log("\nWelcome "+username+", test your knowledge of all the starter pokemon with this game.\nYour first pokemon to guess is: ")
            chosenword = new Words(selected_word[selected]);//creating a new object with the word from the array
            // chosenword.genlet(word[selected]);
            guess(remaining_guesses);
            // chosenword.guessFun(input);
        }
        else {
            console.log("\nThat's okay " + inquirerResponse.username + ", come again when you're more sure.\n");
        }
    });
function guess(remaining_guesses) {
    // if (remaining_guesses <= 6)

    if (remaining_guesses > 0) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess the letter: ",
                    name: "userguess"
                },
            ])
            .then(function (inquirerResponse) {
                // console.log(chosenword.word[0].char);//run through the array of letterguess to check if the word was guessed, if it was guessed and user still has remaining guesses then change to next word in array and reset values if needed
                var userinput = inquirerResponse.userguess.toString();
                if (letterguess.indexOf(inquirerResponse.userguess) < 0) {//checks is the user input is already in the array
                    letterguess.push(inquirerResponse.userguess);//pushing the user guess into an array to check for repeated letters
                    chosenword.checkGuessWord(userinput);
                    chosenword.printWord();
                    chosenword.word.forEach(function (letter) {
                        if (letter.guess && letter_true.indexOf(letter.char) < 0) {
                            letter_true.push(letter.char)
                        }
                    })
                    checkword();
                    // updateguess();
                } else {
                    console.log(colors.yellow("\n You already guessed the letter " + "\'" + inquirerResponse.userguess + "\'"));
                    guess(remaining_guesses);
                }
            });
    } else {
        console.log(colors.red("\nYou lost!!"));
    }
};
function generateWordObject(indexnumber) {

    chosenword = new Words(selected_word[indexnumber]);//creating a new object with the word from the array
    letter_true = [];//array of letters that were guessed and correct
    // remaining_guesses = 6;//user guesses to be used in game logic
    letterguess = [];
    chosenword.printWord();
    guess(remaining_guesses);
}
function updateguess() {
    if (chosenword.checkletters) {
        remaining_guesses = remaining_guesses;
        console.log(colors.blue("\n Remaining Guesses: " + remaining_guesses));
        guess(remaining_guesses);
    } else {
        remaining_guesses--;
        console.log(colors.red("\n Nice try but no! You have " + remaining_guesses + " remaining guesses."));
        guess(remaining_guesses);
    }
    chosenword.checkletters = false;
}

function checkword() {
    if (chosenword.printword.replace(/ /g, '') == selected_word[selected]) {//checks if the printed word is the word to guess
        selected = Math.floor(Math.random() * 12)
        console.log(colors.rainbow("\nYou guessed the pokemon!! \nNext pokemon:"));//if true then it will switch to next word
        generateWordObject(selected);
    } else {
        updateguess();//if false it will update guess
    }

}