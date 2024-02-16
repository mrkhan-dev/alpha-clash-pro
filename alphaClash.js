// function play() {
//   // hide home section
//   const homeSection = document.getElementById("home");
//   homeSection.classList.add("hidden");

//   // show playground section
//   const playgroundSection = document.getElementById("playground");
//   playgroundSection.classList.remove("hidden");
// }

document.addEventListener("keyup", function (event) {
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);

  //   get the expected to press
  const currentAlphaElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphaElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  console.log(expectedAlphabet, playerPressed);

  // check alphabet
  if (expectedAlphabet === playerPressed) {
    console.log("You got a point");
    // update score
    const currentScoreBtn = document.getElementById("current-score");
    const currentScoreText = currentScoreBtn.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore);
    // increase the score by 1
    const newScore = currentScore + 1;
    currentScoreBtn.innerText = newScore;
    removeBackgroundColor(expectedAlphabet);
    continueGame();
  } else {
    console.log("You missed your life");
  }
});
function continueGame() {
  const alphabet = getARandomAlphabet();

  // set random alphabet
  const currentAlphaElement = document.getElementById("current-alphabet");
  currentAlphaElement.innerText = alphabet.toUpperCase();

  setBackgroundColor(alphabet);
}

function play() {
  hideElementById("home");
  showElementById("playground");
  continueGame();
}
