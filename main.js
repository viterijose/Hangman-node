var inquirer = require("inquirer");
var Words = require("./word.js");
var words = ["bulbasaur", "charmander", "squirtle", "chikorita", "cyndaquil", "totodile", "treecko", "torchic", "mudkip", "turtwig", "chimchar", "piplup"];
// var input = process.argv[2];
var remaining_guesses = 6;//user guesses to be used in game logic
var chosenword;//variable to store the letter in the words array
var letterguess = [];//array for storing the letters that were already guessed by the user
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
            var selected = parseFloat(inquirerResponse.number);//changing string from inquirer input into number
            // console.log("\nWelcome " + inquirerResponse.username);
            console.log("Your " + words[selected] + " is ready for battle!\n");
            chosenword = new Words(words[selected], false);//creating a new object with the word from the array
            chosenword.genlet(words[selected]);
            guess(remaining_guesses);
            // chosenword.guessFun(input);
        }
        else {
            console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
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
                console.log(chosenword.words[0].char);//run through the array of letterguess to check if the word was guessed, if it was guessed and user still has remaining guesses then change to next word in array and reset values if needed
                // var userinput = inquirerResponse.userguess;
                // if (letterguess.indexOf(userinput) < 0) {//checks is the user input is already in the array
                    // letterguess = letterguess.push(inquirerResponse.userguess);//pushing the user guess into an array to check for repeated letters
                    chosenword.guessFun(inquirerResponse.userguess);
                    chosenword.stringFun();
                    updateguess();
                // } else {
                //     console.log("You already guessed the letter: " +"\'"+inquirerResponse.userguess+"\'");
                //     guess(remaining_guesses);
                // }
            });
    } else {
        console.log("You lost!!");
    }


};

function updateguess() {
    if (chosenword.inword) {
        remaining_guesses = remaining_guesses;
        console.log(remaining_guesses);
        guess(remaining_guesses);
    } else {
        remaining_guesses--;
        console.log(remaining_guesses);
        guess(remaining_guesses);
    }
    chosenword.inword = false;
}

// function checkword(){
//     chosenword.words.equals
// }