/* Constants */
const WORD_LIST = ["dream", "pillow", "snoring", "yawn", "bedbugs"];

/* Variables and App State */
let word = ""; //<----WORD PERSON IS TRYING TO GUESS

/* DOM References */
let wordContainer = document.querySelector("#guess-word-container"); //<--BLANKED OUT WORD TO GUESS
let textBox = document.querySelector("#textbox"); //<--WHERE PLAYER GUESSES LETTERS
let messages = document.querySelector("#messages"); //<--WHERE GAME TALKS TO USER

/* Functions and app logic */

const initialize = (event) => {
  //<------------------------------------------initialize (function) GENERATES RANDOM WORD
  word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  console.log("The word is:", word);
  displayWordStatus();
};

// Helper function that adds multiple <div>_</div> to DOM
const displayWordStatus = () => {
  //<------------------------------------------------displayWordStatus (function) HIDES THE RANDOM WORD
  // Clear(empty) all of the divs children
  while (wordContainer.firstChild) {
    wordContainer.removeChild(wordContainer.firstChild);
  }
  for (let i = 0; i < word.length; i++) {
    let letter = document.createElement("div");
    letter.textContent = "_";
    letter.classList.add("letter");
    wordContainer.appendChild(letter);
  }
};
const displayMessage = (msg) => {
  console.log(textBox.innerText);
  messages.innerText = msg;
};
// On submit event: Guess a letter or guess the whole word
const guessLetter = (event) => {
  //<-------------------guessLetter(function) HOOKS SUBMIT BUTTON UP TO CONSOLE LOG// NOT SAYING IF GUESS IS CORRECT
  event.preventDefault();
  let splitWord = word.split("");
  let guessLetter = splitWord;

  console.log(`You submitted: ${textBox.value}`);
  console.log(guessLetter.includes(textBox.value));

  if (textBox.value === "") {
    displayMessage("Try & guess one letter at a time");
  } else if (guessLetter.includes(textBox.value)) {
    displayMessage("You guessed a correct letter!");
  } else {
    displayMessage("Incorrect Letter!");
    textBox.value = null;
  }
};

/* Event Listeners */
document.addEventListener("DOMContentLoaded", initialize);
document.addEventListener("submit", guessLetter);
