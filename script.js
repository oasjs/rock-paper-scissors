const options = ["rock", "paper", "scissors"];

// Includes min value and excludes max value
function randInt(min, max) {
  const delta = Math.abs(max - min);
  const randInt = Math.floor(Math.random() * delta) + min;
  return randInt;
}

function getComputerChoice() {
  return randInt(0, options.length);
}

function evaluateWinner(p1Choice, p2Choice) {
  const next = options[p1Choice + 1] === undefined ? 0 : p1Choice + 1;
  const previous = options[p1Choice - 1] === undefined ? 2 : p1Choice - 1;

  if (options[p2Choice] === options[next]) return 2;
  else if (options[p2Choice] === options[previous]) return 1;
  else return 0;
}

function play(rounds = 1) {
  for (let i = 0; i < rounds; i++) {
    const playerChoiceInt = +prompt(`Choose:
    [0] Rock
    [1] Paper
    [2] Scissors`);
    const compChoiceInt = getComputerChoice();
    const winner = evaluateWinner(playerChoiceInt, compChoiceInt);
    const playerChoiceStr = options[playerChoiceInt];
    const compChoiceStr = options[compChoiceInt];
    alert(`Player: ${playerChoiceStr} vs Computer: ${compChoiceStr}`);
    switch (winner) {
      case 1:
        alert("Player Wins!");
        break;
      case 2:
        alert("Computer Wins!");
        break;
      default:
        alert("Tie!");
        break;
    }
  }
}

function game() {
  play(5);
}

game();
