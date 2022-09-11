//function computerPlay that will randomly return either Rock, Paper or Scissors


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

}

//function to play a round of rock paper scissors

function playRound(playerSelection, computerSelection) {
   
    //maybe change this to if statement for player inputs then a case nested in it 
    // to check computer input to streamline the code

    if (playerSelection === computerSelection) {
        return "This round is a draw!";
    };
    if (playerSelection === "Rock" && computerSelection === "Paper" ) {
        cpuScore = cpuScore + 1;
        return "CPU Wins! Paper beats Rock";
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore = playerScore + 1
        return "Player Wins! Rock beats Scissors";
    }
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore = playerScore + 1
        return "Player Wins! Paper beats Rock";
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        cpuScore = cpuScore + 1;
        return "CPU Wins! Scissors beats Paper";
    }
    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        cpuScore = cpuScore + 1;
        return "CPU Wins! Rock beats Scissors";
    }
    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore = playerScore + 1;
        return "Player Wins! Scissors beats Paper";
    }

}

function checkResults() {

    if (cpuScore > playerScore) {
        //  console.log("CPU Wins!");
        if (cpuScore == 5) {
            gameResultOutput.innerHTML = "CPU wins the game!";
            gameOver = true;
            return
        }
        //  gameResultOutput.innerHTML = "CPU Wins!";
      }
      if (playerScore > cpuScore) {
        //  console.log("Player Wins!");
        if (playerScore == 5) {
            gameResultOutput.innerHTML = "Player wins the game!";
            gameOver = true;
            return
        }
      //  gameResultOutput.innerHTML = "Player Wins!";
      }
      if (playerScore === cpuScore) {
        //  console.log("It's a draw!");
        if (cpuScore == 5 && playerScore == 5) {
            gameResultOutput.innerHTML = "The game was a draw!";
            gameOver = true;
            return
        }
      //  gameResultOutput.innerHTML = "It's a draw!";
      }

}

function uiSetup() {

    results = document.getElementById("output");

    playerScoreOutput = document.getElementById("playerScore");

    cpuScoreOutput = document.getElementById("cpuScore");

    gameResultOutput = document.getElementById("Result");

}

function moveSelected(e) {
    let playerSelection = e.id;
    let computerSelection = computerPlay();
    let result = playRound(playerSelection,computerSelection);
    cpuScoreOutput.innerHTML = `CPU Score: ${cpuScore}`;
    playerScoreOutput.innerHTML = `Player Score: ${playerScore}`; 
    gameResultOutput.innerHTML = result;
    checkResults();
    if (gameOver == true) {
        //logic to disable game + then reset to start a new one here
      //  let selections = document.getElementsByClassName("moveSelect");
       // selections.detachEvent("onclick");
        //selections.classList.add("disabled");

        let selections = document.querySelector(".selectContainer");

        selections.classList.add("disabled");

      //  selections.removeEventListener('onclick', moveSelected(this))

        let score = document.querySelector(".score");

        document.getElementById("overlay").style.display = "block";


    };
    return
}

function restartGame() {
    location.reload();
}

//initalises score tracker variables for both player and CPU
 let playerScore = 0;
 let cpuScore = 0;

 //initialises variables for controlling results display on screen

 let results;

 let playerScoreOutput;

 let cpuScoreOutput;

 let gameResultOutput; 

 let gameOver = false;

uiSetup();





