console.log("Starting...");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice;

  if (randomNumber <= 0.3333) {
    computerChoice = "rock";
  } else if (randomNumber > 0.3333 && randomNumber <= 0.6666) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("type in either 'r | p | s': ");
  humanChoice = humanChoice.toLowerCase();
  switch (humanChoice) {
    case "r":
      humanChoice = "rock";
      break;
    case "p":
      humanChoice = "paper";
      break;
    case "s":
      humanChoice = "scissors";
      break;
    default:
      humanChoice = undefined;
      break;
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log(`Tie. ${humanChoice} equals ${computerChoice}.`);
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    computerScore += 1;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
  } else {
    humanScore += 1;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
  }
}

function playGame() {
  console.log("This is rock, paper, scissors.");
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame();
