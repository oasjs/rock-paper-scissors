const options = ["rock", "paper", "scissors"];

// Includes min value and excludes max value
function randInt(min, max) {
  const delta = Math.abs(max - min);
  const randInt = Math.floor(Math.random() * delta) + min;
  return randInt;
}

function getPlayerChoice() {
  const playerOptions = document.getElementsByName("option");
  for (let i = 0; i < playerOptions.length; i++) {
    if (playerOptions[i].checked) {
      return +playerOptions[i].value;
    }
  }
}
function getComputerChoice() {
  return randInt(0, options.length);
}

function evaluateWinner(p1Choice, p2Choice) {
  // If it overflows the array, go back to the start
  const next = options[p1Choice + 1] === undefined ? 0 : p1Choice + 1;
  // If it overflows the array, go straight to the end
  const previous = options[p1Choice - 1] === undefined ? 2 : p1Choice - 1;
  // The next option always wins over the previous
  if (options[p2Choice] === options[next]) return 2;
  else if (options[p2Choice] === options[previous]) return 1;
  else return 0;
}

function setPlayerHandImage() {
  const input = document.getElementsByName("option");
  const img = document.getElementById("player-hand");
  input.forEach((option) => {
    option.addEventListener("input", updateValue);
  });
  function updateValue(e) {
    const imgName = options[e.target.value];
    img.src = `img/${imgName}_left.png`;
    img.alt = options[e.target.value];
  }
}

function setComputerHandImage(index) {
  const img = document.getElementById("computer-hand");
  const imgName = options[index];
  img.src = `img/${imgName}_right.png`;
  img.alt = options[index];
}

function displayResult(winner) {
  const resultDisplay = document.querySelector("#result-display");
  let winnerStr;
  switch (winner) {
    case 1:
      winnerStr = "Player Wins!";
      break;
    case 2:
      winnerStr = "Computer Wins!";
      break;
    default:
      winnerStr = "Tie!";
      break;
  }
  resultDisplay.innerText = winnerStr;
}

function updateScores(winner) {
  leftPlayerScore = document.querySelector("#left-player-score h1");
  rightPlayerScore = document.querySelector("#right-player-score h1");
  switch (winner) {
    case 1:
      leftPlayerScore.innerText = ++leftPlayerScore.innerText;
      break;
    case 2:
      rightPlayerScore.innerText = ++rightPlayerScore.innerText;
      break;
    default:
      return;
  }
}

function play() {
  const playerChoice = getPlayerChoice();
  const compChoice = getComputerChoice();
  setComputerHandImage(compChoice);

  const winner = evaluateWinner(playerChoice, compChoice);
  displayResult(winner);
  updateScores(winner);
}
function reset() {
  window.location.reload();
}

function game() {
  setPlayerHandImage();

  const playButton = document.querySelector("#play-button");
  playButton.addEventListener("click", play);
  const resetButton = document.querySelector("#restart-button");
  resetButton.addEventListener("click", reset);
}

game();
