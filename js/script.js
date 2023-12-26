const gameOptions = ["rock", "paper", "scissors"];

const getComputerChoice = function () {
  const computerChoice = Math.floor(Math.random() * gameOptions.length);

  if (computerChoice === 0) {
    return `${gameOptions[0]}`;
  } else if (computerChoice === 1) {
    return `${gameOptions[1]}`;
  } else if (computerChoice === 2) {
    return `${gameOptions[2]}`;
  }
};

const getPlayerChoice = function () {
  const playerChoice = prompt(
    "Make your selection: Rock, Paper or Scissors."
  ).toLowerCase();

  if (playerChoice === "rock") {
    return `${gameOptions[0]}`;
  } else if (playerChoice === "paper") {
    return `${gameOptions[1]}`;
  } else if (playerChoice === "scissors") {
    return `${gameOptions[2]}`;
  } else {
    alert`Please choose a valid option.`;
  }
};

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`Tie game! Play another round.`);
  } else if (
    (playerSelection === gameOptions[0] &&
      computerSelection === gameOptions[2]) ||
    (playerSelection === gameOptions[1] &&
      computerSelection === gameOptions[0]) ||
    (playerSelection === gameOptions[2] && computerSelection === gameOptions[1])
  ) {
    console.log(`Player wins!`);
  } else if (
    (playerSelection === gameOptions[0] &&
      computerSelection === gameOptions[1]) ||
    (playerSelection === gameOptions[1] &&
      computerSelection === gameOptions[2]) ||
    (playerSelection === gameOptions[2] && computerSelection === gameOptions[0])
  ) {
    console.log(`Computer wins!`);
  }
};

const game = function () {
  console.log(playerSelection);
  console.log(computerSelection);

  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
};

game();
