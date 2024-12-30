console.log("Starting...");

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
