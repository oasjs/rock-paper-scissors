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

function setChoiceImage() {
  const playerChoice = getPlayerChoice();
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

function play() {
  const playerChoice = getPlayerChoice();
  const compChoice = getComputerChoice();
  setComputerHandImage(compChoice);
  const winner = evaluateWinner(playerChoice, compChoice);
  const resultDisplay = document.querySelector("#result-display");
  let winnerStr;
  switch (winner) {
    case 1:
      winnerStr = "Player Wins!";
      break
    case 2:
      winnerStr = "Computer Wins!";
      break
    default:
      winnerStr = "Tie!";
      break
  }
  resultDisplay.innerText = winnerStr;
}

getPlayerChoice();

function setPlayerHandImage() {
  const input = document.getElementsByName("option");
  const img = document.getElementById("player-hand");
  input.forEach((option) => {
    option.addEventListener("input", updateValue);
  });
  function updateValue(e) {
    img.src = `img/${e.target.value}.png`;
    img.alt = options[e.target.value];
  }
}

function setComputerHandImage(index) {
  const img = document.getElementById("computer-hand");
  img.src = `img/${index}.png`;
  img.alt = options[index];
}

function game() {
  setPlayerHandImage();

  const playButton = document.querySelector("#play-button");
  console.log(playButton);
  playButton.addEventListener("click", play);
}

game();
