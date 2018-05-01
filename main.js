var inquirer = require("inquirer");
var Words = require("./word.js");
var words = ["bulbasaur", "charmander", "squirtle", "chikorita", "cyndaquil", "totodile", "treecko", "torchic", "mudkip", "turtwig", "chimchar", "piplup"];
// var input = process.argv[2];
var remaining_guesses = 6;//user guesses to be used in game logic
var chosenword;//variable to store the letter in the words array
// var letterguess = process.argv[3];
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
            chosenword = new Words(words[selected]);//creating a new object with the word from the array
            chosenword.genlet(words[selected]);
            guess();
            // chosenword.guessFun(input);
        }
        else {
            console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
        }
    });
function guess(remaining_guesses) {
    // if (remaining_guesses <= 6)
    // do {
        if (remaining_guesses <= 6 || !chosenword.words.guess) {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Guess the letter: ",
                        name: "userguess"
                    },
                ])
                .then(function (inquirerResponse) {

                    chosenword.guessFun(inquirerResponse.userguess);
                    if (chosenword.words.guess) {
                        remaining_guesses = remaining_guesses;
                        guess(remaining_guesses);
                    } else {
                        remaining_guesses--;
                        guess(remaining_guesses);
                    }

                });
        }
    // } while (chosenword.words.guess);

}