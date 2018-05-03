var inquirer = require("inquirer");
var Word = require("./word.js");
var colors = require('colors');
var selected_word =["bulbasaur", "charmander", "squirtle", "chikorita", "cyndaquil", "totodile", "treecko", "torchic", "mudkip", "turtwig", "chimchar", "piplup"];
var letter_true = [];//array of letters that were guessed and correct
var remaining_guesses = 6;//user guesses to be used in game logic
var chosenword;//variable to store the letter in the words array
var letterguess = [];//array for storing the letters that were already guessed by the user
var selected;//original number chosen by user 
var username = "";
var score = 0;
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name trainer? ",
            name: "username"
        },
        {
            type: "input",
            message: "Choose a number between 1 and 10 to select a pokemon ",
            name: "number"
        },
        {
            type: "confirm",
            message: "Are you sure you would like that pokemon? ",
            name: "confirm",
            default: true
        },
    ])
    .then(function (inquirerResponse) {

        if (inquirerResponse.confirm) {
            selected = parseFloat(inquirerResponse.number);//changing string from inquirer input into number
            username = inquirerResponse.username.toUpperCase();
            console.log("\nWelcome " + username + ", test your knowledge of all the starter pokemon with this game.\nYour first pokemon to guess is: ")
            chosenword = new Word(selected_word[selected]);//creating a new object with the word from the array
            chosenword.printWord();
            guess(remaining_guesses);
        }
        else {
            console.log("\nThat's okay " + inquirerResponse.username + ", come again when you're more sure.\n");
        }
    });
function guess(remaining_guesses) {

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
                if (isNaN(inquirerResponse.userguess)) {
                    var userinput = inquirerResponse.userguess.toString();
                    if (userinput.length > 1) {
                        console.log(colors.yellow("\n Please input a single letter"))
                        guess(remaining_guesses);

                    } else if (letterguess.indexOf(inquirerResponse.userguess) < 0) {//checks is the user input is already in the array
                        letterguess.push(inquirerResponse.userguess);//pushing the user guess into an array to check for repeated letters
                        chosenword.isGuessInWord(inquirerResponse.userguess);
                        chosenword.printWord();
                        chosenword.word.forEach(function (letter) {
                            if (letter.guess && letter_true.indexOf(letter.char) < 0) {
                                letter_true.push(letter.char)
                            }
                        })
                        checkword();
                        // updateguess();
                    } else if (letterguess.indexOf(inquirerResponse.userguess) > 0) {
                        console.log(colors.yellow("\n You already guessed the letter " + "\'" + inquirerResponse.userguess + "\'"));
                        guess(remaining_guesses);
                    }
                } else {
                    console.log(colors.yellow("\n Please input a single letter not a number"));
                }
            });
    } else {
        console.log(colors.red("\nYou lost!!"));
    }
};

function generateWordObject(number) {
    chosenword = new Word(selected_word[number]);
    letter_true = [];
    letterguess = [];
    chosenword.printWord();
    guess(remaining_guesses);
};

function updateguess() {
    if (chosenword.checkletters) {
        remaining_guesses = remaining_guesses;
        console.log(colors.blue("\n Remaining Guesses: " + remaining_guesses + "\tScore: " + score));
        guess(remaining_guesses);
    } else {
        remaining_guesses--;
        console.log(colors.red("\n Nice try but no! You have " + remaining_guesses + " remaining guesses "));
        guess(remaining_guesses);
    }
    chosenword.checkletters = false;
};


function checkword() {

    if (chosenword.printword.replace(/ /g, '') == selected_word[selected] && selected_word.length != 0) {//checks if the printed word is the word to guess
        selected_word.splice(selected, 1);
        remaining_guesses++;
        score++
        selected = Math.floor(Math.random() * selected_word.length);
        if (selected_word.length == 0) {//if there is no more words to guess then user has won the game!
            console.log(colors.rainbow("\nCONGRATULATIONS!! YOU ARE A POKEMON MASTER " + username));
        } else {
            console.log(colors.rainbow("\nYou guessed the pokemon!!"));//if true then it will switch to next word
            console.log(colors.blue("\nYou have "+selected_word.length+" more pokemons to guess!  \n\tNext pokemon:"))
            generateWordObject(selected);
        }
    } else {
        updateguess();//if false it will update guess
    }
};
