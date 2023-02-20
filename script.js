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

// Test:
const comp1Choice = getComputerChoice();
const comp2Choice = getComputerChoice();
console.log(options[comp1Choice], options[comp2Choice]);
console.log(evaluateWinner(comp1Choice, comp2Choice));
