function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getTexElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function getTextElementById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function setTextElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //   console.log(alphabet);

  // generate random index
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  //   console.log(index, alphabet);
  return alphabet;
}
