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

  if (playerPressed === "Escape") {
    gameOver();
  }

  //   get the expected to press
  const currentAlphaElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphaElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  // console.log(expectedAlphabet, playerPressed);

  // check alphabet
  if (expectedAlphabet === playerPressed) {
    const currentScore = getTexElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementById("current-score", updatedScore);

    // --------------------------------------------------------
    // console.log("You got a point");
    // // update score
    // const currentScoreBtn = document.getElementById("current-score");
    // const currentScoreText = currentScoreBtn.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // // increase the score by 1
    // const newScore = currentScore + 1;
    // currentScoreBtn.innerText = newScore;
    removeBackgroundColor(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getTexElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }
    // console.log("You missed your life");
    // const currentLifeById = document.getElementById("current-life");
    // const currentLifeText = currentLifeById.innerText;
    // const currentLife = parseInt(currentLifeText);
    // // decrease life by 1
    // const remainingLife = currentLife - 1;
    // currentLifeById.innerText = remainingLife;
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
  hideElementById("final-score");
  showElementById("playground");

  setTextElementById("current-life", 5);
  setTextElementById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("playground");
  showElementById("final-score");
  const lastScore = getTexElementValueById("current-score");
  setTextElementById("game-score", lastScore);

  const currentAlphabet = getTextElementById("current-alphabet");
  removeBackgroundColor(currentAlphabet);
}
