/* Constants */
const WORD_LIST = ["dream", "pillow", "snoring", "yawn", "bedbugs"];

/* Variables and App State */
let word = ""; //<----WORD PERSON IS TRYING TO GUESS

/* DOM References */
let wordContainer = document.querySelector("#guess-word-container"); //<--BLANKED OUT WORD TO GUESS
let textBox = document.querySelector("#textbox"); //<--WHERE PLAYER GUESSES LETTERS
let messages = document.querySelector("#messages"); //<--WHERE GAME TALKS TO USER

/* Functions and app logic */

// Initialize the game:
// 1. Reset state variables
// 2. Display the word blanks in the DOM
//
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
  console.log(`You submitted: ${textBox.value}`);

  function splitUpTheWord {
  splitWord = word.split("");
  for (i = 0; i <= splitWord.length; i++) {
    let wordsLetters = splitWord[i];
    
  }}

  if (textBox.value === "") {
    displayMessage("Try & guess one letter at a time");
  } else if (
    textBox.value === splitWord[0] ||
    textBox.value === splitWord[1] ||
    textBox.value === splitWord[2] ||
    textBox.value === splitWord[3] ||
    textBox.value === splitWord[4] ||
    textBox.value === splitWord[5] ||
    textBox.value === splitWord[6]
  ) {
    displayMessage("You guessed a correct letter!");
  }
};

// displayMessage();
/* Event Listeners */
document.addEventListener("DOMContentLoaded", initialize);
document.addEventListener("submit", guessLetter);
