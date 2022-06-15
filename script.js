//function computerPlay that will randomly return either Rock, Paper or Scissors

//let computerMove = "";
let playerMove = "";

function computerPlay() {
    //generates a random number between 1 and 3, the + 1 at the end prevents it from returning 0
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1: 
           //computerMove = "Rock";
           return "Rock";
        break;
        case 2:
           // computerMove = "Paper";
           return "Paper";
        break;
        case 3:
           // computerMove = "Scissors";
           return "Scissors";
    }
    //console.log("computer move" + " " + computerMove);
}

//function for processing player moves regardless of the case of the inputted text

function parsePlayerInput(playerInput) {
    if (playerInput.localeCompare("Rock", 'en', {sensitivity: 'base'}) === 0) {
        return "Rock"
    }
    if (playerInput.localeCompare("Paper", 'en', {sensitivity: 'base'}) === 0) {
        return "Paper"
    }
    if (playerInput.localeCompare("Scissors", 'en', {sensitivity: 'base'}) === 0) {
        return "Scissors"
    }
}

//takes player input, calls the parse function, then uses a case statement to assign a value
// to player move based on the result

function playerPlay(playerInput) {
    let input = parsePlayerInput(playerInput);
    console.log("result from parse:" + " " + input);
    switch (input) {
        case "Rock":
            //playerMove = "Rock";
            return "Rock";
        break
        case "Paper":
            //playerMove = "Paper";
            return "Paper";
        break
        case "Scissors":
            //playerMove = "Scissors";
            return "Scissors";
        break
    }
    console.log("player move" + " " + playerMove);
    return playerMove;
}

//function to play a round of rock paper scissors

function playRound(playerSelection, computerSelection) {
    //compare the two inputs and decide which wins
    //possible parameters:
    //player rock, cpu rock = draw              -covered
    //player rock, cpu paper = cpu win           -covered
    //player rock, cpu scissors = player win
    //player paper, cpu rock = player win
    //player paper, cpu paper = draw           -covered
    //player paper, cpu scissors = cpu win
    //player scissors, cpu rock = cpu win
    //player scissors, cpu paper = player win
    //player scissors, cpu scissors = draw             -covered
    // as a shortcut, compare two strings, if they're the same then = draw

    if (playerSelection === computerSelection) {
        return "This round is a draw!";
    };
    if (playerSelection === "Rock" && computerSelection === "Paper" ) {
        return "CPU Wins!";
    }
}

//const playerSelection = "Rock";
//const computerSelection = computerPlay();
//console.log("Playround results: " + " " + playRound(playerSelection, computerSelection));

