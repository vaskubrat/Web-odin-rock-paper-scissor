const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const gameStartBtn = document.getElementById("game-start-btn");
const logContainer = document.getElementById("log-container");

let humanScore = 0;
let computerScore = 0;
let round = 1;
let humanChoice = '';
let computerChoice = '';

gameStartBtn.addEventListener('click', startGame);

function startGame() {
  logContainer.innerHTML = '';
  round = 1;
  computerScore = 0;
  humanScore = 0;
  displayMessages('Let the game begin! Please choose rock, paper or scissor :)');
  getComputerChoice();
  rockBtn.addEventListener('click', function() {getHumanChoice('rock')});
  paperBtn.addEventListener('click', function() {getHumanChoice('paper')});
  scissorBtn.addEventListener('click', function() {getHumanChoice('scissor')});
} 

function displayMessages(message) {
  const logEntry = document.createElement("p");
  logEntry.textContent = message;
  logContainer.appendChild(logEntry);
}

function getComputerChoice() {
  const possibleChoices = ['rock', 'paper', 'scissor'];
  const randomNumber = Math.floor(Math.random() * 3);
  computerChoice = possibleChoices[randomNumber]; 
}

function getHumanChoice(choice) {
  logContainer.innerHTML = '';
  humanChoice = choice;
  displayMessages('Round: ' + round);
  displayMessages('Human choice: ' + humanChoice);
  displayMessages('Computer choice : ' + computerChoice);
  compareTwoChoices(computerChoice, humanChoice);
  nextRound();
}

function nextRound() {
  if (round < 5) {
    round += 1;
    getComputerChoice();    
    humanChoice = '';
  } else {
    compareScores(computerScore, humanScore)
  };
}

function compareTwoChoices(computerChoice, humanChoice) {
  if (round < 5) {
    if (computerChoice === 'rock' && humanChoice === 'scissor') {
      computerScore += 1;
      displayMessages('You lost. Computer score: ' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'rock' && humanChoice === 'paper') {
      humanScore += 1;
      displayMessages('You won! Computer score: ' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'rock' && humanChoice === 'rock') {
      displayMessages('Draw... Computer score : ' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'paper' && humanChoice === 'scissor') {
      humanScore += 1;
      displayMessages('You won! Computer score: ' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'paper' && humanChoice === 'paper') {
      displayMessages('Draw. You both chose paper.');
    }
    if (computerChoice === 'paper' && humanChoice === 'rock') {
      computerScore += 1;
      displayMessages('You lost. Computer score: ' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'scissor' && humanChoice === 'scissor') {
      displayMessages('Draw... Computer score: ' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'scissor' && humanChoice === 'paper') {
      computerScore += 1;
      displayMessages('You lost. Computer score: ' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'scissor' && humanChoice === 'rock') {
      humanScore += 1;
      displayMessages('You won! Computer score: ' + computerScore + ' Human score: ' + humanScore);
    }
  }
}

function compareScores(computerScore, humanScore) {
  displayMessages('The game is over!');
  if (computerScore > humanScore) {
    displayMessages("Sorry, the computer won... Final score: Computer score: " + computerScore + ', Human score: ' + humanScore);
  }
  if (humanScore > computerScore) {
    displayMessages("Congratulations! You won! Final score: Computer score: " + computerScore + ', Human score: ' + humanScore);
  }
  if (computerScore === humanScore) {
    displayMessages("It's a draw. There is no winner. Computer score: " + computerScore + ', Human score: ' + humanScore);
  }
  displayMessages("Please click on the start button to start a new game.");
}