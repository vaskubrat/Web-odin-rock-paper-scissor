const gameStartButton = document.getElementById("game-start-btn");
const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorButton = document.getElementById('scissor-btn');
const logContainer = document.getElementById('log-container');


gameStartButton.addEventListener('click', playGame);

function displayMessages(message) {
  const logEntry = document.createElement('p');
  logEntry.textContent = message;
  logContainer.appendChild(logEntry);
}

function playGame() {

  let computerScore = 0;
  let humanScore = 0;
  let round = 1;
  let humanChoice = '';
  let isChoiceMade = false;

  logContainer.innerHTML = "";

  displayMessages('The game starts!');
  displayMessages('Computer score: ' + computerScore);
  displayMessages('Human score: ' + humanScore);
  
  rockButton.addEventListener('click', function() {
    humanChoice = 'rock';
    isChoiceMade = true;
  });
  paperButton.addEventListener('click', function() {
    humanChoice = 'paper';
    isChoiceMade = true;
  })
  scissorButton.addEventListener('click', function(){
    humanChoice = 'scissor';
    isChoiceMade = true;
  })

  nextRound();

  function getComputerChoice() {
    const randomInteger = Math.floor(Math.random() * 3) + 1;
    const possibleChoices = ['rock', 'paper', 'scissor'];
    return possibleChoices[randomInteger - 1];
  }

  function playRound(computerChoice, humanChoice) {
    
    if (computerChoice === 'rock' && humanChoice === 'scissor') {
      computerScore += 1;
      displayMessages('You lost. Computer chose rock and you chose scissor. Computer score : ' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'rock' && humanChoice === 'paper') {
      humanScore += 1;
      displayMessages('You won! Computer chose rock and you chose paper. Computer score :' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'rock' && humanChoice === 'rock') {
      displayMessages('Draw. You both chose rock. Computer score :' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'paper' && humanChoice === 'scissor') {
      humanScore += 1;
      displayMessages('You won! Computer chose paper and you chose scissor. Computer score: ' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'paper' && humanChoice === 'paper') {
      displayMessages('Draw. You both chose paper.');
    }
    if (computerChoice === 'paper' && humanChoice === 'rock') {
      computerScore += 1;
      displayMessages('You lost. Computer chose paper and you chose rock. Computer score: ' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'scissor' && humanChoice === 'scissor') {
      displayMessages('Draw. You both chose scissor. Computer score: ' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'scissor' && humanChoice === 'paper') {
      computerScore += 1;
      displayMessages('You lost. Computer chose scissor and you chose paper. Computer score: ' + computerScore + ' Human score: ' + humanScore);
    }
    if (computerChoice === 'scissor' && humanChoice === 'rock') {
      humanScore += 1;
      displayMessages('You won! Computer chose scissor and you chose rock. Computer score: ' + computerScore + ' Human score: ' + humanScore);
    }
  }

  function compareScores(computerScore, humanScore) {
    if (computerScore > humanScore) {
      displayMessages("Sorry. The computer won... Here is the final score: Computer score: " + computerScore + ', Human score: ' + humanScore);
    }
    if (humanScore > computerScore) {
      displayMessages("Congratulations! You won! Here is the final score: Computer score: " + computerScore + ', Human score: ' + humanScore);
    }

    if (computerScore === humanScore) {
      displayMessages("It's a draw. There is no winner. Computer score: " + computerScore + ', Human score: ' + humanScore);
    }
  }

  function nextRound() {
    if (round <= 5) {
      displayMessages('Round: ' + round);
      let computerChoice = getComputerChoice();
      let checkHumanChoice = setInterval(() => {
        if (isChoiceMade) {
          playRound(computerChoice, humanChoice);
          round += 1;
          isChoiceMade = false;
          clearInterval(checkHumanChoice);
          computerChoice = getComputerChoice();
          nextRound();
        }
      }, 50);

    } else {
      compareScores(computerScore, humanScore);
      
    }
  }
}
  