var inquirer = require("inquirer");
var words = ["bulbasaur","charmander","squirtle","chikorita","cyndaquil","totodile","treecko","torchic","mudkip","turtwig","chimchar","piplup"];
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
            var selected = parseFloat(inquirerResponse.number);
            console.log("\nWelcome " + inquirerResponse.username);
            console.log("Your " + words[selected] + " is ready for battle!\n");
        }
        else {
            console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
        }
    });
