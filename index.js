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

const results = document.querySelector("#results");
const score = document.querySelector("#score");

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    results.textContent = `Tie. ${humanChoice} equals ${computerChoice}.`;
    score.textContent = `Human: ${humanScore}\nComputer: ${computerScore}`;
    console.log(`Tie. ${humanChoice} equals ${computerChoice}.`);
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    computerScore += 1;
    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    score.textContent = `Human: ${humanScore}\nComputer: ${computerScore}`;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
  } else {
    humanScore += 1;
    results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    score.textContent = `Human: ${humanScore}\nComputer: ${computerScore}`;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function typeEvent(element) {
  playRound(element, getComputerChoice());
  if (humanScore >= 5 && computerScore < 5) {
    results.textContent = "The human has WON!";
    rock.removeEventListener("click", rockClick);
    paper.removeEventListener("click", paperClick);
    scissors.removeEventListener("click", scissorsClick);
  } else if (computerScore >= 5 && humanScore < 5) {
    results.textContent = "The computer has bested YOU";
    rock.removeEventListener("click", rockClick);
    paper.removeEventListener("click", paperClick);
    scissors.removeEventListener("click", scissorsClick);
  }
}
function rockClick() {
  typeEvent("rock");
}
function paperClick() {
  typeEvent("paper");
}
function scissorsClick() {
  typeEvent("scissors");
}
rock.addEventListener("click", rockClick);
paper.addEventListener("click", paperClick);
scissors.addEventListener("click", scissorsClick);
